import React, { useEffect, useRef } from 'react';

interface ParticleRingProps {
  theme?: 'light' | 'dark';
  density?: number;
  className?: string;
}

export const ParticleRing: React.FC<ParticleRingProps> = ({
  theme = 'light',
  density = 220,
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || window.innerWidth);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 600);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // Mouse tracking
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetRotationY = x * 0.8;
      targetRotationX = -y * 0.8;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Generate ring points in 3D
    interface Point3D {
      x: number;
      y: number;
      z: number;
      baseRadius: number;
      angle: number;
      ringIndex: number;
      speed: number;
      size: number;
      alpha: number;
    }

    const points: Point3D[] = [];
    const radius = Math.min(width, height) * 0.35;

    for (let i = 0; i < density; i++) {
      const angle = (i / density) * Math.PI * 2;
      const ring = i % 3;
      const ringRadius = radius * (0.8 + ring * 0.2 + (Math.random() * 0.1 - 0.05));
      const zOffset = (Math.random() - 0.5) * radius * 0.3;

      points.push({
        x: Math.cos(angle) * ringRadius,
        y: Math.sin(angle) * ringRadius,
        z: zOffset,
        baseRadius: ringRadius,
        angle: angle,
        ringIndex: ring,
        speed: (0.002 + Math.random() * 0.003) * (ring % 2 === 0 ? 1 : -1),
        size: Math.random() * 1.8 + 0.8,
        alpha: Math.random() * 0.6 + 0.3,
      });
    }

    // Colors
    const isDark = theme === 'dark';
    const primaryColor = isDark ? '#FFFFFF' : '#1A73E8';
    const accentColors = isDark 
      ? ['#FFFFFF', '#749BFF', '#9AA0A6']
      : ['#1A73E8', '#FC413D', '#00B95C', '#FBBC04'];

    let t = 0;

    const render = () => {
      t += 0.01;
      ctx.clearRect(0, 0, width, height);

      // Smooth camera interpolation
      currentRotationX += (targetRotationX - currentRotationX) * 0.05;
      currentRotationY += (targetRotationY - currentRotationY) * 0.05;

      const cosX = Math.cos(currentRotationX + Math.sin(t * 0.5) * 0.1 + 0.3);
      const sinX = Math.sin(currentRotationX + Math.sin(t * 0.5) * 0.1 + 0.3);
      const cosY = Math.cos(currentRotationY + t * 0.2);
      const sinY = Math.sin(currentRotationY + t * 0.2);

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      // Sort points by z for proper rendering
      const projected = points.map((p, idx) => {
        // Update angle
        p.angle += p.speed;
        const currentRadius = p.baseRadius + Math.sin(t * 2 + p.ringIndex) * 8;
        const rawX = Math.cos(p.angle) * currentRadius;
        const rawY = Math.sin(p.angle) * currentRadius;
        const rawZ = p.z + Math.cos(p.angle * 2 + t) * 15;

        // 3D rotation
        // Rotate Y
        const x1 = rawX * cosY - rawZ * sinY;
        const z1 = rawX * sinY + rawZ * cosY;

        // Rotate X
        const y2 = rawY * cosX - z1 * sinX;
        const z2 = rawY * sinX + z1 * cosX + 600;

        // Project
        const scale = fov / Math.max(z2, 10);
        const projX = cx + x1 * scale;
        const projY = cy + y2 * scale;

        return {
          projX,
          projY,
          z2,
          size: p.size * scale * 0.9,
          alpha: p.alpha * Math.min(Math.max((z2 - 300) / 400, 0.2), 1),
          color: accentColors[idx % accentColors.length],
        };
      });

      projected.sort((a, b) => b.z2 - a.z2);

      // Draw subtle connecting orbital strands
      ctx.lineWidth = 0.5;
      for (let i = 0; i < projected.length; i += 4) {
        const p1 = projected[i];
        const p2 = projected[(i + 1) % projected.length];
        const dist = Math.hypot(p1.projX - p2.projX, p1.projY - p2.projY);
        if (dist < 70) {
          ctx.strokeStyle = isDark 
            ? `rgba(255, 255, 255, ${0.12 * (1 - dist / 70)})` 
            : `rgba(26, 115, 232, ${0.1 * (1 - dist / 70)})`;
          ctx.beginPath();
          ctx.moveTo(p1.projX, p1.projY);
          ctx.lineTo(p2.projX, p2.projY);
          ctx.stroke();
        }
      }

      // Draw particles
      for (const p of projected) {
        if (p.projX < -50 || p.projX > width + 50 || p.projY < -50 || p.projY > height + 50) continue;
        ctx.beginPath();
        ctx.arc(p.projX, p.projY, Math.max(p.size, 0.5), 0, Math.PI * 2);
        ctx.fillStyle = isDark
          ? `rgba(255, 255, 255, ${p.alpha})`
          : p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
      }
      ctx.globalAlpha = 1.0;

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme, density]);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full ${className}`}
    />
  );
};
