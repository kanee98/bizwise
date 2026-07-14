"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, ShoppingBag, Truck, ClipboardList, Database, Sparkles, ChevronDown, ChevronUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollToTop } from "@/hooks/page";

const faqs = [
  {
    question: "What machine learning models do you use for sales forecasting?",
    answer: "We primarily utilize time-series forecasting frameworks like Meta's Prophet, SARIMAX, and gradient-boosted trees (XGBoost) configured to identify seasonal purchasing spikes."
  },
  {
    question: "How much sales data is required to get accurate forecasts?",
    answer: "Ideally, at least 12 to 24 months of weekly or monthly transaction records are needed to properly train models on seasonal holidays like Avurudu, Christmas, and Wesak."
  },
  {
    question: "Can forecasting connect with our local POS systems?",
    answer: "Yes. We set up automated export scripts that pull transactions from your Point of Sale (POS) system on a weekly basis, feeding them directly into our modeling pipeline."
  }
];

export default function SalesForecastingClient() {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);

  const useCases = [
    {
      title: "Retail & E-commerce Spikes",
      desc: "Forecast clothing styles and sizes to optimize garment production, ensuring you have enough inventory for Sinhala & Tamil New Year and Ramazan shopping seasons.",
      icon: ShoppingBag,
      tag: "Fashion / Apparel"
    },
    {
      title: "FMCG Perishables & Distribution",
      desc: "Predict weekly demand patterns for dairy, produce, and packed goods to arrange lean distribution runs, reducing write-offs from expired products.",
      icon: Truck,
      tag: "FMCG Brands"
    },
    {
      title: "Inventory & Reorder Planning",
      desc: "Automate calculation of safety stock thresholds. Our system flags when stock levels are running low relative to forecasted run-rates, prompting reorders.",
      icon: ClipboardList,
      tag: "Warehouse / Logistics"
    }
  ];

  const infoBlocks = [
    {
      title: "Forecasting Scope",
      desc: "We build item-level, category-level, and outlet-specific weekly and monthly demand forecasts tailored to your supply constraints.",
      icon: Database
    },
    {
      title: "Data Sources Used",
      desc: "We ingest sales logs, local holiday calendars, price promotions, competitor events, and macroeconomic trends to refine model weights.",
      icon: TrendingUp
    },
    {
      title: "Measurable Business Value",
      desc: "SMEs deploying our forecasting models report up to 30% lower inventory holding costs and 15% fewer lost sales due to stockouts.",
      icon: Sparkles
    }
  ];

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10">
      
      {/* Hero / Header */}
      <section className="max-w-6xl mx-auto px-6 text-left mb-16">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#4DA3FF] hover:underline mb-6">
          ← Back to Services Hub
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Predictive Analytics
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sales Forecasting & Predictive Analytics Sri Lanka
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Optimize inventory investment, predict seasonal demand shifts, and eliminate expensive warehouse overstocks. We build lightweight machine learning pipelines that process your POS logs and forecast future run-rates.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/schedule">
            <Button className="px-6 py-5 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="forecasting_hero_consult">
              Request a Forecasting Review
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Scope, Sources & Value */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-8">
        {infoBlocks.map((blk, idx) => {
          const Icon = blk.icon;
          return (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl w-fit mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3">{blk.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed mb-6">{blk.desc}</p>
              </div>
              <div className="text-xs text-white/40 uppercase font-semibold">
                Core Capability
              </div>
            </div>
          );
        })}
      </section>

      {/* Industry Use Cases */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">Example Retail & FMCG Use Cases</h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Practical predictive modeling applications built directly for the unique constraints of Sri Lankan supply chains.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {useCases.map((uc, idx) => {
            const Icon = uc.icon;
            return (
              <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-[#4DA3FF]/30 transition-all duration-300">
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3.5 bg-blue-500/10 text-[#4DA3FF] rounded-2xl">
                      <Icon size={24} />
                    </div>
                    <span className="text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 bg-white/5 border border-white/10 rounded-full text-white/60">
                      {uc.tag}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold mb-3">{uc.title}</h3>
                  <p className="text-xs text-white/60 leading-relaxed mb-6">{uc.desc}</p>
                </div>
                <div className="text-xs font-semibold text-[#4DA3FF] flex items-center gap-1">
                  Value: Reduced Stockouts & Capital Lockup
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">Sales Forecasting FAQs</h2>
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
            Schedule a Forecasting Review
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Book a complimentary 30-minute demand analysis call. We&apos;ll outline how your historical spreadsheets can be processed by machine learning.
          </p>
          <Link href="/schedule">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="forecasting_bottom_consult">
              Request Your Free Review
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/40">
            <Link href="/services/business-intelligence" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Business Intelligence Service <ArrowRight size={14} />
            </Link>
            <Link href="/insights/how-much-does-sales-forecasting-cost-for-a-sri-lankan-sme" className="hover:text-white flex items-center gap-1 font-semibold transition">
              View Forecasting Project Costs <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
