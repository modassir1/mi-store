import React from 'react'
import '../styles/Hotitem.css'

const HotItemCard = ({name, image, index, price}) => {
  return (
    <div className='HotItemCard'>
        <img src={image} alt={`${index} product`} />
        <p>{name}</p>
        <span>{price}</span>

    </div>
  )
}

export default HotItemCard