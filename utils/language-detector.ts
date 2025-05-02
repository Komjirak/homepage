type SupportedLanguage = "ko" | "en" | "ja" | "zh-CN" | "zh-TW" | "th"

export const detectLanguage = (): SupportedLanguage => {
  if (typeof window === "undefined") return "en"

  const userLanguage = navigator.language.toLowerCase()

  // Korean
  if (userLanguage.startsWith("ko")) return "ko"

  // Japanese
  if (userLanguage.startsWith("ja")) return "ja"

  // Chinese (Simplified)
  if (userLanguage.startsWith("zh-cn") || userLanguage.startsWith("zh-hans")) return "zh-CN"

  // Chinese (Traditional)
  if (userLanguage.startsWith("zh-tw") || userLanguage.startsWith("zh-hant")) return "zh-TW"

  // Thai
  if (userLanguage.startsWith("th")) return "th"

  // Default to English
  return "en"
}
