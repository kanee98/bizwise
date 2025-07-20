"use client";

import { useScrollToTop, useCalendlyEmbed } from "@/hooks/page";

export default function SchedulePage() {
    useScrollToTop();
    useCalendlyEmbed();

    return (
        <main className="text-white flex flex-col items-center justify-center px-6 py-12 relative z-10">
        <div className="text-center mb-10">
            <h1 className="text-4xl font-extrabold leading-tight mb-4">
            Schedule Your Free Consultation
            </h1>
            <p className="text-lg text-white/80 max-w-xl mx-auto">
            Let’s connect and explore how we can bring your vision to life.
            Book a time that suits you best below.
            </p>
        </div>

        <div className="w-full max-w-4xl bg-white/5 backdrop-blur-md rounded-2xl shadow-lg p-4">
            <div
            className="calendly-inline-widget"
            data-url="https://calendly.com/kaniyouth/consultation"
            style={{ minWidth: "320px", height: "700px" }}
            ></div>
        </div>
        </main>
    );
}
