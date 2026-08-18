"use client";

import dynamic from "next/dynamic";

const FloatingWhatsApp = dynamic(
  () =>
    import("@/components/FloatingWhatsApp").then((mod) => ({
      default: mod.FloatingWhatsApp,
    })),
  { ssr: false },
);

export function FloatingWhatsAppWrapper() {
  return <FloatingWhatsApp />;
}