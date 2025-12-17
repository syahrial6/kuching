"use client";
import { Home, Info, Map, Phone, Image as ImageIcon, Mail } from "lucide-react";
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
    { label: "Kontak", id: "contact", icon: Phone },
    { label: "Gallery", id: "gallery", icon: ImageIcon },
  ];
  return (
    <footer
      id="contact"
      className="pt-20 pb-10 mt-24 bg-[#08080b] border-t border-white/10 relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-purple-500/5 to-transparent blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-3 gap-14">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Sigma Delta
            </h3>
            <p className="text-gray-300 font-semibold text-sm mt-1">
              by Artha Royal Group
            </p>
            <p className="mt-6 text-gray-400 text-sm leading-relaxed">
              Layanan transportasi lintas negara premium sejak 2022.
              Mengutamakan kenyamanan, keamanan, dan profesionalitas.
            </p>
            {/* Extra Badges */}
            <div className="flex gap-2 mt-5">
              <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-cyan-300">
                Resmi & Terpercaya
              </span>
              <span className="px-3 py-1 rounded-full text-xs bg-white/5 border border-white/10 text-purple-300">
                Lintas Negara
              </span>
            </div>
          </div>
          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Navigasi</h4>
            <ul className="space-y-3 text-gray-300 text-sm">
              {navigation.map((item) => (
                <li
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className=" flex items-center gap-3 px-3 py-2 rounded-xl cursor-pointer hover:bg-white/10 transition backdrop-blur-md border border-transparent hover:border-white/10 hover:text-white "
                >
                  <item.icon size={18} className="text-cyan-400" /> {item.label}
                </li>
              ))}
            </ul>
          </div>
          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-5 text-lg">Kontak</h4>
            {/* WhatsApp */}
            <div className="flex items-start gap-3 text-gray-300 text-sm relative">
              <FaWhatsapp size={20} className="text-green-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">WhatsApp:</p>
                {/* Admin 1 */}
                <div className="relative group block">
                  <a
                    href="https://wa.me/62895321866545"
                    target="_blank"
                    className="block hover:text-white transition-colors"
                  >
                    +62 895 321 866 545
                  </a>
                  {/* Tooltip */}
                  <span className=" pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-lg border border-white/20 shadow-lg whitespace-nowrap ">
                    Admin 1
                  </span>
                </div>
                {/* Admin 2 */}
                <div className="relative group block mt-2">
                  <a
                    href="https://wa.me/6285822593523"
                    target="_blank"
                    className="block hover:text-white transition-colors"
                  >
                    +62 858 2259 3523
                  </a>
                  {/* Tooltip */}
                  <span className=" pointer-events-none absolute left-full top-1/2 -translate-y-1/2 ml-3 opacity-0 group-hover:opacity-100 transition-all duration-300 bg-white/10 backdrop-blur-xl text-white text-xs px-3 py-1 rounded-lg border border-white/20 shadow-lg whitespace-nowrap ">
                    Admin 2
                  </span>
                </div>
              </div>
            </div>
            {/* Email */}
            <div className="flex items-start gap-3 text-gray-300 text-sm mt-4">
              <Mail size={20} className="text-red-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">Email:</p>
                <a
                  href="mailto:argroup.ptk@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  argroup.ptk@gmail.com
                </a>
              </div>
            </div>
            {/* Instagram */}
            <div className="flex items-start gap-3 text-gray-300 text-sm mt-4">
              <FaInstagram size={20} className="text-pink-400 mt-1" />
              <div>
                <p className="text-white font-medium mb-1">Instagram</p>
                <a
                  href="https://instagram.com/argroup.ptk"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  @argroup.ptk
                </a>
              </div>
            </div>
            {/* TikTok */}
            <div className="flex items-start gap-3 text-gray-300 text-sm mt-3">
              <FaTiktok size={20} className="text-white mt-1" />
              <div>
                <p className="text-white font-medium mb-1">TikTok</p>
                <a
                  href="#"
                  target="_blank"
                  className="hover:text-white transition-colors"
                >
                  @argroup.ptk
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* Divider */} <div className="h-px w-full bg-white/5 mt-16"></div>
        {/* Bottom */}
        <div className="mt-10 text-center">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Sigma Delta. Semua hak dilindungi.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Designed by{" "}
            <span className="text-gray-400 font-semibold">
              Eunoia Digital Creations
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
