import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import StructuredData from "@/components/layout/StructuredData";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://cohen-global.com"),
  title: {
    default: "Cohen Global Properties | NYC Real Estate Development",
    template: "%s | Cohen Global Properties",
  },
  description:
    "Cohen Global Properties is an experienced New York City real estate development company specializing in property acquisition, renovation, new construction, and residential sales across the five boroughs.",
  keywords: [
    "NYC real estate developer",
    "New York real estate development",
    "Brooklyn real estate developer",
    "NYC property development",
    "NYC residential development",
    "New York property acquisition",
    "NYC multifamily developer",
    "Brooklyn property development",
    "New York residential developer",
    "Cohen Global Properties",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://cohen-global.com",
    siteName: "Cohen Global Properties",
    title: "Cohen Global Properties | NYC Real Estate Development",
    description:
      "Experienced New York City real estate development company focused on acquisition, renovation, and new construction across the five boroughs.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cohen Global Properties - NYC Real Estate Development",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cohen Global Properties | NYC Real Estate Development",
    description:
      "Experienced New York City real estate development company focused on acquisition, renovation, and new construction.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant.variable} ${inter.variable} h-full`}
    >
      <body className="min-h-full flex flex-col antialiased">
        <StructuredData />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
