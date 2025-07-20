"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#004AAD] text-center py-6 text-sm text-white/80 relative z-10">
      © {new Date().getFullYear()} BizWise. All rights reserved. Designed and built by{" "}
      <a
        href="https://fusionlabz.lk"
        target="_blank"
        rel="noopener noreferrer"
        className="text-white font-medium hover:underline hover:text-white transition-colors"
      >
        FusionLabz.lk
      </a>
    </footer>
  );
};

export default Footer;