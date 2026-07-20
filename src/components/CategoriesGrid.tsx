"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { CATEGORIES } from "@/lib/site";
import { useLanguage } from "@/lib/language";

export default function CategoriesGrid() {
  const { t, locale } = useLanguage();

  return (
    <section id="categorias" className="bg-kerygma-black py-24 sm:py-32">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="mb-14 sm:mb-20 max-w-3xl"
        >
          <p className="font-serif italic text-kerygma-red text-xl sm:text-2xl mb-3">
            {t.categories.subtitle}
          </p>
          <h2 className="section-title">{t.categories.title}</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {CATEGORIES.map((cat, i) => (
            <motion.div
              key={cat.slug}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Link
                href={`/${cat.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden bg-kerygma-line"
              >
                <Image
                  src={cat.image}
                  alt={cat.name[locale]}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-kerygma-black via-kerygma-black/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <div className="flex items-end justify-between gap-4">
                    <div>
                      <h3 className="font-display text-4xl sm:text-5xl tracking-widest text-kerygma-white">
                        {cat.name[locale]}
                      </h3>
                      <p className="mt-2 text-sm text-kerygma-white/70 tracking-wider">
                        {cat.description[locale]}
                      </p>
                    </div>
                    <span className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-kerygma-red text-kerygma-white transition-transform group-hover:rotate-45">
                      <ArrowUpRight size={20} />
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 ring-1 ring-inset ring-kerygma-white/10 group-hover:ring-kerygma-red transition" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}