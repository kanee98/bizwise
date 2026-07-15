import type { Metadata } from "next";
import ContactClient from "./ContactClient";

export const metadata: Metadata = {
  title: "Contact BizWise | AI and Analytics Consulting Sri Lanka",
  description: "Get in touch with BizWise for AI consulting, business intelligence, forecasting, and analytics support.",
};

export default function ContactPage() {
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": "https://bizwise.lk/contact/#webpage",
    "url": "https://bizwise.lk/contact",
    "name": "Contact BizWise",
    "description": "Get in touch with BizWise for AI consulting, business intelligence, forecasting, and analytics support.",
    "isPartOf": {
      "@type": "WebSite",
      "@id": "https://bizwise.lk/#website",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    }
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
        "name": "Contact Us",
        "item": "https://bizwise.lk/contact"
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ContactClient />
    </>
  );
}