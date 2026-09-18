import React, { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, Terminal, Code, Cpu, Boxes, ArrowUpRight, Check, Copy, Sparkles, Newspaper, BookOpen, GitCommit, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface HeaderProps {
  currentPath: string;
  onNavigate: (path: string) => void;
}

const ANTIGRAVITY_SVG = `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
  <path d="M90 93.7C94.4 97.2 101.4 94.9 95 88.4C75.7 69.8 79.8 18.4 55.9 18.4C32 18.4 36 69.8 16.8 88.4C9.8 95.4 17.4 97.2 22 93.7C40.1 81.4 39 59.9 55.9 59.9C72.8 59.9 71.6 81.4 90 93.7Z" fill="#3186FF"/>
  <circle cx="28" cy="28" r="14" fill="#FFE432"/>
  <circle cx="82" cy="35" r="16" fill="#FC413D"/>
  <circle cx="20" cy="50" r="16" fill="#00B95C"/>
</svg>`;

export const Header: React.FC<HeaderProps> = ({ currentPath, onNavigate }) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [svgCopied, setSvgCopied] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (path: string) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    onNavigate(path);
  };

  const handleCopySvg = (e: React.MouseEvent) => {
    e.stopPropagation();
    navigator.clipboard.writeText(ANTIGRAVITY_SVG);
    setSvgCopied(true);
    setTimeout(() => setSvgCopied(false), 2000);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/[0.06] shadow-sm py-3'
          : 'bg-white/60 backdrop-blur-md py-4'
      }`}
      onMouseLeave={() => setActiveDropdown(null)}
    >
      <div className="max-w-[1440px] mx-auto px-6 md:px-10 flex items-center justify-between">
        {/* Left: Brand Logo & Copy SVG Tool */}
        <div className="flex items-center gap-4 sm:gap-6">
          <button
            onClick={() => handleNavClick('/')}
            className="group flex items-center gap-2.5 text-left focus:outline-none"
            aria-label="Google Antigravity Home"
          >
            {/* Google Multicolor Logo Mark */}
            <div className="w-8 h-8 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
              <svg viewBox="0 0 100 100" className="w-7 h-7">
                <path
                  d="M90 93.7C94.4 97.2 101.4 94.9 95 88.4C75.7 69.8 79.8 18.4 55.9 18.4C32 18.4 36 69.8 16.8 88.4C9.8 95.4 17.4 97.2 22 93.7C40.1 81.4 39 59.9 55.9 59.9C72.8 59.9 71.6 81.4 90 93.7Z"
                  fill="#3186FF"
                />
                <circle cx="28" cy="28" r="14" fill="#FFE432" />
                <circle cx="82" cy="35" r="16" fill="#FC413D" />
                <circle cx="20" cy="50" r="16" fill="#00B95C" />
              </svg>
            </div>
            <div className="flex items-center gap-1.5 font-medium tracking-tight text-xl text-[#121317]">
              <span>Google</span>
              <span className="text-[#121317] font-semibold">Antigravity</span>
            </div>
          </button>

          {/* Copy Logo as SVG Button */}
          <button
            onClick={handleCopySvg}
            className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium text-[#5f6368] hover:text-[#121317] hover:bg-black/[0.04] transition-colors border border-black/[0.08]"
            title="Copy Logo as SVG to clipboard"
          >
            {svgCopied ? (
              <>
                <Check className="w-3 h-3 text-[#00b95c]" />
                <span className="text-[#00b95c] font-semibold">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 text-[#80868b]" />
                <span>Copy Logo as SVG</span>
              </>
            )}
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 ml-4">
            {/* Products Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('product')}
            >
              <button
                onClick={() => handleNavClick('/product/antigravity-2')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPath.startsWith('/product')
                    ? 'text-[#1a73e8] bg-[#1a73e8]/10'
                    : 'text-[#45474d] hover:text-[#121317] hover:bg-black/[0.04]'
                }`}
              >
                <span>Products</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'product' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'product' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    data-lenis-prevent
                    className="absolute top-full left-0 mt-2 w-[460px] bg-white rounded-2xl shadow-xl border border-black/[0.08] p-4 grid grid-cols-1 gap-2 overscroll-contain"
                  >
                    <div className="px-3 py-2 border-b border-black/[0.06] mb-1">
                      <p className="text-xs font-semibold text-[#80868b] uppercase tracking-wider">
                        Explore our next generation products
                      </p>
                    </div>

                    <button
                      onClick={() => handleNavClick('/product/antigravity-2')}
                      className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#3186ff]/10 text-[#1a73e8] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Boxes className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#121317] flex items-center gap-1.5">
                          Antigravity 2.0
                          <span className="text-[10px] bg-[#e8f0fe] text-[#1a73e8] font-semibold px-2 py-0.5 rounded-full">
                            New
                          </span>
                        </div>
                        <p className="text-xs text-[#5f6368] mt-0.5 leading-relaxed">
                          Your command center to manage multiple local agents in parallel.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/product/antigravity-cli')}
                      className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#00b95c]/10 text-[#00b95c] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Terminal className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#121317]">
                          Antigravity CLI
                        </div>
                        <p className="text-xs text-[#5f6368] mt-0.5 leading-relaxed">
                          Lightweight, fast, terminal-first surface for keyboard developers.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/product/antigravity-ide')}
                      className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#fc413d]/10 text-[#fc413d] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Code className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#121317]">
                          Antigravity IDE &amp; Extensions
                        </div>
                        <p className="text-xs text-[#5f6368] mt-0.5 leading-relaxed">
                          Standalone agentic IDE plus extensions for VS Code, JetBrains, Zed.
                        </p>
                      </div>
                    </button>

                    <button
                      onClick={() => handleNavClick('/product/antigravity-sdk')}
                      className="flex items-start gap-3.5 p-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left group"
                    >
                      <div className="w-9 h-9 rounded-lg bg-[#fbbc04]/10 text-[#d97706] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-sm font-medium text-[#121317]">
                          Antigravity SDK
                        </div>
                        <p className="text-xs text-[#5f6368] mt-0.5 leading-relaxed">
                          Prototype custom autonomous agents leveraging Antigravity harness.
                        </p>
                      </div>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Use Cases Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('use-cases')}
            >
              <button
                onClick={() => handleNavClick('/use-cases')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPath.startsWith('/use-cases')
                    ? 'text-[#1a73e8] bg-[#1a73e8]/10'
                    : 'text-[#45474d] hover:text-[#121317] hover:bg-black/[0.04]'
                }`}
              >
                <span>Use Cases</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'use-cases' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'use-cases' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    data-lenis-prevent
                    className="absolute top-full left-0 mt-2 w-[420px] bg-white rounded-2xl shadow-xl border border-black/[0.08] p-4 grid grid-cols-1 gap-2 overscroll-contain"
                  >
                    <div className="px-3 py-2 border-b border-black/[0.06] mb-1">
                      <p className="text-xs font-semibold text-[#80868b] uppercase tracking-wider">
                        Built for developers in the agent-first era
                      </p>
                    </div>
                    {[
                      { name: 'Fullstack', path: '/use-cases/fullstack', desc: 'End-to-end applications with verified artifacts' },
                      { name: 'Frontend', path: '/use-cases/frontend', desc: 'Browser-in-the-loop UX & component engineering' },
                      { name: 'Enterprise', path: '/use-cases/enterprise', desc: 'Sovereign agentic workflows for large codebases' },
                      { name: 'Science & Research', path: '/use-cases', desc: 'Parallel evaluation loops & data workflows' },
                    ].map((uc) => (
                      <button
                        key={uc.name}
                        onClick={() => handleNavClick(uc.path)}
                        className="p-3 rounded-xl hover:bg-[#f8f9fa] transition-colors text-left group"
                      >
                        <div className="text-sm font-medium text-[#121317] group-hover:text-[#1a73e8] transition-colors">
                          {uc.name}
                        </div>
                        <p className="text-xs text-[#5f6368] mt-0.5">{uc.desc}</p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Direct Links */}
            <button
              onClick={() => handleNavClick('/pricing')}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                currentPath === '/pricing'
                  ? 'text-[#1a73e8] bg-[#1a73e8]/10'
                  : 'text-[#45474d] hover:text-[#121317] hover:bg-black/[0.04]'
              }`}
            >
              Pricing
            </button>

            <button
              onClick={() => handleNavClick('/use-cases/enterprise')}
              className="px-4 py-2 rounded-full text-sm font-medium text-[#45474d] hover:text-[#121317] hover:bg-black/[0.04] transition-colors"
            >
              Enterprise
            </button>

            {/* Resources Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('resources')}
            >
              <button
                onClick={() => handleNavClick('/blog')}
                className={`flex items-center gap-1 px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  currentPath.startsWith('/blog') || currentPath === '/changelog'
                    ? 'text-[#1a73e8] bg-[#1a73e8]/10'
                    : 'text-[#45474d] hover:text-[#121317] hover:bg-black/[0.04]'
                }`}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-200 ${
                    activeDropdown === 'resources' ? 'rotate-180' : ''
                  }`}
                />
              </button>

              <AnimatePresence>
                {activeDropdown === 'resources' && (
                  <motion.div
                    initial={{ opacity: 0, y: 8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    data-lenis-prevent
                    className="absolute top-full left-0 mt-2 w-[340px] bg-white rounded-2xl shadow-xl border border-black/[0.08] p-3 grid grid-cols-1 gap-1 overscroll-contain"
                  >
                    {[
                      { name: 'Blog', path: '/blog', desc: 'Latest updates & model announcements' },
                      { name: 'Changelog', path: '/changelog', desc: 'Weekly releases and platform notes' },
                      { name: 'Getting Started Guide', path: '/product/antigravity-cli', desc: 'Quickstart setup & CLI manual' },
                      { name: 'Press & Guidelines', path: '/blog', desc: 'Brand assets and media kits' },
                    ].map((item) => (
                      <button
                        key={item.name}
                        onClick={() => handleNavClick(item.path)}
                        className="p-2.5 rounded-lg hover:bg-[#f8f9fa] transition-colors text-left"
                      >
                        <div className="text-sm font-medium text-[#121317] flex items-center justify-between">
                          {item.name}
                          <ArrowUpRight className="w-3.5 h-3.5 text-[#9aa0a6]" />
                        </div>
                        <p className="text-xs text-[#5f6368] mt-0.5">{item.desc}</p>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </nav>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('/download')}
            className="btn-pill-primary text-sm shadow-sm"
          >
            <span>Download</span>
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-full text-[#45474d] hover:text-[#121317] hover:bg-black/[0.05] transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            data-lenis-prevent
            className="lg:hidden bg-white border-b border-black/[0.08] px-6 py-6 overflow-y-auto max-h-[80vh] overscroll-contain"
          >
            <div className="space-y-4">
              <button
                onClick={() => handleNavClick('/')}
                className="block w-full text-left py-2 font-medium text-lg text-[#121317]"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick('/product/antigravity-cli')}
                className="block w-full text-left py-2 font-medium text-lg text-[#121317]"
              >
                Products (CLI, IDE, SDK, 2.0)
              </button>
              <button
                onClick={() => handleNavClick('/use-cases')}
                className="block w-full text-left py-2 font-medium text-lg text-[#121317]"
              >
                Use Cases (Frontend, Fullstack, Enterprise)
              </button>
              <button
                onClick={() => handleNavClick('/pricing')}
                className="block w-full text-left py-2 font-medium text-lg text-[#121317]"
              >
                Pricing
              </button>
              <button
                onClick={() => handleNavClick('/changelog')}
                className="block w-full text-left py-2 font-medium text-lg text-[#121317]"
              >
                Changelog
              </button>
              <button
                onClick={() => handleNavClick('/blog')}
                className="block w-full text-left py-2 font-medium text-lg text-[#121317]"
              >
                Blog &amp; News
              </button>
              <button
                onClick={() => handleNavClick('/download')}
                className="block w-full text-left py-2 font-medium text-lg text-[#1a73e8]"
              >
                Download for macOS / Linux / Windows
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
