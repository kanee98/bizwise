import type { Metadata } from "next";
import SentimentAnalysisClient from "./SentimentAnalysisClient";

export const metadata: Metadata = {
  title: "Customer Sentiment Analysis Sri Lanka | BizWise",
  description: "Understand what customers really think — AI-powered sentiment analysis for Sri Lankan brands.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/services/customer-sentiment-analysis/#service",
    "name": "Customer Sentiment Analysis Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk",
      "logo": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png"
    },
    "description": "Understand what customers really think — AI-powered sentiment analysis for Sri Lankan brands."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Can your sentiment model read Sinhala, Tamil, and Singlish text?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. Our natural language processing pipelines are trained to process and categorize Sinhala, Tamil, and local colloquial mix text (Singlish) commonly found in Sri Lankan social media comments."
        }
      },
      {
        "@type": "Question",
        "name": "How long does a customer sentiment project take to configure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard setup parsing existing Google Maps reviews and Typeform surveys is delivered as a functioning dashboard in 2 to 3 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Do you offer real-time sentiment alerts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We can construct Slack, WhatsApp, or email webhooks that automatically flag negative reviews or high-priority complaints to your management team instantly."
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
        "name": "Customer Sentiment Analysis",
        "item": "https://bizwise.lk/services/customer-sentiment-analysis"
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
      <SentimentAnalysisClient />
    </>
  );
}
