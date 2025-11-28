"use client";

import { motion as m } from "framer-motion";
import { Shield, MapPin, Clock, Users } from "lucide-react";
import { FaInstagram, FaTiktok } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export function Hero() {
  return (
    <section
      id="hero"
      className="pt-40 pb-32 text-center relative z-10 max-w-6xl mx-auto px-6"
    >
      {/* Badge */}
      <m.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-block px-4 py-1 mb-3 text-sm border border-white/20 rounded-full text-gray-300"
      >
        Travel & Rental Mobil Resmi · Sejak 2022
      </m.div>

      {/* Title */}
      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight"
      >
        <span className="text-white">Perjalanan Aman, Nyaman, dan</span>{" "}
        <span className="bg-gradient-to-r from-cyan-400 to-purple-400 text-transparent bg-clip-text">
          Terpercaya
        </span>
      </m.h1>

      {/* Social Icons (moved below title) */}
      <m.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex items-center justify-center gap-4 mt-6"
      >
        {/* Instagram */}
        <a
          href="https://www.instagram.com/argroup.ptk/"
          className="group p-2 rounded-full bg-white/10 border border-white/20 transition hover:bg-[#E1306C]/20"
        >
          <FaInstagram className="w-5 h-5 text-white group-hover:text-[#E1306C] transition" />
        </a>

        {/* TikTok */}
        <a
          href="#"
          className="group p-2 rounded-full bg-white/10 border border-white/20 transition hover:bg-[#69C9D0]/20"
        >
          <FaTiktok className="w-5 h-5 text-white group-hover:text-[#69C9D0] transition" />
        </a>
      </m.div>

      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.3 }}
        className="mt-24 grid md:grid-cols-2 gap-10"
      >
        {/* ======================================================
         CARD TRAVEL
      ====================================================== */}
        <div className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-cyan-400/60 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition duration-700 bg-[radial-gradient(circle_at_center,cyan_0%,transparent_70%)]"></div>

          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-500/20 border border-cyan-400/30 mb-6 group-hover:bg-cyan-500/30 transition">
            <MapPin className="w-8 h-8 text-cyan-400" />
          </div>

          {/* Title */}
          <h3 className="text-4xl font-extrabold text-white drop-shadow-sm leading-tight">
            <span className="block text-center">Travel</span>
            <span className="block text-center">Pontianak → Kuching</span>
          </h3>

          {/* Typewriter text */}
          <p className="mt-4 text-gray-300 text-lg leading-relaxed h-[70px]">
            <Typewriter
              words={[
                "Perjalanan premium dengan layanan door-to-door.",
                "Armada nyaman, aman, dan selalu bersih.",
                "Driver profesional + izin resmi lengkap.",
                "Nikmati travel paling nyaman lintas border!",
              ]}
              loop={0}
              cursor
              cursorStyle="▌"
              typeSpeed={35}
              deleteSpeed={20}
              delaySpeed={1800}
            />
          </p>

          <a
            href="#travel"
            className="mt-8 inline-block px-7 py-3.5 rounded-xl bg-cyan-500 text-black font-semibold hover:bg-cyan-400 transition shadow-lg shadow-cyan-500/20"
          >
            Lihat Paket Travel
          </a>
        </div>

        {/* ======================================================
         CARD RENTAL
      ====================================================== */}
        <div className="group p-10 rounded-3xl bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-xl border border-white/10 hover:border-purple-400/60 hover:bg-white/10 transition-all cursor-pointer relative overflow-hidden">
          {/* Glow Effect */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-20 transition duration-700 bg-[radial-gradient(circle_at_center,purple_0%,transparent_70%)]"></div>

          {/* Icon */}
          <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-purple-500/20 border border-purple-400/30 mb-6 group-hover:bg-purple-500/30 transition">
            <Users className="w-8 h-8 text-purple-400" />
          </div>

          {/* Title */}
          <h3 className="text-4xl font-extrabold text-white drop-shadow-sm leading-tight">
            <span className="block text-center">Rental Mobil</span>
            <span className="block text-center">Pontianak</span>
          </h3>

          {/* Typewriter text */}
          <p className="mt-4 text-gray-300 text-lg leading-relaxed h-[70px]">
            <Typewriter
              words={[
                "Pilihan armada lengkap — dari Avanza hingga Fortuner.",
                "Tersedia lepas kunci atau include driver profesional.",
                "Cocok untuk wisata, keperluan bisnis, atau harian.",
                "Sewa mobil paling fleksibel dan terpercaya!",
              ]}
              loop={0}
              cursor
              cursorStyle="▌"
              typeSpeed={35}
              deleteSpeed={20}
              delaySpeed={1800}
            />
          </p>

          <a
            href="/vehicles"
            className="mt-8 inline-block px-7 py-3.5 rounded-xl border border-white/20 text-white hover:bg-white/10 transition backdrop-blur-xl shadow-lg shadow-purple-500/20"
          >
            Lihat Daftar Mobil
          </a>
        </div>
      </m.div>

      {/* Info Boxes */}
      <m.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2 }}
        className="grid grid-cols-2 sm:grid-cols-4 gap-5 mt-16 text-gray-300"
      >
        {[
          { icon: Shield, text: "Aman & Resmi" },
          { icon: Clock, text: "Tepat Waktu" },
          { icon: Users, text: "Driver Profesional" },
          { icon: MapPin, text: "Door to Door" },
        ].map((item, i) => (
          <div
            key={i}
            className="p-4 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
          >
            <item.icon className="mx-auto w-6 h-6 mb-2 text-cyan-400" />
            <p className="text-sm">{item.text}</p>
          </div>
        ))}
      </m.div>
    </section>
  );
}
