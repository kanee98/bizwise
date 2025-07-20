"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Services", href: "#services" },
    { label: "Contact Us", href: "#contact" },
  ];

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
              className="text-white/80 hover:text-white transition-colors duration-300"
            >
              {link.label}
            </Link>
          ))}
          <Button className="bg-[#007BFF] hover:bg-[#4DA3FF] px-5 py-2 text-sm rounded-xl whitespace-nowrap">
            Schedule Your Free Consultation
          </Button>
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
              className="text-white text-base px-2 py-1 rounded hover:bg-white/10 transition-colors duration-300 w-full"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Button
            className="bg-[#007BFF] hover:bg-[#4DA3FF] px-4 py-2 text-sm rounded-xl w-full text-left"
            onClick={() => setMenuOpen(false)}
          >
            Schedule Your Free Consultation
          </Button>
        </div>
      )}
    </nav>
  );
}