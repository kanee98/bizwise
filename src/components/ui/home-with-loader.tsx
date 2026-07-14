"use client";

import React, { useState, useEffect } from "react";
import Home from "@/app/home/page";
import Loader from "@/app/(internal)/loader/page";

export default function HomeWithLoader() {
  const [showLoader, setShowLoader] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Fade out after 1.5 seconds, remove from DOM after 2.0 seconds
    const fadeTimer = setTimeout(() => setFade(true), 1500);
    const removeTimer = setTimeout(() => setShowLoader(false), 2000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  return (
    <>
      <Home />
      {showLoader && (
        <div className={`transition-opacity duration-500 ${fade ? "opacity-0 pointer-events-none" : "opacity-100"}`}>
          <Loader />
        </div>
      )}
    </>
  );
}
