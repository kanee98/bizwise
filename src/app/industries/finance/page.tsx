import type { Metadata } from "next";
import IndustryLandingTemplate from "@/components/ui/industry-landing-template";

export const metadata: Metadata = {
  title: "Analytics for Finance Teams Sri Lanka | BizWise",
  description: "Build reporting and forecasting workflows for Sri Lankan finance teams with BizWise analytics support.",
};

export default function FinancePage() {
  const focusPoints = [
    {
      title: "Cash Flow & Runway Forecasting",
      desc: "Apply predictive modeling to calculate weekly cash runways, forecast collection inflows, and schedule expenses intelligently.",
      iconName: "Coins"
    },
    {
      title: "Automated Management Reports",
      desc: "Unroll visual Profit & Loss sheets, balance sheets, and cost breakdown matrices directly to save weeks of manual preparation.",
      iconName: "LineChart"
    },
    {
      title: "Operating Margin Optimization",
      desc: "Deep-dive into branch overheads, shipping costs, and supplier price variations to protect unit margins from inflation.",
      iconName: "ShieldCheck"
    }
  ];

  const serviceLinks = [
    { label: "Interactive Power BI Dashboards", href: "/services/business-intelligence" },
    { label: "Predictive Sales Forecasting", href: "/services/sales-forecasting" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/industries/finance/#service",
    "name": "Analytics for Finance Teams Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    },
    "description": "Build reporting and forecasting workflows for Sri Lankan finance teams with BizWise analytics support."
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
        "name": "Finance Analytics",
        "item": "https://bizwise.lk/industries/finance"
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
        category="Finance Teams"
        h1="Analytics for Finance Teams in Sri Lanka"
        description="Automate repetitive ledger calculations, build dynamic runways, and present clear board reports. We partner with finance leads and accountants to deploy Power BI dashboards that simplify transaction structures."
        focusPoints={focusPoints}
        serviceLinks={serviceLinks}
        trackingLabel="finance_industry_consult"
      />
    </>
  );
}
