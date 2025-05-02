import KomjirakHeader from "./komjirak-header"

export default function YourApp() {
  return (
    <div>
      <KomjirakHeader />

      {/* 여기에 페이지 내용 추가 */}
      <main className="container mx-auto p-4 mt-4">
        <h1 className="text-2xl font-bold">당신의 앱 내용</h1>
        <p>이 부분에 앱의 내용이 들어갑니다.</p>
      </main>
    </div>
  )
}
