import type { Metadata } from "next";
import IndustryLandingTemplate from "@/components/ui/industry-landing-template";

export const metadata: Metadata = {
  title: "Business Intelligence for Retail in Sri Lanka | BizWise",
  description: "Retail dashboards, forecasting, and customer insight solutions for Sri Lankan stores and multi-outlet brands.",
};

export default function RetailPage() {
  const focusPoints = [
    {
      title: "Multi-Outlet Sales Performance",
      desc: "Compare regional performance across Colombo, Kandy, and Galle in real-time, isolating high-value items and branch sales margins.",
      iconName: "ShoppingBag"
    },
    {
      title: "Inventory Turn & Stockouts",
      desc: "Track inventory aging, calculate safety stocks, and optimize replenishment times to avoid missing sales on seasonal demands.",
      iconName: "BarChart3"
    },
    {
      title: "Customer Buying Behaviour",
      desc: "Group checkout bills by basket contents, identify cross-selling trends, and measure direct promotion effectiveness.",
      iconName: "Users"
    }
  ];

  const serviceLinks = [
    { label: "Explore Business Intelligence Dashboards", href: "/services/business-intelligence" },
    { label: "Consult Sales Forecasting & Predictive Models", href: "/services/sales-forecasting" }
  ];

  const articleLinks = [
    { label: "Read Customer Sentiment Guide for SL Retailers", href: "/insights/customer-sentiment-analysis-a-practical-guide-for-sl-retailers" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/industries/retail/#service",
    "name": "Business Intelligence for Retail in Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    },
    "description": "Retail dashboards, forecasting, and customer insight solutions for Sri Lankan stores and multi-outlet brands."
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
        "name": "Retail Industry",
        "item": "https://bizwise.lk/industries/retail"
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
      <IndustryLandingTemplate
        category="Retail & E-commerce"
        h1="Business Intelligence for Retail in Sri Lanka"
        description="Replace messy POS spreadsheet reports. We build unified sales, inventory, and margin analytics Dashboards designed specifically to help Sri Lankan retail chains optimize stock level capital."
        focusPoints={focusPoints}
        serviceLinks={serviceLinks}
        articleLinks={articleLinks}
        trackingLabel="retail_industry_consult"
      />
    </>
  );
}
