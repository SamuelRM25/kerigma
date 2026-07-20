"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="nosotros" className="bg-kerygma-white text-kerygma-black py-24 sm:py-32">
      <div className="container-wide grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <p className="font-serif italic text-kerygma-red text-xl sm:text-2xl mb-3">
            {t.about.title}
          </p>
          <h2 className="font-display text-5xl sm:text-6xl lg:text-7xl tracking-wider text-kerygma-black">
            KERYGMA
          </h2>
          <p className="mt-8 text-base sm:text-lg leading-relaxed text-kerygma-black/80">
            {t.about.description}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative aspect-[4/5] w-full"
        >
          <Image
            src="/assets/hero/hero-2.jpeg"
            alt="KERYGMA"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          <div className="absolute -bottom-6 -left-6 bg-kerygma-red text-kerygma-white p-6 sm:p-8 max-w-xs">
            <p className="font-display text-3xl tracking-widest">{t.about.vision}</p>
            <p className="mt-3 text-sm leading-relaxed">{t.about.visionText}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}