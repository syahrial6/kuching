"use client";

import { motion as m } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

type GalleryItem = {
  type: "photo" | "video";
  src: string;
};

export default function GalleryPage() {
  const [preview, setPreview] = useState<GalleryItem | null>(null);

  const galleryData: GalleryItem[] = [
    { type: "photo", src: "/documentation/pictures/documentation-1.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-2.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-3.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-4.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-5.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-6.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-7.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-8.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-9.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-10.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-11.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-12.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-13.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-14.jpg" },
    { type: "photo", src: "/documentation/pictures/documentation-15.jpg" },

    // VIDEO (DINONAKTIFKAN SEMENTARA)
    // {
    //   type: "video",
    //   src: "/documentation/videos/video-1.mp4",
    // },
  ];

  return (
    <div className="pt-28 pb-20 px-6 max-w-7xl mx-auto text-white">
      {/* Back button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-xl bg-white/10 border border-white/20 hover:bg-white/20 transition"
      >
        <ArrowLeft size={18} />
        Kembali ke Home
      </Link>

      <m.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl md:text-5xl font-extrabold mb-10 text-center"
      >
        Galeri <span className="text-cyan-400">Perjalanan</span>
      </m.h1>

      {/* GRID TANPA PERTANGGAL */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {galleryData.map((item, i) => (
          <m.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl cursor-pointer"
            onClick={() => setPreview(item)}
          >
            {item.type === "photo" ? (
              <Image
                src={item.src}
                alt="gallery photo"
                width={800}
                height={500}
                className="w-full h-48 object-cover"
              />
            ) : (
              <video
                src={item.src}
                className="w-full h-48 object-cover"
                muted
                autoPlay
                loop
              />
            )}
          </m.div>
        ))}
      </div>

      {/* Modal Preview */}
      {preview && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-md flex items-center justify-center z-[999] p-4">
          <button
            onClick={() => setPreview(null)}
            className="absolute top-6 right-6 bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition"
          >
            <X size={26} />
          </button>

          <div className="max-w-4xl w-full">
            {preview.type === "photo" ? (
              <Image
                src={preview.src}
                alt="preview"
                width={1200}
                height={800}
                className="w-full rounded-xl"
              />
            ) : (
              <video
                src={preview.src}
                controls
                autoPlay
                className="w-full rounded-xl"
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
