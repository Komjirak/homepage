"use client"

import { useLanguage } from "@/contexts/language-context"
import { products } from "@/data/products"
import ProductCard from "@/components/product-card"
import Header from "@/components/header"
import Navbar from "@/components/navbar"
import LoadingAnimation from "@/components/loading-animation"
import { motion } from "framer-motion"

export default function Home() {
  const { t } = useLanguage()

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
        <h2 className="text-3xl font-bold mb-12 text-center text-brand-beige">{t("products")}</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </motion.section>

      <footer className="bg-brand-black text-gray-400 py-8 px-4 border-t border-gray-800">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <p>© {new Date().getFullYear()} Komjirak Studio</p>
          <a href="mailto:komjirak.studio@gmail.com" className="text-gray-400 hover:text-brand-beige transition-colors">
            Contact
          </a>
        </div>
      </footer>
    </main>
  )
}
