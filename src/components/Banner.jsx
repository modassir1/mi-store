import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/CarouselItem'
import CarousselCaption from 'react-bootstrap/CarouselCaption'
const Banner = ({banner}) => {
  return (
    <Carousel fade >
        {
            banner.end.map((e, i)=>{
                return(
                    <CarouselItem key={e.image} id='banner' interval={1000} >
                        <img src={e.image} alt={i} className='d-block w-100' id='bannerImage'/>

                        <CarousselCaption>
                            <h3>{e.name}</h3>
                            <p>{e.description}</p>
                            <p>{e.source}</p>
                            <u>Read More</u>
                        </CarousselCaption>
                    </CarouselItem>
                )
            })
        }
    </Carousel>
  )
}

export default Banner