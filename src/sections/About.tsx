"use client";

import { motion as m, Transition } from "framer-motion";
import { ShieldCheck, Building2, ThumbsUp, Medal, ArrowRight } from "lucide-react";

export function About() {
  const highlights = [
    {
      icon: ShieldCheck,
      title: "Legal & Terpercaya",
      desc: "Memiliki izin resmi dan standar operasional yang jelas untuk kenyamanan Anda.",
      iconColor: "text-cyan-400"
    },
    {
      icon: Medal,
      title: "Layanan Premium",
      desc: "Armada terbaru yang bersih, wangi, serta didampingi driver profesional.",
      iconColor: "text-purple-400"
    },
    {
      icon: Building2,
      title: "Berpengalaman",
      desc: "Spesialis rute Pontianak – Kuching dengan jam terbang tinggi sejak 2022.",
      iconColor: "text-blue-400"
    },
    {
      icon: ThumbsUp,
      title: "Pelanggan Puas",
      desc: "Tingkat loyalitas tinggi dari pelanggan yang mengutamakan kualitas.",
      iconColor: "text-indigo-400"
    },
  ];

  // Definisi transition yang aman untuk TypeScript
  const smoothTransition: Transition = {
    type: "tween",
    ease: "easeOut",
    duration: 0.5
  };

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden bg-[#08080b]">
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-30">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[40%] bg-purple-500/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-[20%] left-[-10%] w-[50%] h-[40%] bg-cyan-500/10 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto px-5 md:px-8 relative z-10 text-white">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 md:mb-20">
          <m.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={smoothTransition}
            className="max-w-2xl text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 mb-4 rounded-full bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
              <span className="text-[10px] uppercase tracking-[0.2em] text-gray-400 font-bold">The Company</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black italic tracking-tighter uppercase leading-tight">
              DEDIKASI UNTUK <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">KENYAMANAN ANDA.</span>
            </h2>
          </m.div>

          <m.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ ...smoothTransition, delay: 0.2 }}
            className="text-gray-400 text-base md:text-lg max-w-md leading-relaxed text-left md:text-right"
          >
            <span className="text-white font-semibold">Sigma Borneo</span> adalah mitra perjalanan yang memastikan kenyamanan Anda melintasi perbatasan sejak 2022.
          </m.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {highlights.map((item, i) => (
            <m.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ ...smoothTransition, delay: i * 0.1 }}
              className="group relative p-8 rounded-[2rem] bg-white/[0.03] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative z-10 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 ${item.iconColor}`}>
                  <item.icon size={24} />
                </div>
                <h3 className="text-xl font-bold mb-3 uppercase tracking-tight">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">{item.desc}</p>
                <div className="pt-4 border-t border-white/5 flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-gray-500">
                  Verified <ArrowRight size={12} />
                </div>
              </div>
            </m.div>
          ))}
        </div>

        <m.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={smoothTransition}
          className="mt-16 md:mt-24 p-10 md:p-16 rounded-[3rem] bg-white/[0.02] border border-white/5 text-center"
        >
          <p className="text-2xl md:text-4xl font-medium tracking-tight leading-snug max-w-4xl mx-auto">
            “Menghadirkan kenyamanan tanpa batas di setiap kilometer. Perjalanan lintas negara menjadi momen yang <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold italic">santai, berkelas, dan menyenangkan.</span>”
          </p>
          <div className="mt-10 flex flex-col items-center gap-3">
            <div className="h-[1px] w-12 bg-white/10" />
            <span className="text-[10px] text-cyan-400/60 uppercase tracking-widest font-bold">
              Sigma Borneo • Pontianak — Kuching
            </span>
          </div>
        </m.div>
      </div>
    </section>
  );
}