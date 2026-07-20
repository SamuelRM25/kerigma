"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useLanguage } from "@/lib/language";

const navLinks = [
  { href: "/", key: "home" },
  { href: "#categorias", key: "categories" },
  { href: "#nosotros", key: "about" },
  { href: "#contacto", key: "contact" },
] as const;

export default function Header() {
  const { locale, setLocale, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-kerygma-black/85 backdrop-blur-md border-b border-kerygma-line"
          : "bg-transparent"
      }`}
    >
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3 group" onClick={() => setOpen(false)}>
          <div className="relative h-10 w-10 sm:h-12 sm:w-12">
            <Image
              src="/assets/logo/kerygma-logo.png"
              alt="KERYGMA"
              fill
              priority
              className="object-contain"
            />
          </div>
          <span className="font-display text-2xl sm:text-3xl tracking-widest text-kerygma-white group-hover:text-kerygma-red transition-colors">
            KERYGMA
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.key}
              href={link.href}
              className="text-sm uppercase tracking-[0.2em] text-kerygma-white/80 hover:text-kerygma-red transition-colors"
            >
              {t.nav[link.key as keyof typeof t.nav]}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="hidden sm:flex items-center rounded-full border border-kerygma-white/15 p-0.5 text-xs font-semibold tracking-widest">
            <button
              onClick={() => setLocale("es")}
              className={`px-3 py-1 rounded-full transition ${
                locale === "es" ? "bg-kerygma-red text-kerygma-white" : "text-kerygma-white/70 hover:text-kerygma-white"
              }`}
              aria-label="Cambiar a español"
            >
              ES
            </button>
            <button
              onClick={() => setLocale("en")}
              className={`px-3 py-1 rounded-full transition ${
                locale === "en" ? "bg-kerygma-red text-kerygma-white" : "text-kerygma-white/70 hover:text-kerygma-white"
              }`}
              aria-label="Switch to English"
            >
              EN
            </button>
          </div>

          <button
            className="md:hidden p-2 text-kerygma-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden bg-kerygma-black/95 backdrop-blur border-t border-kerygma-line">
          <nav className="container-wide py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.key}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-lg uppercase tracking-[0.2em] text-kerygma-white/90 hover:text-kerygma-red transition-colors"
              >
                {t.nav[link.key as keyof typeof t.nav]}
              </Link>
            ))}
            <div className="flex sm:hidden items-center gap-2 pt-4 border-t border-kerygma-line">
              <button
                onClick={() => setLocale("es")}
                className={`flex-1 px-3 py-2 rounded-full text-sm font-semibold tracking-widest transition ${
                  locale === "es" ? "bg-kerygma-red text-kerygma-white" : "border border-kerygma-white/15 text-kerygma-white/70"
                }`}
              >
                ES
              </button>
              <button
                onClick={() => setLocale("en")}
                className={`flex-1 px-3 py-2 rounded-full text-sm font-semibold tracking-widest transition ${
                  locale === "en" ? "bg-kerygma-red text-kerygma-white" : "border border-kerygma-white/15 text-kerygma-white/70"
                }`}
              >
                EN
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}