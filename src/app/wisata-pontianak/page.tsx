"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Compass,
  MapPin,
  Utensils,
  Navigation,
  Star,
  Instagram,
  ArrowLeft,
} from "lucide-react";
import { motion as m, AnimatePresence } from "framer-motion";

interface PlaceItem {
  title: string;
  desc: string;
  tag: string;
  image: string;
  mapsUrl: string;
  instagramUrl?: string;
  stars?: number;
  isPremium?: boolean;
}

const wisataData: PlaceItem[] = [
  {
    title: "Taman Alun-Alun Kapuas",
    desc: "Ruang terbuka hijau ikonik di pinggiran Sungai Kapuas, tempat terbaik menikmati sunset dan aktivitas kapal wisata lokal.",
    tag: "Taman",
    image: "/wisata/Taman Alun Kapuas.jpg",
    mapsUrl: "https://maps.google.com/?q=Taman+Alun-Alun+Kapuas+Pontianak",
  },
  {
    title: "Tugu Khatulistiwa",
    desc: "Ikon global kebanggaan Pontianak yang dilintasi garis lintang nol derajat bumi secara presisi.",
    tag: "Sejarah",
    image: "/wisata/Tugu Khatulistiwa.jpg",
    mapsUrl: "https://maps.google.com/?q=Tugu+Khatulistiwa+Pontianak",
    stars: 5,
    isPremium: true,
  },
  {
    title: "Rumah Radakng",
    desc: "Replika rumah adat panjang suku Dayak terbesar di Indonesia, pusat pelestarian seni budaya yang megah.",
    tag: "Budaya",
    image: "/wisata/Rumah Radakng.jpg",
    mapsUrl: "https://maps.google.com/?q=Rumah+Radakng+Pontianak",
  },
  {
    title: "Istana Kadriah Kesultanan Pontianak",
    desc: "Istana kayu megah peninggalan pendiri kota Pontianak dengan sejarah kesultanan yang kental dan autentik.",
    tag: "Sejarah",
    image: "/wisata/Istana Kadriah.jpg",
    mapsUrl: "https://maps.google.com/?q=Istana+Kadriah+Pontianak",
  },
  {
    title: "Masjid Raya Mujahidin",
    desc: "Masjid terbesar di Kalimantan Barat dengan arsitektur modern megah yang menjadi pusat syiar Islam.",
    tag: "Religi",
    image: "/wisata/Masjid Raya Mujahidin.jpg",
    mapsUrl: "https://maps.google.com/?q=Masjid+Raya+Mujahidin+Pontianak",
    stars: 5,
    isPremium: true,
  },
  {
    title: "Museum Kalimantan Barat",
    desc: "Tempat penyimpanan artefak sejarah, budaya Dayak, Melayu, dan Tionghoa yang melambangkan keberagaman Kalbar.",
    tag: "Edukasi",
    image: "/wisata/Museum Pontianak.jpg",
    mapsUrl: "https://maps.google.com/?q=Museum+Kalimantan+Barat",
  },
  {
    title: "Rumah Adat Melayu",
    desc: "Bangunan panggung bercorak khas Melayu Pontianak yang megah, sering digunakan untuk agenda budaya penting.",
    tag: "Budaya",
    image: "/wisata/Rumah Melayu.jpg",
    mapsUrl: "https://maps.google.com/?q=Rumah+Adat+Melayu+Pontianak",
  },
  {
    title: "Taman Digulis Pontianak",
    desc: "Taman aktif di pusat kota dengan fasilitas jogging track yang dikelilingi pepohonan asri Universitas Tanjungpura.",
    tag: "Taman",
    image: "/wisata/Tugu Digulis.jpg",
    mapsUrl: "https://maps.google.com/?q=Taman+Digulis+Pontianak",
  },
  {
    title: "Waterfront Pontianak",
    desc: "Sisi pedestrian modern sepanjang Sungai Kapuas untuk menikmati pemandangan sungai sembari bersantai.",
    tag: "Spot Foto",
    image: "/wisata/Waterfront.jpg",
    mapsUrl: "https://maps.google.com/?q=Waterfront+Pontianak",
  },
  {
    title: "Gereja Katedral Santo Yosef",
    desc: "Gereja Katedral megah dengan arsitektur perpaduan gaya Romawi klasik dan ornamen khas Dayak lokal.",
    tag: "Religi",
    image: "/wisata/Katedral.jpg",
    mapsUrl: "https://maps.google.com/?q=Gereja+Katedral+Santo+Yosef+Pontianak",
    stars: 5,
    isPremium: true,
  },
];

const kulinerData: PlaceItem[] = [
  {
    title: "Warung Kopi Asiang",
    desc: "Sangat legendaris di berbagai kalangan. Menghidangkan kopi saring ikonik yang diseduh langsung oleh barista tanpa baju. Sering dikunjungi pejabat negara.",
    tag: "VIP CHOICE",
    image: "/wisata/Asiang.jpg",
    mapsUrl: "https://maps.google.com/?q=Warung+Kopi+Asiang+Pontianak",
    instagramUrl: "https://www.instagram.com/wk.asiang/",
    stars: 5,
    isPremium: true,
  },
  {
    title: "Aming Coffee",
    desc: "Pelopor kopi saring modern Pontianak yang sudah melebarkan sayapnya ke kancah nasional dengan rasa khas.",
    tag: "VIP CHOICE",
    image: "/wisata/Aming.jpg",
    mapsUrl: "https://maps.google.com/?q=Aming+Coffee+Pontianak",
    instagramUrl: "https://www.instagram.com/amingcoffee/",
    stars: 5,
    isPremium: true,
  },
  {
    title: "Bingke Al-Fajar",
    desc: "Kue tradisional khas Pontianak bertekstur lembut, manis, dan gurih legendaris yang pas untuk buah tangan.",
    tag: "Oleh-Oleh",
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&w=600&auto=format&fit=crop",
    mapsUrl: "https://maps.google.com/?q=Bingke+Al-Fajar+Pontianak",
    instagramUrl: "https://www.instagram.com/bingke_alfajarpontianak/",
  },
  {
    title: "RM. 999 (Ayong)",
    desc: "Kuliner chinese-food halal super populer dengan menu andalan nasi goreng telur ceplok kecap masakan khas yang viral.",
    tag: "Makanan Berat",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=600&auto=format&fit=crop",
    mapsUrl: "https://maps.google.com/?q=RM.+999+Ayong+Pontianak",
  },
  {
    title: "Mie Tiaw Apollo",
    desc: "Sajian mie tiaw goreng legendaris di jalan Patimura dengan cita rasa bumbu warisan turun-temurun sejak puluhan tahun lalu.",
    tag: "Makanan Berat",
    image:
      "https://images.unsplash.com/photo-1585032226651-759b368d7246?q=80&w=600&auto=format&fit=crop",
    mapsUrl: "https://maps.google.com/?q=Mie+Tiaw+Apollo+Pontianak",
  },
];

export default function WisataPontianakPage() {
  const [activeTab, setActiveTab] = useState<"wisata" | "kuliner">("wisata");
  const currentData = activeTab === "wisata" ? wisataData : kulinerData;

  const sortedData = [...currentData].sort((a, b) => {
    const scoreA = a.isPremium || a.stars === 5 ? 1 : 0;
    const scoreB = b.isPremium || b.stars === 5 ? 1 : 0;
    return scoreB - scoreA;
  });

  return (
    <main className="relative py-12 md:py-24 lg:py-32 overflow-hidden bg-[#08080b] min-h-screen">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-15%] w-[70%] md:w-[45%] h-[40%] bg-cyan-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] left-[-15%] w-[70%] md:w-[45%] h-[40%] bg-blue-500/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Tombol Back Ke Halaman Utama */}
        <m.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-6 md:mb-8"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
          >
            <ArrowLeft
              size={14}
              className="group-hover:-translate-x-1 transition-transform"
            />
            Kembali Utama
          </Link>
        </m.div>

        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-10 md:mb-16 gap-6 md:gap-8">
          <div className="max-w-2xl">
            <m.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-3 md:mb-4"
            >
              <Compass
                size={12}
                className="text-cyan-400 animate-spin"
                style={{ animationDuration: "6s" }}
              />
              <span className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-gray-400 font-bold">
                Eksplorasi Lokal Penuh
              </span>
            </m.div>

            <m.h1 className="text-3xl sm:text-4xl md:text-6xl font-black tracking-tighter italic uppercase text-white leading-none">
              Katalog Kota <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
                Khatulistiwa Lengkap.
              </span>
            </m.h1>
          </div>

          {/* Navigation Tabs - Dioptimalkan untuk Mobile agar meluncur horizontal jika tidak muat */}
          <div className="flex p-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm self-start lg:self-auto overflow-x-auto max-w-full scrollbar-none">
            <div className="flex min-w-max">
              <button
                onClick={() => setActiveTab("wisata")}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors z-10 ${
                  activeTab === "wisata"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === "wisata" && (
                  <m.div
                    layoutId="activeTabPageBg"
                    className="absolute inset-0 bg-cyan-400 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <m.div layout className="flex items-center gap-1.5">
                  <MapPin size={13} /> Wisata ({wisataData.length})
                </m.div>
              </button>
              <button
                onClick={() => setActiveTab("kuliner")}
                className={`relative flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-colors z-10 ${
                  activeTab === "kuliner"
                    ? "text-black"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {activeTab === "kuliner" && (
                  <m.div
                    layoutId="activeTabPageBg"
                    className="absolute inset-0 bg-cyan-400 rounded-full -z-10"
                    transition={{ type: "spring", duration: 0.5 }}
                  />
                )}
                <m.div layout className="flex items-center gap-1.5">
                  <Utensils size={13} /> Kuliner ({kulinerData.length})
                </m.div>
              </button>
            </div>
          </div>
        </div>

        {/* Grid Items dengan Pembungkus Grid AnimatePresence Tunggal */}
        <AnimatePresence mode="wait">
          <m.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          >
            {sortedData.map((item) => (
              <m.div
                key={item.title}
                whileHover={{
                  y: -6,
                  transition: { duration: 0.15, ease: "linear" },
                }}
                className={`group relative rounded-3xl bg-[#0d0d12] border overflow-hidden flex flex-col min-h-[440px] md:min-h-[460px] h-full will-change-transform
                  ${item.isPremium ? "border-amber-500/30 hover:border-amber-400 shadow-xl" : "border-white/10 hover:border-cyan-500/40"}`}
              >
                {/* Image Container */}
                <div className="relative w-full h-44 sm:h-48 overflow-hidden bg-white/5 shrink-0">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover opacity-75 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                    priority={item.isPremium}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0d0d12] via-transparent to-transparent" />

                  <span
                    className={`absolute top-4 left-4 px-3 py-1 rounded-full border text-[9px] font-bold uppercase tracking-widest backdrop-blur-md
                    ${item.isPremium ? "bg-amber-500/20 border-amber-500/40 text-amber-400" : "bg-black/50 border-white/10 text-cyan-400"}`}
                  >
                    {item.tag}
                  </span>
                </div>

                {/* Content Area dengan Flex-Grow Adaptif */}
                <div className="p-5 sm:p-6 flex flex-col flex-grow justify-between gap-4">
                  <div>
                    <div className="flex justify-between items-start mb-2 gap-2">
                      <h3
                        className={`text-lg sm:text-xl font-bold uppercase tracking-tight italic line-clamp-1 ${item.isPremium ? "text-amber-400" : "text-white"}`}
                      >
                        {item.title}
                      </h3>
                      {item.stars && (
                        <div className="flex items-center gap-0.5 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-md shrink-0">
                          {[...Array(item.stars)].map((_, i) => (
                            <Star
                              key={i}
                              size={10}
                              className="text-amber-400 fill-amber-400"
                            />
                          ))}
                        </div>
                      )}
                    </div>
                    <p className="text-gray-400 text-xs sm:text-sm leading-relaxed line-clamp-4">
                      {item.desc}
                    </p>
                  </div>

                  {/* Tombol Navigasi & Instagram */}
                  <div className="pt-4 border-t border-white/5 flex gap-2 mt-auto">
                    <a
                      href={item.mapsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all group/btn justify-center flex-grow
                        ${
                          item.isPremium
                            ? "bg-amber-500/10 border-amber-500/20 text-amber-400 hover:bg-amber-400 hover:text-black"
                            : "bg-white/5 border border-white/10 text-gray-300 hover:text-black hover:bg-cyan-400"
                        }`}
                    >
                      <Navigation
                        size={13}
                        className="group-hover/btn:animate-pulse"
                      />
                      Maps
                    </a>

                    {item.instagramUrl && (
                      <a
                        href={item.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center p-2.5 rounded-xl border border-white/10 bg-white/5 text-gray-300 hover:text-white hover:bg-pink-600 hover:border-pink-500 transition-all aspect-square"
                        title="Buka Instagram"
                      >
                        <Instagram size={14} />
                      </a>
                    )}
                  </div>
                </div>
              </m.div>
            ))}
          </m.div>
        </AnimatePresence>
      </div>
    </main>
  );
}
