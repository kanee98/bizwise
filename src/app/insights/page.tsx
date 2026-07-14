import type { Metadata } from "next";
import InsightsClient from "./InsightsClient";

export const metadata: Metadata = {
  title: "BizWise Insights: AI, BI, and Predictive Analytics for SMEs",
  description: "Practical guides, articles, and case studies on AI, business intelligence, and forecasting for Sri Lankan businesses.",
};

export default function Page() {
  const blogSchema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    "@id": "https://bizwise.lk/insights/#blog",
    "name": "BizWise Insights",
    "url": "https://bizwise.lk/insights",
    "description": "Practical guides, articles, and case studies on AI, business intelligence, and forecasting for Sri Lankan businesses.",
    "publisher": {
      "@type": "Organization",
      "name": "BizWise",
      "logo": {
        "@type": "ImageObject",
        "url": "https://bizwise.lk/Bizwise%20Logo%20No%20BG%20-%20Full.png"
      }
    }
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <InsightsClient />
    </>
  );
}
