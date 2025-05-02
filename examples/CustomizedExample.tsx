import KomjirakSharedHeader from "../components/KomjirakSharedHeader"

export default function CustomizedExample() {
  return (
    <div>
      <KomjirakSharedHeader logoSrc="/images/custom-logo.png" homeUrl="/dashboard" className="bg-purple-900/80" />

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mt-8">커스터마이징 예시</h1>
        <p className="mt-4">이 페이지는 커스터마이징된 KomjirakSharedHeader 컴포넌트를 사용하는 예시입니다.</p>
      </main>
    </div>
  )
}
