import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Download, Apple, Monitor, Terminal, Code2, Copy, Check, ExternalLink, Cpu } from 'lucide-react';

interface DownloadPageProps {
  onNavigate: (path: string) => void;
}

export const DownloadPage: React.FC<DownloadPageProps> = ({ onNavigate }) => {
  const [copiedCmd, setCopiedCmd] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedCmd(id);
    setTimeout(() => setCopiedCmd(null), 2000);
  };

  const cliCommands = {
    unix: 'curl -fsSL https://antigravity.google/install.sh | bash',
    powershell: 'irm https://antigravity.google/install.ps1 | iex',
    sdk: 'pip install google-antigravity',
  };

  return (
    <div className="pt-32 pb-28 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <span className="text-xs font-semibold text-[#1a73e8] tracking-widest uppercase bg-[#1a73e8]/10 px-3 py-1 rounded-full">
            Direct Downloads
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#121317] mt-3">
            Download Google Antigravity
          </h1>
          <p className="text-lg text-[#5f6368] mt-4 leading-relaxed">
            Download the Antigravity desktop client, command line interface, IDE extensions, standalone IDE, or Python SDK.
          </p>
        </div>

        {/* 1. Antigravity 2.0 Desktop Section */}
        <div className="rounded-3xl bg-[#f8f9fa] border border-black/[0.08] p-8 md:p-12 mb-16 shadow-xs">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 mb-10 pb-8 border-b border-black/[0.08]">
            <div className="space-y-2">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
                Flagship Application
              </span>
              <h2 className="text-3xl font-medium text-[#121317]">
                Antigravity 2.0 (Desktop)
              </h2>
              <p className="text-base text-[#5f6368] max-w-xl">
                Your sovereign command center to manage multiple local agents in parallel with project-level memory.
              </p>
            </div>
            <div className="text-xs text-[#80868b] bg-white px-4 py-2 rounded-full border border-black/[0.06] w-fit">
              Latest Release: v2.4.0 (Sep 2026)
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* macOS */}
            <div className="bg-white rounded-2xl p-6 border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f1f3f4] flex items-center justify-center text-[#121317] mb-4">
                  <Apple className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-[#121317]">macOS</h3>
                <p className="text-xs text-[#80868b] mt-1 mb-6">
                  macOS 12 (Monterey) or later
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="https://antigravity.google/download"
                  className="w-full btn-pill-primary text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Apple Silicon (M1/M2/M3/M4)</span>
                </a>
                <a
                  href="https://antigravity.google/download"
                  className="w-full btn-pill-secondary text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Intel Processor</span>
                </a>
              </div>
            </div>

            {/* Linux */}
            <div className="bg-white rounded-2xl p-6 border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f1f3f4] flex items-center justify-center text-[#121317] mb-4">
                  <Terminal className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-[#121317]">Linux</h3>
                <p className="text-xs text-[#80868b] mt-1 mb-6">
                  glibc &gt;= 2.28 (Ubuntu, Debian, Fedora, RHEL)
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="https://antigravity.google/download"
                  className="w-full btn-pill-primary text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>.deb (Debian / Ubuntu)</span>
                </a>
                <a
                  href="https://antigravity.google/download"
                  className="w-full btn-pill-secondary text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>.rpm / .tar.gz (Fedora / Arch)</span>
                </a>
              </div>
            </div>

            {/* Windows */}
            <div className="bg-white rounded-2xl p-6 border border-black/[0.08] shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#f1f3f4] flex items-center justify-center text-[#121317] mb-4">
                  <Monitor className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-medium text-[#121317]">Windows</h3>
                <p className="text-xs text-[#80868b] mt-1 mb-6">
                  Windows 10 / 11 (64-bit)
                </p>
              </div>
              <div className="space-y-2">
                <a
                  href="https://antigravity.google/download"
                  className="w-full btn-pill-primary text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download .exe Installer</span>
                </a>
                <a
                  href="https://antigravity.google/download"
                  className="w-full btn-pill-secondary text-xs py-2.5 flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Portable ZIP</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 2. Antigravity CLI One-Liner Install */}
        <div className="rounded-3xl bg-[#121317] text-white p-8 md:p-12 mb-16 shadow-xl">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#00b95c]">
              Terminal First
            </span>
            <h2 className="text-3xl font-medium text-white">
              Antigravity CLI
            </h2>
            <p className="text-sm text-[#9aa0a6]">
              Work with Antigravity directly in your codebase. Build, debug, and ship from your terminal. Describe what you need, and Antigravity handles the rest.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* macOS / Linux curl */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3 text-xs text-[#9aa0a6]">
                <span>macOS & Linux (bash/zsh)</span>
                <button
                  onClick={() => copyToClipboard(cliCommands.unix, 'unix')}
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedCmd === 'unix' ? <Check className="w-3.5 h-3.5 text-[#00b95c]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCmd === 'unix' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="font-code text-xs text-[#00b95c] bg-black/40 p-3 rounded-xl overflow-x-auto">
                {cliCommands.unix}
              </pre>
            </div>

            {/* Windows PowerShell */}
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5">
              <div className="flex items-center justify-between mb-3 text-xs text-[#9aa0a6]">
                <span>Windows PowerShell</span>
                <button
                  onClick={() => copyToClipboard(cliCommands.powershell, 'ps')}
                  className="hover:text-white flex items-center gap-1 transition-colors"
                >
                  {copiedCmd === 'ps' ? <Check className="w-3.5 h-3.5 text-[#00b95c]" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copiedCmd === 'ps' ? 'Copied' : 'Copy'}</span>
                </button>
              </div>
              <pre className="font-code text-xs text-[#749bff] bg-black/40 p-3 rounded-xl overflow-x-auto">
                {cliCommands.powershell}
              </pre>
            </div>
          </div>
        </div>

        {/* 3. Antigravity for IDEs */}
        <div className="mb-16">
          <div className="max-w-2xl mb-8 space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-[#1a73e8]">
              Editor Integrations
            </span>
            <h2 className="text-3xl font-medium text-[#121317]">
              Antigravity for IDEs
            </h2>
            <p className="text-sm text-[#5f6368]">
              Bring Antigravity's autonomous agent capabilities directly into your favorite editor with official extensions, or download the standalone Antigravity IDE application.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: 'Visual Studio Code',
                desc: 'Autonomous coding agent, inline completions, and full diff reviews in VS Code and VS Code Insiders.',
                tag: 'Official Extension',
              },
              {
                name: 'Visual Studio',
                desc: 'Agentic workflows, tool executions, and multi-file code editing for Visual Studio 2026.',
                tag: 'Extension Preview',
              },
              {
                name: 'JetBrains IDEs',
                desc: 'IntelliJ IDEA, PyCharm, WebStorm, GoLand, CLion, Rider, and more (Enterprise support in Preview).',
                tag: 'Plugin Hub',
              },
              {
                name: 'Zed Editor',
                desc: 'High-performance agent orchestration and native multibuffer editing in Zed.',
                tag: 'Extension',
              },
              {
                name: 'Xcode',
                desc: 'Native agentic development inside Xcode for macOS, iOS, iPadOS, and visionOS.',
                tag: 'Developer Preview',
              },
              {
                name: 'Antigravity IDE (Standalone)',
                desc: 'Dedicated desktop application with native windowing, integrated agent panels, and full workspace.',
                tag: 'Full App',
              },
            ].map((ide) => (
              <div
                key={ide.name}
                className="p-6 rounded-2xl bg-[#f8f9fa] border border-black/[0.08] shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-semibold text-[#1a73e8] bg-[#1a73e8]/10 px-2.5 py-0.5 rounded-full">
                      {ide.tag}
                    </span>
                    <ExternalLink className="w-4 h-4 text-[#80868b]" />
                  </div>
                  <h3 className="text-lg font-medium text-[#121317] mb-2">{ide.name}</h3>
                  <p className="text-xs text-[#5f6368] leading-relaxed mb-6">{ide.desc}</p>
                </div>
                <button
                  onClick={() => onNavigate('/download')}
                  className="btn-pill-secondary text-xs w-full justify-center"
                >
                  <span>Install for {ide.name.split(' ')[0]}</span>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* 4. Python SDK */}
        <div className="rounded-3xl border border-black/[0.08] bg-[#f8f9fa] p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#fc413d] uppercase tracking-wider">
              <Cpu className="w-4 h-4" />
              <span>Antigravity Python SDK</span>
            </div>
            <h3 className="text-2xl font-medium text-[#121317]">
              Construct, configure, and orchestrate custom autonomous agents
            </h3>
            <p className="text-sm text-[#5f6368] max-w-xl">
              Co-optimized with the Gemini family of models. Write Python scripts to test evaluations and run agent swarms.
            </p>
          </div>

          <div className="flex items-center gap-3 bg-white border border-black/[0.08] px-4 py-3 rounded-2xl font-code text-xs text-[#121317] shadow-xs">
            <span>{cliCommands.sdk}</span>
            <button
              onClick={() => copyToClipboard(cliCommands.sdk, 'sdk')}
              className="hover:text-[#1a73e8] transition-colors"
            >
              {copiedCmd === 'sdk' ? <Check className="w-4 h-4 text-[#00b95c]" /> : <Copy className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
