"use client";

import { useScrollToTop, useCalendlyEmbed } from "@/hooks/page";
import { motion } from "framer-motion";
import {
  Clock,
  UserCheck,
  CalendarCheck,
  Award,
} from "lucide-react";

export default function SchedulePage() {
  useScrollToTop();
  useCalendlyEmbed();

  const benefits = [
    {
      icon: Clock,
      title: "Flexible Scheduling",
      desc: "Pick a time that fits your busy day without hassle.",
    },
    {
      icon: UserCheck,
      title: "Personalized Consultation",
      desc: "Tailored guidance focused on your business goals.",
    },
    {
      icon: CalendarCheck,
      title: "Easy Rescheduling",
      desc: "Change appointments with no extra fuss.",
    },
    {
      icon: Award,
      title: "Expert Support",
      desc: "Work with experienced professionals committed to your success.",
    },
  ];

  return (
    <main className="relative z-10 max-w-6xl mx-auto px-6 py-24 text-white flex flex-col gap-20">
      {/* Animated Background Overlay */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#001e41] via-[#004aad] to-[#001633] opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-left max-w-3xl mx-auto"
      >
        <h1 className="text-5xl font-extrabold mb-4 tracking-tight">
          Schedule Your Free Consultation
        </h1>
        <p className="text-lg text-white/80 max-w-xl">
          Let’s connect and explore how we can bring your vision to life.
          Book a time that suits you best below.
        </p>
      </motion.header>

      {/* Benefits Grid */}
      <motion.section
        className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              staggerChildren: 0.15,
            },
          },
        }}
      >
        {benefits.map(({ icon: Icon, title, desc }, i) => (
          <motion.div
            key={i}
            className="flex gap-4 bg-white/10 rounded-2xl p-6 border border-white/20 shadow-md"
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Icon className="text-[#4DA3FF] w-8 h-8 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-semibold">{title}</h3>
              <p className="text-white/80">{desc}</p>
            </div>
          </motion.div>
        ))}
      </motion.section>

      {/* Calendly Embed */}
      <motion.section
        className="w-full max-w-4xl mx-auto bg-white/5 backdrop-blur-lg rounded-3xl p-4 sm:p-6 border border-white/20 shadow-lg overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <div
          className="calendly-inline-widget"
          data-url="https://calendly.com/contact-bizwise/30min"
          style={{ width: "100%", minWidth: "0", height: "700px" }}
        ></div>
      </motion.section>

      {/* Call to Action */}
      <motion.footer
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center max-w-3xl mx-auto"
      >
        <p className="mb-6 text-lg text-white/90">
          Ready to elevate your business? Book your free consultation today and
          start transforming your vision into reality.
        </p>
        <a
          href="https://calendly.com/kaniyouth/consultation"
          target="_blank"
          rel="noreferrer"
          className="inline-block bg-[#4DA3FF] hover:bg-[#007BFF] transition text-white font-semibold px-8 py-4 rounded-xl shadow-lg btn-cta"
          data-cta="schedule_page_book_now"
        >
          Book Now
        </a>
      </motion.footer>
    </main>
  );
}