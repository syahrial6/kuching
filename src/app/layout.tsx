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
  title: "Sigma Borneo: Travel Pontianak - Kuching",
  description:
    "Jasa travel Pontianak ke Kuching terpercaya. Harga murah, door to door, berangkat setiap hari via Entikong. Booking sekarang dengan Sigma Borneo.",
  keywords: [
    "travel Pontianak Kuching",
    "travel Pontianak ke Kuching",
    "jasa travel Pontianak Kuching",
    "travel Pontianak Kuching murah",
    "travel Pontianak Kuching door to door",
  ],
  openGraph: {
    title: "Sigma Borneo: Travel Pontianak - Kuching",
    description:
      "Jasa travel Pontianak ke Kuching door to door, harga terjangkau, berangkat setiap hari.",
    url: "https://www.travelkuching.com/",
    siteName: "Sigma Borneo",
    locale: "id_ID",
    type: "website",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="id">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* Google Tag (GA4 + Ads digabung) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-RNH2ESWQWZ"
          strategy="afterInteractive"
        />

        <Script id="gtag" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-RNH2ESWQWZ');
            gtag('config', 'AW-17755416559');
          `}
        </Script>

        {/* Structured Data */}
        <Script id="schema" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Sigma Borneo",
              "description": "Jasa travel Pontianak ke Kuching",
              "areaServed": "Pontianak - Kuching",
              "url": "https://www.travelkuching.com/",
              "telephone": "+6285822593523"
            }
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}