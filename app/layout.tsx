import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://citysage.my";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CitySage — AI-Powered Urban Intelligence Platform | Smart City Solutions Malaysia",
    template: "%s | CitySage — AI Urban Intelligence",
  },
  description:
    "CitySage is Malaysia's leading AI-powered urban intelligence platform. We deploy specialised AI workers for smart city planning, traffic optimisation, environmental monitoring, and infrastructure resilience across Southeast Asia.",
  keywords: [
    "smart city",
    "urban intelligence",
    "AI urban planning",
    "smart city solutions Malaysia",
    "urban AI platform",
    "smart city consulting",
    "AI city planning",
    "digital twin city",
    "urban data analytics",
    "IoT smart city",
    "smart city AI agents",
    "urban planning technology",
    "sustainable urban development",
    "smart city Southeast Asia",
    "geospatial AI",
    "traffic optimisation AI",
    "environmental monitoring AI",
    "smart infrastructure",
    "city data platform",
    "ESG urban planning",
    "net zero cities",
    "urban IoT integration",
    "smart waste management",
    "transit optimisation",
    "Kuala Lumpur smart city",
    "Malaysia urban technology",
  ],
  authors: [{ name: "CitySage", url: SITE_URL }],
  creator: "CitySage",
  publisher: "CitySage",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "CitySage",
    locale: "en_MY",
    url: SITE_URL,
    title: "CitySage — AI-Powered Urban Intelligence Platform",
    description:
      "Deploy specialised AI workers for smart city planning, traffic optimisation, environmental monitoring, and infrastructure resilience. Trusted by municipalities across Malaysia and Southeast Asia.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "CitySage — AI-Powered Urban Intelligence Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CitySage — AI-Powered Urban Intelligence Platform",
    description:
      "Deploy specialised AI workers for smart city planning, traffic optimisation, and environmental monitoring across Southeast Asia.",
    images: ["/og-image.png"],
    creator: "@citysage",
    site: "@citysage",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SITE_URL,
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <JsonLd />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
