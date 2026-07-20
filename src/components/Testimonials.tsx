"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/language";

const CLIENTES = [
  { src: "/assets/clientes/cliente-1.jpeg", alt: "Cliente satisfecho 1" },
  { src: "/assets/clientes/cliente-2.jpeg", alt: "Cliente satisfecho 2" },
];

export default function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="bg-kerygma-black py-24 sm:py-32 border-t border-kerygma-line">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 max-w-3xl"
        >
          <p className="font-serif italic text-kerygma-red text-xl sm:text-2xl mb-3">
            {t.testimonials.subtitle}
          </p>
          <h2 className="section-title">{t.testimonials.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {CLIENTES.map((c, i) => (
            <motion.div
              key={c.src}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative aspect-[4/5] w-full overflow-hidden bg-kerygma-line group"
            >
              <Image
                src={c.src}
                alt={c.alt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-kerygma-black/70 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6">
                <p className="font-display text-2xl tracking-widest">KERYGMA</p>
                <p className="text-xs uppercase tracking-widest text-kerygma-white/70">Cliente · {i + 1}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}