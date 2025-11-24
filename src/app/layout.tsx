import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sigma Delta: Travel Pontianak - Kuching",
  description:
    "Jasa layanan travel Pontianak - Kuching dengan armada terbaik dan harga terjangkau.",
  keywords: [
    "travel pontianak kuching",
    "travel kuching pontianak",
    "paket travel kuching",
    "travel malaysia pontianak",
    "travel border kuching",
    "jasa travel pontianak",
  ],
  alternates: {
    canonical: "https://www.travelkuching.com",
  },
  openGraph: {
    title: "Sigma Delta: Travel Pontianak - Kuching",
    description:
      "Jasa layanan travel Pontianak - Kuching dengan armada terbaik dan harga terjangkau.",
    url: "https://www.travelkuching.com",
    siteName: "Sigma Delta",
    type: "website",
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RNH2ESWQWZ"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RNH2ESWQWZ');
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
