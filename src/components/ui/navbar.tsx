"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname(); 

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Insights", href: "/insights" },
    { label: "Contact Us", href: "/contact" },
  ];

  const industries = [
    { label: "Retail", href: "/industries/retail" },
    { label: "FMCG", href: "/industries/fmcg" },
    { label: "Fashion & Textiles", href: "/industries/fashion-textiles" },
    { label: "Logistics", href: "/industries/logistics" },
    { label: "Education", href: "/industries/education" },
    { label: "Finance", href: "/industries/finance" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 ${
        isScrolled 
          ? "bg-[#001124]/80 backdrop-blur-md border-b border-white/10 shadow-lg" 
          : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Link href="/" className="flex items-center overflow-hidden" style={{ height: 40 }}>
          <Image
            src="/Bizwise Logo Text - No BG.png"
            alt="BizWise Logo"
            width={200} 
            height={200} 
            className="object-contain w-[140px] md:w-[160px] h-auto" 
            style={{ marginLeft: 10, marginRight: 10 }}
            quality={100}
            priority
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`relative py-1 text-sm font-medium transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-white"
                  : "text-white/70 hover:text-white"
              }`}
            >
              {link.label}
              {isActive(link.href) && (
                <motion.span 
                  layoutId="activeNavIndicator" 
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-[#4DA3FF]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}
          
          {/* Industries Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white transition-colors duration-300 py-1">
              Industries <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-300" />
            </button>
            <div className="absolute top-full right-0 mt-2 w-52 glass-panel rounded-2xl p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              {industries.map((ind) => (
                <Link
                  key={ind.label}
                  href={ind.href}
                  className={`block px-4 py-2 text-sm rounded-xl transition-colors ${
                    pathname === ind.href 
                      ? "bg-[#007BFF] text-white" 
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {ind.label}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/schedule">
            <Button className="bg-[#007BFF] hover:bg-[#4DA3FF] px-5 py-2 text-sm rounded-xl font-semibold btn-cta glow-btn shadow-md shadow-blue-500/20" data-cta="nav_schedule">
              Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button 
            onClick={() => setMenuOpen(!menuOpen)} 
            className="text-white p-2 rounded-xl hover:bg-white/10 transition"
            aria-label="Toggle Menu"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden mt-4 flex flex-col gap-2 bg-[#001124]/95 backdrop-blur-lg rounded-2xl p-4 border border-white/10 shadow-xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className={`text-white text-base px-4 py-2.5 rounded-xl transition-colors duration-300 w-full block ${
                  isActive(link.href) ? "bg-white/10 font-semibold" : "hover:bg-white/5"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}

            {/* Mobile Industries */}
            <div className="px-4 py-2">
              <span className="text-xs font-semibold text-white/40 uppercase tracking-wider block mb-2">Industries</span>
              <div className="grid grid-cols-2 gap-1.5 pl-2">
                {industries.map((ind) => (
                  <Link
                    key={ind.label}
                    href={ind.href}
                    className={`text-sm py-1.5 text-white/70 hover:text-white block ${
                      pathname === ind.href ? "text-[#4DA3FF] font-medium" : ""
                    }`}
                    onClick={() => setMenuOpen(false)}
                  >
                    {ind.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="mt-2 border-t border-white/10 pt-4">
              <Link href="/schedule" className="block w-full">
                <Button
                  className="bg-[#007BFF] hover:bg-[#4DA3FF] px-4 py-3 text-base font-semibold rounded-xl w-full text-center btn-cta"
                  data-cta="mobile_nav_schedule"
                  onClick={() => setMenuOpen(false)}
                >
                  Free Consultation
                </Button>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}