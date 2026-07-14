import type { Metadata } from "next";
import IndustryLandingTemplate from "@/components/ui/industry-landing-template";

export const metadata: Metadata = {
  title: "Analytics for Logistics Companies Sri Lanka | BizWise",
  description: "Track fleet performance, route demand, and operational KPIs with logistics analytics built for Sri Lankan businesses.",
};

export default function LogisticsPage() {
  const focusPoints = [
    {
      title: "Fleet Performance & Telemetry",
      desc: "Monitor vehicle fuel consumption, track maintenance schedules, and measure driver idle times to reduce vehicle wear.",
      iconName: "Truck"
    },
    {
      title: "Route & Demand Optimization",
      desc: "Forecast drop-off load patterns to group delivery runs, reducing route duplication and improving dispatch timings.",
      iconName: "Navigation"
    },
    {
      title: "Operational SLA Reporting",
      desc: "Aggregate delivery success rates, calculate average transit hours, and view customer satisfaction metrics instantly.",
      iconName: "Activity"
    }
  ];

  const serviceLinks = [
    { label: "Interactive Power BI Dashboards", href: "/services/business-intelligence" },
    { label: "Predictive Demand Analytics", href: "/services/sales-forecasting" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/industries/logistics/#service",
    "name": "Analytics for Logistics Companies Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    },
    "description": "Track fleet performance, route demand, and operational KPIs with logistics analytics built for Sri Lankan businesses."
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
        "name": "Logistics Industry",
        "item": "https://bizwise.lk/industries/logistics"
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
        category="Logistics & Fleet"
        h1="Analytics for Logistics Companies in Sri Lanka"
        description="Consolidate vehicle tracker outputs, analyze shipping timelines, and reduce dispatch bottlenecks. We build high-performance data systems that trace logistics performance across Sri Lanka."
        focusPoints={focusPoints}
        serviceLinks={serviceLinks}
        trackingLabel="logistics_industry_consult"
      />
    </>
  );
}
