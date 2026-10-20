import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false, // tidak dipakai di atas fold — keluarkan dari jalur kritis
});

export const metadata: Metadata = {
  title: {
    default: "Travel Pontianak Kuching & Rental Mobil Premium | Sigma Borneo",
    template: "%s | Sigma Borneo - Travel Pontianak Kuching",
  },
  description:
    "Travel Pontianak ke Kuching door-to-door dan rental mobil Pontianak armada terbaru. Berangkat via Entikong. Harga sewa mobil mulai Rp300.000/hari. Booking sekarang!",
  keywords: [
    "Sigma Borneo",
    "travel Pontianak Kuching",
    "travel Pontianak ke Kuching",
    "travel ke kuching",
    "liburan ke kuching",
    "paket wisata kuching",
    "tour kuching",
    "travel Pontianak Kuching door to door",
    "jasa travel Pontianak Kuching",
    "sewa mobil Pontianak",
    "rental mobil Pontianak",
    "sewa mobil pontianak terbaik",
  ],
  metadataBase: new URL("https://www.travelkuching.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Travel Pontianak Kuching & Rental Mobil Premium | Sigma Borneo",
    description:
      "Travel Pontianak ke Kuching door-to-door. Harga sewa mobil mulai Rp300.000/hari. Armada premium & driver profesional.",
    url: "https://www.travelkuching.com/",
    siteName: "Sigma Borneo",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Sigma Borneo - Travel Pontianak Kuching",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Travel Pontianak Kuching & Rental Mobil Premium",
    description:
      "Travel Pontianak ke Kuching door-to-door. Harga sewa mobil  mulai Rp300.000/hari.",
    images: ["/images/logo.png"],
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
        {/* Google Tag (GA4 + Google Ads lama + Google Ads baru digabung)
            GA4 dimuat via @next/third-parties (otomatis afterInteractive).
            Google Ads konfigurasi ditunda ke lazyOnload agar tidak berkompetisi
            dengan hydration & window TBT kritis. send_page_view: false mencegah
            pageview tercatat ganda karena satu halaman memakai beberapa ID. */}
        <GoogleAnalytics gaId="G-RNH2ESWQWZ" />

        <Script id="gtag-ads" strategy="lazyOnload">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('config', 'AW-17755416559', { 'send_page_view': false });
            gtag('config', 'AW-18455648054', { 'send_page_view': false });
          `}
        </Script>

        {/* Structured Data - LocalBusiness */}
        <Script
          id="schema-localbusiness"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.travelkuching.com/#organization",
              "name": "Sigma Borneo",
              "alternateName": "Travel Kuching",
              "description": "Travel Pontianak ke Kuching, paket wisata kuching, tour kuching, dan rental mobil pontianak terbaik. Layanan door-to-door lintas negara dengan armada premium.",
              "url": "https://www.travelkuching.com/",
              "telephone": "+6285822593523",
              "email": "argroup.ptk@gmail.com",
              "logo": "https://www.travelkuching.com/images/logo.png",
              "image": "https://www.travelkuching.com/images/logo.png",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gg. Matematika, Bansir Laut",
                "addressLocality": "Pontianak",
                "addressRegion": "Kalimantan Barat",
                "postalCode": "78115",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -0.061737,
                "longitude": 109.356391
              },
              "areaServed": [
                {
                  "@type": "City",
                  "name": "Pontianak"
                },
                {
                  "@type": "City",
                  "name": "Kuching"
                }
              ],
              "priceRange": "Rp300.000 - Rp7.500.000",
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
                  "opens": "00:00",
                  "hoursAvailable": "24/7"
                }
              ],
              "sameAs": [
                "https://www.instagram.com/argroup.ptk"
              ],
              "makesOffer": [
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Travel Pontianak - Kuching",
                    "description": "Layanan transportasi lintas negara door-to-door Pontianak ke Kuching via Entikong"
                  }
                },
                {
                  "@type": "Offer",
                  "itemOffered": {
                    "@type": "Service",
                    "name": "Rental Mobil Pontianak",
                    "description": "Sewa mobil harian dan bulanan di Pontianak dengan armada terbaru"
                  }
                }
              ],
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "5.0",
                "reviewCount": "150",
                "bestRating": "5"
              }
            }
          `}
        </Script>

        {/* Structured Data - BreadcrumbList */}
        <Script
          id="schema-breadcrumb"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {`
            {
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Beranda",
                  "item": "https://www.travelkuching.com/"
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Rental Mobil",
                  "item": "https://www.travelkuching.com/vehicles"
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": "Wisata Pontianak",
                  "item": "https://www.travelkuching.com/wisata-pontianak"
                }
              ]
            }
          `}
        </Script>

        {children}
      </body>
    </html>
  );
}
