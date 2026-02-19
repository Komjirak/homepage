"use client"

import { useState } from "react"
import { useLanguage } from "@/contexts/language-context"
import { products } from "@/data/products"
import ProductCard from "@/components/product-card"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import LoadingAnimation from "@/components/loading-animation"
import { motion } from "framer-motion"

type SortOrder = "oldest" | "newest"

export default function Home() {
  const { t } = useLanguage()
  const [sortOrder, setSortOrder] = useState<SortOrder>("oldest")

  const sortedProducts = [...products]
    .map((product, originalIndex) => ({ product, originalIndex }))
    .sort((a, b) => {
      if (sortOrder === "oldest") {
        return a.originalIndex - b.originalIndex
      }
      return b.originalIndex - a.originalIndex
    })

  return (
    <main className="min-h-screen bg-brand-black pt-16">
      <LoadingAnimation />
      <Navbar />

      <Header />

      <motion.section
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: {
            duration: 0.5,
            delay: 0.3,
          },
        }}
        className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-12">
          <h2 className="text-3xl font-bold text-brand-beige">{t("products")}</h2>

          <div className="flex items-center justify-end gap-2 text-sm">
            <button
              type="button"
              onClick={() => setSortOrder("oldest")}
              className={`px-3 py-1 rounded-full border transition-colors ${
                sortOrder === "oldest"
                  ? "bg-brand-beige text-brand-black border-brand-beige"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500"
              }`}
            >
              {t("sortOldest")}
            </button>
            <span className="text-gray-600">|</span>
            <button
              type="button"
              onClick={() => setSortOrder("newest")}
              className={`px-3 py-1 rounded-full border transition-colors ${
                sortOrder === "newest"
                  ? "bg-brand-beige text-brand-black border-brand-beige"
                  : "bg-transparent text-gray-400 border-gray-700 hover:border-gray-500"
              }`}
            >
              {t("sortNewest")}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {sortedProducts.map(({ product }, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </motion.section>

      <footer className="bg-brand-black text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© 2025-2026 Komjirak Studio</p>
          <a href="mailto:komjirak.studio@gmail.com" className="text-gray-400 hover:text-brand-beige transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </main>
  )
}
