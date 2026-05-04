"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import {
  Users,
  Maximize2,
  Fuel,
  ArrowLeft,
  ChevronsUpDown,
  X,
  MessageCircle,
  Zap,
  Sparkles,
  RotateCcw,
  Car,
} from "lucide-react";
import { Listbox } from "@headlessui/react";
import { useState, useMemo } from "react";
import Link from "next/link";

export default function VehicleSection() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const kendaraan = useMemo(() => [
    { image: "/images/alphard_transformer.webp", brand: "TOYOTA", nama: "Alphard Transformer", type: "Luxury", kursi: "6", transmisi: "AT", bbm: "Bensin", price: 4000000, includeDriver: false },
    { image: "/images/hiace.webp", brand: "TOYOTA", nama: "Hiace Commuter", type: "Minibus", kursi: "14", transmisi: "MT", bbm: "Diesel", price: 1500000, includeDriver: true },
    { image: "/images/fortuner.webp", brand: "TOYOTA", nama: "Fortuner GR Sport", type: "SUV", kursi: "7", transmisi: "AT", bbm: "Diesel", price: 1500000, includeDriver: false },
    { image: "/images/zenix_hybrid.webp", brand: "TOYOTA", nama: "Innova Zenix HEV", type: "MPV", kursi: "7", transmisi: "AT", bbm: "Bensin", price: 700000, includeDriver: false },
    { image: "/images/zenix_gasoline.webp", brand: "TOYOTA", nama: "Innova Zenix", type: "MPV", kursi: "7", transmisi: "AT", bbm: "Bensin", price: 600000, includeDriver: false },
    { image: "/images/reborn.webp", brand: "TOYOTA", nama: "Innova Reborn", type: "MPV", kursi: "7", transmisi: "AT", bbm: "Bensin", price: 500000, includeDriver: false },
    { image: "/images/avanza.webp", brand: "TOYOTA", nama: "New Avanza", type: "MPV", kursi: "7", transmisi: "AT/MT", bbm: "Bensin", price: 350000, includeDriver: false },
    { image: "/images/avanza_facelift.webp", brand: "TOYOTA", nama: "Avanza Facelift", type: "MPV", kursi: "7", transmisi: "MT", bbm: "Bensin", price: 300000, includeDriver: false },
    { image: "/images/brio_rs.webp", brand: "HONDA", nama: "Brio RS", type: "City Car", kursi: "5", transmisi: "AT", bbm: "Bensin", price: 350000, includeDriver: false },
  ], []);

  const [filterTransmisi, setFilterTransmisi] = useState("Semua Transmisi");
  const [filterBBM, setFilterBBM] = useState("Semua BBM");
  const [filterHarga, setFilterHarga] = useState("Urutkan Harga");

  const isFiltered = filterTransmisi !== "Semua Transmisi" || filterBBM !== "Semua BBM" || filterHarga !== "Urutkan Harga";
  
  const resetFilters = () => {
    setFilterTransmisi("Semua Transmisi");
    setFilterBBM("Semua BBM");
    setFilterHarga("Urutkan Harga");
  };

  const filteredVehicles = kendaraan
    .filter((item) => {
      if (filterTransmisi === "Semua Transmisi") return true;
      const target = filterTransmisi === "Automatic" ? "AT" : "MT";
      return item.transmisi.includes(target);
    })
    .filter((item) => (filterBBM === "Semua BBM" ? true : item.bbm === filterBBM))
    .sort((a, b) => {
      if (filterHarga === "Harga Terendah") return a.price - b.price;
      if (filterHarga === "Harga Tertinggi") return b.price - a.price;
      return 0;
    });

  return (
    <>
      <section id="vehicles" className="py-24 relative bg-[#050508] overflow-hidden text-white">
        {/* Decorative Background Text */}
        <div className="absolute top-40 left-1/2 -translate-x-1/2 text-[20vw] font-black text-white/[0.02] select-none pointer-events-none tracking-tighter italic">
          PREMIUM
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-20">
          
          {/* HEADER */}
          <div className="mb-20 relative">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-10">
              <div className="max-w-2xl">
                <Link href="/" className="group flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-cyan-400 transition-all mb-8">
                  <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> Back to Home
                </Link>
                <h2 className="text-6xl md:text-8xl font-black italic tracking-tighter leading-none uppercase">
                  THE <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">GARAGE.</span>
                </h2>
                <p className="mt-8 text-gray-400 text-sm md:text-base font-medium leading-relaxed tracking-wide">
                  Eksplorasi armada terbaik kami di Pontianak. Dari kenyamanan <span className="text-white">City Car</span> hingga kemewahan <span className="text-white">VIP Transporter</span> untuk segala kebutuhan perjalanan Anda.
                </p>
              </div>

              <div className="hidden lg:flex gap-10 border-l border-white/10 pl-10 mb-2">
                <div>
                  <span className="block text-3xl font-black text-white italic">9</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">Premium Fleet</span>
                </div>
                <div>
                  <span className="block text-3xl font-black text-cyan-500 italic">24/7</span>
                  <span className="text-[9px] text-gray-500 uppercase tracking-[0.2em] font-bold">Support Chat</span>
                </div>
              </div>
            </div>
          </div>

          {/* FILTER BAR */}
          <div className="sticky top-6 z-[90] flex flex-wrap items-center gap-3 mb-24 p-2 bg-black/60 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl">
              {[
                { state: filterTransmisi, set: setFilterTransmisi, options: ["Semua Transmisi", "Automatic", "Manual"] },
                { state: filterBBM, set: setFilterBBM, options: ["Semua BBM", "Bensin", "Diesel"] },
                { state: filterHarga, set: setFilterHarga, options: ["Urutkan Harga", "Harga Terendah", "Harga Tertinggi"] }
              ].map((filter, idx) => (
                <Listbox key={idx} value={filter.state} onChange={filter.set}>
                  <div className="relative flex-grow md:flex-grow-0">
                    <Listbox.Button className="w-full flex items-center justify-between gap-4 px-6 py-4 rounded-2xl bg-white/5 border border-white/5 text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-all outline-none">
                      {filter.state}
                      <ChevronsUpDown className="w-3 h-3 text-cyan-400" />
                    </Listbox.Button>
                    <Listbox.Options className="absolute left-0 z-[100] mt-2 w-full min-w-[220px] rounded-2xl overflow-hidden bg-[#0d0d12] border border-white/10 shadow-2xl">
                      {filter.options.map((opt) => (
                        <Listbox.Option key={opt} value={opt} className={({ active }) => `px-6 py-4 text-[10px] font-bold uppercase tracking-widest cursor-pointer ${active ? "bg-cyan-500 text-black" : "text-gray-400 hover:text-white"}`}>
                          {opt}
                        </Listbox.Option>
                      ))}
                    </Listbox.Options>
                  </div>
                </Listbox>
              ))}

              <AnimatePresence>
                {isFiltered && (
                  <motion.button
                    initial={{ opacity: 0, scale: 0.8, x: 20 }}
                    animate={{ opacity: 1, scale: 1, x: 0 }}
                    exit={{ opacity: 0, scale: 0.8, x: 20 }}
                    onClick={resetFilters}
                    className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-red-500/10 border border-red-500/20 text-red-500 text-[10px] font-black uppercase tracking-widest hover:bg-red-500 hover:text-white transition-all ml-auto"
                  >
                    <RotateCcw className="w-3 h-3" /> Reset
                  </motion.button>
                )}
              </AnimatePresence>
          </div>

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-20 relative z-10">
            {filteredVehicles.map((item, index) => (
              <motion.div key={`${item.nama}-${index}`} layout className="group">
                
                {/* Image Section */}
                <div className="relative aspect-[16/10] rounded-[2.5rem] overflow-hidden bg-[#0d0d12] border border-white/5 mb-8 shadow-2xl">
                  <Image src={item.image} fill alt={item.nama} priority={index < 3} className="object-cover transition-transform duration-1000 group-hover:scale-110" />
                  
                  {/* Floating Type Badge */}
                  <div className="absolute top-5 left-5 z-20">
                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 text-white font-bold text-[8px] uppercase tracking-widest shadow-xl">
                      <Car className="w-3 h-3 text-cyan-400" /> {item.type}
                    </div>
                  </div>

                  <button onClick={() => setSelectedImage(item.image)} className="absolute bottom-5 right-5 p-4 rounded-full bg-black/40 backdrop-blur-md border border-white/20 text-white lg:opacity-0 lg:group-hover:opacity-100 transition-all z-30">
                    <Maximize2 className="w-4 h-4" />
                  </button>
                </div>

                {/* Info Section */}
                <div className="px-2">
                  <div className="mb-3">
                    <span className="text-[10px] font-black tracking-[0.4em] text-cyan-500 uppercase border-b-2 border-cyan-500/20 pb-1">
                      {item.brand}
                    </span>
                  </div>

                  {/* Title Hover Effect */}
                  <div className="h-[3.5rem] flex items-center mb-6 overflow-hidden">
                    <motion.h3 
                      className="text-2xl md:text-3xl font-black italic uppercase tracking-tighter group-hover:text-cyan-400 leading-[1.1] truncate group-hover:whitespace-normal group-hover:overflow-visible transition-colors duration-300"
                    >
                      {item.nama}
                    </motion.h3>
                  </div>

                  {/* Specs & Driver Badge */}
                  <div className="flex flex-wrap items-start content-start gap-2 mb-10 h-[5rem] overflow-hidden">
                    {/* Spesifikasi Dasar */}
                    {[
                      { icon: Users, label: item.kursi },
                      { icon: Zap, label: item.transmisi },
                      { icon: Fuel, label: item.bbm }
                    ].map((spec, i) => (
                      <div key={i} className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/5 border border-white/5">
                        <spec.icon className="w-3 h-3 text-gray-500" />
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{spec.label}</span>
                      </div>
                    ))}

                    {/* INCLUDE DRIVER BADGE */}
                    {item.includeDriver && (
                      <motion.div 
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                      >
                        <Sparkles className="w-3 h-3" />
                        <span className="text-[10px] font-black uppercase tracking-widest italic">Driver Included</span>
                      </motion.div>
                    )}
                  </div>

                  {/* CTA Area */}
                  <div className="flex items-end justify-between pt-8 border-t border-white/10">
                    <div>
                      <span className="text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] block mb-2">Rate Per Day</span>
                      <p className="text-3xl font-black leading-none flex items-start">
                        <span className="text-cyan-500 text-xs mt-1 mr-1 font-bold">IDR</span>
                        {item.price.toLocaleString("id-ID")}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <a href={`https://wa.me/62895321866545?text=Halo Admin 1, booking ${item.nama}`} target="_blank" className="p-4 rounded-2xl bg-white text-black hover:bg-cyan-500 transition-all shadow-xl">
                        <MessageCircle className="w-5 h-5" />
                      </a>
                      <a href={`https://wa.me/6285822593523?text=Halo Admin 2, booking ${item.nama}`} target="_blank" className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-cyan-500 hover:text-black transition-all">
                        <MessageCircle className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FULLSCREEN PREVIEW */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-3xl flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
            <motion.div initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }} className="relative w-full max-w-6xl aspect-video rounded-[2.5rem] overflow-hidden" onClick={(e) => e.stopPropagation()}>
              <Image src={selectedImage} alt="Preview" fill unoptimized className="object-cover" />
              <button onClick={() => setSelectedImage(null)} className="absolute top-8 right-8 bg-cyan-500 text-black p-5 rounded-2xl shadow-2xl">
                <X className="w-6 h-6 stroke-[3px]" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}