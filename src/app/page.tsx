"use client";

import Navbar from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { TravelKuching } from "@/components/TravelKuching";
import { Footer } from "@/components/Footer";
import { FloatingWhatsApp } from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden
      bg-gradient-to-br from-[#0a0a0f] via-[#10111a] to-[#0a0a0e]"
    >
      <Navbar />

      <Hero />

      <About />

      <TravelKuching />

      <Footer />

      <FloatingWhatsApp />
    </div>
  );
}
