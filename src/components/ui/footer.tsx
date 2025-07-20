"use client";
import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-[#004AAD] text-white text-center text-sm py-4 px-4 z-50">
      <div className="max-w-screen-xl mx-auto">
        <p className="text-white/80">
          © {new Date().getFullYear()} BizWise. All rights reserved. Designed and built by{" "}
          <a
            href="https://fusionlabz.lk"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white font-medium hover:underline transition-colors duration-200"
          >
            FusionLabz.lk
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;