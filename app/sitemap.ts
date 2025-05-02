import type { MetadataRoute } from "next"
import { products } from "@/data/products"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.komjirak.studio"

  // 기본 페이지
  const routes = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
  ]

  // 제품 페이지
  const productUrls = products.map((product) => ({
    url: `${baseUrl}/products/${product.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }))

  // 언어별 페이지
  const languages = ["en", "ko", "ja", "zh-CN", "zh-TW", "th"]
  const languageUrls = languages.flatMap((lang) => [
    {
      url: `${baseUrl}/${lang}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/${lang}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/${lang}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ])

  return [...routes, ...productUrls, ...languageUrls]
}
