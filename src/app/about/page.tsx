import type { Metadata } from "next";
import AboutClient from "./AboutClient";

export const metadata: Metadata = {
  title: "About BizWise – AI Consultancy Built for Sri Lankan SMEs",
  description: "Meet the team behind BizWise and our mission to make AI and data analytics accessible to Sri Lankan businesses.",
};

export default function AboutPage() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "@id": "https://bizwise.lk/about/#webpage",
    "url": "https://bizwise.lk/about",
    "name": "About BizWise",
    "description": "Meet the team behind BizWise and our mission to make AI and data analytics accessible to Sri Lankan businesses.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://bizwise.lk/#website",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    }
  };

  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bizwise.lk/#organization",
    "name": "BizWise",
    "url": "https://bizwise.lk",
    "logo": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png"
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
        "name": "About",
        "item": "https://bizwise.lk/about"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <AboutClient />
    </>
  );
}