import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wisata & Kuliner Pontianak - Destinasi Khatulistiwa",
  description:
    "Jelajahi destinasi wisata dan kuliner ikonik Pontianak. Tugu Khatulistiwa, Masjid Raya Mujahidin, Katedral, dan kuliner legendaris.",
  alternates: {
    canonical: "/wisata-pontianak",
  },
  openGraph: {
    title: "Wisata & Kuliner Pontianak - Destinasi Khatulistiwa | Sigma Borneo",
    description:
      "Jelajahi keindahan Kota Khatulistiwa. Destinasi ikonik dan surga kuliner legendaris Pontianak.",
    url: "https://www.travelkuching.com/wisata-pontianak",
    images: [
      {
        url: "/images/logo.png",
        width: 512,
        height: 512,
        alt: "Wisata Pontianak - Sigma Borneo",
      },
    ],
  },
};

export default function WisataPontianakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
