"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Database, CheckCircle2, ChevronDown, ChevronUp, ArrowRight, Table, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useScrollToTop } from "@/hooks/page";

const faqs = [
  {
    question: "Do we need to buy expensive Power BI Pro licenses?",
    answer: "No. For startups and small teams, we can set up Power BI Desktop (free) or share reports securely via PDF schedules and embedded sheets, avoiding ongoing licensing fees."
  },
  {
    question: "How long does it take to build a custom dashboard?",
    answer: "A standard setup unrolling from a clean spreadsheet or single database takes 2 to 3 weeks. Complex multi-endpoint systems take 4 to 6 weeks."
  },
  {
    question: "Where is our data stored? Is it safe?",
    answer: "Yes, 100% safe. The data resides securely inside your own local servers or cloud workspace. BizWise never hosts or owns your transaction history."
  }
];

export default function BIClient() {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  
  // Interactive Dashboard States
  const [timeframe, setTimeframe] = useState<"Q1" | "Q2" | "Q3">("Q1");
  const [industryFilter, setIndustryFilter] = useState<"Retail" | "FMCG">("Retail");
  const [simView, setSimView] = useState<"metrics" | "pipeline">("metrics");

  const data = {
    Q1: {
      Retail: { revenue: "Rs. 4.2M", margin: "24.5%", turnover: "4.2x", risk: "Low" },
      FMCG: { revenue: "Rs. 8.1M", margin: "14.2%", turnover: "8.6x", risk: "Medium" }
    },
    Q2: {
      Retail: { revenue: "Rs. 5.6M", margin: "26.1%", turnover: "4.8x", risk: "Low" },
      FMCG: { revenue: "Rs. 9.8M", margin: "13.9%", turnover: "9.2x", risk: "High" }
    },
    Q3: {
      Retail: { revenue: "Rs. 6.8M", margin: "27.8%", turnover: "5.1x", risk: "Low" },
      FMCG: { revenue: "Rs. 11.2M", margin: "14.5%", turnover: "9.9x", risk: "Low" }
    }
  };

  const selectedData = data[timeframe][industryFilter];

  const kpis = [
    { category: "Financial KPI", items: ["Gross Margin %", "Operating Expenses", "Net Profit Margin"] },
    { category: "Sales KPI", items: ["Customer Acquisition Cost", "Average Ticket Size", "Customer Lifetime Value"] },
    { category: "Operations KPI", items: ["Inventory Turnover Ratio", "Stockout Risk Index", "Lead Time to Deliver"] }
  ];

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10 bg-transparent">
      
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-6 text-left mb-16">
        <Link href="/services" className="inline-flex items-center gap-1 text-sm font-semibold text-[#4DA3FF] hover:underline mb-6">
          &larr; Back to Services Hub
        </Link>
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Visual Analytics
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Business Intelligence for Sri Lankan Startups
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Unify your separate retail sheets, billing tool printouts, and cash books. We construct custom, interactive Power BI reporting structures that provide your leadership team with single-source-of-truth operational visibility.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/schedule">
            <Button className="px-6 py-5 bg-[#007BFF] hover:bg-[#0054ad] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="bi_hero_consult">
              Schedule a Dashboard Consultation
            </Button>
          </Link>
        </motion.div>
      </section>

      {/* Simulated Interactive Power BI Dashboard Preview */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center md:text-left mb-8">
          <h2 className="text-2xl md:text-3xl font-extrabold flex items-center gap-2 justify-center md:justify-start">
            <Sparkles className="text-[#4DA3FF]" /> Live BI Dashboard Simulation
          </h2>
          <p className="text-sm text-white/60 mt-2">Filter and interact with the preview parameters below to observe real-time KPI updates.</p>
        </div>

        <div className="glass-panel rounded-3xl border border-white/10 overflow-hidden shadow-2xl">
          {/* Dashboard Controls */}
          <div className="bg-white/5 border-b border-white/10 p-4 flex flex-wrap justify-between items-center gap-4">
            <div className="flex flex-wrap gap-4">
              <div className="flex gap-2">
                <span className="text-xs font-semibold text-white/40 uppercase self-center mr-2">Timeframe</span>
                {(["Q1", "Q2", "Q3"] as const).map((q) => (
                  <button
                    key={q}
                    onClick={() => setTimeframe(q)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition ${
                      timeframe === q ? "bg-[#007BFF] text-white font-semibold" : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {q} 2026
                  </button>
                ))}
              </div>
              
              <div className="flex gap-2">
                <span className="text-xs font-semibold text-white/40 uppercase self-center mr-2">Sector</span>
                {(["Retail", "FMCG"] as const).map((ind) => (
                  <button
                    key={ind}
                    onClick={() => setIndustryFilter(ind)}
                    className={`text-xs px-3 py-1.5 rounded-lg transition ${
                      industryFilter === ind ? "bg-[#007BFF] text-white font-semibold" : "bg-white/5 text-white/60 hover:bg-white/10"
                    }`}
                  >
                    {ind}
                  </button>
                ))}
              </div>
            </div>

            {/* View Selector Toggle */}
            <div className="flex gap-2 border-t md:border-t-0 md:border-l border-white/10 pt-3 md:pt-0 md:pl-4">
              <span className="text-xs font-semibold text-white/40 uppercase self-center mr-2">Visual View</span>
              <button
                onClick={() => setSimView("metrics")}
                className={`text-xs px-3 py-1.5 rounded-lg transition ${
                  simView === "metrics" ? "bg-[#007BFF] text-white font-semibold" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                Metrics Dashboard
              </button>
              <button
                onClick={() => setSimView("pipeline")}
                className={`text-xs px-3 py-1.5 rounded-lg transition ${
                  simView === "pipeline" ? "bg-[#007BFF] text-white font-semibold" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                Data Pipeline Flow
              </button>
            </div>
          </div>

          {/* Conditional Dashboard Display */}
          <AnimatePresence mode="wait">
            {simView === "metrics" ? (
              <motion.div 
                key="metrics"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-8 grid grid-cols-2 md:grid-cols-4 gap-6 bg-slate-900/10"
              >
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                  <span className="text-xs text-white/40 font-semibold uppercase">Total Revenue</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-[#4DA3FF] mt-2 block">{selectedData.revenue}</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                  <span className="text-xs text-white/40 font-semibold uppercase">Gross Margin</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-emerald-400 mt-2 block">{selectedData.margin}</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                  <span className="text-xs text-white/40 font-semibold uppercase">Inventory Turn</span>
                  <span className="text-2xl md:text-3xl font-extrabold text-cyan-400 mt-2 block">{selectedData.turnover}</span>
                </div>
                <div className="bg-white/5 rounded-2xl p-6 border border-white/5 flex flex-col justify-between">
                  <span className="text-xs text-white/40 font-semibold uppercase">Stockout Risk</span>
                  <span className={`text-2xl md:text-3xl font-extrabold mt-2 block ${
                    selectedData.risk === "Low" ? "text-emerald-400" : selectedData.risk === "Medium" ? "text-amber-400" : "text-rose-400 animate-pulse"
                  }`}>{selectedData.risk}</span>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="pipeline"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-8 bg-slate-900/10 flex flex-col md:flex-row items-center justify-between gap-8 min-h-[300px]"
              >
                {/* Left Column: Data Sources */}
                <div className="flex flex-col gap-4 w-full md:w-auto">
                  <span className="text-[10px] text-white/40 font-semibold uppercase block mb-1 font-mono">Raw Ingestion Sources</span>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 w-64">
                    <Database size={18} className="text-[#00c8ff]" />
                    <div>
                      <span className="text-xs font-bold block">PostgreSQL Production</span>
                      <span className="text-[10px] text-white/40 block">Daily Transaction SQL</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 w-64">
                    <Database size={18} className="text-emerald-400" />
                    <div>
                      <span className="text-xs font-bold block">Stripe Payment Gateway</span>
                      <span className="text-[10px] text-white/40 block">Invoice Webhooks API</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 flex items-center gap-3 w-64">
                    <Database size={18} className="text-[#4DA3FF]" />
                    <div>
                      <span className="text-xs font-bold block">Excel Sales Logs</span>
                      <span className="text-[10px] text-white/40 block">Manual Cashbook Ledger</span>
                    </div>
                  </div>
                </div>

                {/* Middle Column: SVG Animated Pipeline paths */}
                <div className="hidden md:block flex-1 max-w-[200px] h-32 relative">
                  <svg className="w-full h-full" viewBox="0 0 200 120" fill="none">
                    {/* PostgreSQL to ETL */}
                    <path d="M 0,20 Q 100,20 100,60" stroke="rgba(0, 188, 255, 0.2)" strokeWidth="2" />
                    <path d="M 0,20 Q 100,20 100,60" stroke="#00c8ff" strokeWidth="2" strokeDasharray="6 20" strokeDashoffset="0" className="animate-[marquee_5s_linear_infinite]" />
                    
                    {/* Stripe to ETL */}
                    <path d="M 0,60 H 100" stroke="rgba(16, 185, 129, 0.2)" strokeWidth="2" />
                    <path d="M 0,60 H 100" stroke="#10b981" strokeWidth="2" strokeDasharray="6 20" strokeDashoffset="0" className="animate-[marquee_5s_linear_infinite]" />
                    
                    {/* Excel to ETL */}
                    <path d="M 0,100 Q 100,100 100,60" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2" />
                    <path d="M 0,100 Q 100,100 100,60" stroke="#3b82f6" strokeWidth="2" strokeDasharray="6 20" strokeDashoffset="0" className="animate-[marquee_5s_linear_infinite]" />

                    {/* ETL to Target */}
                    <path d="M 100,60 H 200" stroke="rgba(0, 188, 255, 0.2)" strokeWidth="2" />
                    <path d="M 100,60 H 200" stroke="#00c8ff" strokeWidth="2" strokeDasharray="6 20" strokeDashoffset="0" className="animate-[marquee_5s_linear_infinite]" />
                  </svg>
                </div>

                {/* Central Processing Node */}
                <div className="bg-gradient-to-br from-[#007BFF]/10 to-[#00c8ff]/10 border border-[#007BFF]/40 rounded-3xl p-6 text-center max-w-[180px] shrink-0">
                  <RefreshCw size={28} className="text-[#4DA3FF] mx-auto mb-3 animate-spin [animation-duration:6s]" />
                  <span className="text-xs font-bold text-white block">BizWise ETL Parser</span>
                  <span className="text-[10px] text-white/50 block mt-1">Star Schema Normalizer</span>
                </div>

                {/* Target Data Model */}
                <div className="bg-white/5 border border-white/10 rounded-2xl p-5 w-64">
                  <span className="text-[10px] text-white/40 font-semibold uppercase block mb-3 font-mono">Normalized Star Model</span>
                  <div className="space-y-2">
                    <div className="flex justify-between text-[10px] font-mono text-white/70">
                      <span>Dim_Location</span>
                      <span className="text-emerald-400 font-bold">READY</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-white/70">
                      <span>Dim_Product</span>
                      <span className="text-emerald-400 font-bold">READY</span>
                    </div>
                    <div className="flex justify-between text-[10px] font-mono text-white/70">
                      <span>Fact_Sales</span>
                      <span className="text-emerald-400 font-bold">READY</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Target Audience & Stacks */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Table className="text-[#4DA3FF]" /> Who This Service Is For
          </h2>
          <p className="text-sm text-white/70 leading-relaxed mb-6">
            Built directly for founders, operations coordinators, and sales managers who find themselves stuck spending several hours compiling different reports.
          </p>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#4DA3FF]" />
              <span>Retail chains looking to sync multi-branch transaction databases.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#4DA3FF]" />
              <span>E-commerce brands seeking direct cost-per-acquisition metrics.</span>
            </li>
            <li className="flex items-center gap-2">
              <CheckCircle2 size={16} className="text-[#4DA3FF]" />
              <span>Finance directors building unified cash flow reports.</span>
            </li>
          </ul>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Database className="text-[#4DA3FF]" /> System Data Inputs
          </h2>
          <p className="text-sm text-white/70 leading-relaxed mb-6">
            We pull and transform your raw files safely. No matter where your transactions are recorded, we map them cleanly:
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="font-bold text-sm block mb-1">Spreadsheets</span>
              <span className="text-xs text-white/40">Excel files, CSV sheets, Google sheets.</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="font-bold text-sm block mb-1">Databases</span>
              <span className="text-xs text-white/40">Postgres, MySQL, SQL Server endpoints.</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="font-bold text-sm block mb-1">Billing Systems</span>
              <span className="text-xs text-white/40">Koko, Quickbooks, Stripe ledgers.</span>
            </div>
            <div className="p-4 bg-white/5 rounded-xl border border-white/5">
              <span className="font-bold text-sm block mb-1">Custom APIs</span>
              <span className="text-xs text-white/40">Inventory APIs, CRM profiles, social dashboards.</span>
            </div>
          </div>
        </div>
      </section>

      {/* KPI categories and reporting outcomes */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10 text-center">Core Reporting KPI Categories</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-3xl border border-white/10">
              <h3 className="text-xl font-bold mb-4 text-[#4DA3FF]">{kpi.category}</h3>
              <ul className="space-y-3.5 text-sm text-white/70">
                {kpi.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#4DA3FF] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-8 text-center">Business Intelligence FAQs</h2>
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
            Get Your Power BI Roadmap
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Book a complimentary dashboard review. We will map your current spreadsheet structures and outline a complete visual configuration blueprint.
          </p>
          <Link href="/schedule">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#0054ad] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="bi_bottom_consult">
              Schedule Your Free Setup Audit
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/40">
            <Link href="/services/sales-forecasting" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Sales Forecasting Service <ArrowRight size={14} />
            </Link>
            <Link href="/insights/power-bi-vs-excel-what-sri-lankan-smes-should-use" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Compare Power BI vs Excel <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
