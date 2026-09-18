import React from 'react';
import { motion } from 'framer-motion';
import { GitCommit, Sparkles, Shield, Terminal, ArrowRight, Tag, Calendar, Layers, Zap } from 'lucide-react';

interface ChangelogPageProps {
  onNavigate: (path: string) => void;
}

const CHANGELOG_ENTRIES = [
  {
    version: 'v2.4.0',
    date: 'September 15, 2026',
    title: 'New Permissions System & Terminal and Git version control for Enterprise',
    badge: 'Latest',
    tag: 'Enterprise & Security',
    highlights: [
      'Gemini 3.8 Flash using Application Default Credentials (ADC) in AGY Enterprise environments.',
      'Fine-grained role-based access control (RBAC) across multi-user workspaces and cloud runners.',
      'Direct embedded terminal execution with hardware security key gates for critical destructive commands.',
      'Sub-200ms latency reduction in prompt dispatching and streaming response tokens.'
    ]
  },
  {
    version: 'v2.3.5',
    date: 'September 2, 2026',
    title: 'Introducing new Documents section and UX enhancements for organization',
    tag: 'Workspace & Documents',
    highlights: [
      'New Documents tab in project sidebar to organize specs, architectural plans, and meeting notes.',
      'Quoting functionality: select any text snippet in code or chat to directly quote into your next prompt.',
      'Slash command /boost added for multi-turn deep reasoning and counter-adversarial review.'
    ]
  },
  {
    version: 'v2.3.0',
    date: 'August 24, 2026',
    title: 'Generative UI and UI improvements with Embedded Terminals',
    tag: 'UI & Motion',
    highlights: [
      'Generative UI components rendered dynamically inside chat artifacts for rapid prototype testing.',
      'Embedded split-terminals with bidirectional input piping directly from agent steps.',
      'Native audio prompt recording with real-time speech-to-text powered by Gemini Audio models.'
    ]
  },
  {
    version: 'v2.2.0',
    date: 'August 10, 2026',
    title: 'Remote Control, faster project switching, and chat responsiveness',
    tag: 'Remote & Cloud',
    highlights: [
      'Launch Remote Control to interact with your Antigravity agent instances from mobile or secondary laptops.',
      'Instantaneous workspace switching with cached index trees and zero cold-start latency.',
      'Automated Headroom token compaction defense to eliminate agent amnesia in 100+ step conversations.'
    ]
  },
  {
    version: 'v2.1.0',
    date: 'July 18, 2026',
    title: 'Persistent Sidebar Folders, Crash Fixes, and UI Polish',
    tag: 'Core Reliability',
    highlights: [
      'Persistent folder organization for multi-repository monorepo workspaces.',
      'Subagent worktree isolation preventing merge conflicts between concurrent workers.',
      'Memory footprint reduced by 35% on macOS Apple Silicon and Linux distributions.'
    ]
  },
  {
    version: 'v2.0.0',
    date: 'June 1, 2026',
    title: 'Liftoff: Google Antigravity 2.0 Launch',
    tag: 'Major Platform Launch',
    highlights: [
      'Official launch of Google Antigravity 2.0 desktop orchestrator.',
      'Antigravity CLI v2 for terminal-native developers.',
      'Full Python and TypeScript Agent SDK published to PyPI and npm.',
      'Integrated Chrome DevTools MCP browser-in-the-loop testing.'
    ]
  }
];

export const ChangelogPage: React.FC<ChangelogPageProps> = ({ onNavigate }) => {
  return (
    <div className="w-full bg-white text-[#121317] pt-[90px]">
      {/* Header */}
      <section className="py-20 px-6 max-w-[1000px] mx-auto text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3186FF]/10 text-[#1a73e8] text-xs font-bold uppercase tracking-wider">
          <GitCommit className="w-3.5 h-3.5" />
          RELEASE FEED
        </div>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#121317]">
          Changelog
        </h1>
        <p className="text-base sm:text-lg text-[#5f6368] max-w-xl mx-auto">
          Explore all latest features, performance improvements, and model additions to Google Antigravity.
        </p>
      </section>

      {/* Timeline Feed */}
      <section className="pb-28 px-6 max-w-[900px] mx-auto">
        <div className="relative border-l-2 border-black/[0.08] ml-4 sm:ml-8 space-y-12 pl-8 sm:pl-12">
          {CHANGELOG_ENTRIES.map((entry, index) => (
            <motion.div
              key={entry.version}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="relative group"
            >
              {/* Timeline Marker Dot */}
              <div className="absolute -left-[41px] sm:-left-[57px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-[#1a73e8] flex items-center justify-center group-hover:scale-110 transition-transform shadow-sm">
                <div className="w-2 h-2 rounded-full bg-[#1a73e8]" />
              </div>

              {/* Release Card */}
              <div className="bg-[#f8f9fa] border border-black/[0.06] rounded-3xl p-6 sm:p-8 hover:bg-white hover:shadow-lg transition-all space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <span className="font-mono text-sm font-bold bg-[#121317] text-white px-2.5 py-1 rounded-lg">
                      {entry.version}
                    </span>
                    {entry.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider bg-[#00b95c]/15 text-[#00b95c] px-2.5 py-0.5 rounded-full">
                        {entry.badge}
                      </span>
                    )}
                    <span className="text-xs font-semibold text-[#80868b] uppercase tracking-wider">
                      {entry.tag}
                    </span>
                  </div>
                  <div className="text-xs text-[#80868b] flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5" />
                    {entry.date}
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-[#121317] leading-snug">
                  {entry.title}
                </h2>

                <ul className="space-y-2.5 pt-2 text-sm text-[#45474d] leading-relaxed">
                  {entry.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <Sparkles className="w-4 h-4 text-[#1a73e8] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};
