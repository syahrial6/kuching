"use client";
import Image from "next/image"; // Pastikan menggunakan komponen Image jika di Next.js
import {
  Home,
  Info,
  Map,
  Image as ImageIcon,
  Mail,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import { FaWhatsapp, FaInstagram, FaTiktok } from "react-icons/fa";

export function Footer() {
  const scrollToSection = (id: string) => {
    if (id === "gallery") {
      window.location.href = "/gallery";
      return;
    }
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const navigation = [
    { label: "Beranda", id: "hero", icon: Home },
    { label: "Tentang Kami", id: "about", icon: Info },
    { label: "Travel Kuching", id: "travel", icon: Map },
    { label: "Gallery", id: "gallery", icon: ImageIcon },
  ];

  return (
    <footer
      id="contact"
      className="relative overflow-hidden bg-[#08080b] pt-24 pb-12 border-t border-white/5"
    >
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-12 gap-16 lg:gap-12">
          {/* Brand Section - Logo Image & Nama Bersebelahan */}
          <div className="lg:col-span-12 xl:col-span-5 space-y-8">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5">
              {/* Logo Image */}
              <div className="relative w-16 h-16 shrink-0 overflow-hidden rounded-xl bg-white/5 p-2 border border-white/10">
                <Image
                  src="/images/logo.png"
                  fill
                  alt="Sigma Borneo Logo"
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Brand Text */}
              <div className="flex flex-col">
                <h3 className="text-2xl font-black tracking-tight text-white italic leading-tight uppercase">
                  Sigma <span className="text-cyan-500">Borneo</span>
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <div className="w-4 h-[1px] bg-cyan-500/50" />
                  <span className="text-white font-bold text-[11px] tracking-widest uppercase">
                    Artha Royal Group
                  </span>
                </div>
              </div>
            </div>

            <p className="text-gray-400 text-sm leading-relaxed max-w-xl">
              Layanan transportasi lintas negara premium yang menghubungkan
              Kalimantan Barat dan Malaysia. Mengedepankan keamanan dan
              kenyamanan eksklusif untuk setiap perjalanan Anda.
            </p>

            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-white/[0.03] border border-white/5">
              <ShieldCheck size={16} className="text-cyan-500" />
              <span className="text-[11px] text-gray-400 font-medium uppercase tracking-wider">
                Official & Licensed Transport
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="lg:col-span-4 xl:col-span-3">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Eksplorasi
            </h4>
            <ul className="grid grid-cols-2 lg:grid-cols-1 gap-y-4 gap-x-8">
              {navigation.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="group flex items-center gap-3 text-gray-400 cursor-pointer hover:text-white transition-all duration-300 text-sm"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-400 transition-all" />
                  {item.label}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Section */}
          <div className="lg:col-span-8 xl:col-span-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-[0.2em] mb-8">
              Layanan Pelanggan
            </h4>

            <div className="grid sm:grid-cols-2 xl:grid-cols-1 gap-3">
              {/* WhatsApp Cards */}
              {[
                {
                  label: "Booking Admin 1",
                  link: "https://wa.me/62895321866545",
                },
                {
                  label: "Booking Admin 2",
                  link: "https://wa.me/6285822593523",
                },
              ].map((admin, idx) => (
                <a
                  key={idx}
                  href={admin.link}
                  target="_blank"
                  className="group flex items-center justify-between p-4 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/[0.08] hover:border-cyan-500/30 transition-all duration-300"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-green-500/10 flex items-center justify-center text-green-500 group-hover:scale-110 transition-transform">
                      <FaWhatsapp size={20} />
                    </div>
                    <div>
                      <p className="text-white font-bold text-[11px] uppercase tracking-wide">
                        {admin.label}
                      </p>
                      <p className="text-gray-500 text-[10px] mt-0.5">
                        Tersedia • Klik untuk chat
                      </p>
                    </div>
                  </div>
                  <ArrowRight
                    size={14}
                    className="text-gray-700 group-hover:text-white group-hover:translate-x-1 transition-all"
                  />
                </a>
              ))}

              {/* Socials Small */}
              <div className="flex gap-2">
                <a
                  href="mailto:argroup.ptk@gmail.com"
                  className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex justify-center text-gray-400 hover:text-red-400 transition-colors"
                >
                  <Mail size={18} />
                </a>
                <a
                  href="https://instagram.com/argroup.ptk"
                  className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex justify-center text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <FaInstagram size={18} />
                </a>
                <a
                  href="#"
                  className="flex-1 py-3 rounded-xl bg-white/5 border border-white/10 flex justify-center text-gray-400 hover:text-white transition-colors"
                >
                  <FaTiktok size={18} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-gray-600 text-[10px] tracking-[0.2em] uppercase font-medium">
            © {new Date().getFullYear()} Sigma Borneo. All rights reserved.
          </p>

          <a
            href="https://rizkifajarsetyawan.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1 px-4 py-2 rounded-full bg-white/[0.02] border border-white/5 hover:border-cyan-500/20 transition-all"
          >
            {/* Gunakan leading-none agar tidak ada extra space di atas/bawah teks */}
            <span className="text-gray-600 text-[10px] uppercase tracking-tighter leading-none">
              Designed by
            </span>

            {/* Tambahkan h-full atau alignment manual jika masih terasa melesat 1px */}
            <span className="text-[11px] font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-none">
              Eunoia Digital Creations
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
}
