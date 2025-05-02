"use client"

import { useLanguage } from "@/contexts/language-context"
import ProductDropdown from "./product-dropdown"
import Image from "next/image"
import Link from "next/link"

export default function Navbar() {
  const { t } = useLanguage()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-brand-black/80 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 relative">
              <Image src="/images/logo.png" alt="Komjirak Studio" fill className="object-contain" />
            </div>
            <span className="font-bold text-brand-beige">{t("studioName")}</span>
          </Link>

          <div className="flex items-center">
            <ProductDropdown />
          </div>
        </div>
      </div>
    </nav>
  )
}
