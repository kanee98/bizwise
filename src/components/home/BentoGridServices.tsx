"use client";

import React, { useEffect, useState } from "react";
import { Brain, BarChart3, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BentoGridServices() {
  const [typedMessage, setTypedMessage] = useState("");
  const fullMessage = "Yes! We can set up a unified Postgres data pipeline and map a forecasting model. This typically reduces stockouts by 30% to 40%.";
  
  // Simulated typing effect for AI Consulting card
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedMessage(fullMessage.substring(0, index + 1));
      index++;
      if (index >= fullMessage.length) {
        // Reset typing after a delay
        setTimeout(() => {
          index = 0;
        }, 5000);
      }
    }, 45);

    return () => clearInterval(interval);
  }, []);

  const sentimentReviews = [
    { text: "Fast delivery, highly recommend! - N. Perera", type: "positive" },
    { text: "Perfect fit for local apparel brand! - F. Rahim", type: "positive" },
    { text: "Power BI dashboards saved us 10+ hours. - A. Silva", type: "positive" },
    { text: "Incredible response rate from Danesh & Nilal - D. Wickrama", type: "positive" },
    { text: "Predictive forecasts are 90% accurate. - S. Jayasekara", type: "positive" }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-20 relative z-20">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-5xl font-extrabold text-gradient leading-tight">
          Our Advanced Capabilities
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-4 max-w-xl mx-auto">
          Explore the visual frameworks we build to guide Sri Lankan SMEs from raw files to automated intelligent operations.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Card 1: AI Consulting (Col span: 2) */}
        <div className="md:col-span-2 glow-border-moving rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:translate-y-[-2px] transition duration-300">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl">
                <Brain size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">AI Strategy Consulting for SMEs</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl mb-6">
              Formulate concrete AI roadmaps and custom chatbot automations. We focus strictly on open-source LLMs and internal data safety.
            </p>

            {/* Mock chat preview */}
            <div className="bg-[#0a1128]/50 border border-white/10 rounded-2xl p-4 font-sans text-xs space-y-3">
              <div className="flex gap-2.5">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-[10px] text-white/50 font-bold shrink-0">Client</div>
                <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none p-3 text-white/80 leading-relaxed max-w-xs">
                  We have 3 retail branches in Colombo. Can we sync data to predict stock needs?
                </div>
              </div>
              <div className="flex gap-2.5 justify-end">
                <div className="bg-[#007BFF]/15 border border-[#007BFF]/25 rounded-2xl rounded-tr-none p-3 text-[#4DA3FF] leading-relaxed max-w-sm">
                  {typedMessage}
                  <span className="w-1.5 h-3 bg-[#4DA3FF] inline-block ml-1 animate-pulse" />
                </div>
                <div className="w-6 h-6 rounded-full bg-[#007BFF]/20 flex items-center justify-center text-[10px] text-[#4DA3FF] font-bold shrink-0">BW</div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
            <Link href="/services/ai-consulting-sme" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DA3FF] hover:text-[#007BFF] transition group">
              Explore AI Strategy <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Card 2: Business Intelligence (Col span: 1) */}
        <div className="glow-border-moving rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:translate-y-[-2px] transition duration-300">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 text-[#00c8ff] rounded-2xl">
                <BarChart3 size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Business Intelligence</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Replace manual Excel work with Power BI sheets mapping inventory, cash levels, and checkout trends.
            </p>

            {/* SVG Animated Mini Chart */}
            <div className="bg-[#0a1128]/50 border border-white/10 rounded-2xl p-4 flex flex-col justify-between h-28 relative overflow-hidden">
              <span className="text-[10px] text-white/40 block font-mono">LIVE_MAR_REPORTS</span>
              <svg className="w-full h-12 mt-2" viewBox="0 0 100 20" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#007BFF" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#007BFF" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0,20 Q 25,12 50,15 T 100,5" fill="none" stroke="#00c8ff" strokeWidth="1.5" />
                <path d="M 0,20 Q 25,12 50,15 T 100,5 L 100,20 L 0,20 Z" fill="url(#chartGrad)" />
                {/* Moving dot */}
                <circle cx="100" cy="5" r="2.5" fill="#00c8ff" className="animate-pulse" />
              </svg>
              <div className="flex justify-between items-center text-[10px] text-emerald-400 font-mono mt-1">
                <span>REVENUE: Rs. 5.6M</span>
                <span>+26.1%</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
            <Link href="/services/business-intelligence" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DA3FF] hover:text-[#007BFF] transition group">
              Explore BI Setup <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Card 3: Sales Forecasting & Predictive Analytics (Col span: 1) */}
        <div className="glow-border-moving rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:translate-y-[-2px] transition duration-300">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 text-[#2563eb] rounded-2xl">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Sales Forecasting</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed mb-6">
              Implement historical models that compute regional demand and forecast future stock counts.
            </p>

            {/* Inventory progress meter preview */}
            <div className="bg-[#0a1128]/50 border border-white/10 rounded-2xl p-4 font-mono text-[10px] space-y-3.5">
              <div className="flex justify-between items-center text-white/50">
                <span>SKU: SOAP_BOX_COLOMBO</span>
                <span className="text-emerald-400 font-bold font-sans uppercase">Secure</span>
              </div>
              <div className="space-y-1.5">
                <div className="flex justify-between items-center">
                  <span>Current Inventory Level</span>
                  <span>220 units</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-[#007BFF] h-full rounded-full w-[70%]" />
                </div>
              </div>
              <div className="flex justify-between items-center text-white/30 border-t border-white/5 pt-2">
                <span>Safety Stock Target</span>
                <span>200 units</span>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
            <Link href="/services/sales-forecasting" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DA3FF] hover:text-[#007BFF] transition group">
              Explore Forecasting <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Card 4: Customer Sentiment NLP Analytics (Col span: 2) */}
        <div className="md:col-span-2 glow-border-moving rounded-3xl p-6 md:p-8 flex flex-col justify-between min-h-[340px] hover:translate-y-[-2px] transition duration-300">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-blue-500/10 text-[#0d9488] rounded-2xl">
                <MessageSquare size={24} />
              </div>
              <h3 className="text-xl font-bold text-white">Customer Sentiment NLP</h3>
            </div>
            <p className="text-sm text-white/70 leading-relaxed max-w-xl mb-6">
              Track customer reputation index scores in real time by scanning social reviews and feedback logs using smart sentiment NLP classifiers.
            </p>

            {/* Continuous marquee sliding track */}
            <div className="bg-[#0a1128]/50 border border-white/10 rounded-2xl p-4 overflow-hidden relative">
              <div className="absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[#0a1128]/80 to-transparent z-10" />
              <div className="absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[#0a1128]/80 to-transparent z-10" />
              
              <div className="animate-marquee gap-3">
                {sentimentReviews.concat(sentimentReviews).map((rev, i) => (
                  <div 
                    key={i} 
                    className="bg-white/5 border border-white/5 rounded-xl px-4 py-2.5 text-[10px] text-white/80 shrink-0 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
                    <span>{rev.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-white/5">
            <Link href="/services/customer-sentiment-analysis" className="inline-flex items-center gap-2 text-sm font-semibold text-[#4DA3FF] hover:text-[#007BFF] transition group">
              Explore NLP Audit <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
