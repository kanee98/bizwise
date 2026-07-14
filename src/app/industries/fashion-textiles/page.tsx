import type { Metadata } from "next";
import IndustryLandingTemplate from "@/components/ui/industry-landing-template";

export const metadata: Metadata = {
  title: "Analytics for Fashion and Textiles Sri Lanka | BizWise",
  description: "Improve planning, reporting, and demand visibility for Sri Lankan fashion and textile businesses.",
};

export default function FashionPage() {
  const focusPoints = [
    {
      title: "Seasonal Demand Planning",
      desc: "Model seasonal spikes (Avurudu, Christmas, Ramazan) at the SKU level to optimize fabric and accessory purchasing schedules.",
      iconName: "Sparkles"
    },
    {
      title: "Production Visibility",
      desc: "Consolidate loom run-rates, sewing lines outputs, and delivery completion times to identify batch lag bottlenecks.",
      iconName: "Activity"
    },
    {
      title: "Sales & Margin Dashboards",
      desc: "Trace net margins after dye costs, transport fees, and store overheads, identifying which apparel lines are actually driving profit.",
      iconName: "BarChart3"
    }
  ];

  const serviceLinks = [
    { label: "Interactive Power BI Dashboards", href: "/services/business-intelligence" },
    { label: "Predictive Demand Analytics", href: "/services/sales-forecasting" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/industries/fashion-textiles/#service",
    "name": "Analytics for Fashion and Textiles in Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    },
    "description": "Improve planning, reporting, and demand visibility for Sri Lankan fashion and textile businesses."
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
        "name": "Fashion & Textiles Industry",
        "item": "https://bizwise.lk/industries/fashion-textiles"
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
        category="Fashion & Textiles"
        h1="Analytics for Fashion and Textiles in Sri Lanka"
        description="Streamline fabric raw material orders, track production line efficiency, and optimize boutique sales. We build specialized analytics suites for fashion designers, garment manufacturers, and retail apparel brands."
        focusPoints={focusPoints}
        serviceLinks={serviceLinks}
        trackingLabel="fashion_industry_consult"
      />
    </>
  );
}
