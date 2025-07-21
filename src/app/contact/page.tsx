"use client";

import { useScrollToTop } from "@/hooks/page";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  ChevronUp,
} from "lucide-react";

const faqs = [
  {
    question: "How soon will you respond to my inquiry?",
    answer:
      "We aim to reply within 24 hours on business days, and as soon as possible otherwise.",
  },
  {
    question: "Do you offer personalized consultations?",
    answer:
      "Absolutely! We tailor our AI-powered solutions specifically for your business goals.",
  },
  {
    question: "What industries do you specialize in?",
    answer:
      "While we cater to a broad range, we have deep experience with retail, finance, and healthcare sectors in Sri Lanka.",
  },
];

export default function ContactUsPage() {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  // Simulated submit handler for demo (replace with real integration)
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    setTimeout(() => setFormStatus("success"), 1500);
  };

  return (
    <main className="relative z-10 text-white max-w-6xl mx-auto px-6 py-24 flex flex-col gap-20">
      {/* Animated background overlay */}
      <motion.div
        aria-hidden="true"
        className="fixed inset-0 -z-10 bg-gradient-to-tr from-[#003366] via-[#004aad] to-[#002244] opacity-30"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
      />

      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center max-w-3xl mx-auto"
      >
        <h1 className="text-6xl font-extrabold mb-4 tracking-tight">
          Get In Touch With Us
        </h1>
        <p className="text-lg text-white/80">
          Whether you’re curious about our services or want a personalized demo, we’re ready to help.
          Connect with BizWise and let’s build your business’s future with AI-driven insights.
        </p>
      </motion.header>

      {/* Contact Info + FAQ Grid */}
      <section className="grid md:grid-cols-2 gap-16">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-lg flex flex-col gap-8"
        >
          <h2 className="text-3xl font-bold mb-6">Contact Info</h2>
          <div className="flex flex-col gap-6 text-white/90">
            <div className="flex items-center gap-4">
              <Phone className="text-[#4DA3FF]" size={24} />
              <a href="tel:+94112345678" className="hover:text-[#4DA3FF] transition">
                +94 11 234 5678
              </a>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-[#4DA3FF]" size={24} />
              <a href="mailto:info@bizwise.lk" className="hover:text-[#4DA3FF] transition">
                info@bizwise.lk
              </a>
            </div>
            <div className="flex items-center gap-4">
              <MapPin className="text-[#4DA3FF]" size={24} />
              <address className="not-italic">
                123 AI Street, Colombo 07, Sri Lanka
              </address>
            </div>
          </div>

          {/* FAQ Accordion */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map(({ question, answer }, i) => {
                const isOpen = faqOpenIndex === i;
                return (
                  <motion.div
                    key={i}
                    className="bg-white/20 rounded-xl p-4 cursor-pointer select-none"
                    onClick={() => setFaqOpenIndex(isOpen ? null : i)}
                    initial={false}
                    layout
                    transition={{ layout: { duration: 0.3 } }}
                  >
                    <div className="flex justify-between items-center">
                      <h4 className="font-semibold">{question}</h4>
                      {isOpen ? (
                        <ChevronUp size={20} className="text-[#4DA3FF]" />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </div>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          className="mt-3 text-white/90"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          {answer}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-lg rounded-3xl p-10 border border-white/20 shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-6 text-center">Send Us a Message</h2>

          {formStatus === "success" ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-[#4DA3FF] rounded-xl p-8 text-center font-semibold text-white shadow-lg"
            >
              🎉 Thanks for reaching out! We’ll get back to you shortly.
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full rounded-xl bg-white/10 border border-white/30 px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] transition"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full rounded-xl bg-white/10 border border-white/30 px-5 py-4 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] transition"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows={6}
                required
                className="w-full rounded-xl bg-white/10 border border-white/30 px-5 py-4 text-white placeholder-white/70 resize-none focus:outline-none focus:ring-2 focus:ring-[#4DA3FF] transition"
              />

              <motion.button
                type="submit"
                className="w-full bg-[#4DA3FF] font-semibold py-4 rounded-xl shadow-lg hover:bg-[#007BFF] transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                disabled={formStatus === "sending"}
              >
                {formStatus === "sending" ? "Sending..." : "Send Message"}
              </motion.button>
            </form>
          )}
        </motion.section>
      </section>
    </main>
  );
}