"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Bot, FileText, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollToTop } from "@/hooks/page";

const faqs = [
  {
    question: "Do I need a big tech budget to implement AI?",
    answer: "No. We specifically focus on affordable open-source tools, API integrations (like OpenAI or Anthropic), and existing workflow systems that require minimal monthly subscription costs."
  },
  {
    question: "How long does a typical AI adoption roadmap take to deploy?",
    answer: "A standard roadmap and discovery phase takes 2 to 3 weeks. Actual chatbot or automation integrations are typically delivered in 4 to 8 weeks."
  },
  {
    question: "How do I know if my business is ready for AI?",
    answer: "If your team spends more than 5 hours a week doing repetitive typing, answering similar customer questions, or copy-pasting data, you are ready for automation."
  }
];

export default function AIConsultingClient() {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const useCases = [
    {
      title: "Smarter Customer Support",
      desc: "Deploy AI assistants that answer FAQs, collect leads, and integrate with WhatsApp and Facebook Messenger 24/7.",
      icon: Bot
    },
    {
      title: "Document & Invoice Processing",
      desc: "Extract text, key totals, and invoice items automatically from PDF receipts and populate your spreadsheets directly.",
      icon: FileText
    },
    {
      title: "Repetitive Task Automations",
      desc: "Set up automated webhooks and connectors (like Make or Zapier) to synchronize customer profiles between email and CRMs.",
      icon: Settings
    }
  ];

  const workflow = [
    {
      step: "01",
      title: "Discovery & Audit",
      desc: "We analyze your current operations, team schedules, and software systems to isolate immediate bottleneck workflows."
    },
    {
      step: "02",
      title: "Custom AI Blueprint",
      desc: "We deliver a detailed architectural roadmap mapping recommended APIs, tools, license costs, and estimated time-saved."
    },
    {
      step: "03",
      title: "Build & Integration",
      desc: "Our engineers configure standard connectors, build chatbot structures, train system prompts, and test data endpoints."
    },
    {
      step: "04",
      title: "Hand-off & Optimization",
      desc: "We train your operators, hand over clean documentation, and conduct monthly model tuning assessments to ensure high accuracy."
    }
  ];

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10">
      
      {/* Hero / Value Prop Section */}
      <section className="max-w-6xl mx-auto px-6 text-left mb-20">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#4DA3FF] hover:underline mb-6">
          ← Back to Services Hub
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Practical Innovation
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI Consulting for SMEs in Sri Lanka
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Scale your small business output using smart artificial intelligence. We bypass complex jargon to deliver practical strategy and secure automation builds, ensuring you save time without burning cash on expensive infrastructure.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/schedule">
            <Button className="px-6 py-5 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg shadow-blue-500/10" data-cta="ai_sme_hero_consult">
              Book Your AI Readiness Assessment
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Practical Use Cases */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10">High-Value AI Use Cases</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((uc, i) => {
            const Icon = uc.icon;
            return (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl w-fit mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{uc.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{uc.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-[#4DA3FF]">
                  Outcome: Time-saving integration
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process / Workflow */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-12">Our Delivery Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {workflow.map((wk, i) => (
            <div key={i} className="glass-panel p-6 rounded-2xl border border-white/10 relative">
              <span className="absolute top-4 right-4 text-4xl font-black text-white/5 font-mono select-none">{wk.step}</span>
              <h3 className="text-lg font-bold mb-2 pt-4 text-[#4DA3FF]">{wk.title}</h3>
              <p className="text-xs text-white/60 leading-relaxed">{wk.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Business Outcomes */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Concrete Business Outcomes</h2>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Up to 40% reduction in customer response lag-times.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Elimination of manual transcription and formatting errors.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-emerald-400 shrink-0" />
                <span>Secure compliance alignment with local SLA and DPA regulations.</span>
              </li>
            </ul>
          </div>
          <div className="p-8 glass-panel rounded-3xl shrink-0 text-center w-full md:w-64 border border-white/10">
            <span className="block text-4xl font-extrabold text-[#4DA3FF] mb-1">20h+</span>
            <span className="text-xs text-white/40 uppercase font-semibold">Saved Per Week</span>
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">AI Consulting FAQs</h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, idx) => {
            const isOpen = faqOpenIndex === idx;
            return (
              <div key={idx} className="glass-panel rounded-2xl p-5 cursor-pointer" onClick={() => setFaqOpenIndex(isOpen ? null : idx)}>
                <div className="flex justify-between items-center">
                  <h3 className="font-bold text-base md:text-lg">{question}</h3>
                  {isOpen ? <ChevronUp size={18} className="text-[#4DA3FF]" /> : <ChevronDown size={18} />}
                </div>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="mt-3 text-sm text-white/60 leading-relaxed">{answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA block */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Assess Your AI Readiness
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Book your assessment session. We&apos;ll identify manual processes, suggest tools, and provide a clear implementation roadmap.
          </p>
          <Link href="/schedule">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="ai_sme_bottom_consult">
              Schedule Your Assessment
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/40">
            <Link href="/services/business-intelligence" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Business Intelligence Service <ArrowRight size={14} />
            </Link>
            <Link href="/insights/ai-adoption-roadmap-for-a-10-person-sri-lankan-business" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Read AI Adoption Roadmap <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
