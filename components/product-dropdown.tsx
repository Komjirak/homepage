"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown, ExternalLink } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { products } from "@/data/products"
import { motion, AnimatePresence } from "framer-motion"

export default function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { t } = useLanguage()

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleProductClick = (url: string) => {
    window.open(url, "_blank")
    setIsOpen(false)
  }

  return (
    <div className="relative z-20" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-brand-beige px-4 py-2 rounded-lg border border-gray-700 transition-all"
      >
        <span>{t("products")}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
          >
            <div className="py-1 max-h-[70vh] overflow-y-auto">
              {products.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleProductClick(product.url)}
                  className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors"
                >
                  <div className="w-8 h-8 relative flex-shrink-0 bg-gray-900 rounded-xl overflow-hidden">
                    <img
                      src={product.icon || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <span className="text-brand-beige flex-grow">{product.name}</span>
                  <ExternalLink size={14} className="text-gray-400" />
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
