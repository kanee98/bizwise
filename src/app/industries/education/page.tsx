import type { Metadata } from "next";
import IndustryLandingTemplate from "@/components/ui/industry-landing-template";

export const metadata: Metadata = {
  title: "Analytics for Education Providers Sri Lanka | BizWise",
  description: "Improve student, lead, and performance reporting with analytics for Sri Lankan education providers.",
};

export default function EducationPage() {
  const focusPoints = [
    {
      title: "Course Enrollment Metrics",
      desc: "Track enrollments, calculate student retention, and monitor drop-out factors across different semesters or courses.",
      iconName: "GraduationCap"
    },
    {
      title: "Marketing Lead Conversion",
      desc: "Audit Facebook registration forms, trace phone inquiries, and measure lead conversion rates to optimize course advertising.",
      iconName: "BarChart3"
    },
    {
      title: "Student Performance Tracking",
      desc: "Consolidate grade sheets and attendance records into visual progress indicators to improve pass rates and track academic metrics.",
      iconName: "Users"
    }
  ];

  const serviceLinks = [
    { label: "Interactive Power BI Dashboards", href: "/services/business-intelligence" }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://bizwise.lk/industries/education/#service",
    "name": "Analytics for Education Providers Sri Lanka",
    "provider": {
      "@type": "Organization",
      "name": "BizWise",
      "url": "https://bizwise.lk"
    },
    "description": "Improve student, lead, and performance reporting with analytics for Sri Lankan education providers."
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
        "name": "Education Industry",
        "item": "https://bizwise.lk/industries/education"
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
        category="Education Providers"
        h1="Analytics for Education Providers in Sri Lanka"
        description="Streamline student registrations, track course leads, and optimize academic performance reporting. We build custom Power BI dashboards designed for local schools, colleges, and training institutes."
        focusPoints={focusPoints}
        serviceLinks={serviceLinks}
        trackingLabel="education_industry_consult"
      />
    </>
  );
}
