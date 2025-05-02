export default function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "꼼지락 스튜디오",
    url: "https://www.komjirak.studio",
    logo: "https://www.komjirak.studio/images/logo.png",
    sameAs: [
      "https://twitter.com/komjirak",
      "https://www.instagram.com/komjirak.studio/",
      "https://www.facebook.com/komjirakstudio/",
    ],
    description: "꼼지락 스튜디오는 만드는 사람도, 쓰는 사람도 행복한 모바일 앱과 게임을 제작합니다.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "KR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: "komjirak.studio@gmail.com",
      contactType: "customer service",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
}
