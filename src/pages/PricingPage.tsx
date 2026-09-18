import React, { useState } from 'react';
import { Check, Sparkles, Building, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface PricingPageProps {
  onNavigate: (path: string) => void;
}

export const PricingPage: React.FC<PricingPageProps> = ({ onNavigate }) => {
  const [billingInterval, setBillingInterval] = useState<'monthly' | 'annual'>('annual');

  const tiers = [
    {
      name: 'For Individuals',
      price: '$0',
      period: '/ month',
      badge: 'Free Forever',
      desc: 'Experience Antigravity without a subscription plan. Build, run, and automate right on your local machine.',
      features: [
        'Antigravity 2.0 local desktop manager',
        'Antigravity CLI for terminal development',
        'Direct local shell execution with HITL safety',
        'Basic Gemini model inference quota',
        'Community Discord & GitHub support',
      ],
      cta: 'Download Free',
      popular: false,
    },
    {
      name: 'Google AI Pro',
      price: billingInterval === 'annual' ? '$18' : '$20',
      period: '/ month',
      badge: 'Most Popular',
      desc: 'See how it is like to build, work, and automate with agents as your daily software engineering partner.',
      features: [
        'Everything in Individual, plus:',
        'Gemini 3.8 Flash priority model inference',
        'Up to 4 concurrent background subagents',
        'Artifact persistence & session memory handoffs',
        'Chrome DevTools MCP browser debugging',
        'Automatic token compaction and headroom defense',
      ],
      cta: 'Start Pro Trial',
      popular: true,
    },
    {
      name: 'Google AI Ultra',
      price: billingInterval === 'annual' ? '$36' : '$40',
      period: '/ month',
      badge: 'Power Engineers',
      desc: 'Leverage Antigravity as your daily driver with higher access to our latest flagship Gemini models.',
      features: [
        'Everything in Pro, plus:',
        'Highest priority queue for Gemini 3.8 Pro & Thinking',
        'Unlimited parallel background subagent swarms',
        'Multimodal Live Audio/Video real-time interaction',
        'Custom MCP server integrations & sidecars',
        'Dedicated 1-on-1 engineer Slack channel',
      ],
      cta: 'Upgrade to Ultra',
      popular: false,
    },
  ];

  return (
    <div className="pt-32 pb-24 bg-white min-h-screen">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="text-xs font-semibold text-[#1a73e8] tracking-widest uppercase bg-[#1a73e8]/10 px-3 py-1 rounded-full">
            Transparent Pricing
          </span>
          <h1 className="text-4xl md:text-5xl font-medium tracking-tight text-[#121317] mt-3">
            Choose the perfect plan for your development needs
          </h1>
          <p className="text-lg text-[#5f6368] mt-4 leading-relaxed">
            Zero surprise fees. Start free on your local ThinkPad, upgrade when you need massive multi-agent scaling.
          </p>

          {/* Billing Switcher */}
          <div className="mt-8 inline-flex items-center gap-2 p-1.5 bg-[#f8f9fa] border border-black/[0.08] rounded-full">
            <button
              onClick={() => setBillingInterval('monthly')}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all ${
                billingInterval === 'monthly'
                  ? 'bg-white text-[#121317] shadow-xs'
                  : 'text-[#5f6368] hover:text-[#121317]'
              }`}
            >
              Monthly billing
            </button>
            <button
              onClick={() => setBillingInterval('annual')}
              className={`px-5 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                billingInterval === 'annual'
                  ? 'bg-white text-[#121317] shadow-xs'
                  : 'text-[#5f6368] hover:text-[#121317]'
              }`}
            >
              <span>Annual billing</span>
              <span className="text-[10px] bg-[#00b95c]/10 text-[#00b95c] font-semibold px-2 py-0.5 rounded-full">
                Save 10%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {tiers.map((tier, idx) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.4 }}
              className={`relative rounded-3xl p-8 flex flex-col justify-between border transition-all ${
                tier.popular
                  ? 'border-[#1a73e8] bg-[#f8f9fa] shadow-xl ring-1 ring-[#1a73e8]'
                  : 'border-black/[0.08] bg-white shadow-sm hover:shadow-md'
              }`}
            >
              {tier.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#1a73e8] text-white text-xs font-semibold px-3.5 py-1 rounded-full shadow-sm">
                  {tier.badge}
                </div>
              )}

              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-medium text-[#121317]">{tier.name}</h3>
                  {!tier.popular && (
                    <span className="text-xs text-[#80868b] bg-[#f1f3f4] px-2.5 py-0.5 rounded-full">
                      {tier.badge}
                    </span>
                  )}
                </div>

                <div className="flex items-baseline gap-1 my-4">
                  <span className="text-4xl font-semibold tracking-tight text-[#121317]">
                    {tier.price}
                  </span>
                  <span className="text-sm text-[#5f6368]">{tier.period}</span>
                </div>

                <p className="text-sm text-[#5f6368] leading-relaxed mb-6">
                  {tier.desc}
                </p>

                <div className="space-y-3 pt-4 border-t border-black/[0.06]">
                  {tier.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm text-[#3c4043]">
                      <Check className="w-4 h-4 text-[#00b95c] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8">
                <button
                  onClick={() => onNavigate('/download')}
                  className={`w-full py-3 rounded-full font-medium text-sm transition-all ${
                    tier.popular
                      ? 'bg-[#1a73e8] text-white hover:bg-[#1557b0] shadow-md'
                      : 'bg-[#f1f3f4] text-[#121317] hover:bg-[#e8eaed]'
                  }`}
                >
                  {tier.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Enterprise Organization Banner */}
        <div className="rounded-3xl bg-[#121317] text-white p-10 md:p-14 border border-black/[0.1] shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-semibold text-[#749bff] uppercase tracking-wider">
              <Building className="w-4 h-4" />
              <span>Google Cloud Organization Plan</span>
            </div>
            <h3 className="text-3xl font-medium text-white">
              Organization plan via Google Cloud
            </h3>
            <p className="text-base text-[#9aa0a6] leading-relaxed">
              Google Cloud customers can now access Antigravity 2.0 and CLI with consolidated billing, Direct VPC egress isolation, and centralized IAM administrator policies.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-4">
            <button
              onClick={() => onNavigate('/use-cases')}
              className="btn-pill-dark-primary text-sm px-6 py-3"
            >
              <span>Contact Google Cloud Sales</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
