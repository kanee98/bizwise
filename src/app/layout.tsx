import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import '../../styles/CircuitMaster.css'

import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";
import CircuitBackground from "@/app/canvas/page";

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <CircuitBackground />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}