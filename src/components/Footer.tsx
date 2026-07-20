"use client";

import Link from "next/link";
import Image from "next/image";
import { Instagram, Facebook } from "lucide-react";
import { useLanguage } from "@/lib/language";
import { SITE } from "@/lib/site";

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contacto" className="bg-kerygma-black border-t border-kerygma-line">
      <div className="container-wide py-16 grid gap-12 md:grid-cols-3">
        <div>
          <Link href="/" className="flex items-center gap-3">
            <div className="relative h-12 w-12">
              <Image src="/assets/logo/kerygma-logo.png" alt="KERYGMA" fill className="object-contain" />
            </div>
            <span className="font-display text-3xl tracking-widest">KERYGMA</span>
          </Link>
          <p className="mt-4 font-serif italic text-kerygma-red text-lg">{t.footer.tagline}</p>
        </div>

        <div>
          <h3 className="font-display text-2xl tracking-widest mb-4">{t.footer.followUs}</h3>
          <div className="flex gap-4">
            <a
              href={SITE.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-kerygma-white/80 hover:text-kerygma-red transition-colors"
            >
              <span className="p-2 rounded-full border border-kerygma-white/15 group-hover:border-kerygma-red transition">
                <Instagram size={18} />
              </span>
              <span className="text-sm tracking-wider">Instagram</span>
            </a>
          </div>
          <div className="flex gap-4 mt-3">
            <a
              href={SITE.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-kerygma-white/80 hover:text-kerygma-red transition-colors"
            >
              <span className="p-2 rounded-full border border-kerygma-white/15 group-hover:border-kerygma-red transition">
                <Facebook size={18} />
              </span>
              <span className="text-sm tracking-wider">Facebook</span>
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-2xl tracking-widest mb-4">{t.nav.contact}</h3>
          <a
            href={SITE.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-kerygma-white/80 hover:text-kerygma-red transition-colors"
          >
            <span className="text-sm tracking-wider">WhatsApp · {SITE.whatsappDisplay}</span>
          </a>
        </div>
      </div>

      <div className="border-t border-kerygma-line">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-kerygma-white/40 tracking-wider">
            © {new Date().getFullYear()} KERYGMA. {t.footer.rights}.
          </p>
          <p className="text-xs text-kerygma-white/40 tracking-widest uppercase">Con amor eterno · Jeremías 31:3</p>
        </div>
      </div>
    </footer>
  );
}