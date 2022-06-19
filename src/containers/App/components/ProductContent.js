import React, { Component } from 'react'
import '../components/ProductContent/Product.css'
import ProductSlides from './ProductContent/ProductSlides'
import data from './ProductContent/ProductData'

const ProductContent = () => {
  return (
    <div className="columns">
      <div className="column col-lg-12 col-md-12 col-sm-12  "></div>
      <div className="main">
        <ProductSlides images={data} />
      </div>
      {/* <div style={{ backgroundColor:'red'}}>
        <p>Hello</p>
      </div> */}
    </div>
  )
}

export default ProductContent
