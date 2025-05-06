import type { Metadata } from "next";
import { Geist, Geist_Mono, Poppins, Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CreatorWire",
  description: "Seamless payments for creators, brands and agencies",

  // Open Graph / Facebook
  openGraph: {
    title: "CreatorWire",
    description: "Seamless payments for creators, brands and agencies",
    url: "https://creator-wire.com",
    siteName: "CreatorWire",
    images: [
      {
        url: "/seo.png",
        width: 1200,
        height: 630,
        alt: "CreatorWire – Seamless payments",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "CreatorWire",
    description: "Seamless payments for creators, brands and agencies",
    images: ["/seo.png"],
    site: "@Creator-wire",
    creator: "@Creator-wire",
  },

  // Optional: icons
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: {
      rel: "android-chrome-192x192",
      url: "/android-chrome-192x192.png",
    },
  },

  // Optional: alternative languages
  alternates: {
    canonical: "https://creator-wire.com",
    languages: {
      "en-US": "/en-US",
      "fr-FR": "/fr-FR",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} ${inter.className}`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
