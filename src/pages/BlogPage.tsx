import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, ArrowRight, Tag, Calendar } from 'lucide-react';

interface BlogPageProps {
  onNavigate: (path: string) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const articles = [
    {
      id: 'gemini-3-8-flash',
      title: 'Gemini 3.8 Flash in Google Antigravity',
      desc: 'Introducing our fastest and most capable lightweight frontier model for sub-second tool calls and subagent workflows.',
      date: 'Sep 1, 2026',
      category: 'Model',
      img: '/assets/images/3.8-Flash---Square.png',
      readTime: '4 min read',
    },
    {
      id: 'teamwork',
      title: 'Teamwork: When AI Becomes a Research Partner',
      desc: 'How multi-agent debate protocols transform solo developers into full-stack engineering organizations.',
      date: 'Aug 27, 2026',
      category: 'Research',
      img: '/assets/images/teamwork-square.jpg',
      readTime: '7 min read',
    },
    {
      id: 'visualizing',
      title: 'Visualizing with the help of Antigravity',
      desc: 'Reconstructing pixel-accurate web applications from video captures and screenshots with automated spatial telemetry.',
      date: 'Aug 26, 2026',
      category: 'Product',
      img: '/assets/images/visualizing-with-antigravity-square.png',
      readTime: '5 min read',
    },
    {
      id: 'vcs-and-terminal',
      title: 'Improving the Version Control Experience',
      desc: 'Surgical multi-agent git worktrees: running multiple agent branches concurrently without merge collisions.',
      date: 'Aug 24, 2026',
      category: 'Product',
      img: '/assets/images/VSC-Blog-1x1.png',
      readTime: '6 min read',
    },
    {
      id: 'remote-control',
      title: 'Antigravity Anywhere with Remote Control',
      desc: 'Dispatch coding sessions to your home server from your phone via Telegram bot agents with local CLI access.',
      date: 'Aug 21, 2026',
      category: 'Product',
      img: '/assets/images/remote-control-square.png',
      readTime: '5 min read',
    },
    {
      id: 'enterprise-workflows',
      title: 'Bringing Antigravity to Gemini Enterprise',
      desc: 'Sovereign agentic workflows for every developer: private VPC perimeters and centralized role-based audits.',
      date: 'Aug 20, 2026',
      category: 'Enterprise',
      img: '/assets/images/AGY-Enterprise---Square.png',
      readTime: '8 min read',
    },
    {
      id: 'ide-extensions',
      title: 'Introducing IDE Extensions for VS Code & JetBrains',
      desc: 'Bring Antigravity’s autonomous agent manager directly into your daily editor of choice with official plugins.',
      date: 'Aug 20, 2026',
      category: 'Product',
      img: '/assets/images/IDE-Extensions-Square.png',
      readTime: '4 min read',
    },
    {
      id: 'gemini-3-7-flash',
      title: 'Gemini 3.7 Flash in Google Antigravity',
      desc: 'Benchmarks, architectural improvements, and multimodal coding performance in our previous model milestone.',
      date: 'Aug 13, 2026',
      category: 'Model',
      img: '/assets/images/3.7-Flash---Square.jpg',
      readTime: '6 min read',
    },
    {
      id: 'custom-agents',
      title: 'Introducing Custom Agents & Meta-Skills',
      desc: 'Define and orchestrate specialized agent personas with deterministic toolgroups, custom system prompts, and memory.',
      date: 'Aug 12, 2026',
      category: 'Product',
      img: '/assets/images/Custom_Agents_Blog_1x1.png',
      readTime: '5 min read',
    },
  ];

  const categories = ['All', 'Model', 'Product', 'Research', 'Enterprise'];

  const filteredArticles = articles.filter((art) => {
    const matchesCategory = selectedCategory === 'All' || art.category === selectedCategory;
    const matchesQuery = art.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      art.desc.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesQuery;
  });

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-semibold text-[#1a73e8] tracking-widest uppercase bg-[#1a73e8]/10 px-3 py-1 rounded-full">
            Engineering & News
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#121317] mt-3">
            Google Antigravity Blog
          </h1>
          <p className="text-lg text-[#5f6368] mt-4 leading-relaxed">
            Technical write-ups, model releases, and architectural insights from the team building the future of agentic coding.
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-8 mb-12 border-b border-black/[0.08]">
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === cat
                    ? 'bg-[#121317] text-white'
                    : 'bg-[#f8f9fa] text-[#5f6368] hover:text-[#121317]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-[#80868b] absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-full bg-[#f8f9fa] border border-black/[0.08] text-sm focus:outline-none focus:border-[#1a73e8]"
            />
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => (
            <motion.article
              key={art.id}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05, duration: 0.3 }}
              className="group bg-white rounded-3xl p-5 border border-black/[0.08] shadow-xs hover:shadow-xl transition-all cursor-pointer flex flex-col justify-between"
            >
              <div>
                <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-[#f1f3f4] mb-5">
                  <img
                    src={art.img}
                    alt={art.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#1a73e8] bg-[#1a73e8]/10 px-2.5 py-0.5 rounded-full">
                    {art.category}
                  </span>
                  <span className="text-xs text-[#80868b]">{art.readTime}</span>
                </div>

                <h3 className="text-xl font-medium text-[#121317] group-hover:text-[#1a73e8] transition-colors leading-snug mb-2">
                  {art.title}
                </h3>
                <p className="text-sm text-[#5f6368] leading-relaxed line-clamp-2">
                  {art.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#80868b]">
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{art.date}</span>
                </div>
                <span className="text-[#1a73e8] font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                  Read article <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
};
