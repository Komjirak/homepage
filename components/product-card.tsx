"use client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { motion } from "framer-motion"
import { useLanguage } from "@/contexts/language-context"
import type { Product } from "@/data/products"
import { Apple, Globe, ShoppingBag, Smartphone } from "lucide-react"

interface ProductCardProps {
  product: Product
  index: number
}

export default function ProductCard({ product, index }: ProductCardProps) {
  const { t, productDescription } = useLanguage()
  const router = useRouter()

  const handleCardClick = () => {
    // Open in a new tab
    window.open(product.url, "_blank")
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.1 * index,
        },
      }}
      className="card-gradient rounded-xl shadow-lg overflow-hidden transform transition-all hover:scale-105 border border-gray-800 flex flex-col h-full"
    >
      <div onClick={handleCardClick} className="flex-1 flex flex-col cursor-pointer">
        <div className="relative h-48 bg-gradient-to-r from-gray-900 to-gray-800 flex items-center justify-center p-6">
          <div className="product-icon w-32 h-32 relative">
            <Image
              src={product.icon || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-contain rounded-3xl"
            />
          </div>
        </div>
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-xl font-bold mb-2 text-brand-beige">{product.name}</h3>
          <p className="text-gray-400 mb-4 flex-grow">{productDescription(product.id)}</p>

          <div className="mb-4 flex flex-wrap gap-2">
            {product.platforms.ios && (
              <Link
                href={product.platforms.ios}
                target="_blank"
                className="flex items-center gap-1 text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Apple size={12} />
                {t("ios")}
              </Link>
            )}
            {product.platforms.android && (
              <Link
                href={product.platforms.android}
                target="_blank"
                className="flex items-center gap-1 text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                onClick={(e) => e.stopPropagation()}
              >
                <ShoppingBag size={12} />
                {t("android")}
              </Link>
            )}
            {product.platforms.mobileWeb && (
              <Link
                href={product.platforms.mobileWeb}
                target="_blank"
                className="flex items-center gap-1 text-xs bg-gray-800 hover:bg-gray-700 px-3 py-1 rounded-full text-gray-300"
                onClick={(e) => e.stopPropagation()}
              >
                <Globe size={12} />
                {t("mobileWeb")}
              </Link>
            )}
            {product.platforms.appInToss && (
              <Link
                href={product.platforms.appInToss}
                target="_blank"
                className="flex items-center gap-1 text-xs bg-blue-600 hover:bg-blue-500 px-3 py-1 rounded-full text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <Smartphone size={12} />
                {t("appInToss")}
              </Link>
            )}
          </div>
        </div>
      </div>
      <div className="px-6 pb-6 pt-0 text-center">
        <Link
          href={product.url}
          target="_blank"
          className="btn-primary inline-block text-white font-medium py-2 px-6 rounded-lg shadow-lg w-full"
        >
          {t("viewProject")}
        </Link>
      </div>
    </motion.div>
  )
}
