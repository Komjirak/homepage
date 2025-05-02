"use client"

import { useLanguage } from "@/contexts/language-context"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Header() {
  const { t } = useLanguage()

  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2,
        },
      }}
      className="py-16 px-4 text-center bg-gradient-to-r from-brand-black to-gray-900 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-red/20 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 flex flex-col items-center">
        <div className="w-24 h-24 mb-6 relative">
          <Image src="/images/logo.png" alt="Komjirak Studio" fill className="object-contain" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-beige text-shadow">{t("studioName")}</h1>
        <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-400">{t("studioValue")}</p>
      </div>
    </motion.header>
  )
}
