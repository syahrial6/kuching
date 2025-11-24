import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* --- GOOGLE TAG: ADS (AW-...) --- */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=AW-17755416559"
          strategy="afterInteractive"
        />

        <Script id="gtag-aw" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17755416559');
          `}
        </Script>

        {/* --- GOOGLE ANALYTICS GA4 (G-...) --- */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RNH2ESWQWZ"
          strategy="afterInteractive"
        />

        <Script id="gtag-ga4" strategy="afterInteractive">
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
