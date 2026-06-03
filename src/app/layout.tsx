import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// 1. Configure the premium font
const inter = Inter({ 
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Bharat Sethi — Photography & Artwork",
  description: "Editorial, fashion, and commercial photography portfolio by Bharat Sethi.",
  openGraph: {
    title: "Bharat Sethi — Photography & Artwork",
    description: "Editorial, fashion, and commercial photography portfolio.",
    url: "https://bharatsethi.com", // You'll update this once the custom domain is connected
    siteName: "Bharat Sethi Portfolio",
    type: "website",
    images: [
      {
        // We can replace this with a direct URL of one of his best photos later
        url: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1200&h=630&auto=format&fit=crop", 
        width: 1200,
        height: 630,
        alt: "Bharat Sethi Photography Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bharat Sethi — Photography & Artwork",
    description: "Editorial, fashion, and commercial photography portfolio.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* 3. Apply the font globally, add anti-aliasing for sharpness, and custom selection colors */}
      <body className={`${inter.className} antialiased bg-white text-black selection:bg-black selection:text-white`}>
        {children}
      </body>
    </html>
  );
}
