import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { products } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageContext";
import { ThemeToggle } from "@/components/ThemeToggle";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-3 surface-glass">
      <div className="flex items-center gap-4">
        <a href="/" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="Komjirak Studio" className="w-8 h-8 rounded-lg" />
          <span className="text-sm font-semibold text-foreground">Komjirak Studio</span>
        </a>
        <ThemeToggle />
      </div>

      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-medium text-foreground bg-secondary hover:bg-secondary/80 transition-colors"
        >
          {t.nav.products}
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute right-0 mt-2 w-64 max-h-[70vh] overflow-y-auto rounded-xl bg-card border border-border shadow-2xl z-50">
            <ul className="py-2">
              {products.map((p) => (
                <li key={p.id}>
                  <a
                    href={p.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-4 py-2.5 hover:bg-secondary transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    <img src={p.icon} alt={p.name} className="w-8 h-8 rounded-lg object-cover flex-shrink-0" />
                    <span className="text-sm text-foreground truncate">{p.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};
