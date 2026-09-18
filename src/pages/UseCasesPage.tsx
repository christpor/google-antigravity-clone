import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Layers, Palette, Building2, FlaskConical, Play, ArrowRight, ShieldCheck, Cpu, CheckCircle2 } from 'lucide-react';

interface UseCasesPageProps {
  onNavigate: (path: string) => void;
}

export const UseCasesPage: React.FC<UseCasesPageProps> = ({ onNavigate }) => {
  const [selectedCase, setSelectedCase] = useState<'fullstack' | 'frontend' | 'enterprise' | 'science'>('fullstack');

  const cases = {
    fullstack: {
      tag: 'Fullstack Architecture',
      title: 'Why fullstack developers choose Google Antigravity',
      desc: 'Build production-ready applications with confidence through thoroughly designed architectural artifacts, automated database migrations, and comprehensive integration test contracts.',
      image: '/assets/images/landing-thumbnail-fullstack.jpg',
      videoEmbed: 'https://www.youtube.com/embed/htV29JrMXmA',
      bullets: [
        'Deterministic Artifact Planning: Complete MADR architectural specs before writing code',
        'End-to-End Orchestration: Generates backend API schemas, database migrations, and type-safe clients synchronously',
        'Automated Test Verification: Executes test suites locally with self-healing feedback loops until all gates pass',
        'Deployment Readiness: Pre-flight security audits for Vercel, Google Cloud Run, and Supabase',
      ],
      gallery: [
        { src: '/assets/image/use-cases/fullstack/artifacts-and-verification.jpg', caption: 'Automated Test Verification & Artifacts' },
        { src: '/assets/image/use-cases/fullstack/feedback.jpg', caption: 'Direct Codebase Feedback Loop' },
        { src: '/assets/image/use-cases/fullstack/manager-to-editor-handoffs.jpg', caption: 'Agent Manager to Editor Handoffs' }
      ],
      quote: "Antigravity reduced our feature ship time from 4 days to 45 minutes by handling the fullstack glue code autonomously.",
      author: "Senior Fullstack Lead, TechOps",
    },
    frontend: {
      tag: 'Frontend & UX Engineering',
      title: 'Why frontend developers choose Google Antigravity',
      desc: 'Streamline UX development by leveraging browser-in-the-loop agents to automate repetitive styling, enforce zero-slop anti-emoji standards, and verify responsive parity across 375px to 1440px.',
      image: '/assets/images/landing-thumbnail-frontend.jpg',
      videoEmbed: 'https://www.youtube.com/embed/yiHKlPuZ73c',
      bullets: [
        'Pixel-Accurate Visual Decompiler: Reconstructs high-conversion UIs directly from recordings or screenshots',
        'Chrome DevTools MCP Integration: Real-time console error interception and a11y DOM validation',
        'Zero Jitter Physics: Smooth Framer Motion spring physics decoupled from human trackpad scroll jitter',
        'Design System Guardrails: Tailwind CSS tokens, Lucide icon parity, and subpixel typography scales',
      ],
      gallery: [
        { src: '/assets/image/use-cases/frontend/browser-use.jpg', caption: 'Browser-in-the-Loop Automation' },
        { src: '/assets/image/use-cases/frontend/visual-artifacts.jpg', caption: 'Visual Artifact Inspection' },
        { src: '/assets/image/use-cases/frontend/visual-feedback.jpg', caption: 'Pixel Parity Feedback Loop' }
      ],
      quote: "The visual fidelity is uncanny. It caught 14 responsive bugs across iOS Safari and Chrome before our PR reached review.",
      author: "Design Technologist, Studio X",
    },
    enterprise: {
      tag: 'Sovereign Enterprise Teams',
      title: 'Why enterprise developers choose Google Antigravity',
      desc: 'Google Antigravity empowers large organizations with zero secret leakage guarantees, Direct VPC egress, local-first runtime isolation, and granular IAM role-based controls.',
      image: '/assets/images/landing-thumbnail-enterprise.jpg',
      videoEmbed: 'https://www.youtube.com/embed/B4do6xuIgD4',
      bullets: [
        'Zero Secret Exfiltration: Hardened regex and credential quarantine blocks API keys from chat transcripts',
        'Private Network Isolation: Works seamlessly in air-gapped environments or restricted Google Cloud VPC perimeters',
        'Multi-Agent Review Swarm: Dedicated Security Specialist and Senior Code Reviewer personas audit every PR before merge',
        'SOC2 & HIPAA Compliant Data Flow: Local-first code analysis with authenticated enterprise OAuth sessions',
      ],
      gallery: [
        { src: '/assets/image/product/agent.jpg', caption: 'Sovereign Agent Runtime Isolation' },
        { src: '/assets/image/product/artifacts.jpg', caption: 'Auditable Multi-User Artifact Ledger' },
        { src: '/assets/image/product/user-feedback.jpg', caption: 'Role-Based Permissions & Feedback' }
      ],
      quote: "Our infosec team approved Antigravity in one meeting because source code never leaves our internal corporate perimeter.",
      author: "VP of Engineering, CloudCore",
    },
    science: {
      tag: 'Research & Data Science',
      title: 'Why science and ML researchers choose Google Antigravity',
      desc: 'Accelerate scientific workflows, paper reproduction, data extraction pipelines, and high-throughput evaluation swarms without wrestling with boilerplate infrastructure.',
      image: '/assets/images/landing-thumbnail-fullstack.jpg',
      videoEmbed: 'https://www.youtube.com/embed/htV29JrMXmA',
      bullets: [
        'Reproducible Research DAGs: Scripts and notebook runs tracked in immutable versioned snapshots',
        'Paper-to-Code Pipeline: Extract mathematical formulas and model architectures from PDF transcripts directly into PyTorch',
        'Evaluation Sweeps: Concurrently run benchmark matrices across Gemini 3.8 Flash, Pro, and Ultra',
        'Data Cleaning Agents: Autonomous anomalous data point detection and imputation checks',
      ],
      gallery: [
        { src: '/assets/image/product/subagents.png', caption: 'Parallel Evaluation Swarms' },
        { src: '/assets/image/product/scheduled.png', caption: 'Autonomous Scheduled Benchmark Sweeps' },
        { src: '/assets/image/product/skills.jpg', caption: 'Domain-Specific Agent Skills' }
      ],
      quote: "We reproduced three entire NeurIPS baselines in two days. Antigravity handled the hyperparameter grid search autonomously.",
      author: "Principal Research Fellow, AI Institute",
    },
  };

  const current = cases[selectedCase];

  return (
    <div className="w-full bg-white text-[#121317] pt-[90px]">
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 py-16">
        {/* Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-semibold text-[#1a73e8] uppercase tracking-wider">
            Agentic Workflows In Practice
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-[#121317] tracking-tight leading-tight">
            Built for developers in the agent-first era
          </h1>
          <p className="text-lg text-[#5f6368] leading-relaxed">
            See how different engineering disciplines leverage Google Antigravity to eliminate toil, verify complex logic, and ship software with sovereign autonomy.
          </p>
        </div>

        {/* Tab Selector Strip */}
        <div className="flex items-center gap-3 overflow-x-auto pb-4 mb-10 scrollbar-none border-b border-black/[0.06]">
          {[
            { id: 'fullstack', label: 'Fullstack Developers', icon: Layers },
            { id: 'frontend', label: 'Frontend & UX', icon: Palette },
            { id: 'enterprise', label: 'Enterprise Teams', icon: Building2 },
            { id: 'science', label: 'Science & Research', icon: FlaskConical },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = selectedCase === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setSelectedCase(tab.id as any)}
                className={`flex items-center gap-2.5 px-6 py-3 rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#121317] text-white shadow-sm'
                    : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#eef0f2] hover:text-[#121317]'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span className="text-sm font-medium">{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Deep Dive Case Card */}
        <motion.div
          key={selectedCase}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="rounded-3xl border border-black/[0.08] bg-[#f8f9fa] p-8 md:p-14 overflow-hidden mb-12"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-semibold text-[#1a73e8] uppercase tracking-wider">
                {current.tag}
              </span>
              <h2 className="text-3xl md:text-4xl font-medium text-[#121317] leading-tight">
                {current.title}
              </h2>
              <p className="text-base text-[#5f6368] leading-relaxed">
                {current.desc}
              </p>

              <div className="space-y-3 pt-2">
                {current.bullets.map((b, idx) => (
                  <div key={idx} className="flex items-start gap-3 text-sm text-[#3c4043]">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#1a73e8] shrink-0 mt-2" />
                    <span>{b}</span>
                  </div>
                ))}
              </div>

              {/* Quote pill */}
              <div className="p-5 rounded-2xl bg-white border border-black/[0.06] text-sm text-[#121317]">
                <p className="italic text-[#5f6368]">“{current.quote}”</p>
                <p className="text-xs font-semibold text-[#121317] mt-2">— {current.author}</p>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/download')}
                  className="btn-pill-primary"
                >
                  <span>Experience Antigravity for {current.tag.split(' ')[0]}</span>
                </button>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-xl bg-black aspect-[16/10] relative group">
                <img
                  src={current.image}
                  alt={current.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
                  <span className="text-sm font-medium">Video Case Study Available</span>
                  <a
                    href={current.videoEmbed}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-md text-xs font-medium hover:bg-white/30 transition-colors"
                  >
                    <Play className="w-3.5 h-3.5 fill-white" />
                    <span>Watch Full Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Visual Workflow Gallery */}
        <div className="mb-20">
          <h3 className="text-lg font-bold text-[#121317] mb-6 flex items-center gap-2">
            <CheckCircle2 className="w-5 h-5 text-[#1a73e8]" />
            Workflow Highlights &amp; Verified Surfaces
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {current.gallery.map((item, idx) => (
              <div key={idx} className="rounded-2xl border border-black/[0.08] overflow-hidden bg-[#f8f9fa] group hover:shadow-md transition-shadow">
                <div className="h-48 overflow-hidden bg-black">
                  <img
                    src={item.src}
                    alt={item.caption}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-4 text-xs font-semibold text-[#121317] border-t border-black/[0.06]">
                  {item.caption}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
