"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { X, Calendar, UserCheck, Fuel, Maximize2, MessageCircle, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { TiltCard } from "../components/TiltCard";

export const TravelKuching = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const kendaraan = [
    {
      image: "/images/hiace.webp",
      brand: "Toyota",
      subtitle: "Hiace Commuter",
      price: 7500000,
      color: "from-cyan-500/20 to-blue-500/20",
      specs: [
        { label: "3 Hari 2 Malam", icon: Calendar },
        { label: "Include Driver", icon: UserCheck },
        { label: "Include Bahan Bakar", icon: Fuel },
      ],
    },
    {
      image: "/images/fortuner.webp",
      brand: "Toyota",
      subtitle: "Fortuner GR Sport",
      price: 7000000,
      color: "from-purple-500/20 to-blue-500/20",
      specs: [
        { label: "3 Hari 2 Malam", icon: Calendar },
        { label: "Include Driver", icon: UserCheck },
        { label: "Include Bahan Bakar", icon: Fuel },
      ],
    },
    {
      image: "/images/innova.webp",
      brand: "Toyota",
      subtitle: "Innova Reborn",
      price: 6000000,
      color: "from-blue-500/20 to-cyan-500/20",
      specs: [
        { label: "3 Hari 2 Malam", icon: Calendar },
        { label: "Include Driver", icon: UserCheck },
        { label: "Include Bahan Bakar", icon: Fuel },
      ],
    },
    {
      image: "/images/avanza.webp",
      brand: "Toyota",
      subtitle: "New Avanza",
      price: 5000000,
      color: "from-indigo-500/20 to-purple-500/20",
      specs: [
        { label: "3 Hari 2 Malam", icon: Calendar },
        { label: "Include Driver", icon: UserCheck },
        { label: "Include Bahan Bakar", icon: Fuel },
      ],
    },
  ];

  return (
    <section id="travel" className="py-24 md:py-32 relative overflow-hidden bg-[#08080b]">
      {/* Background Glows yang konsisten dengan About.tsx */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[10%] left-[-10%] w-[40%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        
        {/* Header Section - Mengikuti gaya About.tsx */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-2xl">
            <m.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">Trip Packages</span>
            </m.div>
            
            <m.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white italic tracking-tighter uppercase leading-tight"
            >
              PILIH PAKET <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">TRAVEL ANDA.</span>
            </m.h2>
          </div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-sm leading-relaxed text-left md:text-right"
          >
            Perjalanan Premium lintas negara Pontianak — Kuching dengan harga transparan dan layanan berkelas.
          </m.p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {kendaraan.map((kend, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <TiltCard className="h-full group">
                <div className="relative h-full flex flex-col rounded-[2rem] bg-white/[0.03] border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-500 group-hover:border-white/20">
                  
                  {/* Image Container */}
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 z-20 cursor-zoom-in flex items-center justify-center bg-black/20 opacity-0 group-hover:opacity-100 transition-all duration-500"
                      onClick={() => setSelectedImage(kend.image)}
                    >
                      <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 transform scale-50 group-hover:scale-100 transition-all duration-500">
                        <Maximize2 className="w-5 h-5 text-white" />
                      </div>
                    </div>
                    <Image
                      src={kend.image}
                      alt={kend.subtitle}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#08080b] to-transparent opacity-60" />
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1 relative">
                    {/* Hover Glow Effect */}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${kend.color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500 -z-10`} />

                    <div className="mb-4">
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">
                        {kend.brand}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {kend.subtitle}
                      </h3>
                    </div>

                    <div className="mb-6">
                      <div className="text-xs text-gray-500 uppercase font-bold tracking-widest mb-1">Start From</div>
                      <p className="text-2xl font-black text-white">
                        Rp {kend.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="space-y-3 mb-8">
                      {kend.specs.map((spec, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-xs text-gray-400">
                          <div className="w-8 h-8 flex-shrink-0 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-colors">
                            <spec.icon className="w-4 h-4 text-cyan-400" />
                          </div>
                          <span className="font-medium">{spec.label}</span>
                        </div>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="mt-auto flex flex-col gap-2">
                      <m.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`https://wa.me/62895321866545?text=${encodeURIComponent(`Halo, saya mau pesan Paket Travel ${kend.subtitle}.`)}`}
                        target="_blank"
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-cyan-500 text-black font-bold text-xs transition-all hover:bg-cyan-400"
                      >
                        HUBUNGI ADMIN 1
                        <ArrowUpRight size={14} />
                      </m.a>
                      <m.a
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        href={`https://wa.me/6285822593523?text=${encodeURIComponent(`Halo, saya mau pesan Paket Travel ${kend.subtitle}.`)}`}
                        target="_blank"
                        className="flex items-center justify-between px-5 py-3 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs transition-all hover:bg-white/10"
                      >
                        HUBUNGI ADMIN 2
                        <MessageCircle size={14} className="text-gray-400" />
                      </m.a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </m.div>
          ))}
        </div>
      </div>

      {/* Lightbox - Dioptimalkan untuk modern look */}
      <AnimatePresence>
        {selectedImage && (
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#08080b]/95 backdrop-blur-xl p-6"
            onClick={() => setSelectedImage(null)}
          >
            <m.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/50 hover:text-white transition-colors flex items-center gap-2 text-xs font-bold tracking-widest"
              >
                CLOSE <X size={20} />
              </button>

              <Image
                src={selectedImage}
                alt="Detail"
                width={1400}
                height={900}
                className="w-auto max-w-full max-h-[80vh] rounded-3xl object-contain shadow-[0_0_50px_rgba(0,0,0,0.5)] border border-white/10"
              />
            </m.div>
          </m.div>
        )}
      </AnimatePresence>
    </section>
  );
};