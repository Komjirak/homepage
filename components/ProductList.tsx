import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Smartphone, Globe, Apple, Wallet } from "lucide-react";
import { products } from "@/data/products";
import { useLanguage } from "@/i18n/LanguageContext";

const platformIcon = (label: string) => {
  switch (label) {
    case "iOS": return <Apple className="w-3.5 h-3.5" />;
    case "Android": return <Smartphone className="w-3.5 h-3.5" />;
    case "Web": return <Globe className="w-3.5 h-3.5" />;
    case "Toss": case "App in Toss": return <Wallet className="w-3.5 h-3.5" />;
    default: return <ExternalLink className="w-3 h-3" />;
  }
};

type SortOrder = "oldest" | "newest";

export const ProductList = () => {
  const [sortOrder, setSortOrder] = useState<SortOrder>("oldest");
  const { t } = useLanguage();

  const sorted = useMemo(() => {
    const list = [...products];
    return sortOrder === "newest"
      ? list.sort((a, b) => b.createdAt.localeCompare(a.createdAt))
      : list.sort((a, b) => a.createdAt.localeCompare(b.createdAt));
  }, [sortOrder]);

  return (
    <section className="min-h-screen bg-background py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">{t.products.heading}</h2>
          <div className="flex items-center gap-1 surface-glass rounded-full p-1 text-sm">
            <button
              onClick={() => setSortOrder("oldest")}
              className={`px-4 py-1.5 rounded-full transition-all ${sortOrder === "oldest" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t.products.oldestFirst}
            </button>
            <button
              onClick={() => setSortOrder("newest")}
              className={`px-4 py-1.5 rounded-full transition-all ${sortOrder === "newest" ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {t.products.newestFirst}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {sorted.map((product) => (
            <motion.div
              key={product.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="group flex flex-col surface-glass rounded-2xl overflow-hidden hover:border-primary/60 hover:shadow-[0_0_24px_-4px_hsl(var(--primary)/0.3)] transition-all duration-300"
            >
              <div className="flex justify-center items-center py-8 px-6">
                <img src={product.icon} alt={product.name} className="w-24 h-24 rounded-2xl object-cover shadow-lg group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="flex-1 px-5 pb-3 text-center">
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors duration-300 mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 whitespace-pre-line">
                  {t.productDescriptions[product.id] || product.description}
                </p>
              </div>
              <div className="px-5 pb-5 pt-3 flex flex-wrap gap-2 justify-center">
                {product.platforms.map((p) => (
                  <a key={p.label} href={p.url} target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs px-4 py-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
                    {platformIcon(p.label)}
                    {p.label}
                  </a>
                ))}
              </div>
              <a href={product.url} target="_blank" rel="noopener noreferrer"
                className="block text-center text-sm font-semibold py-3.5 border-t border-border/50 group-hover:border-primary group-hover:text-primary-foreground group-hover:bg-primary text-muted-foreground transition-all duration-300 rounded-b-2xl">
                {t.products.goToProduct}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
