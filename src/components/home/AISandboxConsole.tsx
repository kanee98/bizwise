"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Sparkles, Database, Play, CheckCircle2, RefreshCw } from "lucide-react";
import { Button } from "@/components/ui/button";

type TabId = "forecast" | "sentiment" | "pipeline";

export default function AISandboxConsole() {
  const [activeTab, setActiveTab] = useState<TabId>("forecast");
  const [isRunning, setIsRunning] = useState(false);
  const [progress, setProgress] = useState(0);
  const [logMessages, setLogMessages] = useState<string[]>([]);

  // Tab configurations
  const tabs = [
    { id: "forecast", label: "Predictive Forecasting", icon: TrendingUp, desc: "Run a demand forecasting audit on item stocks" },
    { id: "sentiment", label: "NLP Sentiment Analyzer", icon: Sparkles, desc: "Process review feeds to extract sentiment insights" },
    { id: "pipeline", label: "Automated Data Pipeline", icon: Database, desc: "Unify scattered database endpoints into Power BI" }
  ] as const;

  // Run simulation
  const startSimulation = () => {
    setIsRunning(true);
    setProgress(0);
    setLogMessages([]);
  };

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setProgress((prev) => {
        const next = prev + 5;
        if (next >= 100) {
          clearInterval(interval);
          setIsRunning(false);
          return 100;
        }
        return next;
      });
    }, 150);

    return () => clearInterval(interval);
  }, [isRunning]);

  // Handle Tab changes
  useEffect(() => {
    setIsRunning(false);
    setProgress(0);
    setLogMessages([]);
  }, [activeTab]);

  // Log messages manager based on progress
  useEffect(() => {
    if (isRunning) {
      // In progress logs
      const steps = Math.floor(progress / 20);
      if (activeTab === "forecast") {
        const forecastLogs = [
          "Initializing predictive model...",
          "Loading 36-month historical sales ledger...",
          "Weighting holiday indices...",
          "Calculating demand vectors...",
          "Verifying confidence coefficients..."
        ];
        setLogMessages(forecastLogs.slice(0, Math.max(1, steps)));
      } else if (activeTab === "sentiment") {
        const sentimentLogs = [
          "Accessing review feeds...",
          "Ingesting sentences...",
          "Parsing text syntax...",
          "Mapping word sentiment weightings...",
          "Averaging profile scores..."
        ];
        setLogMessages(sentimentLogs.slice(0, Math.max(1, steps)));
      } else {
        const pipelineLogs = [
          "Pinging databases...",
          "Connecting Stripe API nodes...",
          "Transforming spreadsheet tables...",
          "Creating data relationship structures...",
          "Building dashboards report views..."
        ];
        setLogMessages(pipelineLogs.slice(0, Math.max(1, steps)));
      }
    } else {
      if (progress === 100) {
        if (activeTab === "forecast") {
          setLogMessages([
            "Initializing predictive model...",
            "Loading 36-month historical sales ledger.",
            "Weighting holiday indices and seasonal parameters.",
            "Calculated future safety stock target: 142 units.",
            "Demand Forecast Completed. (Confidence Rate: 94.6%)"
          ]);
        } else if (activeTab === "sentiment") {
          setLogMessages([
            "Accessing API review logs.",
            "Ingesting text tokens: 'Excellent delivery and premium fit.'",
            "Running polarity assessment on 15 keywords.",
            "Top positive tag detected: 'delivery rate' (confidence 97%).",
            "Polarity detection: 88.5% Positive Sentiment."
          ]);
        } else {
          setLogMessages([
            "Handshaking with PostgreSQL transaction servers.",
            "Ingesting Excel checkout worksheets.",
            "Normalizing tables schemas into Power BI star-model.",
            "Flushing caches. Refresh complete.",
            "Data Pipeline online. Next auto-sync: 15 minutes."
          ]);
        }
      } else if (progress === 0) {
        setLogMessages(["Console ready. Click 'Run Model' to trigger simulation."]);
      }
    }
  }, [progress, isRunning, activeTab]);

  return (
    <div className="w-full max-w-5xl mx-auto mt-16 px-4 md:px-0 relative z-20">
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-4xl font-extrabold text-white tracking-tight">
          BizWise AI Sandbox Console
        </h2>
        <p className="text-sm md:text-base text-white/60 mt-2 max-w-xl mx-auto">
          Test our core engine parameters and witness simulated analytics processing pipelines in real time.
        </p>
      </div>

      <div className="glow-border-moving rounded-3xl overflow-hidden border border-white/10 shadow-2xl p-6 md:p-8 bg-[#0a1128]/70">

        {/* Navigation Tabs */}
        <div className="flex flex-col md:flex-row gap-3 border-b border-white/15 pb-6">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const active = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 flex items-center gap-3 text-left p-4 rounded-2xl transition duration-300 ${active
                    ? "bg-[#007BFF]/10 border border-[#007BFF]/40 text-[#4DA3FF]"
                    : "bg-white/5 border border-transparent hover:bg-white/10 text-white/70"
                  }`}
              >
                <div className={`p-2.5 rounded-xl ${active ? "bg-[#007BFF]/20 text-[#4DA3FF]" : "bg-white/5 text-white/60"}`}>
                  <Icon size={20} />
                </div>
                <div>
                  <span className="font-bold text-sm block">{tab.label}</span>
                  <span className="text-xs text-white/40 block mt-0.5">{tab.desc}</span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Display Console */}
        <div className="grid md:grid-cols-5 gap-8 pt-8">

          {/* Controls & Metrics */}
          <div className="md:col-span-2 flex flex-col justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-semibold tracking-wider text-white/40 block mb-2">Simulated Sandbox</span>
              <h3 className="text-xl font-bold text-white mb-4">
                {activeTab === "forecast" && "Predictive Inventory Models"}
                {activeTab === "sentiment" && "Text Analysis Polarity Check"}
                {activeTab === "pipeline" && "Cross-Platform Report Sync"}
              </h3>
              <p className="text-sm text-white/70 leading-relaxed">
                {activeTab === "forecast" && "Analyze previous inventory cycles to forecast safety stock quantities. Helps FMCG and apparel stores eliminate stockouts."}
                {activeTab === "sentiment" && "Extract reviews directly from e-commerce checkouts and social sites to monitor brand reputation dynamics automatically."}
                {activeTab === "pipeline" && "Aggregate raw spreadsheets and local SQL data into clean, synchronized business reporting boards."}
              </p>
            </div>

            <div className="space-y-4">
              <Button
                onClick={startSimulation}
                disabled={isRunning}
                className="w-full bg-[#007BFF] hover:bg-[#0054ad] text-white py-6 rounded-xl font-bold btn-cta glow-btn flex items-center justify-center gap-2"
              >
                {isRunning ? (
                  <>
                    <RefreshCw className="animate-spin" size={18} /> Processing Model...
                  </>
                ) : (
                  <>
                    <Play size={18} /> Run Model
                  </>
                )}
              </Button>

              {/* Progress indicator */}
              <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                <div className="flex justify-between items-center text-xs text-white/50 mb-2 font-mono">
                  <span>SYSTEM_LOAD</span>
                  <span>{progress}%</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="bg-[#007BFF] h-full"
                    animate={{ width: `${progress}%` }}
                    transition={{ ease: "easeInOut" }}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Terminal Console output */}
          <div className="md:col-span-3 bg-black/50 border border-white/10 rounded-2xl p-6 font-mono text-xs flex flex-col justify-between min-h-[300px] shadow-inner">
            <div className="space-y-3.5 select-none">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-white/30">bizwise_agent_terminal.log</span>
              </div>

              <div className="space-y-2.5 overflow-y-auto max-h-[220px]">
                {logMessages.map((msg, i) => {
                  const isSuccessMsg = msg.includes("Completed") || msg.includes("Pipeline online") || msg.includes("Positive Sentiment");
                  return (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -5 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                      className={`flex items-start gap-2 ${isSuccessMsg ? "text-[#4DA3FF] font-bold" : "text-white/60"}`}
                    >
                      <span>&gt;</span>
                      <span>{msg}</span>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Simulated Live Outputs Graph/Stats */}
            <div className="border-t border-white/5 pt-4 mt-4">
              <AnimatePresence mode="wait">
                {progress === 100 ? (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="bg-[#007BFF]/10 border border-[#007BFF]/20 rounded-xl p-4 flex items-center gap-4"
                  >
                    <CheckCircle2 className="text-emerald-400 shrink-0" size={20} />
                    <div>
                      <span className="text-[10px] text-white/40 block font-sans uppercase font-bold tracking-wider">Simulated Output</span>
                      <span className="text-sm font-bold text-white">
                        {activeTab === "forecast" && "Demand Index: 1.4x increase expected next month."}
                        {activeTab === "sentiment" && "Overall Brand Index score: 9.2/10 Positive rating."}
                        {activeTab === "pipeline" && "Reporting connection live: 4 active schema tables synced."}
                      </span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-[10px] text-white/20 text-center py-2">
                    Waiting for output matrix to generate...
                  </div>
                )}
              </AnimatePresence>
            </div>

          </div>

        </div>

      </div>
      <br></br>
    </div>
  );
}
