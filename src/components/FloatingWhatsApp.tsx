"use client";

import { useState } from "react";
import { User, Users, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence, Variants } from "framer-motion"; // Tambahkan import Variants

export const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  // Gunakan tipe Variants agar TS tidak protes
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20, scale: 0.8 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        type: "spring", // Sekarang TS tahu ini adalah tipe spring literal
        stiffness: 300, 
        damping: 25 
      }
    },
    exit: { 
      opacity: 0, 
      y: 10, 
      scale: 0.9,
      transition: { duration: 0.2 }
    },
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4">
      <AnimatePresence>
        {open && (
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="flex flex-col items-end gap-3 mb-2"
          >
            {/* ... isi tombol Admin 1 & 2 tetap sama ... */}
            <motion.a
              variants={itemVariants}
              href={`https://wa.me/62895321866545`}
              target="_blank"
              className="group flex items-center gap-4 pl-5 pr-4 py-3 rounded-2xl bg-[#0d0d12]/80 backdrop-blur-2xl border border-white/10 text-white shadow-xl hover:border-emerald-500/50 transition-all duration-300"
            >
               <div className="flex flex-col items-end">
                <span className="text-xs font-bold">Admin 1</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-black transition-all">
                <User className="w-5 h-5" />
              </div>
            </motion.a>

            <motion.a
              variants={itemVariants}
              href={`https://wa.me/6285822593523`}
              target="_blank"
              className="group flex items-center gap-4 pl-5 pr-4 py-3 rounded-2xl bg-[#0d0d12]/80 backdrop-blur-2xl border border-white/10 text-white shadow-xl hover:border-cyan-500/50 transition-all duration-300"
            >
               <div className="flex flex-col items-end">
                <span className="text-xs font-bold">Admin 2</span>
              </div>
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500 group-hover:text-black transition-all">
                <Users className="w-5 h-5" />
              </div>
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        animate={{ 
          backgroundColor: open ? "#1f2937" : "#10b981",
        }}
        className="w-16 h-16 rounded-3xl flex items-center justify-center text-white shadow-2xl border border-white/10 relative"
      >
        {open ? <X size={32} /> : <FaWhatsapp size={32} />}
      </motion.button>
    </div>
  );
};