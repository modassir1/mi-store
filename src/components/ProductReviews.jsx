import React from 'react'
import ProductReviewsCard from './ProductReviewsCard'
import '../styles/ProductReviews.css'

const ProductReviews = ({ProductReviews}) => {
  return (
    <div className='ProductReviews'>
        {
            ProductReviews.map((e, i)=>{
                return (
                    <ProductReviewsCard name={e.name} image={e.image} review={e.review} price={e.price} key={e.image} index={i}/>

                )
            })
        }
        
    </div>
  )
}

export default ProductReviews