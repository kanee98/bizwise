"use client";

import { useScrollToTop } from "@/hooks/page";

export default function ServicesPage() {
  useScrollToTop();

  return (
    <main className="text-white flex flex-col items-center px-6 py-12 relative z-10 pb-20">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl font-extrabold mb-4">Our Services</h1>
        <p className="text-lg text-white/80">
          Explore our carefully crafted service tiers designed to meet your business needs at every level of growth.
        </p>
      </div>

      <section className="w-full max-w-5xl space-y-10">
        {/* Tier 1 */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10">
          <h2 className="text-2xl font-bold text-[#4DA3FF] mb-2">Tier 1: Foundational Services</h2>
          <h3 className="text-xl font-semibold text-white mb-4">The "Get Control" Package</h3>
          <p className="text-white/80">
            Ideal for startups and small businesses looking to establish their digital presence. We’ll help you build solid foundations—from tailored websites to smart integrations.
          </p>
        </div>

        {/* Tier 2 */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10">
          <h2 className="text-2xl font-bold text-[#4DA3FF] mb-2">Tier 2: High-Value Differentiator Services</h2>
          <h3 className="text-xl font-semibold text-white mb-4">The "AI-Powered Edge" Package</h3>
          <p className="text-white/80">
            Perfect for businesses aiming to innovate. Unlock AI tools, automation, and data-driven insights to gain a competitive edge and delight your users.
          </p>
        </div>

        {/* Tier 3 */}
        <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 shadow-md border border-white/10">
          <h2 className="text-2xl font-bold text-[#4DA3FF] mb-2">Tier 3: Strategic & Growth Services</h2>
          <h3 className="text-xl font-semibold text-white mb-4">The "Strategic Partner" Package</h3>
          <p className="text-white/80">
            For businesses ready to scale. We act as your long-term tech partner—offering strategic planning, continuous optimization, and ongoing innovation support.
          </p>
        </div>
      </section>
    </main>
  );
}