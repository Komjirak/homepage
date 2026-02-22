"use client";

import { IntroSection } from "@/components/IntroSection";
import { ProductList } from "@/components/ProductList";
import { Navbar } from "@/components/Navbar";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  const scrollToProducts = () => {
    document.getElementById("products")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <main>
      <Navbar />
      <IntroSection onScrollDown={scrollToProducts} />
      <div id="products">
        <ProductList />
      </div>
      <footer className="flex items-center justify-between px-6 py-6 border-t border-border">
        <p className="text-muted-foreground/50 text-xs">{t.footer.copyright}</p>
        <a href="mailto:komjirak.studio@gmail.com"
          className="text-xs text-muted-foreground hover:text-foreground transition-colors">
          {t.footer.contact}
        </a>
      </footer>
    </main>
  );
}
