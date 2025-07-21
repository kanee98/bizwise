"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useScrollToTop } from "@/hooks/page"; 
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function AboutPage() {
  useScrollToTop();

  const missionRef = useRef(null);
  const missionInView = useInView(missionRef, { once: true });

  const teamRef = useRef(null);
  const teamInView = useInView(teamRef, { once: true });

  return (
    <main className="min-h-screen text-white font-sans relative z-10">
      {/* About Hero Section */}
      <section className="flex flex-col text-left px-4 py-20 max-w-4xl mx-auto">
        <motion.h2
          className="text-4xl md:text-5xl font-bold leading-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About <span className="text-[#4DA3FF]">BizWise</span>
        </motion.h2>
        <motion.p
          className="text-lg mt-6 max-w-3xl md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          BizWise is a Sri Lankan AI consultancy dedicated to helping local
          businesses harness the power of data. From small startups to
          established enterprises, we provide intelligent, cost-effective
          solutions tailored to the local market and culture.
        </motion.p>
      </section>

      {/* Mission Section */}
      <motion.section
        ref={missionRef}
        className="text-center py-20 px-6 bg-[#0062D6] rounded-3xl max-w-4xl mx-auto"
        initial={{ opacity: 0 }}
        animate={missionInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-6">Our Mission</h3>
          <p className="text-white/90 text-lg leading-relaxed">
            To empower Sri Lankan businesses by making data intelligence
            accessible, affordable, and impactful. We aim to transform raw
            information into actionable insight using the latest AI tools,
            enabling smarter decisions and sustainable growth.
          </p>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section
        ref={teamRef}
        className="py-20 px-6"
        initial={{ opacity: 0 }}
        animate={teamInView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="max-w-5xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Meet the Team</h3>
          <div className="grid md:grid-cols-2 gap-10 text-white text-center">
            {[
              {
                name: "Danesh Jayasinghe",
                title: "Founder & Data Strategist",
                bio: "10+ years in analytics and business development. Passionate about helping local businesses scale with data.",
              },
              {
                name: "Padmapriya Jayasinghe",
                title: "Lead AI Engineer",
                bio: "Machine learning expert with a focus on predictive modeling, NLP, and customer behavior analysis.",
              },
            ].map((member, idx) => (
              <motion.div
                key={idx}
                className="bg-[rgba(255,255,255,0.05)] backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={teamInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: idx * 0.2 }}
              >
                <h4 className="text-xl font-semibold mb-2">{member.name}</h4>
                <p className="text-[#4DA3FF] mb-2">{member.title}</p>
                <p className="text-sm text-white/80">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="text-center py-20 px-6 bg-[#0062D6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-3xl font-bold mb-4">Let’s Collaborate</h3>
        <p className="mb-8 max-w-2xl mx-auto text-white/90">
          Whether you’re exploring AI for the first time or scaling your data
          operations, we’re here to help you take the next step.
        </p>
        <Link href="/schedule">
          <Button className="text-lg px-6 py-3 bg-[#4DA3FF] text-white hover:bg-[#004AAD] rounded-xl font-semibold shadow-lg">
            Schedule a Free Consultation
          </Button>
        </Link>
      </motion.section>
    </main>
  );
}