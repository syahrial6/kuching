"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle, X } from "lucide-react";
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
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
    {
      image: "/images/fortuner.webp",
      brand: "Toyota",
      subtitle: "Fortuner GR Sport",
      price: 7000000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
    {
      image: "/images/reborn.webp",
      brand: "Toyota",
      subtitle: "Innova Reborn",
      price: 6000000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
    {
      image: "/images/avanza.webp",
      brand: "Toyota",
      subtitle: "New Avanza",
      price: 5000000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
  ];

  return (
    <section id="travel" className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl md:text-6xl font-black text-white tracking-tight">
            Pilih Paket Travel Anda
          </h2>
          <p className="mt-6 text-xl text-gray-300">
            Perjalanan Premium ke Kuching, Harga Transparan
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10 items-stretch">
          {kendaraan.map((kend, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.7 }}
              className="h-full"
            >
              <TiltCard className="h-full">
                <div className="h-full flex flex-col rounded-3xl bg-gradient-to-br from-white/5 to-white/10 border border-white/15 backdrop-blur-xl shadow-xl hover:shadow-2xl hover:shadow-cyan-500/20 transition-all duration-500">
                  {/* Image */}
                  <div
                    className="relative h-56 flex-shrink-0 overflow-hidden rounded-t-3xl cursor-zoom-in"
                    onClick={() => setSelectedImage(kend.image)}
                  >
                    <Image
                      src={kend.image}
                      alt={kend.subtitle}
                      fill
                      className="object-cover transition-transform duration-700 hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
                  </div>

                  {/* CONTENT – SLOT BASED LAYOUT */}
                  <div className="flex flex-col h-full p-6">
                    {/* Brand slot */}
                    <div className="h-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                        {kend.brand}
                      </span>
                    </div>

                    {/* Title slot (fixed height) */}
                    <div className="mt-2">
                      <h3 className="text-xl font-extrabold text-white leading-tight line-clamp-2">
                        {kend.subtitle}
                      </h3>
                    </div>

                    {/* Price slot */}
                    <div className="h-10 flex items-center">
                      <p className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                        Rp {kend.price.toLocaleString("id-ID")}
                      </p>
                    </div>

                    {/* Specs */}
                    <div className="mt-6 space-y-3">
                      {kend.specs.map((spec, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-300"
                        >
                          <CheckCircle className="w-5 h-5 text-cyan-400 flex-shrink-0" />
                          <span>{spec}</span>
                        </div>
                      ))}
                    </div>

                    {/* Push buttons to bottom */}
                    <div className="flex-1" />

                    {/* Actions */}
                    <div className="space-y-3 pt-6">
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={`https://wa.me/62895321866545?text=${encodeURIComponent(
                          `Halo Sigma Delta, saya mau Paket Travel ${kend.subtitle}.`
                        )}`}
                        target="_blank"
                        className="block w-full rounded-2xl py-3 text-center font-bold text-white bg-emerald-800/40 border border-emerald-600/60 backdrop-blur-md hover:bg-emerald-700/50 hover:border-emerald-500/80 hover:shadow-lg hover:shadow-emerald-500/30 transition"
                      >
                        Hubungi Admin 1
                      </motion.a>

                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={`https://wa.me/6285822593523?text=${encodeURIComponent(
                          `Halo Sigma Delta, saya mau Paket Travel ${kend.subtitle}.`
                        )}`}
                        target="_blank"
                        className="block w-full rounded-2xl py-3 text-center font-bold text-white bg-teal-800/40 border border-teal-600/60 backdrop-blur-md hover:bg-teal-700/50 hover:border-teal-500/80 hover:shadow-lg hover:shadow-teal-500/30 transition"
                      >
                        Hubungi Admin 2
                      </motion.a>
                    </div>
                  </div>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="relative max-w-6xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={selectedImage}
              alt="Detail Kendaraan"
              width={1400}
              height={900}
              className="w-full max-h-screen rounded-3xl object-contain shadow-2xl"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/70 border border-white/20 hover:bg-white/10 transition"
            >
              <X className="w-8 h-8 text-white" strokeWidth={3} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
