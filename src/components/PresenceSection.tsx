"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const PRESENCE = [
  { src: "/assets/congregaciones/explo-1.jpeg", alt: "En la congregación", span: "col-span-1 row-span-2" },
  { src: "/assets/congregaciones/explo-2.jpeg", alt: "Predicando el evangelio", span: "col-span-1 row-span-1" },
  { src: "/assets/congregaciones/explo-3.jpeg", alt: "Jesús es real", span: "col-span-1 row-span-1" },
  { src: "/assets/congregaciones/explo-4.jpeg", alt: "Juan 14:6", span: "col-span-2 row-span-1" },
  { src: "/assets/congregaciones/live-1.jpeg", alt: "En la Explo", span: "col-span-1 row-span-1" },
];

export default function PresenceSection() {
  const { t } = useLanguage();

  return (
    <section className="bg-kerygma-black py-24 sm:py-32 border-t border-kerygma-line">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-12 max-w-3xl"
        >
          <p className="font-serif italic text-kerygma-red text-xl sm:text-2xl mb-3">
            {t.presence.subtitle1}
            {t.presence.subtitle2 ? ` · ${t.presence.subtitle2}` : ""}
          </p>
          <h2 className="section-title">{t.presence.title}</h2>
          <p className="mt-6 text-base sm:text-lg text-kerygma-white/70 max-w-2xl leading-relaxed">
            {t.presence.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 auto-rows-[180px] sm:auto-rows-[220px] gap-3 sm:gap-4">
          {PRESENCE.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative overflow-hidden bg-kerygma-line group ${item.span}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-kerygma-black/0 group-hover:bg-kerygma-black/40 transition" />
              <div className="absolute inset-x-0 bottom-0 p-4 opacity-0 group-hover:opacity-100 transition">
                <p className="text-xs uppercase tracking-widest text-kerygma-white">{item.alt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}