"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BookOpen, Calendar, Clock, User, ArrowRight, CheckCircle2 } from "lucide-react";
import { useScrollToTop } from "@/hooks/page";

interface Article {
  title: string;
  excerpt: string;
  url: string;
  category: "AI Strategy" | "Business Intelligence" | "Sales Forecasting" | "Customer Sentiment";
  readTime: string;
  date: string;
  author: string;
}

export default function InsightsClient() {
  useScrollToTop();
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = ["All", "AI Strategy", "Business Intelligence", "Sales Forecasting", "Customer Sentiment"];

  const articles: Article[] = [
    {
      title: "Power BI vs Excel: What Sri Lankan SMEs Should Use in 2026",
      excerpt: "Is Excel holding your startup back? Compare Power BI vs Excel features, operational dashboard costs, and reporting depth to build the right reporting stack.",
      url: "/insights/power-bi-vs-excel-what-sri-lankan-smes-should-use",
      category: "Business Intelligence",
      readTime: "6 min read",
      date: "Jul 10, 2026",
      author: "Nilal Fernando"
    },
    {
      title: "AI Adoption Roadmap for a 10-Person Sri Lankan Business",
      excerpt: "Ready to implement generative AI without wasting developer capital? Here is a practical, step-by-step readiness blueprint for local teams of 10-50 people.",
      url: "/insights/ai-adoption-roadmap-for-a-10-person-sri-lankan-business",
      category: "AI Strategy",
      readTime: "8 min read",
      date: "Jun 24, 2026",
      author: "Danesh Jayasinghe"
    },
    {
      title: "How Much Does Sales Forecasting Cost for a Sri Lankan SME?",
      excerpt: "Demystifying pricing for machine learning. We break down the data requirements, model complexity tiers, developer hours, and total software cost factors.",
      url: "/insights/how-much-does-sales-forecasting-cost-for-a-sri-lankan-sme",
      category: "Sales Forecasting",
      readTime: "5 min read",
      date: "Jun 12, 2026",
      author: "Nilal Fernando"
    },
    {
      title: "Customer Sentiment Analysis: A Practical Guide for SL Retailers",
      excerpt: "Learn how to parse Google Maps listings, social media comments, and WhatsApp transcripts in Sinhala and Singlish to understand brand health in real-time.",
      url: "/insights/customer-sentiment-analysis-a-practical-guide-for-sl-retailers",
      category: "Customer Sentiment",
      readTime: "7 min read",
      date: "May 28, 2026",
      author: "Danesh Jayasinghe"
    }
  ];

  const filteredArticles = selectedCategory === "All" 
    ? articles 
    : articles.filter(a => a.category === selectedCategory);

  const featured = articles[0];

  const industries = [
    { name: "Retail & Stores", path: "/industries/retail" },
    { name: "FMCG Brands", path: "/industries/fmcg" },
    { name: "Fashion & Textiles", path: "/industries/fashion-textiles" },
    { name: "Logistics Fleet", path: "/industries/logistics" }
  ];

  const services = [
    { name: "AI Strategy & Consulting", path: "/services/ai-consulting-sme" },
    { name: "Business Intelligence dashboards", path: "/services/business-intelligence" },
    { name: "Sales Forecasting demand models", path: "/services/sales-forecasting" },
    { name: "Customer Sentiment Analysis NLP", path: "/services/customer-sentiment-analysis" }
  ];

  return (
    <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10">
      
      {/* Intro Header */}
      <section className="max-w-4xl mx-auto px-6 text-left mb-12">
        <div className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3">
          Knowledge Base
        </div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          BizWise Insights
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 mt-6 leading-relaxed max-w-3xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Practical guides, technology comparisons, pricing analysis, and deployment roadmaps to guide Sri Lankan founders and operations managers through the complex data landscape.
        </motion.p>
      </section>

      {/* Featured Article Above Fold */}
      <section className="max-w-6xl mx-auto px-6 mb-16">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-white/40 mb-4">Featured Article</h2>
        <motion.div 
          className="glass-panel rounded-3xl border border-white/10 overflow-hidden flex flex-col lg:flex-row shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="p-8 md:p-12 flex-1 flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-[#007BFF]/20 text-[#4DA3FF] text-xs font-bold rounded-full mb-6">
                {featured.category}
              </span>
              <h3 className="text-2xl md:text-4xl font-extrabold mb-4 leading-tight hover:text-[#4DA3FF] transition">
                <Link href={featured.url}>
                  {featured.title}
                </Link>
              </h3>
              <p className="text-white/60 text-sm md:text-base leading-relaxed mb-6">
                {featured.excerpt}
              </p>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 text-xs text-white/40 pt-6 border-t border-white/5">
              <span className="flex items-center gap-1"><User size={14} /> By {featured.author}</span>
              <span className="flex items-center gap-1"><Calendar size={14} /> {featured.date}</span>
              <span className="flex items-center gap-1"><Clock size={14} /> {featured.readTime}</span>
              <Link href={featured.url} className="text-[#4DA3FF] font-bold hover:underline ml-auto flex items-center gap-1">
                Read Article <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Articles Grid with Filtering */}
      <section className="max-w-6xl mx-auto px-6 mb-24">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="text-[#4DA3FF]" /> Article Feed
          </h2>
          
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`text-xs px-3.5 py-2 rounded-xl transition font-medium ${
                  selectedCategory === cat ? "bg-[#007BFF] text-white" : "bg-white/5 text-white/60 hover:bg-white/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((art, idx) => (
            <motion.article 
              key={idx}
              className="glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-white/20 transition duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <span className="text-[10px] uppercase font-bold text-[#4DA3FF] tracking-wider block mb-3">{art.category}</span>
                <h3 className="text-lg font-bold mb-3 hover:text-[#4DA3FF] transition line-clamp-2">
                  <Link href={art.url}>
                    {art.title}
                  </Link>
                </h3>
                <p className="text-xs text-white/60 leading-relaxed mb-6 line-clamp-3">
                  {art.excerpt}
                </p>
              </div>

              <div className="pt-4 border-t border-white/5 flex justify-between items-center text-[10px] text-white/40">
                <span className="flex items-center gap-1"><Clock size={12} /> {art.readTime}</span>
                <Link href={art.url} className="text-[#4DA3FF] font-bold hover:underline flex items-center gap-0.5">
                  Read <ArrowRight size={10} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      {/* Internal Navigation Clusters Section */}
      <section className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 border-t border-white/5 pt-16">
        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <h3 className="text-lg font-bold mb-4">Read by Services Cluster</h3>
          <ul className="space-y-3.5 text-sm">
            {services.map((srv, i) => (
              <li key={i}>
                <Link href={srv.path} className="flex items-center gap-2 text-[#4DA3FF] hover:text-[#007BFF] transition group">
                  <CheckCircle2 size={16} className="text-[#4DA3FF] shrink-0" />
                  <span>{srv.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="glass-panel p-8 rounded-3xl border border-white/10">
          <h3 className="text-lg font-bold mb-4">Read by Industries Cluster</h3>
          <ul className="space-y-3.5 text-sm">
            {industries.map((ind, i) => (
              <li key={i}>
                <Link href={ind.path} className="flex items-center gap-2 text-[#4DA3FF] hover:text-[#007BFF] transition group">
                  <CheckCircle2 size={16} className="text-[#4DA3FF] shrink-0" />
                  <span>{ind.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

    </main>
  );
}
