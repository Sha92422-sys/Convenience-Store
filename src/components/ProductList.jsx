import React from 'react'
import ProductCard from './ProductCard'

export default function ProductList({products}) {
  return (
    <>
    <div className="row">
      {products.map((product) => (
        <div key={product.id} className="col-md-3 mb-3">
          <ProductCard product={product} />
        </div>
      ))}
    </div>
    </>
  )
}
