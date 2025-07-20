"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  BarChart3,
  LineChart,
  MessageCircle,
  UserCheck,
  LifeBuoy,
} from "lucide-react";
import { useScrollToTop } from "@/hooks/homePage";

export default function HomePage() {
  useScrollToTop();

  return (
    <main className="min-h-screen bg-gradient-to-br from-[#001e41] to-[#004AAD] text-white font-sans">
      {/* Hero Section */}
      <section className="flex flex-col text-left px-4 py-28 max-w-4xl mx-auto relative z-10">
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Empowering Sri Lankan <br />
          Businesses with <br />
          <span className="text-[#007BFF]">AI-Driven Insights</span>
        </motion.h2>
        <motion.p
          className="text-lg mt-6 max-w-2xl md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Organize, predict, and grow — all powered by intelligent data
          solutions tailored just for your business.
        </motion.p>
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
        >
          <Button className="text-lg px-6 py-3 bg-[#007BFF] text-white hover:bg-[#4DA3FF] rounded-xl font-semibold shadow-md">
            Schedule Your Free Consultation
          </Button>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="text-gray-900 py-20 px-6 relative z-10">
        <motion.h3
          className="text-3xl font-bold text-center mb-14 text-white"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          Our Services
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 text-white max-w-6xl mx-auto">
          {[
            {
              title: "Business Intelligence & Reporting",
              desc: "Custom dashboards and insights with Power BI to guide your decisions.",
              icon: BarChart3,
            },
            {
              title: "Predictive Analytics",
              desc: "Forecast sales and customer trends using Machine Learning.",
              icon: LineChart,
            },
            {
              title: "Sentiment Analysis",
              desc: "Decode customer feedback using advanced Natural Language Processing.",
              icon: MessageCircle,
            },
            {
              title: "Personalized Consultations",
              desc: "Expert guidance tailored to your business goals.",
              icon: UserCheck,
            },
            {
              title: "Ongoing Support",
              desc: "Monthly subscription model with continuous AI-powered monitoring.",
              icon: LifeBuoy,
            },
          ].map((service, idx) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={idx}
                className="group bg-[rgba(240,248,255,0.1)] backdrop-blur-md border border-[#004AAD]/30 p-6 rounded-2xl shadow-md hover:shadow-xl hover:border-[#4DA3FF] transition-all duration-300 ease-in-out transform hover:-translate-y-1"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true }}
              >
                <Icon className="text-[#4DA3FF] mb-4 w-8 h-8 transition-transform duration-300 group-hover:scale-110" />
                <h4 className="text-xl font-semibold mb-3 group-hover:text-[#FFFFFF] transition-colors duration-300">
                  {service.title}
                </h4>
                <p className="text-sm">{service.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="text-center py-20 px-6 bg-[#0062D6] relative z-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4 z-10">
          Ready to Transform Your Business?
        </h3>
        <p className="mb-8 max-w-2xl mx-auto text-white/90 z-10">
          Let’s talk about how BizWise can deliver real, AI-powered results to help you grow.
        </p>
        <Button className="text-lg px-6 py-3 bg-[#FFD700] text-black hover:bg-[#FFC300] rounded-xl font-semibold shadow-lg z-10">
          Schedule Your Free Consultation
        </Button>
      </motion.section>
    </main>
  );
}