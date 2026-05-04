"use client";

import { motion as m, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, X, Maximize2, PlayCircle, Camera } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type GalleryItem = {
  type: "photo" | "video";
  src: string;
  span?: string;
};

export default function GalleryPage() {
  const [preview, setPreview] = useState<GalleryItem | null>(null);

  const galleryData: GalleryItem[] = [
    { type: "photo", src: "/documentation/pictures/documentation-1.jpg", span: "md:col-span-2 md:row-span-2" },
    { type: "photo", src: "/documentation/pictures/documentation-2.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-3.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-4.jpg", span: "md:row-span-2" },
    { type: "photo", src: "/documentation/pictures/documentation-5.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-6.jpg", span: "md:col-span-2" },
    { type: "photo", src: "/documentation/pictures/documentation-7.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-8.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-9.jpg", span: "md:col-span-2 md:row-span-2" },
    { type: "photo", src: "/documentation/pictures/documentation-10.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-11.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-12.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-13.jpg", span: "md:col-span-2" },
    { type: "photo", src: "/documentation/pictures/documentation-14.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-15.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#050508] pt-28 pb-20 px-6 relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <m.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <Link
            href="/"
            className="group inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.3em] text-gray-500 hover:text-cyan-400 transition-all mb-8"
          >
            <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div>
              <h1 className="text-5xl md:text-8xl font-black italic tracking-tighter leading-[0.8] uppercase text-white">
                GALLERY <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-400 to-blue-600">FILES.</span>
              </h1>
              <p className="text-gray-500 mt-8 max-w-lg font-medium tracking-wide text-sm leading-relaxed">
              Lebih dari sekadar transportasi, ini tentang kenangan. Jelajahi galeri momen dari mereka yang telah mempercayakan perjalanannya kepada kami.
              </p>
            </div>
            <div className="flex items-center gap-4 px-8 py-4 rounded-full bg-white/5 border border-white/10 text-cyan-400 text-[10px] font-black uppercase tracking-[0.2em] backdrop-blur-md shadow-2xl">
              <Camera size={16} /> {galleryData.length} Shots
            </div>
          </div>
        </m.div>

        {/* BENTO GRID - FULL COVER */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 auto-rows-[200px] md:auto-rows-[250px]">
          {galleryData.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              onClick={() => setPreview(item)}
              className={`group relative rounded-[2rem] overflow-hidden border border-white/5 bg-[#0d0d12] cursor-pointer shadow-2xl transition-all duration-500 hover:border-cyan-500/50 ${item.span || ""}`}
            >
              {/* Grid menggunakan object-cover agar padat dan rapi */}
              <div className="relative w-full h-full overflow-hidden">
                {item.type === "photo" ? (
                  <Image
                    src={item.src}
                    alt="Documentation"
                    fill
                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                ) : (
                  <video src={item.src} className="w-full h-full object-cover" muted autoPlay loop />
                )}
                
                {/* Overlay saat hover */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center backdrop-blur-[2px]">
                   <div className="p-4 bg-white text-black rounded-full scale-50 group-hover:scale-100 transition-transform duration-500 shadow-2xl">
                      {item.type === "photo" ? <Maximize2 size={20} /> : <PlayCircle size={20} />}
                   </div>
                </div>
              </div>
            </m.div>
          ))}
        </div>
      </div>

      {/* FULL PREVIEW MODAL - ORIGINAL ASPECT RATIO */}
      <AnimatePresence>
        {preview && (
          <m.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-2xl flex items-center justify-center z-[999] p-4 md:p-12"
            onClick={() => setPreview(null)}
          >
            {/* Close Button */}
            <m.button
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="absolute top-10 right-10 bg-cyan-500 text-black p-4 rounded-2xl z-[1000] hover:rotate-90 transition-all duration-300 shadow-2xl"
              onClick={() => setPreview(null)}
            >
              <X size={24} strokeWidth={3} />
            </m.button>

            {/* Content Preview menggunakan object-contain agar foto asli terlihat utuh */}
            <m.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              {preview.type === "photo" ? (
                <div className="relative w-full h-full">
                  <Image
                    src={preview.src}
                    alt="Full View"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              ) : (
                <video src={preview.src} controls autoPlay className="max-w-full max-h-full rounded-2xl shadow-2xl border border-white/10" />
              )}
            </m.div>
            
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 text-[9px] font-black tracking-[0.4em] uppercase">
               Viewing Original Aspect Ratio
            </div>
          </m.div>
        )}
      </AnimatePresence>
    </div>
  );
}