"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // 🔹 Step 1: Import this

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // 🔹 Step 2: Get current path

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

  const isActive = (href: string) => {
    // For hash links, always return false — they’re not "pages"
    if (href.startsWith("#")) return false;
    return pathname === href;
  };

  return (
    <nav className="sticky top-0 z-50 bg-[#001e41] shadow-lg px-6 py-4">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex justify-between items-center max-w-7xl mx-auto"
      >
        <Link href="/">
          <h1 className="text-2xl font-bold tracking-tight text-white cursor-pointer">
            BizWise
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`transition-colors duration-300 ${
                isActive(link.href)
                  ? "text-white font-semibold border-b-2 border-white pb-1"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/schedule">
            <Button className="bg-[#007BFF] hover:bg-[#4DA3FF] px-5 py-2 text-sm rounded-xl whitespace-nowrap">
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.div>

      {/* Mobile Nav Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col items-start gap-3">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`text-white text-base px-2 py-1 rounded transition-colors duration-300 w-full ${
                isActive(link.href) ? "bg-white/10 font-semibold" : "hover:bg-white/10"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/schedule">
            <Button
              className="bg-[#007BFF] hover:bg-[#4DA3FF] px-4 py-2 text-sm rounded-xl w-full text-left"
              onClick={() => setMenuOpen(false)}
            >
              Schedule Your Free Consultation
            </Button>
          </Link>
        </div>
      )}
    </nav>
  );
}