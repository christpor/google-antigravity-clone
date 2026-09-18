import React, { useState, useEffect, useRef } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { LandingPage } from './pages/LandingPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { UseCasesPage } from './pages/UseCasesPage';
import { PricingPage } from './pages/PricingPage';
import { BlogPage } from './pages/BlogPage';
import { DownloadPage } from './pages/DownloadPage';
import { ChangelogPage } from './pages/ChangelogPage';
import { motion, AnimatePresence } from 'framer-motion';

function normalizePath(path: string): string {
  if (!path || path === '' || path === '/') return '/';
  const clean = path.replace(/\/+$/, '');
  return clean || '/';
}

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return normalizePath(window.location.pathname);
    }
    return '/';
  });

  const lenisRef = useRef<Lenis | null>(null);

  // Initialize Lenis Kinetic Smooth Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      touchMultiplier: 2,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    const rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      const target = normalizePath(window.location.pathname);
      setCurrentPath(target);
      lenisRef.current?.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Navigation router
  const handleNavigate = (path: string) => {
    const target = normalizePath(path);
    if (target !== currentPath) {
      if (typeof window !== 'undefined') {
        window.history.pushState(null, '', target === '/' ? '/' : target);
      }
      setCurrentPath(target);
      lenisRef.current?.scrollTo(0, { immediate: true });
    }
  };

  // Render matching page view
  const renderCurrentPage = () => {
    if (currentPath.startsWith('/product')) {
      const slug = currentPath.split('/product/')[1] || 'antigravity-cli';
      return <ProductDetailPage initialSlug={slug} onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/use-cases')) {
      return <UseCasesPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/pricing') {
      return <PricingPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/download') {
      return <DownloadPage onNavigate={handleNavigate} />;
    }
    if (currentPath === '/changelog') {
      return <ChangelogPage onNavigate={handleNavigate} />;
    }
    if (currentPath.startsWith('/blog')) {
      return <BlogPage onNavigate={handleNavigate} />;
    }
    return <LandingPage onNavigate={handleNavigate} />;
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#121317] selection:bg-[#3186FF] selection:text-white">
      {/* Global Fixed Header */}
      <Header currentPath={currentPath} onNavigate={handleNavigate} />

      {/* Page Views with Cross-Fade */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPath}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Google Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

export default App;
