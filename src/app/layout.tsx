import type { Metadata } from "next";
import { Bebas_Neue, Inter, Playfair_Display } from "next/font/google";
import { LanguageProvider } from "@/lib/language";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "KERYGMA — Streetwear Cristiano",
  description:
    "Ropa que proclama. KERYGMA es una marca de streetwear cristiano que diseña con propósito: llevar el mensaje de fe con estilo.",
  keywords: ["KERYGMA", "streetwear cristiano", "ropa cristiana", "moda fe"],
  openGraph: {
    title: "KERYGMA — Streetwear Cristiano",
    description: "Ropa que proclama.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${inter.variable} ${bebas.variable} ${playfair.variable}`}>
      <body className="bg-kerygma-black text-kerygma-white">
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  );
}