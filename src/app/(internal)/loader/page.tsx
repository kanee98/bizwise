"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

export default function BizwiseLoader() {
  const [progress, setProgress] = useState(0);
  const [statusIdx, setStatusIdx] = useState(0);

  const statuses = [
    "BOOTSTRAPPING NEURAL CORE...",
    "ESTABLISHING DATABASE HANDSHAKES...",
    "PARSING STAR SCHEMA FACT TABLES...",
    "STREAMING LIVE TRANSACTION INGESTION...",
    "SYNTHESIZING PREDICTIVE FORECAST MODELS...",
    "BIZWISE DATA SUITE ONLINE"
  ];

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        const diff = Math.floor(Math.random() * 8) + 4;
        return Math.min(prev + diff, 100);
      });
    }, 70);

    return () => clearInterval(progressInterval);
  }, []);

  useEffect(() => {
    if (progress < 20) setStatusIdx(0);
    else if (progress < 40) setStatusIdx(1);
    else if (progress < 60) setStatusIdx(2);
    else if (progress < 80) setStatusIdx(3);
    else if (progress < 95) setStatusIdx(4);
    else setStatusIdx(5);
  }, [progress]);

  const barLength = 20;
  const filledLength = Math.round((progress / 100) * barLength);
  const barStr = "[" + "=".repeat(filledLength) + ".".repeat(barLength - filledLength) + "]";

  return (
    <div id="loading-wrapper" className="bg-[#0a1128] overflow-hidden flex flex-col items-center justify-center font-mono select-none">
      
      {/* Background Cyber Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,123,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,123,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none z-0" />
      
      {/* Ambient center spotlight */}
      <div className="absolute w-[500px] h-[500px] bg-radial-gradient from-[#007BFF]/10 to-transparent rounded-full blur-3xl pointer-events-none z-0" />

      <div id="loading-content" className="z-10 relative flex flex-col items-center">
        {/* Pulsing Concentric Spinning Rings */}
        <div className="relative w-64 h-64 flex items-center justify-center">
          <div className="absolute inset-0 border border-white/5 rounded-full" />
          <div className="absolute inset-0 border-2 border-transparent border-t-[#4DA3FF] border-b-[#00c8ff] rounded-full animate-spin [animation-duration:2.5s]" />
          <div className="absolute inset-4 border border-transparent border-r-[#007BFF] border-l-emerald-400 rounded-full animate-spin [animation-duration:1.2s] [animation-direction:reverse]" />
          <div className="absolute inset-8 border border-white/10 border-dashed rounded-full" />
          
          {/* Core Logo Container */}
          <div className="w-44 h-44 rounded-full bg-[#0a1128]/90 border border-white/10 flex items-center justify-center p-6 relative z-10 shadow-[0_0_50px_rgba(0,123,255,0.25)]">
            <Image
              src="/Bizwise-Logo-No-BG-Full.png"
              alt="BizWise Logo"
              width={130}
              height={130}
              className="object-contain animate-pulse [animation-duration:1.8s]"
              priority
            />
          </div>
        </div>
      </div>

      {/* Futuristic Boot Console */}
      <div className="mt-10 z-10 w-[92vw] max-w-[460px] bg-slate-950/80 border border-white/10 rounded-2xl p-5 backdrop-blur-md text-left relative overflow-hidden shadow-2xl">
        {/* Loading track line */}
        <div className="absolute top-0 left-0 h-[2px] bg-[#007BFF] transition-all duration-300" style={{ width: `${progress}%` }} />
        
        {/* Console Header */}
        <div className="flex justify-between items-center text-[10px] text-white/40 mb-3 uppercase tracking-wider font-mono">
          <span>System Bootstrap</span>
          <span className="text-[#4DA3FF] animate-pulse">Running</span>
        </div>

        {/* Tech Details */}
        <div className="space-y-2 text-xs font-mono">
          <div className="flex justify-between text-white/70">
            <span>Neural Processor Core:</span>
            <span className="text-emerald-400 font-bold">READY</span>
          </div>
          <div className="text-white/70">
            <span>Initializing Task:</span> <span className="text-[#4DA3FF] font-semibold">{statuses[statusIdx]}</span>
          </div>
          
          <div className="text-white/40 text-[9px] pt-1">
            <span>Boot log:</span>
            <div className="mt-1.5 bg-black/40 p-3 rounded-xl border border-white/5 font-mono text-[9px] text-[#4DA3FF] leading-relaxed">
              &gt; {barStr} {progress}%
              <br />
              &gt; SYNAPSE HANDSHAKE TO CLOUD SERVERS... OK
              {progress > 30 && (
                <>
                  <br />
                  &gt; Dim_Product, Dim_Location, Fact_Sales joined.
                </>
              )}
              {progress > 65 && (
                <>
                  <br />
                  &gt; Running demand predictive models (MAPE: 8.41%).
                </>
              )}
              {progress > 90 && (
                <>
                  <br />
                  &gt; Star schema normalized. Client metrics live.
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <span id="loading-text" className="z-10 mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-[#4DA3FF] animate-pulse">
        Initializing BizWise Matrix
      </span>
    </div>
  );
}