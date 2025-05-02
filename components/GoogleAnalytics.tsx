"use client"

import { useEffect } from "react"
import Script from "next/script"
import { usePathname } from "next/navigation"

// Google Analytics 측정 ID
const GA_MEASUREMENT_ID = "G-259HGVC3SX" // 실제 GA ID로 변경 필요

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (pathname && window.gtag) {
      // 페이지 변경 시 GA 페이지뷰 이벤트 전송
      window.gtag("config", GA_MEASUREMENT_ID, {
        page_path: pathname,
      })
    }
  }, [pathname])

  return (
    <>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`} />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_path: window.location.pathname
          });
        `}
      </Script>
    </>
  )
}
