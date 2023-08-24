import React from 'react'
import '../styles/videoscard.css'

const VideosCard = ({image, name, index}) => {
  return (
    <div className='videoscard'>
        <img src={image} alt={`${index}`} />
        <p>{name}</p>
    </div>
  )
}

export default VideosCard