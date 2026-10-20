import Navbar from "@/layouts/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { TravelKuching } from "@/sections/TravelKuching";
import { WisataPontianak } from "@/sections/WisataPontianak";
import { Footer } from "@/layouts/Footer";
import { FloatingWhatsAppWrapper } from "@/components/FloatingWhatsAppWrapper";

export default function Home() {
  return (
    <div
      className="min-h-screen text-white overflow-x-hidden
      bg-gradient-to-br from-[#0a0a0f] via-[#10111a] to-[#0a0a0e]"
    >
      {/* Skip link untuk keyboard & screen reader */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:bg-cyan-500 focus:text-black focus:rounded-full focus:font-bold"
      >
        Lompat ke konten utama
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />

        <About />

        <TravelKuching />

        <WisataPontianak />

        <Footer />
      </main>

      <FloatingWhatsAppWrapper />
    </div>
  );
}