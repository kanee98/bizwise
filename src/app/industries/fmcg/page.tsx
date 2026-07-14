import type { Metadata } from "next";
import IndustryLandingTemplate from "@/components/ui/industry-landing-template";

export const metadata: Metadata = {
  title: "Analytics for FMCG Companies in Sri Lanka | BizWise",
  description: "Forecast demand, monitor sales, and improve inventory decisions with analytics built for Sri Lankan FMCG firms.",
};

export default function FmcgPage() {
  const focusPoints = [
    {
      title: "Predictive Demand Planning",
      desc: "Forecast item-level orders weekly. Align manufacturing schedules directly with distributor consumption metrics to prevent capital lockups.",
      iconName: "TrendingUp"
    },
    {
      title: "Distribution & Route Analytics",
      desc: "Trace fleet deliveries, drop-off compliance, and distributor run-rates across provinces, saving operational fuel costs.",
      iconName: "Truck"
    },
    {
      title: "Product Shelf-Life & Stock Age",
      desc: "Track batch codes, expiration dates, and warehouse aging speeds to drastically lower write-off losses of perishable goods.",
      iconName: "Package"
    }
  ];

  const serviceLinks = [
    { label: "Demand Forecasting Solutions", href: "/services/sales-forecasting" },
    { label: "Interactive Power BI Dashboards", href: "/services/business-intelligence" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/industries/fmcg/#service",
    "name": "Analytics for FMCG Companies in Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    },
    "description": "Forecast demand, monitor sales, and improve inventory decisions with analytics built for Sri Lankan FMCG firms."
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
        "name": "FMCG Industry",
        "item": "https://bizwise.lk/industries/fmcg"
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
        category="FMCG Companies"
        h1="Analytics for FMCG Companies in Sri Lanka"
        description="Optimize distributor allocations, streamline perishable food inventory, and forecast exact item demand. We help FMCG brands in Sri Lanka build unified dashboards that improve warehousing efficiency."
        focusPoints={focusPoints}
        serviceLinks={serviceLinks}
        trackingLabel="fmcg_industry_consult"
      />
    </>
  );
}
