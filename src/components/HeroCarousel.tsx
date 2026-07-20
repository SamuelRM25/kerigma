"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

type Slide =
  | { kind: "title" }
  | { kind: "framed"; src: string; alt: string }
  | { kind: "fullscreen"; src: string; alt: string };

const SLIDES: Slide[] = [
  { kind: "title" },
  { kind: "framed", src: "/assets/hero/hero-1.jpeg", alt: "KERYGMA — Lion of Judah design" },
  { kind: "framed", src: "/assets/hero/hero-3.jpeg", alt: "Camino, Verdad y Vida" },
  { kind: "fullscreen", src: "/assets/hero/hero-6.jpeg", alt: "Jeremías 31:3 — Con amor eterno te he amado" },
  { kind: "framed", src: "/assets/hero/hero-7.jpeg", alt: "Jesús es real" },
];

export default function HeroCarousel() {
  const { t } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollIndex, setScrollIndex] = useState(0);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const slideWidth = el.scrollWidth / SLIDES.length;
      const idx = Math.round(el.scrollLeft / slideWidth);
      setScrollIndex(idx);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const id = setInterval(() => {
      if (isPaused) return;
      const slideWidth = el.scrollWidth / SLIDES.length;
      const next = (Math.round(el.scrollLeft / slideWidth) + 1) % SLIDES.length;
      el.scrollTo({ left: next * slideWidth, behavior: "smooth" });
    }, 4500);
    return () => clearInterval(id);
  }, [isPaused]);

  const scrollToIndex = (idx: number) => {
    const el = trackRef.current;
    if (!el) return;
    const slideWidth = el.scrollWidth / SLIDES.length;
    el.scrollTo({ left: idx * slideWidth, behavior: "smooth" });
  };

  const prev = () => scrollToIndex((scrollIndex - 1 + SLIDES.length) % SLIDES.length);
  const next = () => scrollToIndex((scrollIndex + 1) % SLIDES.length);

  return (
    <section className="relative h-screen min-h-[640px] w-full bg-kerygma-black overflow-hidden">
      <div
        ref={trackRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="absolute inset-0 flex overflow-x-auto no-scrollbar snap-x snap-mandatory scroll-smooth"
      >
        {SLIDES.map((slide, i) => (
          <div key={i} className="relative h-full w-screen flex-shrink-0 snap-center">
            <SlideContent slide={slide} index={i} t={t} />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 gradient-fade-right z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 gradient-fade-left z-10" />

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-kerygma-black to-transparent z-10" />

      <div className="absolute inset-y-0 left-0 flex items-center pl-2 sm:pl-4 z-20">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="p-2 sm:p-3 rounded-full border border-kerygma-white/20 text-kerygma-white/80 hover:bg-kerygma-red hover:border-kerygma-red hover:text-kerygma-white transition"
        >
          <ChevronLeft size={20} />
        </button>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:pr-4 z-20">
        <button
          onClick={next}
          aria-label="Next slide"
          className="p-2 sm:p-3 rounded-full border border-kerygma-white/20 text-kerygma-white/80 hover:bg-kerygma-red hover:border-kerygma-red hover:text-kerygma-white transition"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-6 sm:bottom-10 z-20 container-wide flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex gap-2 order-2 sm:order-1">
          {SLIDES.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-1.5 transition-all rounded-full ${
                i === scrollIndex ? "w-10 bg-kerygma-red" : "w-4 bg-kerygma-white/30 hover:bg-kerygma-white/60"
              }`}
            />
          ))}
        </div>

        <div className="flex items-center gap-3 order-1 sm:order-2">
          <button
            onClick={() => setIsPaused(!isPaused)}
            aria-label={isPaused ? "Play" : "Pause"}
            className="p-2 rounded-full border border-kerygma-white/20 text-kerygma-white/70 hover:text-kerygma-red hover:border-kerygma-red transition"
          >
            {isPaused ? <Play size={16} /> : <Pause size={16} />}
          </button>
          <Link href="#categorias" className="btn-primary">
            {t.hero.cta}
          </Link>
        </div>
      </div>

      <div className="absolute top-24 right-4 sm:right-8 z-20 hidden md:block">
        <p className="text-xs uppercase tracking-[0.4em] text-kerygma-white/50">
          {t.hero.slide1Subtitle}
        </p>
      </div>
    </section>
  );
}

function SlideContent({
  slide,
  index,
  t,
}: {
  slide: Slide;
  index: number;
  t: ReturnType<typeof useLanguage>["t"];
}) {
  if (slide.kind === "title") {
    return (
      <div className="relative h-full w-full flex items-center justify-center bg-kerygma-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.06 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src="/assets/logo/kerygma-logo.png"
            alt=""
            fill
            priority
            sizes="100vw"
            className="object-cover opacity-[0.12]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-b from-kerygma-black/40 via-transparent to-kerygma-black/60" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
          className="relative text-center px-6"
        >
          <p className="font-serif italic text-kerygma-red text-lg sm:text-2xl mb-4">
            {t.hero.slide1Subtitle}
          </p>
          <h1 className="font-display text-7xl sm:text-9xl md:text-[10rem] tracking-widest leading-none">
            {t.hero.slide1Title}
          </h1>
          <div className="mt-8 mx-auto h-0.5 w-24 bg-kerygma-red" />
        </motion.div>
      </div>
    );
  }

  if (slide.kind === "fullscreen") {
    return (
      <div className="relative h-full w-full bg-kerygma-black overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0"
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-cover"
          />
        </motion.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kerygma-black/30 via-transparent to-kerygma-black/10" />
      </div>
    );
  }

  // framed image — bigger, edge-integrated only on left & right
  return (
    <div className="relative h-full w-full bg-kerygma-black overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.04 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        className="relative h-full w-full flex items-center justify-center"
      >
        {/* Scaled wrapper so the photo reads bigger while staying letterboxed */}
        <div
          className="relative h-full w-full"
          style={{ transform: "scale(1.18)", transformOrigin: "center center" }}
        >
          <Image
            src={slide.src}
            alt={slide.alt}
            fill
            priority={index === 0}
            sizes="100vw"
            className="object-contain"
          />
        </div>
      </motion.div>

      {/* Left edge integration */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-[22%] sm:w-[18%] bg-gradient-to-r from-kerygma-black via-kerygma-black/70 to-transparent z-10" />
      {/* Right edge integration */}
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[22%] sm:w-[18%] bg-gradient-to-l from-kerygma-black via-kerygma-black/70 to-transparent z-10" />
    </div>
  );
}