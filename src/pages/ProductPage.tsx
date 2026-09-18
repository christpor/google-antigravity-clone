import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Boxes, Terminal, Code, Cpu, Sparkles, ArrowRight, CheckCircle2, Shield, Laptop } from 'lucide-react';

interface ProductPageProps {
  onNavigate: (path: string) => void;
}

export const ProductPage: React.FC<ProductPageProps> = ({ onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'2.0' | 'cli' | 'ide' | 'sdk'>('2.0');

  const products = [
    {
      id: '2.0',
      title: 'Antigravity 2.0',
      tag: 'Multi-Agent Command Center',
      desc: 'Your command center to manage multiple local agents in parallel. Group conversations into Projects, operate across multiple workspaces, and automate routine tasks with scheduled messages.',
      img: '/assets/images/new-chat.png',
      features: [
        'Parallel local subagent swarms with branch worktree isolation',
        'Project organization with cross-workspace awareness',
        'Cron scheduling & one-shot background timers',
        'Native MCP tool discovery and automatic parameter synthesis',
      ],
    },
    {
      id: 'cli',
      title: 'Antigravity CLI',
      tag: 'Terminal Native',
      desc: 'The lightweight, fast, terminal-first surface to work with Antigravity agents. Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.',
      img: '/assets/images/antigravity-cli.png',
      features: [
        'Single binary with zero complex dependencies',
        'Real-time streaming NDJSON outputs and unified diff patching',
        'Interactive human-in-the-loop approvals for shell execution',
        'Keyboard shortcuts: /plan, /grill-me, /debate, and /clear',
      ],
    },
    {
      id: 'ide',
      title: 'Antigravity IDE & Extensions',
      tag: 'Standalone & Editor Extensions',
      desc: 'The fully-featured, agentic IDE. Complete with the agent manager, artifacts, and a deep understanding of your codebase. Also available as official extensions for VS Code, JetBrains, Zed, and Xcode.',
      img: '/assets/images/IDE-Extensions-Square.png',
      features: [
        'Embedded agent sidecars with live visual diff review',
        'Multi-buffer edits across hundreds of files simultaneously',
        'Rich Artifact viewer for plans, diagrams, and code snippets',
        'Deep AST indexing without sending private source code to external servers',
      ],
    },
    {
      id: 'sdk',
      title: 'Antigravity SDK',
      tag: 'Python Developer Harness',
      desc: 'Prototype custom agents leveraging Antigravity’s harness with minimal code. Simple Python scripts to iterate on agentic applications, automate software engineering tasks, and run evaluations on top of the Antigravity agent harness.',
      img: '/assets/images/feature-3.jpg',
      features: [
        'Pre-configured toolgroups: Bash, FileIO, WebSearch, Subagents',
        'Stateful multi-turn evaluation loops with pass-rate scorecards',
        'Plug-and-play model adapters (Gemini 3.8 Flash & Pro)',
        'Built-in session handoff and token compaction engines',
      ],
    },
  ];

  const showcaseProjects = [
    { title: 'Auto-playing Pinball Machine', desc: 'Hardware-in-the-loop agent adjusting physical flipper timing in real time.' },
    { title: 'Flight Tracker App', desc: 'Real-time WebSocket radar map with delay prediction and aircraft telemetry.' },
    { title: 'Inverted Pendulum Controller', desc: 'PID balance tuning orchestrated autonomously via physics simulator runs.' },
    { title: 'Collaborative Whiteboard App', desc: 'CRDT-based infinite canvas with real-time vector cursor synchronization.' },
  ];

  const activeProduct = products.find((p) => p.id === activeTab) || products[0];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-[#1a73e8] tracking-widest uppercase bg-[#1a73e8]/10 px-3 py-1 rounded-full">
            Product Suite
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#121317] mt-3">
            Explore our next generation products
          </h1>
          <p className="text-lg text-[#5f6368] mt-4 leading-relaxed">
            Google Antigravity is architected from the ground up for agent-first software engineering. Choose the interface that fits your workflow.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 bg-[#f8f9fa] border border-black/[0.08] rounded-2xl w-fit mb-12">
          {products.map((p) => (
            <button
              key={p.id}
              onClick={() => setActiveTab(p.id as any)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all ${
                activeTab === p.id
                  ? 'bg-white text-[#121317] shadow-sm border border-black/[0.06]'
                  : 'text-[#5f6368] hover:text-[#121317]'
              }`}
            >
              {p.title}
            </button>
          ))}
        </div>

        {/* Active Product Showcase */}
        <motion.div
          key={activeProduct.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-[#f8f9fa] rounded-3xl p-8 md:p-14 border border-black/[0.08] mb-24"
        >
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
              {activeProduct.tag}
            </span>
            <h2 className="text-3xl font-medium text-[#121317]">
              {activeProduct.title}
            </h2>
            <p className="text-base text-[#5f6368] leading-relaxed">
              {activeProduct.desc}
            </p>

            <div className="space-y-3 pt-2">
              {activeProduct.features.map((f, i) => (
                <div key={i} className="flex items-start gap-3 text-sm text-[#3c4043]">
                  <CheckCircle2 className="w-5 h-5 text-[#00b95c] shrink-0 mt-0.5" />
                  <span>{f}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 flex items-center gap-4">
              <button
                onClick={() => onNavigate('/download')}
                className="btn-pill-primary"
              >
                <span>Get Started with {activeProduct.title}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-7">
            <div className="rounded-2xl overflow-hidden border border-black/[0.08] shadow-lg bg-white">
              <img
                src={activeProduct.img}
                alt={activeProduct.title}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Built For Productivity Showcase */}
        <div className="pt-12 border-t border-black/[0.08]">
          <div className="max-w-2xl mb-12">
            <h3 className="text-3xl font-medium tracking-tight text-[#121317]">
              Built for productivity
            </h3>
            <p className="text-base text-[#5f6368] mt-2">
              See what builders and developers have been able to achieve with Google Antigravity in hours instead of weeks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {showcaseProjects.map((proj, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-white border border-black/[0.08] shadow-xs hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-xl bg-[#e8f0fe] text-[#1a73e8] flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h4 className="text-lg font-medium text-[#121317] mb-2">
                  {proj.title}
                </h4>
                <p className="text-sm text-[#5f6368] leading-relaxed">
                  {proj.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
