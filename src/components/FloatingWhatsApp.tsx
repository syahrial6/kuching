"use client";
import { useState } from "react";
import { User, Users } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export const FloatingWhatsApp = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expandable Buttons */}
      <AnimatePresence>
        {open && (
          <>
            {/* Admin 1 */}
            <motion.a
              href={`https://wa.me/62895321866545?text=${encodeURIComponent(
                "Halo Admin 1 Sigma Delta, saya mau nanya."
              )}`}
              target="_blank"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="
    flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 
    backdrop-blur-xl border border-white/20 text-white shadow-xl 
    hover:bg-green-500/20 hover:border-green-400/40 transition
  "
            >
              <User className="w-5 h-5 text-green-400" />
              Admin 1
            </motion.a>

            {/* Admin 2 */}
            <motion.a
              href={`https://wa.me/6285822593523?text=${encodeURIComponent(
                "Halo Admin 2 Sigma Delta, saya mau nanya."
              )}`}
              target="_blank"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 30 }}
              className="
    flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/10 
    backdrop-blur-xl border border-white/20 text-white shadow-xl 
    hover:bg-blue-500/20 hover:border-blue-400/40 transition
  "
            >
              <Users className="w-5 h-5 text-blue-400" />
              Admin 2
            </motion.a>
          </>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen(!open)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="
          bg-green-500 text-white p-4 rounded-full shadow-2xl 
          hover:bg-green-600 transition
        "
      >
        <FaWhatsapp className="w-7 h-7" />
      </motion.button>
    </div>
  );
};
