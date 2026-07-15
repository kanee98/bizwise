import type { Metadata } from "next";
import AIConsultingClient from "./AIConsultingClient";

export const metadata: Metadata = {
  title: "AI Consulting for SMEs in Sri Lanka | BizWise",
  description: "Practical AI adoption strategy for small businesses in Sri Lanka — no enterprise budget required.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/services/ai-consulting-sme/#service",
    "name": "AI Consulting for SMEs in Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk",
      "logo": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png"
    },
    "description": "Practical AI adoption strategy for small businesses in Sri Lanka — no enterprise budget required."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do I need a big tech budget to implement AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. We specifically focus on affordable open-source tools, API integrations (like OpenAI or Anthropic), and existing workflow systems that require minimal monthly subscription costs."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a typical AI adoption roadmap take to deploy?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard roadmap and discovery phase takes 2 to 3 weeks. Actual chatbot or automation integrations are typically delivered in 4 to 8 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "How do I know if my business is ready for AI?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "If your team spends more than 5 hours a week doing repetitive typing, answering similar customer questions, or copy-pasting data, you are ready for automation."
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
        "name": "Services",
        "item": "https://bizwise.lk/services"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "AI Consulting for SMEs",
        "item": "https://bizwise.lk/services/ai-consulting-sme"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AIConsultingClient />
    </>
  );
}
