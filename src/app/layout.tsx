import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css"; // 🚨 THIS RESTORES YOUR TAILWIND STYLING!

// Configure the premium font
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

// The Ultimate SEO Payload
export const metadata: Metadata = {
  metadataBase: new URL("https://bharatsethi.co.uk"),
  title: {
    default: "Bharat Sethi | Photography & Artwork",
    template: "%s | Bharat Sethi",
  },
  description: "Editorial, fashion, and commercial photography portfolio by Bharat Sethi. Capturing moments and creating memories.",
  keywords: [
    "Bharat Sethi",
    "Photography Portfolio",
    "Fashion Photographer",
    "Editorial Photography",
    "Commercial Photographer",
    "Portrait Photography", 
  ],
  authors: [{ name: "Bharat Sethi" }],
  creator: "Bharat Sethi",
  alternates: {
    canonical: "/",
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
  openGraph: {
    title: "Bharat Sethi | Photography & Artwork",
    description: "Editorial, fashion, and commercial photography portfolio.",
    url: "/",
    siteName: "Bharat Sethi",
    type: "website",
    images: [
      {
        url: "/about_photo.jpeg", 
        width: 1200,
        height: 630,
        alt: "Bharat Sethi Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Sethi | Photography & Artwork",
    description: "Editorial, fashion, and commercial photography portfolio.",
  },
};

// 🚨 THIS WRAPS THE WHOLE SITE IN YOUR FONT AND STYLES
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-white text-black selection:bg-black selection:text-white`}>
        {children}
      </body>
    </html>
  );
}