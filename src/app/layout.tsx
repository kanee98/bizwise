import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../../styles/CircuitMaster.css'

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CircuitBackground from "@/app/(internal)/canvas/page";
import Script from "next/script";
import TrackingListener from "@/components/ui/tracking-listener";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BizWise | AI-Powered Insights for Sri Lankan Businesses",
  description: "Custom dashboards, predictive analytics, and ongoing AI support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_ID || "G-E7X2Q8R3W5";

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gaId}');
          `}
        </Script>
        <TrackingListener />
        
        <CircuitBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}