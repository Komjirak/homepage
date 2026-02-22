"use client";

import { createContext, useContext, useState, useCallback, useEffect, type ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import { type Locale, defaultLocale, translations } from "./translations";

interface LanguageContextType {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: typeof translations[Locale];
}

const LanguageContext = createContext<LanguageContextType | null>(null);

function getLocaleFromPath(pathname: string): Locale {
  if (!pathname) return defaultLocale;
  const segment = pathname.split("/")[1];
  if (segment && segment in translations) return segment as Locale;
  return defaultLocale;
}

function detectBrowserLocale(): Locale {
  if (typeof window === "undefined") return defaultLocale;
  const lang = navigator.language || (navigator as any).userLanguage || "";
  const lower = lang.toLowerCase();
  if (lower.startsWith("ko")) return "ko";
  if (lower.startsWith("ja")) return "ja";
  if (lower.startsWith("th")) return "th";
  if (lower === "zh-tw" || lower === "zh-hant") return "zh-TW";
  if (lower.startsWith("zh")) return "zh-CN";
  if (lower.startsWith("en")) return "en";
  return defaultLocale;
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();

  const [locale, setLocaleState] = useState<Locale>(() => {
    const fromPath = getLocaleFromPath(pathname || "");
    const segment = (pathname || "").split("/")[1];
    if (segment && segment in translations) return fromPath;
    return detectBrowserLocale();
  });

  useEffect(() => {
    const segment = (pathname || "").split("/")[1];
    if (segment && segment in translations) {
      setLocaleState(segment as Locale);
    }
    document.documentElement.lang = locale === "zh-TW" ? "zh-Hant" : locale === "zh-CN" ? "zh-Hans" : locale;
  }, [pathname, locale]);

  const setLocale = useCallback((newLocale: Locale) => {
    const segments = (pathname || "").split("/").filter(Boolean);
    if (segments[0] && segments[0] in translations) segments.shift();
    const newPath = newLocale === defaultLocale
      ? `/${segments.join("/")}`
      : `/${newLocale}/${segments.join("/")}`;
    router.push(newPath || "/");
  }, [pathname, router]);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t: translations[locale] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextType {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
