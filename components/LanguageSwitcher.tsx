import { useState, useRef, useEffect } from "react";
import { Globe } from "lucide-react";
import { useLanguage } from "@/i18n/LanguageContext";
import { type Locale, localeNames, localeFlags } from "@/i18n/translations";

const locales: Locale[] = ["ko", "en", "ja", "zh-TW", "zh-CN", "th"];

export const LanguageSwitcher = () => {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm text-foreground hover:bg-secondary transition-colors"
        aria-label="Change language"
      >
        <Globe className="w-4 h-4" />
        <span className="hidden sm:inline">{localeFlags[locale]}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-44 rounded-xl bg-card border border-border shadow-2xl z-50">
          <ul className="py-1">
            {locales.map((l) => (
              <li key={l}>
                <button
                  onClick={() => { setLocale(l); setOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-2.5 text-sm transition-colors ${
                    l === locale ? "text-primary bg-secondary/50" : "text-foreground hover:bg-secondary"
                  }`}
                >
                  <span>{localeFlags[l]}</span>
                  <span>{localeNames[l]}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
