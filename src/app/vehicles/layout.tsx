import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Rental Mobil Pontianak - Armada Premium",
  description:
    "Lihat daftar armada rental mobil Pontianak terbaru. Avanza, Innova, Fortuner, Hiace, Alphard. Harga mulai Rp300.000/hari. Booking sekarang!",
  alternates: {
    canonical: "/vehicles",
  },
  openGraph: {
    title: "Rental Mobil Pontianak - Armada Premium | Sigma Borneo",
    description:
      "Sewa mobil Pontianak dengan armada terbaru. Harga mulai Rp300.000/hari. Booking online 24 jam.",
    url: "https://www.travelkuching.com/vehicles",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Rental Mobil Pontianak - Sigma Borneo",
      },
    ],
  },
};

export default function VehiclesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
