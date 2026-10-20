"use client";

import Link from "next/link";
import { motion as m } from "framer-motion";
import {
  Shield,
  MapPin,
  Clock,
  Users,
  Star,
  ChevronRight,
  Globe,
  Car,
} from "lucide-react";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-44 md:pb-32 overflow-hidden bg-[#08080b]"
      style={{ transform: "translateZ(0)" }}
    >
      {/* Background Decorative Glows (dekoratif — dikecualikan dari aksesibilitas) */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none overflow-hidden"
      >
        <div className="absolute top-[-5%] left-[-10%] w-[70%] md:w-[40%] h-[30%] bg-cyan-500/10 blur-[80px] md:blur-[120px] rounded-full" />
        <div className="absolute bottom-[5%] right-[-10%] w-[70%] md:w-[40%] h-[30%] bg-purple-500/10 blur-[80px] md:blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10">
        {/* Header Section
            CATATAN LCP: elemen di atas fold memakai animasi CSS murni (bukan
            framer-motion) agar tidak dirender dengan inline style opacity:0.
            Elemen LCP (<h1>) harus terpaint pada frame pertama tanpa menunggu
            hydration JavaScript. */}
        <div className="text-center max-w-4xl mx-auto mb-12 md:mb-20">
          <div
            className="inline-flex items-center gap-2 px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8 rounded-full bg-white/5 border border-white/10 animate-fade-in"
            style={{ animationDuration: "0.5s" }}
          >
            <Star size={12} className="text-cyan-400 fill-cyan-400" />
            <span className="text-[9px] md:text-[11px] uppercase tracking-[0.15em] text-gray-300 font-bold">
              Premium Service • Sejak 2022
            </span>
          </div>

          <h1
            className="animate-slide-up text-[2.2rem] sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tighter italic leading-[1.1] md:leading-[0.9] text-white"
            style={{ animationDuration: "0.6s", animationFillMode: "both" }}
          >
            TRAVEL
            <br />
            <span className="block bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 text-transparent bg-clip-text">
              PONTIANAK
            </span>
            <span className="block bg-gradient-to-r from-blue-500 to-purple-500 text-transparent bg-clip-text">
              KUCHING
            </span>
          </h1>

          <p
            className="animate-fade-up mt-6 md:mt-8 text-gray-400 text-base md:text-xl max-w-2xl mx-auto leading-relaxed px-2 md:px-0"
            style={{
              animationDelay: "0.25s",
              animationDuration: "0.6s",
              animationFillMode: "both",
            }}
          >
            Solusi travel ke kuching door-to-door dan sewa mobil pontianak
            terpercaya dengan standar pelayanan terbaik.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* Card Travel */}
          <m.div
            whileHover={{ y: -5 }}
            className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[#0d0d12] border border-white/10 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden flex flex-col"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <Globe className="absolute -bottom-10 -right-10 text-cyan-500/5 w-64 h-64 -rotate-12" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex mb-8">
                <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-cyan-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/20 flex items-center justify-center">
                    <MapPin className="text-cyan-400" size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-cyan-400 font-black uppercase tracking-[0.15em] leading-none">
                      Lintas Negara
                    </span>
                    <span className="text-[8px] text-gray-400 font-medium uppercase tracking-wider mt-1">
                      Official Route
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-h-[140px] md:min-h-[180px] flex flex-col justify-end mb-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white italic uppercase leading-[1.1]">
                  Travel
                  <br />
                  <span className="text-cyan-400">Pontianak — Kuching</span>
                </h2>
              </div>

              <div className="flex-grow flex flex-col">
                <div className="h-10 mb-6">
                  <p className="text-gray-400 text-base md:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse" />
                    <Typewriter
                      words={[
                        "Layanan Door-to-Door",
                        "Antar Jemput Alamat",
                        "Executive Class",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                    />
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["3H2M", "Include Driver", "Include Bahan Bakar"].map(
                    (f) => (
                      <span
                        key={f}
                        className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-widest"
                      >
                        {f}
                      </span>
                    ),
                  )}
                </div>
              </div>

              <div className="pt-8 mt-auto border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase tracking-tighter">
                    Mulai Dari
                  </span>
                  <span className="text-white font-bold">Rp 5.000.000</span>
                </div>
                <Link
                  href="#travel"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-500 text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform group/btn"
                >
                  Lihat Paket{" "}
                  <ChevronRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </m.div>

          {/* Card Rental */}
          <m.div
            whileHover={{ y: -5 }}
            className="group relative p-8 md:p-12 rounded-[2.5rem] bg-[#0d0d12] border border-white/10 hover:border-purple-500/40 transition-all duration-500 overflow-hidden flex flex-col"
            style={{ backfaceVisibility: "hidden", transform: "translateZ(0)" }}
          >
            <Car className="absolute -bottom-10 -right-10 text-purple-500/5 w-64 h-64 -rotate-12" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex mb-8">
                <div className="inline-flex items-center gap-3 p-2 pr-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm group-hover:border-purple-500/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center">
                    <Users className="text-purple-400" size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-purple-400 font-black uppercase tracking-[0.15em] leading-none">
                      Unit Premium
                    </span>
                    <span className="text-[8px] text-gray-400 font-medium uppercase tracking-wider mt-1">
                      Ready 24/7 Service
                    </span>
                  </div>
                </div>
              </div>

              <div className="min-h-[140px] md:min-h-[180px] flex flex-col justify-end mb-4">
                <h2 className="text-3xl md:text-5xl font-bold text-white italic uppercase leading-[1.1]">
                  Rental
                  <br />
                  Mobil
                  <br />
                  <span className="text-purple-400">Pontianak</span>
                </h2>
              </div>

              <div className="flex-grow flex flex-col">
                <div className="h-10 mb-6">
                  <p className="text-gray-400 text-base md:text-lg flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse" />
                    <Typewriter
                      words={[
                        "Lepas Kunci / Driver",
                        "Harian & Bulanan",
                        "Armada Terbaru",
                      ]}
                      loop={true}
                      cursor
                      cursorStyle="_"
                      typeSpeed={50}
                    />
                  </p>
                </div>

                <div className="flex flex-wrap gap-2 mb-8">
                  {["24/7", "Terawat", "Lengkap"].map((f) => (
                    <span
                      key={f}
                      className="px-3 py-1.5 rounded-full bg-white/5 border border-white/5 text-[10px] text-gray-400 font-bold uppercase tracking-widest"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-8 mt-auto border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-gray-400 text-[10px] uppercase tracking-tighter">
                    Mulai Dari
                  </span>
                  <span className="text-white font-bold">
                    Rp 300.000
                    <span className="text-purple-400 text-xs font-normal">
                      /hari
                    </span>
                  </span>
                </div>
                <Link
                  href="/vehicles"
                  className="flex items-center gap-2 px-6 py-3 rounded-full bg-purple-500 text-black font-bold text-xs uppercase tracking-wider hover:scale-105 transition-transform group/btn"
                >
                  Cek Unit
                  <ChevronRight
                    size={16}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </Link>
              </div>
            </div>
          </m.div>
        </div>

        {/* Feature Highlights */}
        <div className="mt-12 md:mt-16 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {[
            { icon: Shield, label: "Izin Resmi" },
            { icon: Star, label: "Layanan VIP" },
            { icon: Clock, label: "On Time" },
            { icon: Users, label: "Driver Profesional" },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-4 md:p-5 rounded-2xl bg-white/[0.02] border border-white/5"
            >
              <item.icon size={16} className="text-cyan-400 shrink-0" />
              <span className="text-[10px] md:text-xs uppercase tracking-widest font-bold text-gray-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
