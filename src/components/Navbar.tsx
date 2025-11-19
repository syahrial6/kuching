"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

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
        const top = el.getBoundingClientRect().top;

        if (top <= 150) current = id;
      }

      setActiveSection(current);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
    setActiveSection(id);
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
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0d0d12]/90 backdrop-blur-xl border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center h-20">
        {/* Logo */}
        <div
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <Image
            src="/images/logo.png"
            alt="Sigma Delta Logo"
            width={42}
            height={42}
          />
          <div>
            <h1 className="text-lg font-semibold text-yellow-500">
              Sigma Delta
            </h1>
            <p className="text-[11px] text-gray-400 -mt-1">
              by Artha Royal Group
            </p>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          {menuItems.map((item) =>
            item.type === "link" ? (
              <a
                key={item.label}
                href={item.href}
                className="px-5 py-2 rounded-2xl text-gray-300 hover:text-white hover:bg-white/5 transition-all duration-300"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`
        px-5 py-2 rounded-2xl font-medium transition-all duration-300
        ${
          activeSection === item.id
            ? "text-white bg-white/10 border border-white/20"
            : "text-gray-300 hover:text-white hover:bg-white/5"
        }
      `}
              >
                {item.label}
              </button>
            )
          )}
        </div>

        {/* Mobile Toggle */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0d0d12]/95 border-t border-white/10 p-6 space-y-4">
          {menuItems.map((item) =>
            item.type === "link" ? (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left px-4 py-3 rounded-xl text-gray-300 hover:bg-white/5"
              >
                {item.label}
              </a>
            ) : (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`w-full text-left px-4 py-3 rounded-xl transition-all
        ${
          activeSection === item.id
            ? "bg-white/10 text-white border border-white/20"
            : "text-gray-300 hover:bg-white/5"
        }
      `}
              >
                {item.label}
              </button>
            )
          )}
        </div>
      )}
    </nav>
  );
}
