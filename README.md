# Komjirak Shared Header

이 컴포넌트는 꼼지락 스튜디오의 공유 헤더 컴포넌트입니다. 여러 v0 프로젝트에서 일관된 헤더를 사용하고, 중앙에서 제품 데이터를 관리할 수 있습니다.

## 설치 방법

1. `components/KomjirakSharedHeader.tsx` 파일을 프로젝트에 복사합니다.
2. 필요한 이미지 파일들을 `public/images/` 디렉토리에 복사합니다.
3. (선택사항) `utils/updateProducts.ts` 파일을 복사하여 제품 데이터를 업데이트하는 기능을 사용할 수 있습니다.

## 기본 사용법

\`\`\`tsx
import KomjirakSharedHeader from "../components/KomjirakSharedHeader"

export default function YourPage() {
  return (
    <div>
      <KomjirakSharedHeader />
      
      {/* 페이지 내용 */}
      <main>
        <h1>페이지 내용</h1>
      </main>
    </div>
  )
}
\`\`\`

## 커스터마이징

\`\`\`tsx
<KomjirakSharedHeader 
  logoSrc="/images/custom-logo.png"  // 커스텀 로고 이미지
  homeUrl="/dashboard"               // 로고 클릭 시 이동할 URL
  className="bg-purple-900/80"       // 추가 CSS 클래스
/>
\`\`\`

## 제품 데이터 업데이트

제품 데이터를 중앙에서 관리하고 업데이트하려면 `utils/updateProducts.ts` 파일의 함수들을 사용하세요:

\`\`\`tsx
import { addSharedProduct, updateSharedProduct, removeSharedProduct } from "../utils/updateProducts"

// 새 제품 추가
addSharedProduct({
  id: "newProduct",
  name: "New Product",
  icon: "/images/new-product.png",
  url: "https://example.com",
  platforms: {
    mobileWeb: "https://example.com",
  },
})

// 기존 제품 업데이트
updateSharedProduct("colorfulDiary", {
  name: "Updated Name",
  url: "https://updated-url.com",
})

// 제품 삭제
removeSharedProduct("productIdToRemove")
\`\`\`

## 주의사항

1. 이 컴포넌트는 Tailwind CSS 스타일을 사용하지만, 인라인 스타일도 포함되어 있어 Tailwind가 없는 환경에서도 작동합니다.
2. 제품 데이터 업데이트는 현재 세션에서만 유지됩니다. 페이지를 새로고침하면 기본 데이터로 돌아갑니다.
3. 여러 프로젝트에서 완전히 동기화된 데이터를 유지하려면 외부 데이터 소스(API, 데이터베이스 등)를 사용해야 합니다.
