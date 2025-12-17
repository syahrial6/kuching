"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle,
  XCircle,
  Users,
  Gauge,
  Fuel,
  ArrowLeft,
  Check,
  ChevronsUpDown,
  X,
} from "lucide-react";
import { Listbox } from "@headlessui/react";
import { useState } from "react";
import Link from "next/link";

export default function VehicleSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const kendaraan = [
    {
      image: "/images/alphard_transformer.webp",
      brand: "Toyota",
      nama: "Alphard Transformer",
      kursi: "6 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 4000000,
    },
    {
      image: "/images/hiace.webp",
      brand: "Toyota",
      nama: "Hiace Commuter",
      kursi: "14 Penumpang",
      transmisi: "Manual",
      bbm: "Diesel",
      status: "Tersedia",
      price: 1500000,
    },
    {
      image: "/images/fortuner.webp",
      brand: "Toyota",
      nama: "Fortuner GR Sport",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Diesel",
      status: "Tersedia",
      price: 1500000,
    },
    {
      image: "/images/zenix_hybrid.webp",
      brand: "Toyota",
      nama: "Innova Zenix HEV",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 700000,
    },
    {
      image: "/images/zenix_gasoline.webp",
      brand: "Toyota",
      nama: "Innova Zenix",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 600000,
    },
    {
      image: "/images/reborn.webp",
      brand: "Toyota",
      nama: "Innova Reborn",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 500000,
    },
    {
      image: "/images/avanza.webp",
      brand: "Toyota",
      nama: "New Avanza",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 350000,
    },
    {
      image: "/images/avanza_facelift.webp",
      brand: "Toyota",
      nama: "Avanza Facelift",
      kursi: "7 Penumpang",
      transmisi: "Manual",
      bbm: "Bensin",
      status: "Tersedia",
      price: 300000,
    },
    {
      image: "/images/brio_rs.webp",
      brand: "Honda",
      nama: "Brio RS",
      kursi: "5 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 350000,
    },
  ];

  const [filterTransmisi, setFilterTransmisi] = useState("Semua Transmisi");
  const [filterBBM, setFilterBBM] = useState("Semua BBM");
  const [filterHarga, setFilterHarga] = useState("Urutkan Harga");

  const filteredVehicles = kendaraan
    .filter((item) =>
      filterTransmisi === "Semua Transmisi"
        ? true
        : item.transmisi === filterTransmisi
    )
    .filter((item) =>
      filterBBM === "Semua BBM" ? true : item.bbm === filterBBM
    )
    .sort((a, b) => {
      if (filterHarga === "Harga Terendah") return a.price - b.price;
      if (filterHarga === "Harga Tertinggi") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <section id="vehicles" className="py-24 lg:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* BACK BUTTON */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 mb-10 rounded-full px-5 py-2.5 bg-white/5 border border-white/10 backdrop-blur-md text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            Kembali ke Beranda
          </Link>

          {/* TITLE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Daftar Unit Rental
            </h2>
            <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
              Pilih kendaraan premium terbaik untuk perjalanan Anda dengan
              nyaman dan bergaya
            </p>
          </motion.div>

          {/* FILTER BAR */}
          <div className="flex flex-col sm:flex-row gap-4 mb-14">
            <div className="flex flex-wrap gap-4">
              <Listbox value={filterTransmisi} onChange={setFilterTransmisi}>
                <div className="relative">
                  <Listbox.Button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium transition hover:from-white/10 hover:to-white/20">
                    {filterTransmisi}
                    <ChevronsUpDown className="w-4 h-4 opacity-70" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-50 mt-2 w-full rounded-2xl overflow-hidden bg-black/95 border border-white/20 backdrop-blur-xl shadow-2xl">
                    {["Semua Transmisi", "Automatic", "Manual"].map((opt) => (
                      <Listbox.Option
                        key={opt}
                        value={opt}
                        className="px-5 py-3 text-sm text-white cursor-pointer hover:bg-cyan-500/20 flex items-center gap-3 transition"
                      >
                        {filterTransmisi === opt && (
                          <Check className="w-4 h-4 text-cyan-400" />
                        )}
                        {opt}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              <Listbox value={filterBBM} onChange={setFilterBBM}>
                <div className="relative">
                  <Listbox.Button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium transition hover:from-white/10 hover:to-white/20">
                    {filterBBM}
                    <ChevronsUpDown className="w-4 h-4 opacity-70" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-50 mt-2 w-full rounded-2xl overflow-hidden bg-black/95 border border-white/20 backdrop-blur-xl shadow-2xl">
                    {["Semua BBM", "Bensin", "Diesel"].map((opt) => (
                      <Listbox.Option
                        key={opt}
                        value={opt}
                        className="px-5 py-3 text-sm text-white cursor-pointer hover:bg-cyan-500/20 flex items-center gap-3 transition"
                      >
                        {filterBBM === opt && (
                          <Check className="w-4 h-4 text-cyan-400" />
                        )}
                        {opt}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              </Listbox>

              <Listbox value={filterHarga} onChange={setFilterHarga}>
                <div className="relative">
                  <Listbox.Button className="flex items-center gap-3 px-5 py-3 rounded-2xl bg-gradient-to-r from-white/5 to-white/10 border border-white/20 backdrop-blur-md text-white text-sm font-medium transition hover:from-white/10 hover:to-white/20">
                    {filterHarga}
                    <ChevronsUpDown className="w-4 h-4 opacity-70" />
                  </Listbox.Button>
                  <Listbox.Options className="absolute z-50 mt-2 w-full rounded-2xl overflow-hidden bg-black/95 border border-white/20 backdrop-blur-xl shadow-2xl">
                    {["Urutkan Harga", "Harga Terendah", "Harga Tertinggi"].map(
                      (opt) => (
                        <Listbox.Option
                          key={opt}
                          value={opt}
                          className="px-5 py-3 text-sm text-white cursor-pointer hover:bg-cyan-500/20 flex items-center gap-3 transition"
                        >
                          {filterHarga === opt && (
                            <Check className="w-4 h-4 text-cyan-400" />
                          )}
                          {opt}
                        </Listbox.Option>
                      )
                    )}
                  </Listbox.Options>
                </div>
              </Listbox>
            </div>

            <button
              onClick={() => {
                setFilterTransmisi("Semua Transmisi");
                setFilterBBM("Semua BBM");
                setFilterHarga("Urutkan Harga");
              }}
              className="px-6 py-3 rounded-2xl bg-red-600/20 border border-red-500/40 text-red-300 font-medium text-sm hover:bg-red-600/30 transition"
            >
              Reset Filter
            </button>
          </div>

          {/* GRID KENDARAAN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredVehicles.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group"
              >
                <div className="h-full flex flex-col rounded-3xl overflow-hidden bg-gradient-to-br from-white/5 to-white/10 border border-white/20 backdrop-blur-xl shadow-xl transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-3">
                  {/* IMAGE */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden cursor-zoom-in"
                    onClick={() => setSelectedImage(item.image)}
                  >
                    <Image
                      src={item.image}
                      fill
                      alt={item.nama}
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 flex flex-col flex-grow">
                    {/* BRAND SLOT */}
                    <div className="h-5">
                      <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
                        {item.brand}
                      </span>
                    </div>

                    {/* TITLE SLOT */}
                    <div className="mt-2">
                      <h3 className="text-xl font-extrabold text-white leading-tight line-clamp-2">
                        {item.nama}
                      </h3>
                    </div>

                    {/* PRICE SLOT */}
                    <div className="mt-2 h-9 flex items-center">
                      <p className="text-2xl font-black">
                        <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                          Rp{item.price.toLocaleString("id-ID")}
                        </span>
                        <span className="text-sm text-gray-400 ml-2">
                          / hari
                        </span>
                      </p>
                    </div>

                    {/* SPECS GRID */}
                    <div className="mt-6 grid grid-cols-2 gap-4">
                      {[
                        { icon: Users, text: item.kursi },
                        { icon: Gauge, text: item.transmisi },
                        { icon: Fuel, text: item.bbm },
                        {
                          icon:
                            item.status === "Tersedia" ? CheckCircle : XCircle,
                          text: item.status,
                          color:
                            item.status === "Tersedia"
                              ? "text-green-400"
                              : "text-red-400",
                        },
                      ].map((spec, i) => (
                        <div
                          key={i}
                          className="flex flex-col items-center gap-2 py-4 rounded-2xl bg-white/5 border border-white/10"
                        >
                          <spec.icon
                            className={`w-6 h-6 ${
                              spec.color || "text-cyan-400"
                            }`}
                          />
                          <span className="text-xs text-gray-300 font-medium">
                            {spec.text}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 space-y-4">
                      {/* ADMIN 1 */}
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={`https://wa.me/62895321866545?text=${encodeURIComponent(
                          `Halo Sigma Delta, saya mau rental mobil ${item.nama}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-2xl py-4 text-center font-bold text-white bg-emerald-800/40 border border-emerald-600/60 backdrop-blur-md transition-all duration-400 hover:bg-emerald-700/50 hover:border-emerald-500/80 hover:shadow-lg hover:shadow-emerald-500/30"
                      >
                        Hubungi Admin 1
                      </motion.a>

                      {/* ADMIN 2 */}
                      <motion.a
                        whileHover={{ scale: 1.03 }}
                        whileTap={{ scale: 0.97 }}
                        href={`https://wa.me/6285822593523?text=${encodeURIComponent(
                          `Halo Sigma Delta, saya mau rental mobil ${item.nama}.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full rounded-2xl py-4 text-center font-bold text-white bg-teal-800/40 border border-teal-600/60 backdrop-blur-md transition-all duration-400 hover:bg-teal-700/50 hover:border-teal-500/80 hover:shadow-lg hover:shadow-teal-500/30"
                      >
                        Hubungi Admin 2
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
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-8"
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
              alt="Preview kendaraan"
              width={1600}
              height={1000}
              className="rounded-3xl object-contain max-h-[90vh] shadow-2xl"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 bg-white/10 backdrop-blur rounded-full p-3 hover:bg-white/20 transition"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
