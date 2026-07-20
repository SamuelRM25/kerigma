import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { CATEGORIES } from "@/lib/site";

type Params = { categoria: string };

export function generateStaticParams() {
  return CATEGORIES.map((c) => ({ categoria: c.slug }));
}

export default function CategoriaPage({ params }: { params: Params }) {
  const cat = CATEGORIES.find((c) => c.slug === params.categoria);
  if (!cat) return notFound();

  return (
    <div className="min-h-screen bg-kerygma-black pt-28 pb-20">
      <div className="container-wide">
        <Link
          href="/#categorias"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-kerygma-white/60 hover:text-kerygma-red transition mb-10"
        >
          <ArrowLeft size={14} />
          Volver
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="font-serif italic text-kerygma-red text-xl sm:text-2xl mb-3">
              {cat.description.es}
            </p>
            <h1 className="font-display text-6xl sm:text-8xl tracking-widest">
              {cat.name.es}
            </h1>
          </div>
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-kerygma-line">
            <Image
              src={cat.image}
              alt={cat.name.es}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>

        <div className="border border-dashed border-kerygma-white/15 rounded-2xl p-10 sm:p-16 text-center">
          <p className="font-display text-3xl sm:text-4xl tracking-widest text-kerygma-white/70">
            Próximamente
          </p>
          <p className="mt-4 text-kerygma-white/50 max-w-xl mx-auto">
            El catálogo de {cat.name.es} se está preparando. Muy pronto verás aquí todas las prendas, tallas y precios.
          </p>
          <Link href="/#categorias" className="btn-ghost mt-8">
            Explorar otras categorías
          </Link>
        </div>
      </div>
    </div>
  );
}