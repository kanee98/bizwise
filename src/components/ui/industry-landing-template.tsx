"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import * as Icons from "lucide-react";
import { useScrollToTop } from "@/hooks/page";

interface FocusPoint {
  title: string;
  desc: string;
  iconName: string;
}

interface ServiceLink {
  label: string;
  href: string;
}

interface ArticleLink {
  label: string;
  href: string;
}

interface IndustryLandingProps {
  category: string;
  h1: string;
  description: string;
  focusPoints: FocusPoint[];
  serviceLinks: ServiceLink[];
  articleLinks?: ArticleLink[];
  ctaText?: string;
  ctaTarget?: string;
  trackingLabel: string;
}

export default function IndustryLandingTemplate({
  category,
  h1,
  description,
  focusPoints,
  serviceLinks,
  articleLinks = [],
  ctaText = "Schedule an Industry Consultation",
  ctaTarget = "/schedule",
  trackingLabel
}: IndustryLandingProps) {
  useScrollToTop();

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10">
      
      {/* Header Info */}
      <section className="max-w-6xl mx-auto px-6 text-left mb-16">
        <div className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3">
          Sectors We Serve / {category}
        </div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {h1}
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {description}
        </motion.p>
      </section>

      {/* Focus Points Grid */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-2xl md:text-3xl font-extrabold mb-10">Key Areas of Impact</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {focusPoints.map((fp, i) => {
            const Icon = (Icons[fp.iconName as keyof typeof Icons] || Icons.HelpCircle) as Icons.LucideIcon;
            return (
              <div key={i} className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition-all duration-300">
                <div>
                  <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl w-fit mb-6">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{fp.title}</h3>
                  <p className="text-sm text-white/60 leading-relaxed mb-6">{fp.desc}</p>
                </div>
                <div className="text-xs font-semibold text-[#4DA3FF] flex items-center gap-1">
                  Targeted Metric
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Internal Navigation Links / Service & Articles Split */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-10">
        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold mb-6">Related Services</h3>
          <ul className="space-y-4 text-sm text-white/70">
            {serviceLinks.map((sl, idx) => (
              <li key={idx}>
                <Link href={sl.href} className="flex items-center gap-2 text-[#4DA3FF] hover:text-[#007BFF] transition group font-medium">
                  <CheckCircle2 size={16} className="text-[#4DA3FF] shrink-0" />
                  <span>{sl.label}</span>
                  <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform ml-1" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8 md:p-10 rounded-3xl border border-white/10">
          <h3 className="text-xl font-bold mb-6">Resource & Insight Articles</h3>
          {articleLinks.length > 0 ? (
            <ul className="space-y-4 text-sm text-white/70">
              {articleLinks.map((al, idx) => (
                <li key={idx}>
                  <Link href={al.href} className="flex items-center gap-2 text-[#4DA3FF] hover:text-[#007BFF] transition group font-medium">
                    <CheckCircle2 size={16} className="text-[#4DA3FF] shrink-0" />
                    <span>{al.label}</span>
                    <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform ml-1" />
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="h-full flex items-center">
              <p className="text-sm text-white/40 italic">Check out our general insights cluster for more details.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Box */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Optimize Your Operations
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Consult with Danesh and Nilal to audit your current systems and configure a custom implementation plan built specifically for your field.
          </p>
          <Link href={ctaTarget}>
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta={trackingLabel}>
              {ctaText}
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/40">
            <Link href="/services" className="hover:text-white transition">
              All Services
            </Link>
            <Link href="/insights" className="hover:text-white transition">
              Insights Hub
            </Link>
            <Link href="/contact" className="hover:text-white transition">
              Contact Channels
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
