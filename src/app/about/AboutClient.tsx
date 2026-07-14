"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, TrendingUp, Users, ArrowRight } from "lucide-react";

export default function AboutClient() {
  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true, amount: 0.1 });

  const valuesRef = useRef(null);
  const valuesInView = useInView(valuesRef, { once: true, amount: 0.1 });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true, amount: 0.1 });

  return (
    <main className="min-h-screen text-white font-sans relative z-10 pt-24">
      
      {/* About Hero Section */}
      <section className="flex flex-col text-left px-6 py-20 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Who We Are
        </motion.div>
        
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          About BizWise
        </motion.h1>
        
        <motion.p
          className="text-lg md:text-xl mt-6 text-white/70 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          We are a premier Sri Lankan analytics and artificial intelligence consulting agency, engineered from the ground up for startups and small-to-medium enterprises. We believe that intelligence shouldn&apos;t require an enterprise budget.
        </motion.p>
      </section>

      {/* Mission Section */}
      <section ref={missionRef} className="py-20 px-6 bg-radial-gradient">
        <motion.div 
          className="max-w-4xl mx-auto glass-panel p-10 md:p-14 rounded-3xl"
          initial={{ opacity: 0, y: 30 }}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h2 className="text-3xl font-extrabold mb-4">Our Mission</h2>
              <p className="text-white/70 text-base leading-relaxed">
                To make advanced data analytics, predictive modeling, and AI strategy accessible, highly practical, and commercially rewarding for Sri Lankan businesses. 
              </p>
              <p className="text-white/70 text-base leading-relaxed mt-4">
                We bridge the gap between complex data science and everyday business operations, giving you a distinct competitive advantage in the local and global markets.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4 w-full md:w-fit shrink-0">
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="block text-3xl font-extrabold text-[#4DA3FF]">10+</span>
                <span className="text-xs text-white/40 uppercase font-semibold">Years Experience</span>
              </div>
              <div className="p-4 bg-white/5 rounded-2xl border border-white/10 text-center">
                <span className="block text-3xl font-extrabold text-[#4DA3FF]">100%</span>
                <span className="text-xs text-white/40 uppercase font-semibold">SME Focused</span>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Core Values & Credibility Markers */}
      <section ref={valuesRef} className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Credibility in Every Implementation
          </h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            Our practice is governed by core values designed to keep data integrity high, budgets lean, and solutions highly actionable.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Tailored to local markets",
              desc: "We understand credit structures, seasonal consumer buying behaviors, and logistic factors unique to Sri Lanka.",
              icon: Users,
            },
            {
              title: "GDPR & Local DPA Compliant",
              desc: "Under Danesh's direction as a Data Protection Officer, all AI integrations preserve user privacy and data security legally.",
              icon: CheckCircle2,
            },
            {
              title: "Actionable Insights Only",
              desc: "We do not build dashboards that look pretty but tell you nothing. We track high-value, operational KPIs that drive growth.",
              icon: TrendingUp,
            }
          ].map((val, idx) => {
            const Icon = val.icon;
            return (
              <motion.div
                key={idx}
                className="glass-panel p-8 rounded-3xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={valuesInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.15 }}
              >
                <div className="p-3.5 bg-blue-500/10 text-[#4DA3FF] rounded-2xl w-fit mb-6">
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-bold mb-2">{val.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{val.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Founders / Team Section */}
      <section ref={teamRef} className="max-w-6xl mx-auto px-6 py-20 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Meet the Analytics Partners</h2>
          <p className="text-white/60 max-w-xl mx-auto text-sm">
            Expert leadership bringing over two decades of combined experience in data engineering, corporate finance, and AI strategy.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <motion.div
            className="glass-panel p-10 rounded-3xl flex flex-col justify-between border border-white/10"
            initial={{ opacity: 0, x: -30 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Danesh Jayasinghe</h3>
                  <p className="text-sm text-[#4DA3FF] font-semibold">Founder | Data Strategist & Data Protection Officer</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                Danesh brings over 10 years of experience in business development, analytics, and software strategy. As a certified Data Protection Officer, he ensures that every chatbot automation and predictive model deployed adheres strictly to the Sri Lankan Data Protection Act and international GDPR guidelines, guarding SMEs from legal and compliance risks.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex gap-4 text-xs text-white/40">
              <span>SPECIALTIES:</span>
              <span className="font-semibold text-white/60">AI Strategist, Compliance, Workflow Automation</span>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel p-10 rounded-3xl flex flex-col justify-between border border-white/10"
            initial={{ opacity: 0, x: 30 }}
            animate={teamInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div>
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h3 className="text-2xl font-bold">Nilal Fernando</h3>
                  <p className="text-sm text-[#4DA3FF] font-semibold">Lead Analyst</p>
                </div>
              </div>
              <p className="text-white/70 text-sm leading-relaxed mb-6">
                With a deep background spanning 12+ years in corporate finance and banking analytics, Nilal is the mastermind behind our predictive sales modeling and multi-million-row BI structures. He specializes in mapping complex transaction ledgers and ERP systems into visual, lightweight Power BI dashboards that non-technical business leads can easily navigate.
              </p>
            </div>
            <div className="pt-4 border-t border-white/5 flex gap-4 text-xs text-white/40">
              <span>SPECIALTIES:</span>
              <span className="font-semibold text-white/60">Power BI Architect, Financial Modeling, Predictive Forecasting</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Book a Discovery Call
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Ready to find out if your business is prepared for a Power BI dashboard or custom AI automation? Let&apos;s discuss your current systems.
          </p>
          <Link href="/schedule">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg shadow-blue-500/20" data-cta="about_consult">
              Schedule Your Call Now
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/60">
            <Link href="/services" className="hover:text-white flex items-center gap-1.5 font-medium transition">
              Explore Our Services <ArrowRight size={14} />
            </Link>
            <Link href="/contact" className="hover:text-white flex items-center gap-1.5 font-medium transition">
              Contact Us Directly <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
