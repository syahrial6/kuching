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
} from "lucide-react";
import { Listbox } from "@headlessui/react";
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
      price: 4000000,
    },
    {
      image: "/images/hiace.webp",
      nama: "Toyota Hiace",
      kursi: "14 Penumpang",
      transmisi: "Manual",
      bbm: "Diesel",
      status: "Tersedia",
      price: 1500000,
    },
    {
      image: "/images/fortuner.webp",
      nama: "Fortuner GR",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Diesel",
      status: "Tersedia",
      price: 1500000,
    },
    {
      image: "/images/zenix_hybrid.webp",
      nama: "Zenix Hybrid",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 700000,
    },
    {
      image: "/images/zenix_gasoline.webp",
      nama: "Zenix Gasoline",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 600000,
    },
    {
      image: "/images/reborn.webp",
      nama: "Innova Reborn",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 500000,
    },
    {
      image: "/images/avanza.webp",
      nama: "New Avanza",
      kursi: "7 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 350000,
    },
    {
      image: "/images/avanza_facelift.webp",
      nama: "Avanza Facelift",
      kursi: "7 Penumpang",
      transmisi: "Manual",
      bbm: "Bensin",
      status: "Tersedia",
      price: 300000,
    },
    {
      image: "/images/brio_rs.webp",
      nama: "Honda Brio RS",
      kursi: "5 Penumpang",
      transmisi: "Automatic",
      bbm: "Bensin",
      status: "Tersedia",
      price: 350000,
    },
  ];

  // === FILTER STATES ===
  const [filterTransmisi, setFilterTransmisi] = useState("Semua Transmisi");
  const [filterBBM, setFilterBBM] = useState("Semua BBM");
  const [filterHarga, setFilterHarga] = useState("Urutkan Harga");

  // === LOGIKA FILTER ===
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
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-extrabold text-white">
              Daftar Unit Rental
            </h2>
            <p className="mt-4 text-gray-400 text-lg">
              Pilih kendaraan sesuai kebutuhan perjalanan Anda
            </p>
          </motion.div>

          {/* ================= FILTER BAR ================= */}
          <div className="flex flex-wrap items-center gap-4 mb-14">
            {/* FILTER TRANSMISI */}
            <Listbox value={filterTransmisi} onChange={setFilterTransmisi}>
              <div className="relative">
                <Listbox.Button
                  className="
                  w-48 bg-white/5 border border-white/20 text-white px-4 py-2 rounded-xl 
                  flex items-center justify-between backdrop-blur-xl"
                >
                  {filterTransmisi}
                  <ChevronsUpDown className="w-4 h-4 opacity-60" />
                </Listbox.Button>

                <Listbox.Options
                  className="
                  absolute mt-2 w-48 bg-black/90 border border-white/20 rounded-xl 
                  shadow-lg backdrop-blur-xl z-50 overflow-hidden"
                >
                  {["Semua Transmisi", "Automatic", "Manual"].map((opt) => (
                    <Listbox.Option
                      key={opt}
                      value={opt}
                      className="cursor-pointer px-4 py-2 hover:bg-white/10 text-white flex items-center gap-2"
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

            {/* FILTER BBM */}
            <Listbox value={filterBBM} onChange={setFilterBBM}>
              <div className="relative">
                <Listbox.Button
                  className="
                  w-40 bg-white/5 border border-white/20 text-white px-4 py-2 rounded-xl 
                  flex items-center justify-between backdrop-blur-xl"
                >
                  {filterBBM}
                  <ChevronsUpDown className="w-4 h-4 opacity-60" />
                </Listbox.Button>

                <Listbox.Options
                  className="
                  absolute mt-2 w-40 bg-black/90 border border-white/20 rounded-xl 
                  shadow-lg backdrop-blur-xl z-50 overflow-hidden"
                >
                  {["Semua BBM", "Bensin", "Diesel"].map((opt) => (
                    <Listbox.Option
                      key={opt}
                      value={opt}
                      className="cursor-pointer px-4 py-2 hover:bg-white/10 text-white flex items-center gap-2"
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

            {/* FILTER HARGA */}
            <Listbox value={filterHarga} onChange={setFilterHarga}>
              <div className="relative">
                <Listbox.Button
                  className="
                  w-44 bg-white/5 border border-white/20 text-white px-4 py-2 rounded-xl 
                  flex items-center justify-between backdrop-blur-xl"
                >
                  {filterHarga}
                  <ChevronsUpDown className="w-4 h-4 opacity-60" />
                </Listbox.Button>

                <Listbox.Options
                  className="
                  absolute mt-2 w-44 bg-black/90 border border-white/20 rounded-xl 
                  shadow-lg backdrop-blur-xl z-50 overflow-hidden"
                >
                  {["Urutkan Harga", "Harga Terendah", "Harga Tertinggi"].map(
                    (opt) => (
                      <Listbox.Option
                        key={opt}
                        value={opt}
                        className="cursor-pointer px-4 py-2 hover:bg-white/10 text-white flex items-center gap-2"
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

            {/* RESET */}
            <button
              onClick={() => {
                setFilterTransmisi("Semua Transmisi");
                setFilterBBM("Semua BBM");
                setFilterHarga("Urutkan Harga");
              }}
              className="px-4 py-2 bg-red-500/20 hover:bg-red-500/30 
              border border-red-400/40 text-red-300 rounded-xl"
            >
              Reset
            </button>
          </div>

          {/* ================= LIST KENDARAAN ================== */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {filteredVehicles.map((item, index) => (
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
                    <div className="min-h-16">
                      <h3 className="text-2xl font-bold text-white">
                        {item.nama}
                      </h3>
                    </div>
                    <p className="font-bold text-xl mt-1">
                      <span className="text-cyan-300">
                        Rp {item.price.toLocaleString("id-ID")}
                      </span>
                      <span className="text-white"> / hari</span>
                    </p>

                    {/* ICON GRID */}
                    <div className="mt-6 grid grid-cols-2 gap-4 text-gray-300 text-sm">
                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10 h-20 justify-between">
                        <Users className="w-6 h-6 text-cyan-300" />
                        <span className="text-center text-xs">
                          {item.kursi}
                        </span>
                      </div>

                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10 h-20 justify-between">
                        <Gauge className="w-6 h-6 text-cyan-300" />
                        <span className="text-center text-xs">
                          {item.transmisi}
                        </span>
                      </div>

                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10 h-20 justify-between">
                        <Fuel className="w-6 h-6 text-cyan-300" />
                        <span className="text-center text-xs">{item.bbm}</span>
                      </div>

                      <div className="flex flex-col items-center bg-white/5 rounded-xl p-3 border border-white/10 h-20 justify-between">
                        {item.status === "Tersedia" ? (
                          <CheckCircle className="w-6 h-6 text-green-400" />
                        ) : (
                          <XCircle className="w-6 h-6 text-red-400" />
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
                        href={`https://wa.me/62895321866545?text=${encodeURIComponent(
                          `Halo Sigma Delta, saya mau rental mobil ${item.nama}.`
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
                          `Halo Sigma Delta, saya mau rental mobil ${item.nama}.`
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
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-6"
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
