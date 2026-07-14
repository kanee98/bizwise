"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User, ChevronDown, ChevronUp, BookOpen } from "lucide-react";
import { useScrollToTop } from "@/hooks/page";

interface ArticleFaq {
  question: string;
  answer: string;
}

interface RelatedLink {
  label: string;
  href: string;
}

interface ArticleTemplateProps {
  category: string;
  h1: string;
  readTime: string;
  date: string;
  author: string;
  children: React.ReactNode;
  faqs: ArticleFaq[];
  ctaText?: string;
  ctaHref?: string;
  relatedLinks: RelatedLink[];
  trackingLabel: string;
}

export default function ArticleTemplate({
  category,
  h1,
  readTime,
  date,
  author,
  children,
  faqs,
  ctaText = "Discuss Your Project",
  ctaHref = "/schedule",
  relatedLinks,
  trackingLabel
}: ArticleTemplateProps) {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10">
      
      {/* Article Header */}
      <section className="max-w-4xl mx-auto px-6 text-left mb-10">
        <Link href="/insights" className="inline-flex items-center gap-1 text-sm font-semibold text-[#4DA3FF] hover:underline mb-6">
          ← Back to Insights Hub
        </Link>
        <div className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3">
          Insights / {category}
        </div>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-tight tracking-tight mb-6">
          {h1}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-xs text-white/40 border-y border-white/5 py-4">
          <span className="flex items-center gap-1"><User size={14} /> By {author}</span>
          <span className="flex items-center gap-1"><Calendar size={14} /> {date}</span>
          <span className="flex items-center gap-1"><Clock size={14} /> {readTime}</span>
        </div>
      </section>

      {/* Article Body Content */}
      <section className="max-w-4xl mx-auto px-6 mb-16 leading-relaxed text-white/80 text-base space-y-6">
        {children}
      </section>

      {/* Article FAQs Section */}
      {faqs.length > 0 && (
        <section className="max-w-3xl mx-auto px-6 py-12 border-t border-white/5">
          <h2 className="text-xl md:text-2xl font-bold mb-6 text-center">Article FAQs</h2>
          <div className="space-y-4">
            {faqs.map(({ question, answer }, idx) => {
              const isOpen = faqOpenIndex === idx;
              return (
                <div key={idx} className="glass-panel rounded-xl p-5 cursor-pointer" onClick={() => setFaqOpenIndex(isOpen ? null : idx)}>
                  <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-sm md:text-base">{question}</h3>
                    {isOpen ? <ChevronUp size={16} className="text-[#4DA3FF]" /> : <ChevronDown size={16} />}
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
                        <p className="mt-3 text-xs md:text-sm text-white/60 leading-relaxed">{answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Related Navigation Links */}
      <section className="max-w-3xl mx-auto px-6 py-12 border-t border-white/5">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <BookOpen size={18} className="text-[#4DA3FF]" /> Continue Reading
        </h3>
        <div className="flex flex-wrap gap-4">
          {relatedLinks.map((link, idx) => (
            <Link
              key={idx}
              href={link.href}
              className="text-xs md:text-sm font-semibold bg-white/5 border border-white/10 hover:border-[#4DA3FF]/30 px-4 py-2.5 rounded-xl transition flex items-center gap-1"
            >
              <span>{link.label}</span>
              <ArrowRight size={12} />
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-20 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight">
            Apply These Insights Today
          </h3>
          <p className="text-white/70 text-sm md:text-base mb-8 max-w-xl mx-auto">
            Book a discovery call to discuss how to apply these strategies specifically to your operations.
          </p>
          <Link href={ctaHref}>
            <Button className="text-base px-8 py-5 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta={trackingLabel}>
              {ctaText}
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
