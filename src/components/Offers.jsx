import React from 'react'
import '../styles/offer.css'

const Offers = ({offer}) => {
  return (
   <div className="offerSection">
    {
        offer.map((e, i) =>{
            return(
                <img src={e.image} alt="" index={i}/>
            )
        })
    }
   </div>
  )
}

export default Offers