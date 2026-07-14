import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | BizWise",
  description: "Learn how BizWise handles user data, inquiries, and website interactions.",
};

export default function PrivacyPolicyPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://bizwise.lk/privacy-policy/#webpage",
    "url": "https://bizwise.lk/privacy-policy",
    "name": "Privacy Policy | BizWise",
    "description": "Learn how BizWise handles user data, inquiries, and website interactions."
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <main className="min-h-screen text-white font-sans pt-28 pb-20 relative z-10 max-w-4xl mx-auto px-6">
        <h1 className="text-3xl md:text-5xl font-extrabold mb-8 text-gradient">Privacy Policy</h1>
        
        <div className="glass-panel p-8 md:p-12 rounded-3xl border border-white/10 space-y-6 text-white/80 text-sm md:text-base leading-relaxed">
          <p>
            Last Updated: July 14, 2026
          </p>
          <p>
            At BizWise, accessible from https://bizwise.lk, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by BizWise and how we use it.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">1. Information We Collect</h2>
          <p>
            If you contact us directly via our contact form, email channels, or phone, we may collect your name, email address, phone number, and the contents of the message you send.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">2. How We Use Your Information</h2>
          <p>
            We use the collected data to respond to inquiries, optimize website user experience, detect technical errors, and compile anonymized statistics for our marketing dashboard.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">3. Cookies and Analytics</h2>
          <p>
            BizWise uses Google Analytics (GA4) to evaluate general visitor flows. These cookies collect standard browser logs in an anonymized format. No sensitive personal transaction records are compiled by our trackers.
          </p>

          <h2 className="text-xl font-bold text-white mt-8">4. Data Integrity</h2>
          <p>
            We do not share, sell, or rent your personal information to third-party advertisers. All records are stored securely in encrypted cloud containers under local DPA guidelines.
          </p>

          <div className="border-t border-white/5 pt-6 mt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40">
            <span>Have privacy concerns?</span>
            <Link href="/contact" className="text-[#4DA3FF] hover:underline font-semibold text-sm">
              Contact our Data Strategist &rarr;
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
