"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Brain, BarChart3, TrendingUp, MessageSquare, ArrowRight } from "lucide-react";

export default function ServicesClient() {
  const services = [
    {
      title: "AI Consulting for SMEs",
      summary: "We formulate practical AI adoption roadmaps and deploy secure chatbot automations tailored for small teams without enterprise budgets.",
      link: "/services/ai-consulting-sme",
      ctaText: "Read our AI Consulting SME strategy",
      icon: Brain,
      color: "#3b82f6"
    },
    {
      title: "Business Intelligence",
      summary: "We build custom, interactive Power BI dashboards that unify scattered finance, sales, and inventory data into a single source of truth.",
      link: "/services/business-intelligence",
      ctaText: "Explore our Startup Business Intelligence setups",
      icon: BarChart3,
      color: "#00c8ff"
    },
    {
      title: "Sales Forecasting & Predictive Analytics",
      summary: "We apply predictive machine learning models to help retail and FMCG brands forecast customer demand and prevent stockouts.",
      link: "/services/sales-forecasting",
      ctaText: "Consult our Sales Forecasting solutions",
      icon: TrendingUp,
      color: "#2563eb"
    },
    {
      title: "Customer Sentiment Analysis",
      summary: "We analyze online reviews, surveys, and social feedback using NLP to show brands what their customers actually think.",
      link: "/services/customer-sentiment-analysis",
      ctaText: "Request a Customer Sentiment analysis demo",
      icon: MessageSquare,
      color: "#0d9488"
    }
  ];

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10 bg-transparent">
      
      {/* Intro Header */}
      <section className="max-w-6xl mx-auto text-left mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Our Offerings
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          AI & Data Services
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 max-w-3xl mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          BizWise helps Sri Lankan organizations deploy modern data frameworks, cloud-based reporting dashboards, and localized machine learning structures that make decision-making immediate and accurate.
        </motion.p>
      </section>

      {/* Services Navigation Hub Grid */}
      <section className="max-w-6xl mx-auto grid gap-8 md:grid-cols-2 px-6 mb-24">
        {services.map((srv, idx) => {
          const Icon = srv.icon;
          return (
            <motion.article
              key={idx}
              className="glass-panel p-8 md:p-10 rounded-3xl flex flex-col justify-between border border-white/10 hover:border-white/20 transition-all duration-300 relative overflow-hidden group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              viewport={{ once: true }}
            >
              {/* Radial glow background on hover */}
              <div 
                className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none" 
                style={{ 
                  background: `radial-gradient(circle at 10% 10%, ${srv.color} 0%, transparent 70%)` 
                }} 
              />
              
              <div>
                <div 
                  className="p-4 rounded-2xl w-fit mb-6 border"
                  style={{ 
                    color: srv.color, 
                    borderColor: `${srv.color}30`,
                    background: `${srv.color}08`
                  }}
                >
                  <Icon size={28} />
                </div>
                <h2 className="text-2xl font-bold mb-4">{srv.title}</h2>
                <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8">{srv.summary}</p>
              </div>

              <div className="pt-4 border-t border-white/5">
                <Link href={srv.link} className="w-full inline-block">
                  <Button 
                    className="w-full flex items-center justify-between text-sm px-6 py-5 rounded-xl font-bold transition-all duration-300 btn-cta text-white bg-white/5 hover:bg-[#007BFF] hover:text-white border border-white/10 hover:border-[#007BFF]/40"
                    data-cta={`hub_go_${idx}`}
                  >
                    <span>{srv.ctaText}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1.5 transition-transform" />
                  </Button>
                </Link>
              </div>
            </motion.article>
          );
        })}
      </section>

      {/* Shared CTA for contact */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
            Not Sure Which Stacks Suit You?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            Get in touch with us to organize a custom readiness review. We will map your operational tools and design a blueprint tailored for your goals.
          </p>
          <Link href="/contact">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#0054ad] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="services_hub_contact">
              Talk to Our Team
            </Button>
          </Link>
        </div>
      </section>

    </main>
  );
}
