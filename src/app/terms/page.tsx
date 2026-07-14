import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | BizWise",
  description: "Review the terms governing use of the BizWise website and services.",
};

export default function TermsPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bizwise.lk/terms/#webpage",
    "url": "https://bizwise.lk/terms",
    "name": "Terms and Conditions | BizWise",
    "description": "Review the terms governing use of the BizWise website and services."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-gradient">Terms & Conditions</h1>
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 text-white/80 text-sm md:text-base leading-relaxed">
          <p>
            Last Updated: July 14, 2026
          </p>
          <p>
            Welcome to BizWise! These terms and conditions outline the rules and regulations for the use of BizWise&apos;s Website, located at https://bizwise.lk.
          </p>
          <p>
            By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use BizWise if you do not agree to take all of the terms and conditions stated on this page.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">1. License & Intellectual Property</h2>
          <p>
            Unless otherwise stated, BizWise owns the intellectual property rights for all material on BizWise. All intellectual property rights are reserved. You may access this from BizWise for your own personal use subjected to restrictions set in these terms and conditions.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">2. User Restrictions</h2>
          <p>
            You are specifically restricted from:
            - Publishing any website material in any other media without prior attribution.
            - Selling, sublicensing, or commercializing any website materials.
            - Using this website in any way that is or may be damaging to this website or local network speeds.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">3. Limitation of Liability</h2>
          <p>
            In no event shall BizWise, nor any of its founders or officers, be held liable for anything arising out of or in any way connected with your use of this website. BizWise, including its officers, shall not be held liable for any indirect or consequential liability.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">4. Service Terms</h2>
          <p>
            Consultation roadmap estimates and BI project delivery timelines remain subject to individual contract schedules executed separately between BizWise and our clients.
          </p>

          <div className="border-t border-white/5 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <span>Questions about our terms?</span>
            <Link href="/contact" className="text-[#4DA3FF] hover:underline font-semibold text-sm">
              Contact our Legal Team &rarr;
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
