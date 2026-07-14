import type { Metadata } from "next";
import BIClient from "./BIClient";

export const metadata: Metadata = {
  title: "Business Intelligence for Startups Sri Lanka | BizWise",
  description: "Power BI dashboards and BI systems built for Sri Lankan startups to track what matters, fast.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/services/business-intelligence/#service",
    "name": "Business Intelligence for Startups in Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk",
      "logo": "https://bizwise.lk/Bizwise%20Logo%20No%20BG%20-%20Full.png"
    },
    "description": "Power BI dashboards and BI systems built for Sri Lankan startups to track what matters, fast."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Do we need to buy expensive Power BI Pro licenses?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No. For startups and small teams, we can set up Power BI Desktop (free) or share reports securely via PDF schedules and embedded sheets, avoiding ongoing licensing fees."
        }
      },
      {
        "@type": "Question",
        "name": "How long does it take to build a custom dashboard?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A standard setup unrolling from a clean spreadsheet or single database takes 2 to 3 weeks. Complex multi-endpoint systems take 4 to 6 weeks."
        }
      },
      {
        "@type": "Question",
        "name": "Where is our data stored? Is it safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, 100% safe. The data resides securely inside your own local servers or cloud workspace. BizWise never hosts or owns your transaction history."
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
        "name": "Business Intelligence",
        "item": "https://bizwise.lk/services/business-intelligence"
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
      <BIClient />
    </>
  );
}
