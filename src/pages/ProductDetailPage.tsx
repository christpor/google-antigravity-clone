import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Terminal, 
  Code, 
  Cpu, 
  Boxes, 
  Play, 
  Copy, 
  Check, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  FolderGit2, 
  Layers, 
  Clock, 
  Mic, 
  Settings2,
  ExternalLink,
  ShieldCheck
} from 'lucide-react';

interface ProductDetailPageProps {
  initialSlug?: string;
  onNavigate: (path: string) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({ 
  initialSlug = 'antigravity-cli', 
  onNavigate 
}) => {
  const [copied, setCopied] = useState(false);

  // Determine active product from slug
  let activeKey: 'cli' | 'ide' | 'sdk' | 'v2' = 'cli';
  if (initialSlug.includes('ide')) activeKey = 'ide';
  else if (initialSlug.includes('sdk')) activeKey = 'sdk';
  else if (initialSlug.includes('2')) activeKey = 'v2';

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const PRODUCTS = [
    {
      key: 'cli',
      slug: '/product/antigravity-cli',
      name: 'Antigravity CLI',
      icon: Terminal,
      color: '#00B95C',
      tag: 'Terminal Native'
    },
    {
      key: 'ide',
      slug: '/product/antigravity-ide',
      name: 'Antigravity IDE',
      icon: Code,
      color: '#FC413D',
      tag: 'Agent-First IDE'
    },
    {
      key: 'sdk',
      slug: '/product/antigravity-sdk',
      name: 'Antigravity SDK',
      icon: Cpu,
      color: '#FBBC04',
      tag: 'Python & TS'
    },
    {
      key: 'v2',
      slug: '/product/antigravity-2',
      name: 'Antigravity 2.0',
      icon: Boxes,
      color: '#3186FF',
      tag: 'Desktop Orchestrator'
    }
  ];

  return (
    <div className="w-full bg-white text-[#121317] pt-[90px]">
      {/* Product Suite Selector Tabs */}
      <div className="border-b border-black/[0.06] sticky top-[70px] z-30 bg-white/90 backdrop-blur-md">
        <div className="max-w-[1240px] mx-auto px-6 flex items-center gap-2 overflow-x-auto py-3 scrollbar-none">
          {PRODUCTS.map((p) => {
            const isActive = activeKey === p.key;
            const Icon = p.icon;
            return (
              <button
                key={p.key}
                onClick={() => onNavigate(p.slug)}
                className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium tracking-wide transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-[#121317] text-white shadow-sm'
                    : 'bg-[#f8f9fa] text-[#5f6368] hover:bg-[#eef0f2] hover:text-[#121317]'
                }`}
              >
                <Icon className="w-3.5 h-3.5" style={{ color: isActive ? '#fff' : p.color }} />
                <span>{p.name}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-black/[0.05] text-[#80868b]'}`}>
                  {p.tag}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* VIEW 1: ANTIGRAVITY CLI */}
      {activeKey === 'cli' && (
        <div>
          {/* CLI Hero */}
          <section className="py-20 px-6 max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#00B95C]/10 text-[#00B95C] text-xs font-bold tracking-wider uppercase">
                  <Terminal className="w-3.5 h-3.5" />
                  Terminal-First Surface
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121317] leading-[1.08]">
                  Antigravity CLI
                </h1>
                <p className="text-lg sm:text-xl text-[#5f6368] leading-relaxed font-normal">
                  The terminal-first surface to interact with Antigravity agents. Stay in your flow without context switching.
                </p>

                {/* Quick Install Shell Snippet */}
                <div className="bg-[#121317] text-white p-4 rounded-2xl font-mono text-sm border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#9aa0a6] pb-2 border-b border-white/10">
                    <span className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FC413D]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FBBC04]" />
                      <span className="w-2.5 h-2.5 rounded-full bg-[#00B95C]" />
                      bash — install command
                    </span>
                    <button
                      onClick={() => copyToClipboard('curl -fsSL https://antigravity.google/install.sh | bash')}
                      className="hover:text-white flex items-center gap-1 text-xs"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#00B95C]" /> : <Copy className="w-3.5 h-3.5" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-[#3186FF] selection:bg-white/20 select-all">
                    curl -fsSL https://antigravity.google/install.sh | bash
                  </p>
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('/download')}
                    className="btn-pill-primary px-8 py-3.5 text-sm font-semibold"
                  >
                    Install Now
                  </button>
                  <a
                    href="https://antigravity.google"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3.5 rounded-full border border-black/10 hover:bg-[#f8f9fa] text-xs font-semibold tracking-wide uppercase transition-colors inline-flex items-center gap-2"
                  >
                    View Docs
                    <ExternalLink className="w-3.5 h-3.5 text-[#80868b]" />
                  </a>
                </div>
              </div>

              {/* CLI Video / Demo GIF */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-black/[0.08] shadow-2xl overflow-hidden bg-black relative group">
                  <video
                    src="/assets/video/product-page/antigravity-cli/agy-cli-prompt.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#121317] border-t border-white/10 flex items-center justify-between text-xs text-[#9aa0a6]">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-3.5 h-3.5 text-[#00B95C]" />
                      Natural language prompt loop &amp; autonomous tool execution
                    </span>
                    <span className="text-[#00B95C] font-mono">v2.4.0 Live</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Explore Main Features Grid */}
          <section className="py-20 px-6 bg-[#f8f9fa] border-y border-black/[0.06]">
            <div className="max-w-[1240px] mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-[#00B95C]">CAPABILITIES</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121317] mt-2">
                  Explore the Main Features
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#00B95C]/10 text-[#00B95C] flex items-center justify-center font-bold">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121317]">Work in Natural Language</h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Edit, orchestrate, and build all in natural language. Tell your agents what you need, and they’ll work on getting it done.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#3186FF]/10 text-[#3186FF] flex items-center justify-center font-bold">
                    <Boxes className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121317]">Subagent Functionalities</h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Have multiple agents working in parallel, so larger tasks get tackled faster with dedicated sub-contexts and bounded memory.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FBBC04]/15 text-[#d97706] flex items-center justify-center font-bold">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-[#121317]">Snappy Experience</h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    A minimal resource footprint designed for speed; the most lightweight way to invoke, monitor, and interact with Antigravity agents.
                  </p>
                </div>
              </div>

              {/* Subagents Architecture Showcase */}
              <div className="mt-12 bg-white rounded-3xl border border-black/[0.06] p-8 sm:p-12 overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-5 space-y-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-[#3186FF]">CONCURRENCY</span>
                    <h3 className="text-2xl sm:text-3xl font-bold text-[#121317]">
                      Delegate Background Tasks to Swarms
                    </h3>
                    <p className="text-sm text-[#5f6368] leading-relaxed">
                      Delegate background tasks to concurrent agent sessions. Type <code className="bg-[#f1f3f4] px-1.5 py-0.5 rounded font-mono text-xs text-[#121317]">/agents</code> to open the panel and monitor status, and use <code className="bg-[#f1f3f4] px-1.5 py-0.5 rounded font-mono text-xs text-[#121317]">ctrl+k</code> to approve tools instantly.
                    </p>
                    <ul className="space-y-2 pt-2 text-xs text-[#5f6368]">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00B95C]" />
                        Multi-agent worktree isolation without git collisions
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#00B95C]" />
                        Automated token compression and Headroom defense
                      </li>
                    </ul>
                  </div>
                  <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-black/[0.08] shadow-md">
                    <img
                      src="/assets/image/product/antigravity-cli/subagents-functionality.jpg"
                      alt="Subagents Architecture"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Interactive Demo GIF */}
              <div className="mt-12 bg-[#121317] rounded-3xl p-8 sm:p-12 text-white border border-white/10">
                <div className="text-center max-w-2xl mx-auto mb-8 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-widest text-[#00B95C]">SEE IT IN ACTION</span>
                  <h3 className="text-2xl sm:text-3xl font-bold">Interactive Terminal Session</h3>
                  <p className="text-sm text-[#9aa0a6]">Fast feedback loop directly in your favorite terminal emulator.</p>
                </div>
                <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl max-w-4xl mx-auto">
                  <img
                    src="/assets/image/product/antigravity-cli/demo.gif"
                    alt="Antigravity CLI Interactive Demo"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW 2: ANTIGRAVITY IDE */}
      {activeKey === 'ide' && (
        <div>
          {/* IDE Hero */}
          <section className="py-20 px-6 max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FC413D]/10 text-[#FC413D] text-xs font-bold tracking-wider uppercase">
                  <Code className="w-3.5 h-3.5" />
                  Agent-First Workspace
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121317] leading-[1.08]">
                  Antigravity IDE
                </h1>
                <p className="text-lg sm:text-xl text-[#5f6368] leading-relaxed font-normal">
                  Google Antigravity's Editor view offers tab autocompletion, natural language code commands, and a context-aware configurable agent.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('/download')}
                    className="btn-pill-primary px-8 py-3.5 text-sm font-semibold"
                  >
                    Download for macOS
                  </button>
                  <button
                    onClick={() => onNavigate('/download')}
                    className="px-6 py-3.5 rounded-full border border-black/10 hover:bg-[#f8f9fa] text-xs font-semibold tracking-wide uppercase transition-colors"
                  >
                    All Platforms
                  </button>
                </div>
              </div>

              {/* IDE Editor Video */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-black/[0.08] shadow-2xl overflow-hidden bg-black relative">
                  <video
                    src="/assets/video/product-page/editor.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-auto object-cover"
                  />
                  <div className="p-4 bg-[#121317] border-t border-white/10 flex items-center justify-between text-xs text-[#9aa0a6]">
                    <span className="flex items-center gap-2">
                      <Code className="w-3.5 h-3.5 text-[#FC413D]" />
                      Full visual diff editor with side-by-side artifact reviews
                    </span>
                    <span className="text-[#3186FF] font-mono">VS Code Engine</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3 Core IDE Pillars */}
          <section className="py-20 px-6 bg-[#f8f9fa] border-y border-black/[0.06]">
            <div className="max-w-[1240px] mx-auto space-y-16">
              {/* Pillar 1: Agent Surface */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#FC413D]">FILE MODIFICATION</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#121317]">
                    The Complete Code Editor Surface for Direct File Modification
                  </h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Introducing a new agent-first Agent Manager experience. This innovative approach enables agents to operate seamlessly across all surfaces, including your browser, so they can tackle more complex and long-running tasks.
                  </p>
                </div>
                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-black/[0.08] shadow-md">
                  <img
                    src="/assets/image/product/agent.jpg"
                    alt="Antigravity IDE Agent Surface"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>

              {/* Pillar 2: Artifacts */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-7 order-2 lg:order-1 rounded-2xl overflow-hidden border border-black/[0.08] shadow-md">
                  <img
                    src="/assets/image/product/artifacts.jpg"
                    alt="Antigravity IDE Artifact Review"
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="lg:col-span-5 order-1 lg:order-2 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#3186FF]">TASK UNDERSTANDING</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#121317]">
                    Rich, Visual Feedback and Artifact Review Right in Your Editor
                  </h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Gain a complete understanding of agentic operations at the task level, supported by essential artifacts and verification outcomes, fostering confidence in the agent's actions.
                  </p>
                </div>
              </div>

              {/* Pillar 3: User Feedback */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                <div className="lg:col-span-5 space-y-4">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#00B95C]">PARTNERSHIP</span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-[#121317]">
                    An Agent That Works as an Active, Integrated Development Partner
                  </h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Intuitively provide feedback across every surface and Artifact to steer the agent to your desired outcomes without tedious prompt repetition.
                  </p>
                </div>
                <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-black/[0.08] shadow-md">
                  <img
                    src="/assets/image/product/user-feedback.jpg"
                    alt="Antigravity IDE User Feedback Loop"
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW 3: ANTIGRAVITY SDK */}
      {activeKey === 'sdk' && (
        <div>
          {/* SDK Hero */}
          <section className="py-20 px-6 max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FBBC04]/20 text-[#d97706] text-xs font-bold tracking-wider uppercase">
                  <Cpu className="w-3.5 h-3.5" />
                  Programmable Framework
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121317] leading-[1.08]">
                  Antigravity SDK
                </h1>
                <p className="text-lg sm:text-xl text-[#5f6368] leading-relaxed font-normal">
                  Build AI agents that autonomously read files, run commands, edit code, and more. The Agent SDK gives you the same tools, agent loop, and context management that power Google Antigravity, programmable in Python.
                </p>

                {/* PyPI Install Card */}
                <div className="bg-[#121317] text-white p-4 rounded-2xl font-mono text-sm border border-white/10 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#9aa0a6] pb-2 border-b border-white/10">
                    <span>PyPI Package</span>
                    <button
                      onClick={() => copyToClipboard('pip install google-antigravity')}
                      className="hover:text-white flex items-center gap-1 text-xs"
                    >
                      {copied ? <Check className="w-3.5 h-3.5 text-[#00B95C]" /> : <Copy className="w-3.5 h-3.5 text-[#80868b]" />}
                      {copied ? 'Copied' : 'Copy'}
                    </button>
                  </div>
                  <p className="text-[#3186FF] selection:bg-white/20 select-all">
                    pip install google-antigravity
                  </p>
                </div>
              </div>

              {/* Code Example Terminal */}
              <div className="lg:col-span-6">
                <div className="rounded-3xl border border-black/[0.08] shadow-2xl overflow-hidden bg-[#121317] text-white p-6 font-mono text-xs space-y-3">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-[#9aa0a6]">agent_pipeline.py</span>
                    <span className="text-[#00B95C]">Python 3.11+</span>
                  </div>
                  <pre className="text-stone-300 leading-relaxed overflow-x-auto">
{`from google.antigravity import Agent, ToolRegistry

# Initialize sovereign agent runtime
registry = ToolRegistry.from_workspace("./my-project")
agent = Agent(
    model="gemini-3.8-flash",
    tools=registry.all(),
    subagents_enabled=True,
)

# Launch autonomous multi-step execution
response = agent.run(
    "Audit src/auth, fix CSRF vulnerabilities, and generate test suite."
)

print(response.artifacts)`}
                  </pre>
                </div>
              </div>
            </div>
          </section>

          {/* SDK Capabilities */}
          <section className="py-20 px-6 bg-[#f8f9fa] border-y border-black/[0.06]">
            <div className="max-w-[1240px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-3">
                <Layers className="w-8 h-8 text-[#1a73e8]" />
                <h3 className="text-xl font-bold text-[#121317]">Unified Tool Experience</h3>
                <p className="text-sm text-[#5f6368] leading-relaxed">
                  Layer custom Python callables, Model Context Protocol (MCP) servers, and reusable agent skills over our built-in filesystem and terminal tools under a single pipeline.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-3">
                <Settings2 className="w-8 h-8 text-[#00b95c]" />
                <h3 className="text-xl font-bold text-[#121317]">Focus on Customizing</h3>
                <p className="text-sm text-[#5f6368] leading-relaxed">
                  The SDK abstracts away the complex machinery of running an AI agent—including state management, tool execution, and backend communication—allowing developers to focus on behavior rather than infrastructure.
                </p>
              </div>

              <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-3">
                <Sparkles className="w-8 h-8 text-[#d97706]" />
                <h3 className="text-xl font-bold text-[#121317]">Multimodal Ingestion</h3>
                <p className="text-sm text-[#5f6368] leading-relaxed">
                  Pass rich multimedia file attachments (images, videos, audio, and documents) to the agent alongside textual instruction prompt lists, resolving types and guessing MIME formats automatically.
                </p>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* VIEW 4: ANTIGRAVITY 2.0 */}
      {activeKey === 'v2' && (
        <div>
          {/* 2.0 Hero */}
          <section className="py-20 px-6 max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3186FF]/10 text-[#3186FF] text-xs font-bold tracking-wider uppercase">
                  <Boxes className="w-3.5 h-3.5" />
                  Desktop Command Center
                </div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-[#121317] leading-[1.08]">
                  Antigravity 2.0
                </h1>
                <p className="text-lg sm:text-xl text-[#5f6368] leading-relaxed font-normal">
                  Google Antigravity 2.0 is your dedicated platform to work with agents. Orchestrate multiple autonomous agents working in parallel across independent projects.
                </p>

                <div className="flex items-center gap-4 pt-2">
                  <button
                    onClick={() => onNavigate('/download')}
                    className="btn-pill-primary px-8 py-3.5 text-sm font-semibold"
                  >
                    Download Antigravity 2.0
                  </button>
                  <button
                    onClick={() => onNavigate('/pricing')}
                    className="px-6 py-3.5 rounded-full border border-black/10 hover:bg-[#f8f9fa] text-xs font-semibold tracking-wide uppercase transition-colors"
                  >
                    See Pricing
                  </button>
                </div>
              </div>

              {/* 2.0 Visual Showcase */}
              <div className="lg:col-span-6 rounded-3xl border border-black/[0.08] shadow-2xl overflow-hidden bg-white">
                <img
                  src="/assets/image/product/artifacts.png"
                  alt="Antigravity 2.0 Command Center"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </section>

          {/* 2.0 Feature Matrix */}
          <section className="py-20 px-6 bg-[#f8f9fa] border-y border-black/[0.06]">
            <div className="max-w-[1240px] mx-auto">
              <div className="text-center max-w-2xl mx-auto mb-16">
                <span className="text-xs font-bold uppercase tracking-widest text-[#3186FF]">ORCHESTRATION</span>
                <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#121317] mt-2">
                  An Abstracted UI for Parallel Agent Swarms
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-3">
                  <Boxes className="w-8 h-8 text-[#3186FF]" />
                  <h3 className="text-lg font-bold text-[#121317]">Dynamic Subagents</h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Subagents are defined and instantiated dynamically to tackle parallel parts of complex problems, leading to faster and better results.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-3">
                  <Clock className="w-8 h-8 text-[#00B95C]" />
                  <h3 className="text-lg font-bold text-[#121317]">Scheduled Tasks</h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Automate routine checks with Scheduled Tasks, simply define a cron schedule and the agents start and run autonomously in the background.
                  </p>
                </div>

                <div className="bg-white p-8 rounded-3xl border border-black/[0.06] shadow-sm space-y-3">
                  <Mic className="w-8 h-8 text-[#FC413D]" />
                  <h3 className="text-lg font-bold text-[#121317]">Live Voice Transcription</h3>
                  <p className="text-sm text-[#5f6368] leading-relaxed">
                    Speak your prompts. Powered by latest Gemini Audio models, real-time transcription converts conversational speech into clearly phrased prompts.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      )}

      {/* Global Bottom CTA */}
      <section className="py-20 px-6 bg-[#121317] text-white">
        <div className="max-w-[1000px] mx-auto text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#3186FF]">
            GET STARTED TODAY
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight">
            Experience Liftoff with Google Antigravity
          </h2>
          <p className="text-[#9aa0a6] max-w-xl mx-auto text-sm sm:text-base">
            The sovereign, agent-first platform engineered for developers building the next generation of software.
          </p>
          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onNavigate('/download')}
              className="btn-pill-primary px-8 py-3.5 text-sm font-semibold shadow-lg"
            >
              Download Free
            </button>
            <button
              onClick={() => onNavigate('/pricing')}
              className="px-8 py-3.5 rounded-full border border-white/20 hover:bg-white/10 text-white text-xs font-semibold tracking-wider uppercase transition-colors"
            >
              Explore Plans
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
