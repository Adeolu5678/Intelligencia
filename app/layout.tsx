import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";

import { AssetPreloadProvider } from "@/components/asset-preload-provider";
import { SiteChrome } from "@/components/site-chrome";

import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-body",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  style: ["normal"],
  variable: "--font-display",
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Intelligencia",
  description:
    "Premium technology consulting and management for companies building stronger websites, systems, and operational workflows.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <link rel="preload" as="image" href="/concept-c/hero-building.png" fetchPriority="high" />
        <link rel="preload" as="image" href="/concept-c/operations-building-v2.png" />
      </head>
      <body className={`${manrope.variable} ${cormorant.variable}`}>
        <AssetPreloadProvider>
          <main>{children}</main>
        </AssetPreloadProvider>
        <SiteChrome />
      </body>
    </html>
  );
}
