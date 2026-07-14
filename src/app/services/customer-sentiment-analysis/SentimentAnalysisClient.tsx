"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Share2, Clipboard, ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollToTop } from "@/hooks/page";

const faqs = [
  {
    question: "Can your sentiment model read Sinhala, Tamil, and Singlish text?",
    answer: "Yes. Our natural language processing pipelines are trained to process and categorize Sinhala, Tamil, and local colloquial mix text (Singlish) commonly found in Sri Lankan social media comments."
  },
  {
    question: "How long does a customer sentiment project take to configure?",
    answer: "A standard setup parsing existing Google Maps reviews and Typeform surveys is delivered as a functioning dashboard in 2 to 3 weeks."
  },
  {
    question: "Do you offer real-time sentiment alerts?",
    answer: "Yes. We can construct Slack, WhatsApp, or email webhooks that automatically flag negative reviews or high-priority complaints to your management team instantly."
  }
];

export default function SentimentAnalysisClient() {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const sources = [
    {
      title: "Online Reviews",
      desc: "Compile Google Maps business listings, Trustpilot scores, and TripAdvisor travel reviews automatically.",
      icon: Star
    },
    {
      title: "Social Media Feeds",
      desc: "Extract raw comments from Facebook posts, Instagram feeds, and public brand mentions.",
      icon: Share2
    },
    {
      title: "Surveys & Feedback Logs",
      desc: "Ingest Typeform surveys, WhatsApp conversation transcripts, and support ticketing feedback sheets.",
      icon: Clipboard
    }
  ];

  const insights = [
    "Topic-wise classification (e.g., pricing, staff behavior, shipping lag-time).",
    "Overall brand health tracking (ratio of positive to negative feedback).",
    "Net Promoter Score (NPS) estimation matched with verbatim customer issues.",
    "Real-time alerts flagging severe issues directly to department heads."
  ];

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10">
      
      {/* Hero / Value Prop Section */}
      <section className="max-w-4xl mx-auto px-6 text-left mb-16">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#4DA3FF] hover:underline mb-6">
          ← Back to Services Hub
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Natural Language Processing
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Customer Sentiment Analysis Sri Lanka
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Understand what your customers really think. We leverage AI-driven Natural Language Processing to consolidate, clean, and map thousands of reviews, survey answers, and social feedback logs into actionable dashboard charts.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/contact">
            <Button className="px-6 py-5 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="sentiment_hero_consult">
              Request a Feedback Analysis Demo
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Feedback Data Sources */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10">Feedback Sources We Ingest</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {sources.map((src, idx) => {
            const Icon = src.icon;
            return (
              <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="p-3.5 bg-blue-500/10 text-[#4DA3FF] rounded-2xl w-fit mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{src.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{src.desc}</p>
                </div>
                <div className="text-xs text-white/40 uppercase font-semibold">
                  Supported Channel
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Expected Business Insights */}
      <section className="bg-white/[0.02] border-y border-white/5 py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center md:text-left">What Insights Can Your Business Expect?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {insights.map((ins, i) => (
              <div key={i} className="flex gap-3 items-start">
                <CheckCircle2 size={20} className="text-[#4DA3FF] shrink-0 mt-0.5" />
                <p className="text-sm text-white/70 leading-relaxed">{ins}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">Sentiment Analysis FAQs</h2>
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
            Get Your Feedback Dashboard Demo
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Book a discovery call. We will show you how raw reviews are structured, and deploy a test dashboard with your own brand&apos;s recent comments.
          </p>
          <Link href="/contact">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="sentiment_bottom_consult">
              Book a Feedback Analysis Demo
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/40">
            <Link href="/services/ai-consulting-sme" className="hover:text-white flex items-center gap-1 font-semibold transition">
              AI Consulting SME Service <ArrowRight size={14} />
            </Link>
            <Link href="/insights/customer-sentiment-analysis-a-practical-guide-for-sl-retailers" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Read Customer Sentiment Guide <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
