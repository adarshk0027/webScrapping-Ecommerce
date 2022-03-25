import React, { useEffect, useState } from 'react'
import ProductWrapper from './productWrapper'
function ContainerWrapper ({ ProductsData }) {
  
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-2'></div>
        <div className='col-8 card '>
          <h2 className='title '>Mobile Phones</h2>
          <section className='price-comparison bg-white'></section>
          {
            ProductsData && ProductsData.map((elem,index)=>{
              
              return <ProductWrapper
              key={index}
              Key={index} 
              Title={elem.Title}
              FirstPrice={elem.FirstPrice}
              OfferPrice={elem.OfferPrice}
              site={elem.site}
              Image={elem.Image}
              Rating={elem.Rating}
              ></ProductWrapper>
            })
          }

          <div className='col-2'></div>
        </div>
      </div>
    </div>
  )
}

export default ContainerWrapper
