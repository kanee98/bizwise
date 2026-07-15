import type { Metadata } from "next";
import HomeWithLoader from "@/components/ui/home-with-loader";

export const metadata: Metadata = {
  title: "AI & Data Analytics Consultancy for Sri Lankan SMEs | BizWise",
  description: "Affordable AI consulting, BI dashboards & predictive analytics for Sri Lankan startups and SMEs. Get a free consultation.",
};

export default function Pages() {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://bizwise.lk/#organization",
    "name": "BizWise",
    "url": "https://bizwise.lk",
    "logo": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png",
    "description": "AI & Data Analytics Consultancy for Sri Lankan SMEs and Startups.",
    "sameAs": []
  };

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://bizwise.lk/#service",
    "name": "BizWise",
    "image": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png",
    "priceRange": "$$",
    "telephone": "+94766290934",
    "email": "contact@bizwise.lk",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "374/4/1 Narendrasinghe Lane, Habarakada Watta",
      "addressLocality": "Homagama",
      "addressRegion": "Western Province",
      "addressCountry": "LK"
    }
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://bizwise.lk/#website",
    "url": "https://bizwise.lk",
    "name": "BizWise",
    "description": "Affordable AI consulting, BI dashboards & predictive analytics for Sri Lankan startups and SMEs."
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
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      
      <HomeWithLoader />
    </>
  );
}