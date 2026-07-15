import type { Metadata } from "next";
import SalesForecastingClient from "./SalesForecastingClient";

export const metadata: Metadata = {
  title: "Sales Forecasting & Predictive Analytics Sri Lanka | BizWise",
  description: "Predict demand and reduce stockouts with AI-driven sales forecasting for Sri Lankan retailers and SMEs.",
};

export default function Page() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/services/sales-forecasting/#service",
    "name": "Sales Forecasting & Predictive Analytics Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk",
      "logo": "https://bizwise.lk/Bizwise-Logo-No-BG-Full.png"
    },
    "description": "Predict demand and reduce stockouts with AI-driven sales forecasting for Sri Lankan retailers and SMEs."
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What machine learning models do you use for sales forecasting?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We primarily utilize time-series forecasting frameworks like Meta's Prophet, SARIMAX, and gradient-boosted trees (XGBoost) configured to identify seasonal purchasing spikes."
        }
      },
      {
        "@type": "Question",
        "name": "How much sales data is required to get accurate forecasts?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ideally, at least 12 to 24 months of weekly or monthly transaction records are needed to properly train models on seasonal holidays like Avurudu, Christmas, and Wesak."
        }
      },
      {
        "@type": "Question",
        "name": "Can forecasting connect with our local POS systems?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. We set up automated export scripts that pull transactions from your Point of Sale (POS) system on a weekly basis, feeding them directly into our modeling pipeline."
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
        "name": "Sales Forecasting",
        "item": "https://bizwise.lk/services/sales-forecasting"
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
      <SalesForecastingClient />
    </>
  );
}
