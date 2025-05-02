"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

export default function LoadingAnimation() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 2500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex items-center justify-center bg-brand-black z-50"
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: { duration: 0.5, delay: 0.5 },
          }}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{
              scale: 1,
              opacity: 1,
              transition: { duration: 0.5 },
            }}
            exit={{
              scale: 1.2,
              opacity: 0,
              transition: { duration: 0.5 },
            }}
            className="relative w-64 h-64"
          >
            <Image src="/images/logo.png" alt="Komjirak Studio" fill className="object-contain" />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
