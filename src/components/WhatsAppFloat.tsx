"use client";

import { MessageCircle } from "lucide-react";
import { SITE } from "@/lib/site";

export default function WhatsAppFloat() {
  return (
    <a
      href={SITE.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="WhatsApp"
      className="group fixed bottom-6 right-6 z-40 flex items-center justify-center h-14 w-14 rounded-full bg-[#25D366] shadow-2xl shadow-black/40 hover:scale-110 transition-transform"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" />
      <MessageCircle size={26} className="text-white relative z-10" />
      <span className="absolute right-full mr-3 hidden sm:group-hover:flex items-center whitespace-nowrap rounded-md bg-kerygma-black border border-kerygma-line px-3 py-1.5 text-xs uppercase tracking-widest text-kerygma-white">
        WhatsApp
      </span>
    </a>
  );
}