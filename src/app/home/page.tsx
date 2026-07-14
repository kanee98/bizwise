"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  ShieldCheck,
  Zap,
  Users
} from "lucide-react";
import Link from "next/link";
import AISandboxConsole from "@/components/home/AISandboxConsole";
import BentoGridServices from "@/components/home/BentoGridServices";

export default function HomePage() {

  const testimonials = [
    {
      quote: "BizWise transformed how we track our fashion retail stores. The Power BI dashboard consolidated our multi-outlet inventory, saving us over 20 hours a week.",
      author: "Arosha Wickramasinghe",
      role: "Co-Founder, Colombo Apparel Hub",
      location: "Colombo"
    },
    {
      quote: "Their sales forecasting models predicted our seasonal FMCG demand with 92% accuracy, helping us reduce stockouts by nearly a third.",
      author: "Dhammika Perera",
      role: "Operations Director, Lanka Fresh Produce",
      location: "Gampaha"
    },
    {
      quote: "We wanted to adopt AI tools but didn't know where to start. BizWise provided an affordable roadmap that helped us automate our customer support securely.",
      author: "Nimmi Jayawardena",
      role: "Founder, GreenSpace Wellness",
      location: "Kandy"
    }
  ];

  const techStack = [
    "Power BI", "Python", "TensorFlow", "OpenAI", "Next.js", "PostgreSQL", "Google Analytics"
  ];

  return (
    <main className="min-h-screen text-white font-sans relative z-10 pt-24 overflow-hidden bg-transparent">
      
      {/* Hero Section */}
      <section className="relative px-6 py-20 md:py-32 max-w-6xl mx-auto flex flex-col items-center text-center">
        <div className="absolute inset-0 bg-radial-gradient -z-10" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs md:text-sm font-medium text-white/80">AI & Analytics for Sri Lankan Startups & SMEs</span>
        </motion.div>

        <motion.h1
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
        >
          AI & Data Analytics Consultancy <br className="hidden md:inline" />
          <span className="text-gradient-blue">for Sri Lankan SMEs</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-white/70 mt-6 max-w-3xl leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Affordable AI consulting, interactive BI dashboards, and predictive forecasting built to help your business track what matters, optimize inventory, and grow faster.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link href="/schedule">
            <Button className="w-full sm:w-auto text-lg px-8 py-6 bg-[#007BFF] text-white hover:bg-[#0054ad] rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="hero_consult_primary">
              Get Your Free Consultation
            </Button>
          </Link>
          <Link href="/services">
            <Button variant="outline" className="w-full sm:w-auto text-lg px-8 py-6 border border-white/20 hover:border-[#007BFF] text-white bg-transparent hover:bg-[#007BFF]/10 hover:text-white rounded-xl font-semibold backdrop-blur-md transition-all duration-300">
              Explore Services
            </Button>
          </Link>
        </motion.div>
      </section>

      <AISandboxConsole />

      {/* Trust Signals & Tech Stack */}
      <section className="border-y border-white/5 bg-white/[0.01] py-8 overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <span className="text-sm font-semibold uppercase tracking-wider text-white/40">Trust Tech & Tool Stack</span>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {techStack.map((tech, idx) => (
              <span key={idx} className="text-sm md:text-base font-semibold text-white/60 bg-white/5 px-4 py-1.5 rounded-xl border border-white/10">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Markers / Credibility Badges */}
      <section className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="glass-panel p-8 rounded-3xl flex items-start gap-4">
          <div className="p-3 bg-blue-500/10 text-blue-400 rounded-2xl">
            <ShieldCheck size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Affordable SME Pricing</h3>
            <p className="text-sm text-white/60 leading-relaxed">No massive upfront software or license fees. We configure cost-effective stacks built for small team budgets.</p>
          </div>
        </div>
        <div className="glass-panel p-8 rounded-3xl flex items-start gap-4">
          <div className="p-3 bg-cyan-500/10 text-cyan-400 rounded-2xl">
            <Zap size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Practical Integrations</h3>
            <p className="text-sm text-white/60 leading-relaxed">We bypass the corporate jargon and deliver direct automations that optimize operational workflows immediately.</p>
          </div>
        </div>
        <div className="glass-panel p-8 rounded-3xl flex items-start gap-4">
          <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl">
            <Users size={28} />
          </div>
          <div>
            <h3 className="text-lg font-bold mb-1">Local Context & Support</h3>
            <p className="text-sm text-white/60 leading-relaxed">Based in Colombo. We align with local business terms, credit terms, and offer persistent post-launch consulting.</p>
          </div>
        </div>
      </section>

      {/* Services Bento Grid */}
      <BentoGridServices />

      {/* Testimonials section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Trusted by Local Business Owners
          </h2>
          <p className="text-white/60 max-w-2xl mx-auto text-base">
            See how Sri Lankan entrepreneurs scale operations, minimize inventory waste, and lead teams using BizWise analytics.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((test, idx) => (
            <motion.div
              key={idx}
              className="glass-panel p-8 rounded-3xl flex flex-col justify-between"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              <p className="text-white/80 italic text-sm leading-relaxed mb-6">
                &ldquo;{test.quote}&rdquo;
              </p>
              <div>
                <h4 className="font-bold text-white text-base">{test.author}</h4>
                <p className="text-xs text-[#4DA3FF]">{test.role}</p>
                <p className="text-[10px] text-white/40 uppercase tracking-widest mt-1">{test.location}, Sri Lanka</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Ready to Build a Smarter Operation?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-2xl mx-auto">
            Book a complimentary 30-minute AI readiness assessment with Danesh and Nilal. We&apos;ll audit your current data stack and identify immediate optimization wins.
          </p>
          <Link href="/schedule">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#0054ad] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="home_bottom_consult">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}