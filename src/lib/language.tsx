"use client";

import { createContext, useContext, useEffect, useState, ReactNode } from "react";
import es from "@/i18n/es.json";
import en from "@/i18n/en.json";

export type Locale = "es" | "en";

type Dictionary = typeof es;

const dictionaries: Record<Locale, Dictionary> = {
  es,
  en,
};

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Dictionary;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("es");

  useEffect(() => {
    const stored = typeof window !== "undefined" ? window.localStorage.getItem("kerygma-locale") : null;
    if (stored === "es" || stored === "en") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = (next: Locale) => {
    setLocaleState(next);
    if (typeof window !== "undefined") {
      window.localStorage.setItem("kerygma-locale", next);
    }
  };

  const value: LanguageContextValue = {
    locale,
    setLocale,
    t: dictionaries[locale],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider");
  return ctx;
}