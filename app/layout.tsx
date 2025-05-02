import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import { LanguageProvider } from "@/contexts/language-context"
import GoogleAnalytics from "@/components/GoogleAnalytics"
import StructuredData from "@/components/StructuredData"
import { Suspense } from "react"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "꼼지락 스튜디오 | 모바일 앱 & 게임",
  description: "꼼지락 스튜디오는 만드는 사람도, 쓰는 사람도 행복한 모바일 앱과 게임을 제작합니다.",
  metadataBase: new URL("https://www.komjirak.studio"),
  keywords: [
    "Komjirak",
    "Studio",
    "Mobile Apps",
    "Games",
    "Development",
    "Creative Studio",
    "Colorful Diary",
    "Bookclip",
    "Memory Game",
    "LOVE Smash",
    "Smash You",
    "Tarot Cards",
  ],
  authors: [{ name: "Komjirak Studio" }],
  creator: "Komjirak Studio",
  publisher: "Komjirak Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: [
      { url: "/images/logo.png", type: "image/png" },
      { url: "/images/logo.png", sizes: "16x16", type: "image/png" },
      { url: "/images/logo.png", sizes: "32x32", type: "image/png" },
      { url: "/images/logo.png", sizes: "48x48", type: "image/png" },
      { url: "/images/logo.png", sizes: "64x64", type: "image/png" },
    ],
    apple: [{ url: "/images/logo.png", sizes: "180x180", type: "image/png" }],
    other: [
      { url: "/images/logo.png", sizes: "192x192", type: "image/png" },
      { url: "/images/logo.png", sizes: "512x512", type: "image/png" },
    ],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: ["ko_KR", "ja_JP", "zh_CN", "zh_TW", "th_TH"],
    url: "https://www.komjirak.studio",
    siteName: "꼼지락 스튜디오",
    title: "꼼지락 스튜디오 | 모바일 앱 & 게임",
    description: "꼼지락 스튜디오는 만드는 사람도, 쓰는 사람도 행복한 모바일 앱과 게임을 제작합니다.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 1200,
        alt: "Komjirak Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "꼼지락 스튜디오 | 모바일 앱 & 게임",
    description: "꼼지락 스튜디오는 만드는 사람도, 쓰는 사람도 행복한 모바일 앱과 게임을 제작합니다.",
    images: ["/images/twitter-image.png"],
    creator: "@komjirak",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
  category: "technology",
  verification: {
    google: "kVzJIucyKYFxyz9_ScV1XRYzbKbF2__LdtAmgB6SR50",
    other: {
      "naver-site-verification": "naver2aed8f0ddd3dd55cc184fa6c16dc4049",
    },
  },
  alternates: {
    canonical: "https://www.komjirak.studio",
    languages: {
      "en-US": "https://www.komjirak.studio/en",
      "ko-KR": "https://www.komjirak.studio/ko",
      "ja-JP": "https://www.komjirak.studio/ja",
    },
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <head>
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <link rel="canonical" href="https://www.komjirak.studio" />
        <meta name="google-site-verification" content="kVzJIucyKYFxyz9_ScV1XRYzbKbF2__LdtAmgB6SR50" />
        <meta name="naver-site-verification" content="naver2aed8f0ddd3dd55cc184fa6c16dc4049" />
        <StructuredData />
      </head>
      <body className={poppins.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
