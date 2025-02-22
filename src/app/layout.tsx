import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
import dotenv from "dotenv";

dotenv.config();
export const metadata: Metadata = {
  title: "Philia Adventure Land - Destinasi Wisata & Petualangan Terbaik",
  description:
    "Philia Adventure Land adalah destinasi wisata terbaik untuk petualangan seru dan eksplorasi alam. Nikmati pengalaman unik di lokasi yang hijau dan asri.",
  keywords: [
    "Philia",
    "Philia Adventure",
    "Philia Adventure Land",
    "wisata petualangan",
    "tempat wisata",
    "liburan keluarga",
    "taman hiburan",
    "philia",
    "adventure",
    "land",
    "berpetualang",
    "philia adventure land",
    "PHILIA",
    "kebun binatang",
    "tempat wisata",
    "bogor",
    "tempat wisata indonesia",
    "tempat wisata bogor",
    "taman bermain anak anak",
  ],
  authors: [{ name: "Philia", url: "https://philiadventureland.com" }],
  openGraph: {
    title: "PHILIA ADVENTURE LAND | menawarkan pengalaman berpetualang",
    description:
      "Sebuah destinasi petualangan yang menawarkan pengalaman tak terlupakan bagi Anda...",
    url: "https://philiadventureland.com",
    siteName: "Philia Adventure Land",
    images: [
      {
        url: "https://philiadventureland.com/images/banner/logo-share.png",
        width: 1200,
        height: 630,
        alt: "Philia Adventure Land Logo",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@philia",
    creator: "@philia", // Jika akun Twitter tersedia
    title: "PHILIA ADVENTURE LAND | menawarkan pengalaman berpetualang",
    description:
      "Sebuah destinasi petualangan yang menawarkan pengalaman tak terlupakan bagi Anda...",
    images: ["https://philiadventureland.com/images/banner/logo-share.png"],
  },
  robots: "index, follow",
};


export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="id">
      <head>
        
      <Script id="schema-markup" type="application/ld+json">
  {JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Philia Adventure Land",
    url: "https://philiadventureland.com",
    logo: "https://philiadventureland.com/images/banner/logo-share.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+62 812-4318-318",
      contactType: "customer service",
      areaServed: "ID",
      availableLanguage: "Indonesian",
    },
    sameAs: [
      "https://www.facebook.com/philiaadventure",
      "https://www.twitter.com/philiaadventure",
      "https://www.instagram.com/philiaadventure",
    ],
  })}
</Script>

      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} text-black antialiased bg-[#bddca9]`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}