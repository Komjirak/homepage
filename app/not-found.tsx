import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-brand-black p-4 text-center">
      <h1 className="text-4xl font-bold text-brand-beige mb-4">404 - 페이지를 찾을 수 없습니다</h1>
      <p className="text-gray-400 mb-8">요청하신 페이지가 존재하지 않거나 이동되었을 수 있습니다.</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-brand-red to-brand-orange text-white rounded-lg shadow-lg hover:translate-y-[-2px] transition-transform"
      >
        홈으로 돌아가기
      </Link>
    </div>
  )
}
