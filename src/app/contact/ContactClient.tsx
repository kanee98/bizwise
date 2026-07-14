"use client";

import React, { useState } from "react";
import { useScrollToTop } from "@/hooks/page";
import { motion, AnimatePresence } from "framer-motion";
import { trackEvent } from "@/lib/track";
import { Phone, Mail, MapPin, ChevronDown, ChevronUp, MessageSquare, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const faqs = [
  {
    question: "How soon will you respond to my inquiry?",
    answer: "We aim to reply within 24 hours on business days, and as soon as possible over weekends."
  },
  {
    question: "Do you charge for the initial consultation?",
    answer: "No, the initial 30-minute discovery call and AI readiness assessment is 100% free of charge."
  },
  {
    question: "What datasets are required for a Power BI dashboard setup?",
    answer: "We typically work with CSVs, Excel files, or direct SQL connections from your CRM/ERP/billing systems."
  }
];

export default function ContactClient() {
  useScrollToTop();
  const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus("sending");
    
    // Track form submission
    trackEvent("form_submit", {
      category: "Contact",
      label: "Contact Form Submission",
    });

    setTimeout(() => {
      setFormStatus("success");
    }, 1200);
  };

  return (
    <main className="min-h-screen text-white font-sans relative z-10 pt-28 pb-20">
      
      {/* Contact Header */}
      <section className="max-w-4xl mx-auto text-left mb-16 px-6">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-xs md:text-sm font-semibold text-[#4DA3FF] uppercase tracking-widest mb-3"
        >
          Connect With Us
        </motion.div>
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight text-gradient tracking-tight"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Contact BizWise
        </motion.h1>
        <motion.p
          className="text-lg text-white/70 max-w-3xl mt-6 leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Have questions about AI models, Power BI integrations, or custom reporting? Get in touch with our consulting team in Colombo to schedule your roadmap review.
        </motion.p>
      </section>

      {/* Main Grid */}
      <section className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 px-6 mb-24">
        {/* Left Column: Direct Info & FAQs */}
        <div className="lg:col-span-5 flex flex-col gap-10">
          <div className="glass-panel p-8 rounded-3xl border border-white/10 flex flex-col gap-6">
            <h2 className="text-2xl font-bold border-b border-white/5 pb-4">Our Channels</h2>
            <div className="flex flex-col gap-5">
              <a 
                href="tel:+94766290934" 
                className="flex items-center gap-4 text-white/70 hover:text-white transition group py-1.5"
              >
                <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl group-hover:scale-110 transition duration-300">
                  <Phone size={20} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block font-semibold">Phone Support</span>
                  <span className="text-sm font-medium">+94 76 629 0934</span>
                </div>
              </a>

              <a 
                href="mailto:contact@bizwise.lk" 
                className="flex items-center gap-4 text-white/70 hover:text-white transition group py-1.5"
              >
                <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl group-hover:scale-110 transition duration-300">
                  <Mail size={20} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block font-semibold">Email Inbox</span>
                  <span className="text-sm font-medium">contact@bizwise.lk</span>
                </div>
              </a>

              <div className="flex items-start gap-4 py-1.5">
                <div className="p-3 bg-blue-500/10 text-[#4DA3FF] rounded-2xl shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <span className="text-xs text-white/40 block font-semibold">Office Address</span>
                  <address className="text-sm not-italic font-medium leading-relaxed">
                    374/4/1 Narendrasinghe Lane, Habarakada Watta, Homagama, Sri Lanka
                  </address>
                </div>
              </div>
            </div>

            <div className="border-t border-white/5 pt-6 mt-2">
              <a 
                href="https://wa.me/94766290934" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-2xl transition duration-300 shadow-lg shadow-emerald-500/10"
              >
                <MessageSquare size={18} />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          {/* FAQs section */}
          <div className="glass-panel p-8 rounded-3xl border border-white/10">
            <h3 className="text-xl font-bold mb-6">Frequently Asked Questions</h3>
            <div className="space-y-4">
              {faqs.map(({ question, answer }, i) => {
                const isOpen = faqOpenIndex === i;
                return (
                  <div key={i} className="border-b border-white/5 pb-4 last:border-b-0 last:pb-0">
                    <button
                      className="w-full flex justify-between items-center text-left py-2 font-medium text-white hover:text-[#4DA3FF] transition"
                      onClick={() => setFaqOpenIndex(isOpen ? null : i)}
                    >
                      <span>{question}</span>
                      {isOpen ? <ChevronUp size={16} className="text-[#4DA3FF]" /> : <ChevronDown size={16} />}
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <p className="mt-2 text-white/60 text-sm leading-relaxed">{answer}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className="lg:col-span-7">
          <div className="glass-panel p-10 rounded-3xl border border-white/10 shadow-xl h-full flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-3">Send a Message</h2>
            <p className="text-white/60 text-sm mb-8 leading-relaxed">
              Fill in the form below and Danesh or Nilal will reach out to schedule an appointment.
            </p>

            {formStatus === "success" ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-blue-600/20 border border-blue-500/30 rounded-2xl p-8 text-center text-white"
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-[#4DA3FF]">
                  🎉
                </div>
                <h3 className="text-lg font-bold mb-1">Message Received!</h3>
                <p className="text-sm text-white/70">
                  Thank you for contacting BizWise. We&apos;ll get back to you within 24 hours.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="E.g., Arosha Wickramasinghe"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#4DA3FF] transition duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase mb-2">Your Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="E.g., founder@apparel.lk"
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/20 focus:outline-none focus:border-[#4DA3FF] transition duration-200"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-white/40 uppercase mb-2">Message</label>
                  <textarea
                    name="message"
                    placeholder="Briefly describe your requirements or the systems you use..."
                    rows={5}
                    required
                    className="w-full rounded-xl bg-white/5 border border-white/10 px-5 py-3.5 text-white placeholder-white/20 resize-none focus:outline-none focus:border-[#4DA3FF] transition duration-200"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-[#007BFF] hover:bg-[#4DA3FF] font-bold py-4 rounded-xl shadow-lg shadow-blue-500/10 btn-cta glow-btn text-white"
                  data-cta="contact_submit"
                  disabled={formStatus === "sending"}
                >
                  {formStatus === "sending" ? "Sending..." : "Submit Inquiry"}
                </Button>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Repeated bottom CTA block */}
      <section className="bg-gradient-to-r from-blue-600/20 to-indigo-600/20 border-t border-white/10 py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6">
            Prefer Direct Scheduling?
          </h2>
          <p className="text-white/70 text-lg mb-10 max-w-xl mx-auto">
            You can skip the contact form and book a 30-minute discovery call directly on our calendar.
          </p>
          <Link href="/schedule">
            <Button className="text-lg px-8 py-6 bg-[#007BFF] hover:bg-[#4DA3FF] text-white rounded-xl font-bold btn-cta glow-btn shadow-lg" data-cta="contact_bottom_schedule">
              Book a Discovery Call
            </Button>
          </Link>
          <div className="mt-8 flex justify-center gap-6 text-sm text-white/40">
            <Link href="/services" className="hover:text-white flex items-center gap-1 font-semibold transition">
              Our Services <ArrowRight size={14} />
            </Link>
            <Link href="/about" className="hover:text-white flex items-center gap-1 font-semibold transition">
              About the Partners <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
