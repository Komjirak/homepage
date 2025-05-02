"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { detectLanguage } from "@/utils/language-detector"
import { translations, productDescriptions, type TranslationKey } from "@/utils/translations"

type LanguageContextType = {
  language: string
  t: (key: TranslationKey) => string
  productDescription: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<string>("en")

  useEffect(() => {
    setLanguage(detectLanguage())
  }, [])

  const t = (key: TranslationKey): string => {
    return translations[language]?.[key] || translations["en"][key]
  }

  const productDescription = (key: string): string => {
    const descriptions = productDescriptions[language] || productDescriptions["en"]
    return descriptions[key] || ""
  }

  return <LanguageContext.Provider value={{ language, t, productDescription }}>{children}</LanguageContext.Provider>
}

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
