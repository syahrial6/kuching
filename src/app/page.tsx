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