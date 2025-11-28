"use client";

import { motion as m } from "framer-motion";
import { ShieldCheck, Building2, ThumbsUp, Medal } from "lucide-react";

export function About() {
  return (
    <section id="about" className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Heading */}
        <m.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-4xl md:text-5xl font-bold text-white"
        >
          Tentang Kami
        </m.h2>

        {/* Subheading */}
        <m.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 text-gray-400 max-w-3xl mx-auto leading-relaxed text-lg"
        >
          <span className="text-yellow-500 font-semibold">Sigma Delta</span>{" "}
          adalah layanan transportasi resmi lintas negara yang telah beroperasi
          sejak <span className="text-yellow-500 font-semibold">2022</span>.
          Kami berkomitmen memberikan pengalaman perjalanan terbaik, aman, dan
          nyaman untuk setiap penumpang.
        </m.p>

        {/* Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-16">
          {[
            {
              icon: ShieldCheck,
              title: "Legal & Terpercaya",
              desc: "Memiliki izin resmi dan standar operasional yang jelas.",
            },
            {
              icon: Medal,
              title: "Layanan Premium",
              desc: "Armada bersih, nyaman, dan driver profesional.",
            },
            {
              icon: Building2,
              title: "Berpengalaman",
              desc: "Lebih dari 5 tahun melayani rute Pontianak – Kuching.",
            },
            {
              icon: ThumbsUp,
              title: "Pelanggan Puas",
              desc: "Kami dipercaya oleh berbagai kalangan setiap harinya.",
            },
          ].map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 + i * 0.1 }}
              className="p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10"
            >
              <item.icon className="w-10 h-10 mx-auto text-cyan-400 mb-4" />
              <h3 className="text-xl font-semibold text-white">{item.title}</h3>
              <p className="text-gray-400 mt-2 text-sm">{item.desc}</p>
            </m.div>
          ))}
        </div>

        {/* Extra Trust Statement */}
        <m.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-14 text-gray-300 text-md max-w-3xl mx-auto italic"
        >
          “Keamanan dan kenyamanan penumpang adalah prioritas utama kami—bukan
          sekadar perjalanan, tetapi pengalaman yang membuat Anda tenang sampai
          tujuan.”
        </m.p>
      </div>
    </section>
  );
}
