"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ["hero", "about", "travel", "contact"];
      let current = "hero";

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;

        const rect = el.getBoundingClientRect();
        if (rect.top <= 200) current = id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const y = el.getBoundingClientRect().top + window.scrollY - 80;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });

    setIsOpen(false);
  };

  type MenuItem =
    | { label: string; id: string; type: "section" }
    | { label: string; href: string; type: "link" };

  const menuItems: MenuItem[] = [
    { label: "Beranda", id: "hero", type: "section" },
    { label: "Tentang", id: "about", type: "section" },
    { label: "Travel", id: "travel", type: "section" },
    { label: "Kontak", id: "contact", type: "section" },
    { label: "Gallery", href: "/gallery", type: "link" },
  ];

  return (
    <nav
      className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-50 transition-all duration-700 rounded-[2.5rem] ${
        scrolled
          ? "bg-black/40 backdrop-blur-2xl border border-white/10 py-2 shadow-2xl"
          : "bg-transparent py-4"
      }`}
    >
      <div className="px-8 flex justify-between items-center h-14">
        {/* Logo Section */}
<div
  className="flex items-center gap-3 cursor-pointer group"
  onClick={() => scrollToSection("hero")}
>
  {/* Logo Icon dengan efek Glassmorphism */}
  <div className="relative overflow-hidden rounded-full p-1.5 bg-white/5 group-hover:bg-white/10 transition-all duration-300 border border-white/5">
    <Image 
      src="/images/logo.png" 
      alt="Logo" 
      width={32} 
      height={32} 
      className="object-contain"
    />
  </div>

  {/* Text Logo */}
  <div className="hidden sm:flex flex-col justify-center">
    <h1 className="text-[15px] font-bold text-cyan-400/80 tracking-tight leading-none">
      Sigma Borneo
    </h1>
    <div className="flex items-center gap-1 mt-0.5">
      <span className="text-[9px] text-gray-500 font-medium uppercase tracking-wider">
        by
      </span>
      <span className="text-[9px] text-white font-bold uppercase tracking-widest">
        Artha Royal Group
      </span>
    </div>
  </div>
</div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-[2rem] border border-white/5">
          {menuItems.map((item) =>
            item.type === "link" ? (
              <Link
                key={item.label}
                href={item.href}
                className="px-6 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
              >
                {item.label}
              </Link>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-6 py-2 text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? "text-white"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                <span className="relative z-10">{item.label}</span>

                {activeSection === item.id && (
                  <motion.div
                    layoutId="liquid-pill"
                    className="absolute inset-0 bg-gradient-to-tr from-white/20 to-white/5 border border-white/20 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 28,
                    }}
                  />
                )}
              </button>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-white/10 text-white"
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            className="absolute top-20 left-0 w-full p-4 md:hidden"
          >
            <div className="bg-black/80 backdrop-blur-3xl border border-white/10 rounded-[2.5rem] p-6 space-y-2 shadow-2xl">
              {menuItems.map((item) =>
                item.type === "link" ? (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-6 py-4 rounded-full text-gray-300"
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="relative w-full text-left px-6 py-4 rounded-full text-gray-300"
                  >
                    <span className="relative z-10">{item.label}</span>

                    {activeSection === item.id && (
                      <motion.div
                        layoutId="liquid-pill-mobile"
                        className="absolute inset-0 bg-white/10 border border-white/20 rounded-full"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                  </button>
                )
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}