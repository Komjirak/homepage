"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, ExternalLink } from "lucide-react"

// 제품 타입 정의
export type Product = {
  id: string
  name: string
  icon: string
  url: string
  platforms: {
    ios?: string
    android?: string
    mobileWeb: string
  }
}

// 언어 감지 함수
const detectLanguage = (): string => {
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

// 번역 데이터
const translations: Record<string, Record<string, string>> = {
  en: {
    studioName: "Komjirak Studio",
    products: "Products",
  },
  ko: {
    studioName: "꼼지락 스튜디오",
    products: "프로덕트",
  },
  ja: {
    studioName: "コムジラク スタジオ",
    products: "プロダクト",
  },
  "zh-CN": {
    studioName: "Komjirak 工作室",
    products: "产品",
  },
  "zh-TW": {
    studioName: "Komjirak 工作室",
    products: "產品",
  },
  th: {
    studioName: "Komjirak Studio",
    products: "ผลิตภัณฑ์",
  },
}

// 제품 데이터 - 이 부분을 중앙에서 관리하여 모든 페이지에서 동일하게 사용
export const products: Product[] = [
  {
    id: "colorfulDiary",
    name: "Colorful Diary",
    icon: "/images/diary_icon.png",
    url: "https://colorfuldiary.komjirak.studio/",
    platforms: {
      ios: "https://apps.apple.com/us/app/colorful-diary-your-day/id6670740993",
      android: "https://play.google.com/store/apps/details?id=com.diary.komjirak",
      mobileWeb: "https://colorfuldiary.komjirak.studio/",
    },
  },
  {
    id: "bookclip",
    name: "Bookclip",
    icon: "/images/bookclip_icon.png",
    url: "https://bookclip.komjirak.studio",
    platforms: {
      ios: "https://apps.apple.com/us/app/bookclip/id6670740418",
      android: "https://play.google.com/store/apps/details?id=com.bookclip.komjirak",
      mobileWeb: "https://bookclip.komjirak.studio",
    },
  },
  {
    id: "memoryGame",
    name: "Memory Game",
    icon: "/images/memorygame.png",
    url: "https://memory-game.komjirak.studio",
    platforms: {
      mobileWeb: "https://memory-game.komjirak.studio",
    },
  },
  {
    id: "loveSmash",
    name: "LOVE Smash",
    icon: "/images/lovesmash.png",
    url: "https://lovesmash.komjirak.studio",
    platforms: {
      mobileWeb: "https://lovesmash.komjirak.studio",
    },
  },
  {
    id: "smashYou",
    name: "Smash You",
    icon: "/images/smashyou.png",
    url: "https://smashyou.komjirak.studio",
    platforms: {
      mobileWeb: "https://smashyou.komjirak.studio",
    },
  },
  {
    id: "dramaWhenLifeGivesYouTangerines",
    name: "When Life Gives You Tangerines",
    icon: "/images/whenlifegives.jpeg",
    url: "https://drama-pokssak.komjirak.studio/",
    platforms: {
      mobileWeb: "https://drama-pokssak.komjirak.studio/",
    },
  },
  {
    id: "todaysTaroCard",
    name: "Today's Tarot Cards",
    icon: "/images/taro.png",
    url: "https://today-tarot-cards.komjirak.studio",
    platforms: {
      mobileWeb: "https://today-tarot-cards.komjirak.studio",
    },
  },
  {
    id: "duckjilEssential",
    name: "Duckjil Essential",
    icon: "/images/duckjil_icon.png",
    url: "https://duckjil.komjirak.studio",
    platforms: {
      mobileWeb: "https://duckjil.komjirak.studio",
    },
  },
]

// 제품 드롭다운 컴포넌트
function ProductDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [language, setLanguage] = useState<string>("en")

  useEffect(() => {
    setLanguage(detectLanguage())
  }, [])

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"][key]
  }

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
        className="flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 text-[#F5E6C8] px-4 py-2 rounded-lg border border-gray-700 transition-all"
      >
        <span>{t("products")}</span>
        <ChevronDown
          size={16}
          className={`transition-transform duration-200 ${isOpen ? "transform rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 w-64 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden"
          style={{ animation: "fadeIn 0.2s ease-out" }}
        >
          <div className="py-1 max-h-[70vh] overflow-y-auto">
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => handleProductClick(product.url)}
                className="flex items-center gap-3 w-full text-left px-4 py-3 hover:bg-gray-700 transition-colors"
              >
                <div className="w-8 h-8 relative flex-shrink-0 bg-white/10 rounded-xl overflow-hidden">
                  <img
                    src={product.icon || "/placeholder.svg"}
                    alt={product.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <span className="text-[#F5E6C8] flex-grow">{product.name}</span>
                <ExternalLink size={14} className="text-gray-400" />
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

// 헤더 컴포넌트 속성 정의
interface KomjirakSharedHeaderProps {
  logoSrc?: string // 로고 이미지 경로를 커스터마이징할 수 있는 옵션
  homeUrl?: string // 홈 URL을 커스터마이징할 수 있는 옵션
  className?: string // 추가 스타일을 적용할 수 있는 옵션
}

// 메인 헤더 컴포넌트
export default function KomjirakSharedHeader({
  logoSrc = "/images/logo.png",
  homeUrl = "/",
  className = "",
}: KomjirakSharedHeaderProps) {
  const [language, setLanguage] = useState<string>("en")

  useEffect(() => {
    setLanguage(detectLanguage())
  }, [])

  const t = (key: string): string => {
    return translations[language]?.[key] || translations["en"][key]
  }

  return (
    <>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .product-thumbnail {
          border-radius: 16px;
          overflow: hidden;
        }
        
        .komjirak-header {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 50;
          background-color: rgba(11, 11, 9, 0.8);
          backdrop-filter: blur(8px);
          border-bottom: 1px solid #2d2d2d;
        }
        
        .komjirak-header-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        .komjirak-header-content {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 4rem;
        }
        
        .komjirak-logo-link {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          text-decoration: none;
        }
        
        .komjirak-logo-text {
          font-weight: 700;
          color: #F5E6C8;
        }
        
        .komjirak-dropdown-button {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background-color: rgba(31, 41, 55, 0.5);
          color: #F5E6C8;
          padding: 0.5rem 1rem;
          border-radius: 0.5rem;
          border: 1px solid #374151;
          transition: all 0.2s;
        }
        
        .komjirak-dropdown-button:hover {
          background-color: rgba(55, 65, 81, 0.5);
        }
        
        .komjirak-dropdown-menu {
          position: absolute;
          right: 0;
          margin-top: 0.5rem;
          width: 16rem;
          background-color: #1f2937;
          border: 1px solid #374151;
          border-radius: 0.5rem;
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
          overflow: hidden;
        }
        
        .komjirak-dropdown-content {
          padding: 0.25rem 0;
          max-height: 70vh;
          overflow-y: auto;
        }
        
        .komjirak-product-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          text-align: left;
          padding: 0.75rem 1rem;
          transition: background-color 0.2s;
        }
        
        .komjirak-product-item:hover {
          background-color: #374151;
        }
        
        .komjirak-product-icon {
          width: 2rem;
          height: 2rem;
          position: relative;
          flex-shrink: 0;
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 0.75rem;
          overflow: hidden;
        }
        
        .komjirak-product-name {
          color: #F5E6C8;
          flex-grow: 1;
        }
        
        .komjirak-external-icon {
          color: #9ca3af;
        }
      `}</style>
      <header className={`komjirak-header ${className}`}>
        <div className="komjirak-header-container">
          <div className="komjirak-header-content">
            <Link href={homeUrl} className="komjirak-logo-link">
              <div className="w-8 h-8 relative">
                <Image
                  src={logoSrc || "/placeholder.svg"}
                  alt={t("studioName")}
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <span className="komjirak-logo-text">{t("studioName")}</span>
            </Link>

            <div className="flex items-center">
              <ProductDropdown />
            </div>
          </div>
        </div>
      </header>
      <div className="h-16"></div> {/* 헤더 높이만큼 여백 추가 */}
    </>
  )
}
