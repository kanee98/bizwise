import type { Metadata } from "next";
import ArticleTemplate from "@/components/ui/article-template";

export const metadata: Metadata = {
  title: "AI Adoption Roadmap for a 10-Person Sri Lankan Business",
  description: "A practical roadmap for small Sri Lankan businesses that want to adopt AI without unnecessary complexity.",
};

export default function Page() {
  const faqs = [
    {
      question: "Do we need to hire an in-house machine learning developer?",
      answer: "No. For a team of 10 people, hiring a full-time ML engineer is rarely cost-effective. It is better to use existing, secure APIs and consult an external agency (like BizWise) to configure the system."
    },
    {
      question: "What are the biggest security concerns when small teams adopt AI?",
      answer: "The primary risk is uploading sensitive customer data or financial statements into public LLMs. We always configure secure enterprise API endpoints that guarantee your inputs are never used to train public models."
    },
    {
      question: "How long does it take for a 10-person team to see ROI?",
      answer: "By automating repetitive tasks like email parsing and support ticket routing, most teams recover their initial setup investments within 2 to 3 months by saving hours of manual labor."
    }
  ];

  const relatedLinks = [
    { label: "View SME AI Consulting Services", href: "/services/ai-consulting-sme" },
    { label: "Explore Insights Hub", href: "/insights" }
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": "https://bizwise.lk/insights/ai-adoption-roadmap-for-a-10-person-sri-lankan-business/#article",
    "headline": "AI Adoption Roadmap for a 10-Person Sri Lankan Business",
    "description": "A practical roadmap for small Sri Lankan businesses that want to adopt AI without unnecessary complexity.",
    "author": {
      "@type": "Person",
      "name": "Danesh Jayasinghe"
    },
    "publisher": {
      "@type": "Organization",
      "name": "BizWise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizwise.lk/Bizwise%20Logo%20No%20BG%20-%20Full.png"
      }
    },
    "datePublished": "2026-06-24"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do we need to hire an in-house machine learning developer?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. For a team of 10 people, hiring a full-time ML engineer is rarely cost-effective. It is better to use existing, secure APIs and consult an external agency (like BizWise) to configure the system."
        }
      },
      {
        "@type": "Question",
        "name": "What are the biggest security concerns when small teams adopt AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The primary risk is uploading sensitive customer data or financial statements into public LLMs. We always configure secure enterprise API endpoints that guarantee your inputs are never used to train public models."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take for a 10-person team to see ROI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "By automating repetitive tasks like email parsing and support ticket routing, most teams recover their initial setup investments within 2 to 3 months by saving hours of manual labor."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://bizwise.lk"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Insights",
        "item": "https://bizwise.lk/insights"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Adoption Roadmap Article",
        "item": "https://bizwise.lk/insights/ai-adoption-roadmap-for-a-10-person-sri-lankan-business"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <ArticleTemplate
        category="AI Strategy"
        h1="AI Adoption Roadmap for a 10-Person Sri Lankan Business"
        readTime="8 min read"
        date="June 24, 2026"
        author="Danesh Jayasinghe"
        faqs={faqs}
        relatedLinks={relatedLinks}
        ctaText="Book an AI Readiness Session"
        trackingLabel="article_ai_roadmap_session"
      >
        <p>
          There is a massive amount of hype surrounding Artificial Intelligence. Sri Lankan business owners are flooded with articles telling them to restructure their entire workspace using LLMs or risk falling behind.
        </p>
        <p>
          For a small business of 10 to 50 people, trying to deploy custom models or hiring full-time AI engineers is a recipe for wasted capital. What you need instead is a practical, step-by-step roadmap that focuses on quick automation wins and low-maintenance tools. Let&apos;s outline the blueprint.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-2">Step 1: Identify Your Repetitive Gaps</h3>
        <p>
          Do not adopt AI for the sake of it. Audit your team&apos;s weekly schedule. If your customer service representative spends 3 hours a day copy-pasting answers to standard delivery questions, that is an immediate candidate for an automated AI chatbot assistant.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-2">Step 2: Establish Simple Team Roles</h3>
        <p>
          For a 10-person business, you do not need complex tech titles. Appoint one internal &apos;AI Champion&apos;—usually an operations coordinator or project manager—who understands your daily customer touchpoints and is interested in workflows. They will coordinate the rollout.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-2">Step 3: Setup Secure, Low-Code Connectors</h3>
        <p>
          Instead of building custom software from scratch, connect your current tools (like Slack, Google Drive, and Gmail) using secure connector engines like Make or Zapier. You can link your support email box to OpenAI&apos;s API to drafts replies for reviews automatically, saving hours of typing.
        </p>

        <h3 className="text-xl font-bold text-white mt-8 mb-2">Step 4: Keep Data Secure & Compliant</h3>
        <p>
          Under Sri Lanka&apos;s Personal Data Protection Act, you must safeguard client records. Never upload unencrypted customer profiles, transaction ledgers, or phone numbers directly into public AI portals. Make sure any developer or consultant you hire configures private API endpoints.
        </p>
      </ArticleTemplate>
    </>
  );
}
