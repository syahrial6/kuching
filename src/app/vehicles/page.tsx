"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  XCircle,
  Users,
  Gauge,
  Fuel,
  Phone,
  ArrowLeft,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

export default function VehicleSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const kendaraan = [
    {
      image: "/images/alphard_transformer.webp",
      nama: "Alphard Transformer",
      kursi: "6 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 4.000.000 / hari",
    },
    {
      image: "/images/hiace.webp",
      nama: "Toyota Hiace",
      kursi: "14 Penumpang",
      transmisi: "Manual",
      bbm: "Diesel",
      status: "Tersedia",
      price: "Rp 1.500.000 / hari",
    },
    {
      image: "/images/fortuner.webp",
      nama: "Fortuner GR",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Diesel",
      status: "Tersedia",
      price: "Rp 1.500.000 / hari",
    },
    {
      image: "/images/zenix_hybrid.webp",
      nama: "Zenix Hybrid",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 700.000 / hari",
    },
    {
      image: "/images/zenix_gasoline.webp",
      nama: "Zenix Gasoline",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 600.000 / hari",
    },
    {
      image: "/images/reborn.webp",
      nama: "Innova Reborn",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 500.000 / hari",
    },
    {
      image: "/images/avanza.webp",
      nama: "New Avanza",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 350.000 / hari",
    },
    {
      image: "/images/avanza_facelift.webp",
      nama: "Avanza Facelift",
      kursi: "7 Penumpang",
      transmisi: "Manual",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 300.000 / hari",
    },
    {
      image: "/images/brio_rs.webp",
      nama: "Brio RS",
      kursi: "5 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: "Rp 350.000 / hari",
    },
  ];

  return (
    <>
      <section id="vehicles" className="py-32 relative">
        <div className="max-w-7xl mx-auto px-6">
          {/* BACK BUTTON */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/80 hover:text-white 
              bg-white/5 border border-white/10 backdrop-blur-xl 
              px-4 py-2 rounded-xl mb-10 transition hover:bg-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
            Kembali ke Beranda
          </Link>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-extrabold text-white">
              Daftar Unit Rental
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Pilih kendaraan sesuai kebutuhan perjalanan Anda
            </p>
          </motion.div>

          {/* LIST */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {kendaraan.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div
                  className="flex flex-col h-full rounded-3xl overflow-hidden bg-white/5 
    border border-white/20 backdrop-blur-xl 
    shadow-[0_8px_30px_rgba(255,255,255,0.05)]
    hover:shadow-[0_8px_40px_rgba(0,255,255,0.25)]
    transition-all duration-300"
                >
                  {/* IMAGE */}
                  <div
                    className="relative cursor-zoom-in"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      width={800}
                      height={500}
                      alt={item.nama}
                      className="w-full h-60 object-cover"
                    />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-2xl font-bold text-white">
                      {item.nama}
                    </h3>

                    {/* PRICE */}
                    <p className="text-cyan-300 font-bold text-xl mt-1">
                      {item.price}
                    </p>

                    {/* ICON GRID */}
                    <div className="mt-6 grid grid-cols-2 gap-4 text-gray-300 text-sm">
                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10">
                        <Users className="w-6 h-6 text-cyan-300 mb-1" />
                        <span className="text-center text-xs">
                          {item.kursi}
                        </span>
                      </div>

                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10">
                        <Gauge className="w-6 h-6 text-cyan-300 mb-1" />
                        <span className="text-center text-xs">
                          {item.transmisi}
                        </span>
                      </div>

                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10">
                        <Fuel className="w-6 h-6 text-cyan-300 mb-1" />
                        <span className="text-center text-xs">{item.bbm}</span>
                      </div>

                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10">
                        {item.status === "Tersedia" ? (
                          <CheckCircle className="w-6 h-6 text-green-400 mb-1" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-400 mb-1" />
                        )}
                        <span
                          className={`text-center text-xs ${
                            item.status === "Tersedia"
                              ? "text-green-400"
                              : "text-red-400"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>
                    </div>

                    {/* BUTTONS ADMIN */}
                    <div className="mt-auto pt-6 space-y-3">
                      <motion.a
                        href="https://wa.me/62895321866545"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="
                            flex items-center justify-center gap-2 py-3 rounded-xl
                            bg-green-500/20 text-green-300 border border-green-400/40
                            backdrop-blur-xl font-semibold
                            hover:bg-green-500/30 hover:border-green-300
                            hover:shadow-[0_0_14px_rgba(34,197,94,0.7)]
                            transition-all
                          "
                      >
                        <Phone className="w-5 h-5" />
                        Pesan ke Admin 1
                      </motion.a>

                      <motion.a
                        href="https://wa.me/6285822593523"
                        target="_blank"
                        whileHover={{ scale: 1.05 }}
                        className="
                            flex items-center justify-center gap-2 py-3 rounded-xl
                            bg-blue-500/20 text-blue-300 border border-blue-400/40
                            backdrop-blur-xl font-semibold
                            hover:bg-blue-500/30 hover:border-blue-300
                            hover:shadow-[0_0_14px_rgba(59,130,246,0.7)]
                            transition-all
                        "
                      >
                        <Phone className="w-5 h-5" />
                        Pesan ke Admin 2
                      </motion.a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* POPUP IMAGE */}
      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="
            fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
          onClick={() => setSelectedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full"
          >
            <Image
              src={selectedImage}
              alt="Preview"
              width={1400}
              height={900}
              className="rounded-3xl w-full object-contain max-h-[90vh]"
            />

            <button
              onClick={() => setSelectedImage(null)}
              className="
                absolute top-4 right-4 bg-black/70 w-12 h-12 rounded-full
                flex items-center justify-center border border-white/20
                hover:bg-white/10 transition
              "
            >
              <XCircle className="text-white w-8 h-8" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
