import { products as sharedProducts, type Product } from "../components/KomjirakSharedHeader"

// 중앙에서 제품 데이터를 업데이트하는 함수
export function updateSharedProducts(newProducts: Product[]) {
  // 기존 배열 비우기
  sharedProducts.length = 0

  // 새 제품 데이터 추가
  newProducts.forEach((product) => {
    sharedProducts.push(product)
  })

  console.log("제품 데이터가 업데이트되었습니다:", sharedProducts)
  return sharedProducts
}

// 제품 하나를 추가하는 함수
export function addSharedProduct(product: Product) {
  // 중복 확인
  if (!sharedProducts.some((p) => p.id === product.id)) {
    sharedProducts.push(product)
    console.log(`새 제품이 추가되었습니다: ${product.name}`)
  } else {
    console.log(`이미 존재하는 제품입니다: ${product.name}`)
  }

  return sharedProducts
}

// 제품 하나를 업데이트하는 함수
export function updateSharedProduct(id: string, updates: Partial<Product>) {
  const index = sharedProducts.findIndex((p) => p.id === id)

  if (index !== -1) {
    sharedProducts[index] = { ...sharedProducts[index], ...updates }
    console.log(`제품이 업데이트되었습니다: ${sharedProducts[index].name}`)
  } else {
    console.log(`업데이트할 제품을 찾을 수 없습니다: ${id}`)
  }

  return sharedProducts
}

// 제품 하나를 삭제하는 함수
export function removeSharedProduct(id: string) {
  const index = sharedProducts.findIndex((p) => p.id === id)

  if (index !== -1) {
    const removed = sharedProducts.splice(index, 1)
    console.log(`제품이 삭제되었습니다: ${removed[0].name}`)
  } else {
    console.log(`삭제할 제품을 찾을 수 없습니다: ${id}`)
  }

  return sharedProducts
}
