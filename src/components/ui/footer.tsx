"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, MessageSquare } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-[#000b18] text-white border-t border-white/10 pt-16 pb-8 px-6 mt-auto">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
        {/* Branding Column */}
        <div className="flex flex-col gap-4">
          <Link href="/">
            <Image
              src="/Bizwise Logo Text - No BG.png"
              alt="BizWise Logo"
              width={160}
              height={40}
              className="object-contain h-auto"
              priority
            />
          </Link>
          <p className="text-white/60 text-sm leading-relaxed mt-2">
            Empowering Sri Lankan startups & SMEs with affordable AI consulting, custom Power BI dashboards, and predictive forecasting solutions.
          </p>
          <div className="mt-4 flex items-center gap-3">
            <a 
              href="https://wa.me/94766290934" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="p-2.5 rounded-xl bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white transition duration-300"
            >
              <MessageSquare size={18} />
            </a>
            <a 
              href="mailto:contact@bizwise.lk" 
              className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white transition duration-300"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        {/* Services Links */}
        <div>
          <h4 className="font-semibold text-[#4DA3FF] text-base mb-6 uppercase tracking-wider">Services</h4>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li>
              <Link href="/services/ai-consulting-sme" className="hover:text-white transition duration-200">
                AI Consulting for SMEs
              </Link>
            </li>
            <li>
              <Link href="/services/business-intelligence" className="hover:text-white transition duration-200">
                Business Intelligence
              </Link>
            </li>
            <li>
              <Link href="/services/sales-forecasting" className="hover:text-white transition duration-200">
                Sales Forecasting
              </Link>
            </li>
            <li>
              <Link href="/services/customer-sentiment-analysis" className="hover:text-white transition duration-200">
                Customer Sentiment Analysis
              </Link>
            </li>
          </ul>
        </div>

        {/* Industries Links */}
        <div>
          <h4 className="font-semibold text-[#4DA3FF] text-base mb-6 uppercase tracking-wider">Industries</h4>
          <ul className="space-y-3.5 text-sm text-white/70">
            <li>
              <Link href="/industries/retail" className="hover:text-white transition duration-200">
                Retail & E-commerce
              </Link>
            </li>
            <li>
              <Link href="/industries/fmcg" className="hover:text-white transition duration-200">
                FMCG Companies
              </Link>
            </li>
            <li>
              <Link href="/industries/fashion-textiles" className="hover:text-white transition duration-200">
                Fashion & Textiles
              </Link>
            </li>
            <li>
              <Link href="/industries/logistics" className="hover:text-white transition duration-200">
                Logistics & Fleet
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info Column */}
        <div>
          <h4 className="font-semibold text-[#4DA3FF] text-base mb-6 uppercase tracking-wider">Get in Touch</h4>
          <ul className="space-y-4 text-sm text-white/70">
            <li className="flex gap-3">
              <Phone className="text-[#4DA3FF] w-5 h-5 shrink-0" />
              <a href="tel:+94766290934" className="hover:text-white transition">
                +94 76 629 0934
              </a>
            </li>
            <li className="flex gap-3">
              <Mail className="text-[#4DA3FF] w-5 h-5 shrink-0" />
              <a href="mailto:contact@bizwise.lk" className="hover:text-white transition">
                contact@bizwise.lk
              </a>
            </li>
            <li className="flex gap-3">
              <MapPin className="text-[#4DA3FF] w-5 h-5 shrink-0" />
              <address className="not-italic leading-relaxed text-xs">
                374/4/1 Narendrasinghe Lane, Habarakada Watta, Homagama, Sri Lanka
              </address>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Footer Section */}
      <div className="max-w-7xl mx-auto border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/50">
        <p>
          © {new Date().getFullYear()} BizWise. All rights reserved. Designed & built by{" "}
          <a
            href="https://fusionlabz.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:underline transition-colors"
          >
            FusionLabz.lk
          </a>
        </p>
        <div className="flex gap-6">
          <Link href="/privacy-policy" className="hover:text-white transition">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:text-white transition">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;