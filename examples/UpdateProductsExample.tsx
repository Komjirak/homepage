"use client"

import { useState } from "react"
import KomjirakSharedHeader from "../components/KomjirakSharedHeader"
import { updateSharedProduct, addSharedProduct, removeSharedProduct } from "../utils/updateProducts"

export default function UpdateProductsExample() {
  const [message, setMessage] = useState("")

  const handleAddProduct = () => {
    const newProduct = {
      id: "newProduct" + Date.now(),
      name: "New Product",
      icon: "/images/placeholder.svg",
      url: "https://example.com",
      platforms: {
        mobileWeb: "https://example.com",
      },
    }

    addSharedProduct(newProduct)
    setMessage(`새 제품 "${newProduct.name}"이(가) 추가되었습니다.`)
  }

  const handleUpdateProduct = () => {
    // 첫 번째 제품의 이름 업데이트
    updateSharedProduct("colorfulDiary", {
      name: "Colorful Diary (Updated)",
    })
    setMessage("Colorful Diary 제품이 업데이트되었습니다.")
  }

  const handleRemoveLastProduct = () => {
    // 마지막에 추가된 제품 삭제
    const products = require("../components/KomjirakSharedHeader").products
    if (products.length > 7) {
      // 기본 7개 제품 외에 추가된 것이 있는 경우
      removeSharedProduct(products[products.length - 1].id)
      setMessage("마지막으로 추가된 제품이 삭제되었습니다.")
    } else {
      setMessage("삭제할 추가 제품이 없습니다.")
    }
  }

  return (
    <div>
      <KomjirakSharedHeader />

      <main className="max-w-7xl mx-auto p-4">
        <h1 className="text-2xl font-bold mt-8">제품 데이터 업데이트 예시</h1>
        <p className="mt-4">
          이 페이지에서는 중앙에서 관리되는 제품 데이터를 업데이트하는 방법을 보여줍니다. 업데이트된 데이터는 모든
          페이지의 헤더에 자동으로 반영됩니다.
        </p>

        <div className="mt-6 space-y-4">
          <button onClick={handleAddProduct} className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
            새 제품 추가
          </button>

          <button
            onClick={handleUpdateProduct}
            className="ml-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
          >
            Colorful Diary 업데이트
          </button>

          <button
            onClick={handleRemoveLastProduct}
            className="ml-4 px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            마지막 추가 제품 삭제
          </button>
        </div>

        {message && <div className="mt-4 p-4 bg-gray-800 rounded-md">{message}</div>}
      </main>
    </div>
  )
}
