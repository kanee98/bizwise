import type { Metadata } from "next";
import ServicesClient from "./ServicesClient";

export const metadata: Metadata = {
  title: "AI & Data Services for Sri Lankan Businesses | BizWise",
  description: "Explore BizWise services for AI consulting, business intelligence, sales forecasting, and customer sentiment analysis.",
};

export default function ServicesPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/services/#service",
    "name": "BizWise AI & Data Analytics Services",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk",
      "logo": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png"
    },
    "description": "Explore BizWise services for AI consulting, business intelligence, sales forecasting, and customer sentiment analysis.",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "AI & Analytics Offerings",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Consulting for SMEs"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Business Intelligence"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sales Forecasting & Predictive Analytics"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Customer Sentiment Analysis"
          }
        }
      ]
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
        "name": "Services",
        "item": "https://bizwise.lk/services"
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <ServicesClient />
    </>
  );
}