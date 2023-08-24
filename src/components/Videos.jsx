import React from 'react'
import VideosCard from './VideosCard'
import '../styles/vidros.css'

const Videos = ({videos}) => {
  return (
    <div className='videos'>
        {
            videos.map((e, i)=>{
                return(
                    <VideosCard index={i} key={e.image} image={e.image} name={e.name}/>
                )
            })
        }
    </div>
  )
}

export default Videos