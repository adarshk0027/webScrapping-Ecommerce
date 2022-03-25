import React from 'react'
function ProductWrapper ({Key,Title,OfferPrice,FirstPrice,Image,site,Rating}) {
  return (
    <>
      <div className='price-column' key={Key}>
        <div className='body bg-solid border  border-bottom-secondary rounded w-50 mx-auto mt-3'>
          <div className='price-header'>
            <del className='del-price font-weight-bold'>
              <div className='dollar-sign'></div>
             <small className='text-secondary'> <span className=' text-danger '>Offer</span>  ₹{FirstPrice}</small> 
            </del>
            <div className='price text-primary'>
              <div className='dollar-sign'></div>
              Amount  <small>{OfferPrice}</small> 
            </div>
            <div className='plan-name text-primary'>{site}</div>
            
          </div>
          <div className='divider'></div>
          <div className='stars'> {Rating} Stars</div>
          <div className='feature'>
            <img
              className='prod_image'
              alt='Temp'
              src={Image}
            ></img>
          </div>
          <div className="title">
              <h4 >{Title}</h4>
          </div>
        </div>
      </div>
    </>
  )
}

export default ProductWrapper
