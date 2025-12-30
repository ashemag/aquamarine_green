import type { Metadata } from "next";
import { Playfair_Display, Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Aquamarine Green | Miami Design-Build, Interiors & Renovation",
  description: "Soho meets South Beach. Aquamarine Green brings New York's modern, minimal elegance to Miami. Design-build, interiors, and renovation across Miami, Bal Harbour, and the Palm Beach Areas.",
  keywords: ["Miami design build", "interior design Miami", "renovation Miami", "South Beach interior design", "Bal Harbour design", "Palm Beach renovation", "modern minimalist design", "luxury interiors Miami"],
  authors: [{ name: "Aquamarine Green" }],
  creator: "Aquamarine Green",
  icons: {
    icon: '/icon.svg',
    apple: '/icon.svg',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://aquamarinegreen.com',
    siteName: 'Aquamarine Green',
    title: 'Aquamarine Green | Miami Design-Build, Interiors & Renovation',
    description: 'Soho meets South Beach. Aquamarine Green brings New York\'s modern, minimal elegance to Miami. Design-build, interiors, and renovation.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Aquamarine Green - Miami Design-Build',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aquamarine Green | Miami Design-Build, Interiors & Renovation',
    description: 'Soho meets South Beach. Modern, minimal elegance for Miami homes and commercial spaces.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${playfair.variable} ${outfit.variable} antialiased`}>
        <Navigation />
        <main className="min-h-screen pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
