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
      subtitle: "Toyota Hiace",
      price: 7500000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
    {
      image: "/images/fortuner.webp",
      subtitle: "Fortuner GR",
      price: 7000000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
    {
      image: "/images/reborn.webp",
      subtitle: "Innova Reborn",
      price: 6000000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
    {
      image: "/images/avanza.webp",
      subtitle: "New Avanza",
      price: 5000000,
      specs: ["3 Hari 2 Malam", "Include Driver & Fuel", "Roadtax & Insurance"],
    },
  ];

  return (
    <>
      <section id="travel" className="py-32 relative bg-transparent">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight text-white">
              Pilih Paket Travel Anda
            </h2>
            <p className="mt-6 text-xl md:text-2xl text-gray-400">
              Perjalanan Premium, Harga Transparan
            </p>
          </motion.div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {kendaraan.map((kend, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <TiltCard className="h-full">
                  <div className="relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 backdrop-blur-lg transition-all duration-500 hover:border-white/20">
                    {/* Image */}
                    <div
                      className="relative overflow-hidden rounded-t-3xl cursor-zoom-in"
                      onClick={() => setSelectedImage(kend.image)}
                    >
                      <Image
                        src={kend.image}
                        width={800}
                        height={600}
                        alt={kend.subtitle}
                        className="w-full h-64 object-cover transition duration-700 group-hover:scale-105"
                      />
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-2xl font-semibold text-white">
                        {kend.subtitle}
                      </h3>

                      <p className="text-3xl font-bold text-yellow-500 mt-1">
                        Rp {kend.price.toLocaleString("id-ID")}
                      </p>

                      <div className="mt-5 space-y-2">
                        {kend.specs.slice(0, 5).map((spec, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-3 text-gray-300 text-sm"
                          >
                            <CheckCircle className="w-4 h-4 text-cyan-300" />
                            <span>{spec}</span>
                          </div>
                        ))}
                      </div>

                      {/* Buttons */}
                      <div className="mt-6 flex flex-col gap-3">
                        <motion.a
                          href={`https://wa.me/62895321866545?text=${encodeURIComponent(
                            `Halo Sigma Delta, saya mau Paket Travel ${kend.subtitle}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="
    w-full block text-center py-3 rounded-2xl 
    bg-white/10 border border-white/20 text-white font-semibold 
    backdrop-blur-md transition
    hover:bg-green-500/20 hover:border-green-400/30
  "
                        >
                          Hubungi Admin 1
                        </motion.a>

                        <motion.a
                          href={`https://wa.me/6285822593523?text=${encodeURIComponent(
                            `Halo Sigma Delta, saya mau Paket Travel ${kend.subtitle}.`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.04 }}
                          whileTap={{ scale: 0.96 }}
                          className="
    w-full block text-center py-3 rounded-2xl 
    bg-white/10 border border-white/20 text-white font-semibold 
    backdrop-blur-md transition
    hover:bg-blue-500/20 hover:border-blue-400/30
  "
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
      </section>

      {/* LIGHTBOX */}
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
              className="w-full max-h-screen rounded-3xl object-contain"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-6 right-6 w-12 h-12 flex items-center justify-center rounded-full bg-black/70 border border-white/20"
            >
              <X className="w-8 h-8 text-white" strokeWidth={3} />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};
