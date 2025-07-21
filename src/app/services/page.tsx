"use client";

import React from "react";
import { motion } from "framer-motion";
import { useScrollToTop } from "@/hooks/page";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const tiers = [
  {
    title: "Tier 1: Foundational Services",
    subtitle: 'The "Get Control" Package',
    description:
      "Perfect for startups and small businesses establishing their digital presence. We build solid foundations—from custom responsive websites to smart API integrations, ensuring your business is set for growth.",
    features: [
      "Custom website design & development",
      "SEO basics & Google My Business setup",
      "Essential integrations (email, CRM, analytics)",
      "Mobile & desktop optimized",
      "Basic security & performance audits",
    ],
    color: "#4DA3FF",
  },
  {
    title: "Tier 2: High-Value Differentiator Services",
    subtitle: 'The "AI-Powered Edge" Package',
    description:
      "Designed for growth-oriented businesses aiming to innovate. Unlock powerful AI automation, data-driven decision making, and customer insights that differentiate you from competitors.",
    features: [
      "AI chatbots & automation workflows",
      "Advanced analytics dashboards",
      "Personalized customer experience tools",
      "Predictive modeling & sales forecasting",
      "Ongoing monitoring & AI model tuning",
    ],
    color: "#70D6FF",
  },
  {
    title: "Tier 3: Strategic & Growth Services",
    subtitle: 'The "Strategic Partner" Package',
    description:
      "For businesses ready to scale. We become your long-term technology partner, offering continuous optimization, strategic planning, and innovation management to accelerate growth sustainably.",
    features: [
      "Dedicated tech consultant & account manager",
      "Custom AI & ML solutions",
      "End-to-end digital transformation",
      "Performance tuning & scalability improvements",
      "Regular strategy reviews & innovation workshops",
    ],
    color: "#1786FF",
  },
];

export default function ServicesPage() {
  useScrollToTop();

  return (
    <main className="min-h-screen text-white font-sans pt-20 relative z-10">
      {/* Intro */}
      <motion.section
        className="max-w-4xl mx-auto text-left mb-20 px-6"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h1 className="text-5xl font-extrabold mb-6 leading-tight">
          Our <span className="text-[#4DA3FF]">Services</span>
        </h1>
        <p className="text-lg text-white/80 max-w-3xl ">
          At BizWise, we tailor service packages to help businesses grow confidently through data-driven decisions and cutting-edge AI solutions.
          Whether you’re starting out or scaling up, we have a plan crafted for you.
        </p>
      </motion.section>

      {/* Tier Cards */}
      <section className="max-w-7xl mx-auto grid gap-12 md:grid-cols-3 mb-24 px-6 ">
        {tiers.map(({ title, subtitle, description, features, color }, idx) => (
          <motion.article
            key={idx}
            className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-lg border border-white/20 flex flex-col"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: idx * 0.3 }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2 className="text-3xl font-bold mb-1" style={{ color }}>
              {title}
            </h2>
            <h3 className="text-xl font-semibold text-white/90 mb-4 italic">{subtitle}</h3>
            <p className="text-white/80 leading-relaxed mb-6">{description}</p>

            <ul className="text-white/70 list-disc list-inside space-y-2 flex-grow">
              {features.map((feat, i) => (
                <li key={i}>{feat}</li>
              ))}
            </ul>

            <motion.div
              className="mt-6"
              initial={{ opacity: 0, scale: 0.9 }}
              whileHover={{ scale: 1.05, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <Link href="/contact" passHref>         
                  <Button className="...">Learn More</Button>     
              </Link>
            </motion.div>
          </motion.article>
        ))}
      </section>

      {/* Comparison Table */}
      <motion.section
        className="max-w-6xl mx-auto overflow-x-auto mb-24"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-center mb-8 px-6">Compare Our Packages</h2>
        <table className="w-full table-auto text-white border-collapse border border-white/30 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-white/10">
              <th className="p-4 border border-white/20 text-left">Features</th>
              {tiers.map(({ title, color }, i) => (
                <th
                  key={i}
                  className="p-4 border border-white/20"
                  style={{ color }}
                >
                  {title}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {/* You can customize features here as needed */}
            {[
              "Custom Website Design",
              "SEO & Local Listings",
              "AI Automation",
              "Predictive Analytics",
              "Dedicated Consultant",
              "Ongoing Optimization",
              "Digital Transformation",
            ].map((feature, i) => (
              <tr key={i} className={i % 2 === 0 ? "bg-white/5" : ""}>
                <td className="p-4 border border-white/20 font-semibold">{feature}</td>
                <td className="p-4 border border-white/20 text-center">{i < 2 ? "✔️" : ""}</td>
                <td className="p-4 border border-white/20 text-center">{i < 5 ? "✔️" : ""}</td>
                <td className="p-4 border border-white/20 text-center">{i < 7 ? "✔️" : ""}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center py-20 px-6 bg-[#0062D6]"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-4xl font-bold mb-6">Ready to take your business to the next level?</h2>
        <p className="mb-10 max-w-3xl mx-auto text-white/90 text-lg">
          Get in touch with our team today and discover how BizWise can help you unlock the power of data and AI to grow smarter and faster.
        </p>
        <Link href="/schedule">
          <Button className="text-lg px-8 py-4 bg-[#4DA3FF] hover:bg-[#004AAD] rounded-xl font-semibold shadow-lg">
            Schedule Your Free Consultation
          </Button>
        </Link>
      </motion.section>
    </main>
  );
}