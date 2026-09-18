import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Play, ChevronLeft, ChevronRight, X, ArrowRight, ExternalLink } from 'lucide-react';
import { ParticleRing } from '../components/ParticleRing';

interface LandingPageProps {
  onNavigate: (path: string) => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onNavigate }) => {
  // Typewriter effect state
  const fullText = "Experience liftoff with the next-gen agent platform";
  const [typedText, setTypedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setTypedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 45);
    return () => clearInterval(timer);
  }, []);

  // Video Section Custom Cursor
  const videoWrapperRef = useRef<HTMLDivElement | null>(null);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHoveringVideo, setIsHoveringVideo] = useState(false);
  const [modalVideoUrl, setModalVideoUrl] = useState<string | null>(null);

  const handleVideoMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoWrapperRef.current) return;
    const rect = videoWrapperRef.current.getBoundingClientRect();
    setCursorPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Use Case Slider State
  const useCases = [
    {
      title: "Full stack developer",
      desc: "Build production-ready applications with confidence with thoroughly designed artifacts and comprehensive verification tests.",
      image: "/assets/images/landing-thumbnail-fullstack.jpg",
      videoUrl: "https://www.youtube.com/embed/htV29JrMXmA?autoplay=1",
      link: "/use-cases",
    },
    {
      title: "Enterprise developer",
      desc: "Google Antigravity empowers the next era of enterprise builders with private code isolation and sovereign agent governance.",
      image: "/assets/images/landing-thumbnail-enterprise.jpg",
      videoUrl: "https://www.youtube.com/embed/B4do6xuIgD4?autoplay=1",
      link: "/use-cases",
    },
    {
      title: "Frontend developer",
      desc: "Streamline UX development by leveraging browser-in-the-loop agents to automate repetitive tasks and visual audits.",
      image: "/assets/images/landing-thumbnail-frontend.jpg",
      videoUrl: "https://www.youtube.com/embed/yiHKlPuZ73c?autoplay=1",
      link: "/use-cases",
    },
  ];
  const [activeUseCase, setActiveUseCase] = useState(0);

  // Blog Carousel State
  const blogs = [
    {
      title: "Gemini 3.8 Flash in Google Antigravity",
      date: "Sep 1, 2026",
      tag: "Model",
      img: "/assets/images/3.8-Flash---Square.png",
    },
    {
      title: "Teamwork: When AI Becomes a Research Partner",
      date: "Aug 27, 2026",
      tag: "Research",
      img: "/assets/images/teamwork-square.jpg",
    },
    {
      title: "Visualizing with the help of Antigravity",
      date: "Aug 26, 2026",
      tag: "Product",
      img: "/assets/images/visualizing-with-antigravity-square.png",
    },
    {
      title: "Improving the Version Control Experience",
      date: "Aug 24, 2026",
      tag: "Product",
      img: "/assets/images/VSC-Blog-1x1.png",
    },
    {
      title: "Antigravity Anywhere with Remote Control",
      date: "Aug 21, 2026",
      tag: "Product",
      img: "/assets/images/remote-control-square.png",
    },
    {
      title: "Bringing Antigravity to Gemini Enterprise",
      date: "Aug 20, 2026",
      tag: "Enterprise",
      img: "/assets/images/AGY-Enterprise---Square.png",
    },
    {
      title: "Introducing IDE Extensions for VS Code & JetBrains",
      date: "Aug 20, 2026",
      tag: "Product",
      img: "/assets/images/IDE-Extensions-Square.png",
    },
    {
      title: "Gemini 3.7 Flash in Google Antigravity",
      date: "Aug 13, 2026",
      tag: "Model",
      img: "/assets/images/3.7-Flash---Square.jpg",
    },
    {
      title: "Introducing Custom Agents",
      date: "Aug 12, 2026",
      tag: "Product",
      img: "/assets/images/Custom_Agents_Blog_1x1.png",
    },
  ];
  const [blogScrollIdx, setBlogScrollIdx] = useState(0);

  // Symbol Bouncers
  const symbols = [
    'data_object', 'search_spark', 'file_copy', 'plus_code', 'keyboard_command_key',
    'spark', 'code', 'check_circle', 'refresh', 'deployed_code', 'commit',
    'device_hub', 'developer_mode_tv', 'folder', 'dashboard_customize', 'terminal',
    'pen_spark', 'merge', 'keyboard_tab', 'code_blocks'
  ];

  return (
    <div className="relative min-h-screen bg-white">
      {/* 1. HERO SECTION */}
      <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden">
        {/* 3D Particle Ring Background */}
        <div className="absolute inset-0 h-[700px] pointer-events-none">
          <ParticleRing theme="light" density={240} />
        </div>

        <div className="relative max-w-[1440px] mx-auto px-6 md:px-12 text-center flex flex-col items-center">
          {/* Logo Mark Header */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center justify-center gap-3"
          >
            <div className="w-12 h-12 flex items-center justify-center">
              <svg viewBox="0 0 100 100" className="w-11 h-11">
                <path
                  d="M90 93.7C94.4 97.2 101.4 94.9 95 88.4C75.7 69.8 79.8 18.4 55.9 18.4C32 18.4 36 69.8 16.8 88.4C9.8 95.4 17.4 97.2 22 93.7C40.1 81.4 39 59.9 55.9 59.9C72.8 59.9 71.6 81.4 90 93.7Z"
                  fill="#3186FF"
                />
                <circle cx="28" cy="28" r="14" fill="#FFE432" />
                <circle cx="82" cy="35" r="16" fill="#FC413D" />
                <circle cx="20" cy="50" r="16" fill="#00B95C" />
              </svg>
            </div>
            <span className="text-3xl md:text-4xl font-semibold tracking-tight text-[#121317]">
              Google Antigravity
            </span>
          </motion.div>

          {/* Typewriter H1 */}
          <div className="max-w-4xl min-h-[96px] md:min-h-[140px] flex items-center justify-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-[#121317] leading-[1.15]">
              <span>{typedText}</span>
              <span className="inline-block ml-1 align-baseline">
                <img
                  src="/assets/images/antigravity-cursor.png"
                  alt="cursor"
                  className="w-5 h-8 md:w-7 md:h-11 inline-block animate-cursor-blink"
                />
              </span>
            </h1>
          </div>

          {/* Hero CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-10 flex flex-wrap items-center justify-center gap-4 z-10"
          >
            <button
              onClick={() => onNavigate('/download')}
              className="btn-pill-primary text-base px-8 py-3.5 shadow-md hover:shadow-lg"
            >
              <span>Download</span>
            </button>
            <button
              onClick={() => onNavigate('/use-cases')}
              className="btn-pill-secondary text-base px-8 py-3.5"
            >
              <span>Explore use cases</span>
            </button>
          </motion.div>
        </div>
      </section>

      {/* 2. HERO VIDEO SHOWCASE */}
      <section className="max-w-[1440px] mx-auto px-6 md:px-12 py-8">
        <div
          ref={videoWrapperRef}
          onMouseMove={handleVideoMouseMove}
          onMouseEnter={() => setIsHoveringVideo(true)}
          onMouseLeave={() => setIsHoveringVideo(false)}
          onClick={() => setModalVideoUrl("https://www.youtube.com/embed/SVCBA-pBgt0?autoplay=1")}
          className="relative rounded-3xl overflow-hidden border border-black/[0.08] shadow-2xl bg-black aspect-video cursor-pointer group"
        >
          {/* Custom Floating Magnet Cursor */}
          <AnimatePresence>
            {isHoveringVideo && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  x: cursorPos.x - 70,
                  y: cursorPos.y - 25,
                }}
                exit={{ opacity: 0, scale: 0.5 }}
                transition={{ type: 'spring', damping: 25, stiffness: 350 }}
                className="absolute top-0 left-0 pointer-events-none z-30 hidden md:flex items-center gap-2 bg-white text-[#121317] px-4 py-2 rounded-full shadow-2xl font-medium text-sm border border-black/10"
              >
                <Play className="w-4 h-4 fill-[#121317]" />
                <span>Play intro</span>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Persistent Mobile / Corner Play Button */}
          <div className="absolute bottom-6 right-6 z-20 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white transition-transform group-hover:scale-110">
            <Play className="w-5 h-5 fill-white ml-0.5" />
          </div>

          <video
            src="/assets/video/hero_video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-700"
          />
        </div>
      </section>

      {/* 3. SYMBOL BOUNCER STREAM & MISSION STATEMENT */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Floating Icons Marquee */}
        <div className="overflow-hidden py-4 mb-16 mask-fade">
          <div className="flex items-center gap-6 animate-marquee whitespace-nowrap">
            {symbols.concat(symbols).map((sym, idx) => (
              <div
                key={idx}
                className="w-12 h-12 rounded-2xl bg-[#f8f9fa] border border-black/[0.06] flex items-center justify-center text-[#45474d] hover:text-[#1a73e8] hover:border-[#1a73e8]/30 transition-all cursor-default shadow-xs shrink-0"
              >
                <span className="google-symbol text-2xl">{sym}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight text-[#121317] leading-snug">
            Google Antigravity is our agentic development platform, allowing anyone to build in the agent-first era.
          </h2>
        </div>
      </section>

      {/* 4. ALTERNATING FEATURE EXPLORER */}
      <section className="py-16 max-w-[1440px] mx-auto px-6 md:px-12 space-y-28 md:space-y-36">
        {/* Feature 1: Antigravity 2.0 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-[#1a73e8] tracking-widest uppercase bg-[#1a73e8]/10 px-3 py-1 rounded-full">
              Multi-Agent Orchestration
            </span>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#121317]">
              Antigravity 2.0
            </h3>
            <p className="text-lg text-[#5f6368] leading-relaxed">
              Your command center to manage multiple local agents in parallel. Group conversations into Projects, operate across multiple workspaces, and automate routine tasks with scheduled messages.
            </p>
            <div>
              <button
                onClick={() => onNavigate('/product')}
                className="inline-flex items-center gap-2 text-[#1a73e8] font-medium hover:gap-3 transition-all"
              >
                <span>Learn more about Antigravity 2.0</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-xl bg-[#f8f9fa] group">
              <img
                src="/assets/images/new-chat.png"
                alt="Antigravity 2.0 Workspace Interface"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Feature 2: Antigravity CLI (Reversed) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-xl bg-[#121317] group">
              <img
                src="/assets/images/antigravity-cli.png"
                alt="Antigravity CLI in Terminal"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold text-[#00b95c] tracking-widest uppercase bg-[#00b95c]/10 px-3 py-1 rounded-full">
              Terminal Native
            </span>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#121317]">
              Antigravity CLI
            </h3>
            <p className="text-lg text-[#5f6368] leading-relaxed">
              The lightweight, fast, terminal-first surface to work with Antigravity agents. Run autonomous coding agents, execute shell commands directly, and manage background subagents all from your keyboard.
            </p>
            <div>
              <button
                onClick={() => onNavigate('/download')}
                className="btn-pill-secondary"
              >
                <span>Install CLI via curl</span>
              </button>
            </div>
          </div>
        </div>

        {/* Feature 3: Antigravity SDK */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-semibold text-[#fc413d] tracking-widest uppercase bg-[#fc413d]/10 px-3 py-1 rounded-full">
              Developer Platform
            </span>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#121317]">
              Antigravity SDK
            </h3>
            <p className="text-lg text-[#5f6368] leading-relaxed">
              Prototype custom agents leveraging Antigravity’s harness with minimal code. Simple Python scripts to iterate on agentic applications, automate software engineering tasks, and run evaluations on top of the Antigravity agent harness.
            </p>
            <div>
              <button
                onClick={() => onNavigate('/product')}
                className="inline-flex items-center gap-2 text-[#1a73e8] font-medium hover:gap-3 transition-all"
              >
                <span>Read SDK documentation</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-xl bg-[#f8f9fa] group">
              <img
                src="/assets/images/feature-3.jpg"
                alt="Antigravity Python SDK evaluation"
                className="w-full h-auto object-cover group-hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>

        {/* Feature 4: Antigravity IDE (With Core Video) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden border border-black/[0.08] shadow-2xl bg-black aspect-video group">
              <video
                src="/assets/video/landing/an-ai-ide-core.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="lg:col-span-5 space-y-6 order-1 lg:order-2">
            <span className="text-xs font-semibold text-[#fbbc04] tracking-widest uppercase bg-[#fbbc04]/15 px-3 py-1 rounded-full">
              Full Standalone IDE
            </span>
            <h3 className="text-3xl md:text-4xl font-medium tracking-tight text-[#121317]">
              Antigravity IDE
            </h3>
            <p className="text-lg text-[#5f6368] leading-relaxed">
              The fully-featured, agentic IDE. Complete with the agent manager, artifacts, and a deep understanding of your codebase.
            </p>
            <div className="pt-2">
              <button
                onClick={() => onNavigate('/product')}
                className="btn-pill-primary"
              >
                <span>Explore Product</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INTERACTIVE USE CASE SLIDER */}
      <section className="py-24 bg-[#f8f9fa] border-y border-black/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs font-semibold text-[#1a73e8] tracking-widest uppercase">
                Workflows in Action
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#121317] mt-2">
                Built for developers for the agent-first era
              </h2>
            </div>
            <p className="text-base text-[#5f6368] max-w-md">
              Google Antigravity is built for user trust, whether you're working in a large enterprise codebase, a fullstack product, or frontend UX.
            </p>
          </div>

          {/* Interactive Slide Viewer */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Image & Video Trigger */}
            <div className="lg:col-span-8">
              <div
                onClick={() => setModalVideoUrl(useCases[activeUseCase].videoUrl)}
                className="relative rounded-3xl overflow-hidden border border-black/[0.08] shadow-xl aspect-[16/10] bg-black cursor-pointer group"
              >
                <img
                  src={useCases[activeUseCase].image}
                  alt={useCases[activeUseCase].title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-white">
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-wider text-white/80">
                      Use Case 0{activeUseCase + 1}
                    </span>
                    <h4 className="text-2xl font-medium mt-1">
                      {useCases[activeUseCase].title}
                    </h4>
                  </div>
                  <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 py-2 rounded-full border border-white/30 text-sm font-medium">
                    <Play className="w-4 h-4 fill-white" />
                    <span>Watch case</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Slider Copy & Controls */}
            <div className="lg:col-span-4 space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-medium text-[#121317]">
                  {useCases[activeUseCase].title}
                </h3>
                <p className="text-base text-[#5f6368] leading-relaxed">
                  {useCases[activeUseCase].desc}
                </p>
                <button
                  onClick={() => onNavigate(useCases[activeUseCase].link)}
                  className="inline-flex items-center gap-2 text-[#1a73e8] font-medium hover:underline pt-2"
                >
                  <span>View detailed case</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center gap-3 pt-6 border-t border-black/[0.08]">
                <button
                  onClick={() => setActiveUseCase((prev) => (prev > 0 ? prev - 1 : useCases.length - 1))}
                  className="w-11 h-11 rounded-full bg-white border border-black/[0.1] flex items-center justify-center hover:bg-[#f1f3f4] transition-colors shadow-xs"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5 text-[#121317]" />
                </button>
                <button
                  onClick={() => setActiveUseCase((prev) => (prev < useCases.length - 1 ? prev + 1 : 0))}
                  className="w-11 h-11 rounded-full bg-white border border-black/[0.1] flex items-center justify-center hover:bg-[#f1f3f4] transition-colors shadow-xs"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5 text-[#121317]" />
                </button>
                <span className="text-xs text-[#80868b] font-medium ml-2">
                  0{activeUseCase + 1} / 0{useCases.length}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DUAL SOLUTIONS TIER */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1: For Developers */}
          <div className="relative rounded-3xl p-10 md:p-14 bg-[#f8f9fa] border border-black/[0.08] shadow-sm overflow-hidden flex flex-col justify-between min-h-[380px] group">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#00b95c] bg-[#00b95c]/10 px-3 py-1 rounded-full">
                Available at no charge
              </span>
              <h3 className="text-3xl font-medium text-[#121317]">
                For developers
              </h3>
              <p className="text-lg text-[#5f6368] max-w-sm">
                Achieve new heights with Antigravity 2.0, CLI, and custom agents on your local machine.
              </p>
            </div>
            <div className="relative z-10 pt-8">
              <button
                onClick={() => onNavigate('/download')}
                className="btn-pill-primary"
              >
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Card 2: For Organizations */}
          <div className="relative rounded-3xl p-10 md:p-14 bg-[#121317] text-white border border-black/[0.12] shadow-xl overflow-hidden flex flex-col justify-between min-h-[380px] group">
            <div className="relative z-10 space-y-4">
              <span className="text-xs font-semibold uppercase tracking-wider text-[#749bff] bg-[#749bff]/15 px-3 py-1 rounded-full">
                Now Available!
              </span>
              <h3 className="text-3xl font-medium text-white">
                For organizations
              </h3>
              <p className="text-lg text-[#9aa0a6] max-w-sm">
                Level up your entire team with Gemini Enterprise controls, VPC isolation, and shared agent swarms.
              </p>
            </div>
            <div className="relative z-10 pt-8">
              <button
                onClick={() => onNavigate('/use-cases')}
                className="btn-pill-dark-secondary"
              >
                <span>Read More</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. LATEST BLOGS CAROUSEL */}
      <section className="py-24 bg-[#f8f9fa] border-t border-black/[0.06]">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-medium tracking-tight text-[#121317]">
                Latest Blogs
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={() => onNavigate('/blog')}
                className="btn-pill-secondary text-sm mr-2 hidden sm:inline-flex"
              >
                <span>View blog</span>
              </button>
              <button
                onClick={() => setBlogScrollIdx((prev) => Math.max(prev - 1, 0))}
                disabled={blogScrollIdx === 0}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.1] flex items-center justify-center hover:bg-[#f1f3f4] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous blogs"
              >
                <ChevronLeft className="w-5 h-5 text-[#121317]" />
              </button>
              <button
                onClick={() => setBlogScrollIdx((prev) => Math.min(prev + 1, blogs.length - 3))}
                disabled={blogScrollIdx >= blogs.length - 3}
                className="w-10 h-10 rounded-full bg-white border border-black/[0.1] flex items-center justify-center hover:bg-[#f1f3f4] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next blogs"
              >
                <ChevronRight className="w-5 h-5 text-[#121317]" />
              </button>
            </div>
          </div>

          {/* Cards Row */}
          <div className="overflow-hidden">
            <motion.div
              animate={{ x: `-${blogScrollIdx * 340}px` }}
              transition={{ type: 'spring', stiffness: 220, damping: 28 }}
              className="flex gap-6"
            >
              {blogs.map((blog, idx) => (
                <div
                  key={idx}
                  onClick={() => onNavigate('/blog')}
                  className="w-[316px] shrink-0 bg-white rounded-2xl p-4 border border-black/[0.08] shadow-xs hover:shadow-md transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-square rounded-xl overflow-hidden bg-[#f1f3f4] mb-4">
                      <img
                        src={blog.img}
                        alt={blog.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1a73e8] bg-[#1a73e8]/10 px-2 py-0.5 rounded-full">
                      {blog.tag}
                    </span>
                    <h4 className="text-lg font-medium text-[#121317] mt-2 group-hover:text-[#1a73e8] transition-colors leading-snug">
                      {blog.title}
                    </h4>
                  </div>
                  <div className="mt-4 pt-3 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#80868b]">
                    <span>{blog.date}</span>
                    <span className="text-[#1a73e8] font-medium group-hover:translate-x-0.5 transition-transform">
                      Read blog →
                    </span>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* 8. DOWNLOAD LIFTOFF SECTION */}
      <section className="py-24 max-w-[1440px] mx-auto px-6 md:px-12">
        <div className="relative rounded-3xl bg-[#121317] text-white p-12 md:p-24 overflow-hidden shadow-2xl">
          {/* Dark Particle Ring Simulation */}
          <div className="absolute inset-0 pointer-events-none opacity-80">
            <ParticleRing theme="dark" density={220} />
          </div>

          <div className="relative z-10 max-w-2xl space-y-6">
            <span className="text-xs font-semibold tracking-widest uppercase text-[#749bff] bg-[#749bff]/15 px-3 py-1 rounded-full">
              Ready for lift off
            </span>
            <h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white leading-tight">
              Download Google Antigravity
            </h2>
            <p className="text-lg text-[#9aa0a6] leading-relaxed">
              Available now for macOS (Apple Silicon & Intel), Linux, and Windows. Build autonomous agentic workflows directly from your machine.
            </p>

            <div className="pt-6 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onNavigate('/download')}
                className="btn-pill-dark-primary shadow-lg"
              >
                <span>Download for Apple Silicon</span>
              </button>
              <button
                onClick={() => onNavigate('/download')}
                className="btn-pill-dark-secondary"
              >
                <span>Download for Intel</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* VIDEO MODAL DIALOG */}
      <AnimatePresence>
        {modalVideoUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-10 bg-black/80 backdrop-blur-md"
            onClick={() => setModalVideoUrl(null)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl aspect-video rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-black"
            >
              <button
                onClick={() => setModalVideoUrl(null)}
                className="absolute top-4 right-4 z-30 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md text-white flex items-center justify-center transition-colors"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
              <iframe
                src={modalVideoUrl}
                title="Google Antigravity Video"
                className="w-full h-full border-0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
