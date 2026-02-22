import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import type { Product } from "@/data/products";

interface ProductSlideProps {
  product: Product;
  index: number;
  total: number;
}

export const ProductSlide = ({ product, index, total }: ProductSlideProps) => {
  return (
    <section className="slide-section bg-background">
      {/* Background glow */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-10 blur-[100px]"
        style={{ background: `radial-gradient(circle, hsl(${product.color}), transparent 70%)` }}
      />

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-10 md:gap-20 px-6 md:px-20 max-w-6xl mx-auto w-full">
        {/* Product Icon */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, scale: 0.8, x: -40 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <img
            src={product.icon}
            alt={product.name}
            className="product-icon w-32 h-32 md:w-44 md:h-44 object-cover"
          />
        </motion.div>

        {/* Product Info */}
        <motion.div
          className="flex-1 text-center md:text-left"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.5 }}
        >
          {/* Counter */}
          <div className="text-muted-foreground text-xs font-mono mb-4 tracking-widest uppercase">
            Project {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </div>

          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-foreground">
            {product.name}
          </h2>

          <p className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-lg">
            {product.description}
          </p>

          {/* Platform links */}
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            {product.platforms.map((platform) => (
              <a
                key={platform.label}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium surface-glass text-foreground hover:text-primary transition-colors"
              >
                {platform.label}
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-border" />
    </section>
  );
};
