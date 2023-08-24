import React from 'react'
import Carousel from 'react-bootstrap/Carousel'
import CarouselItem from 'react-bootstrap/esm/CarouselItem'
import 'bootstrap/dist/css/bootstrap.min.css'
const Slider = ({start}) => {
    return (
        <Carousel fade>
           {
            start.map((item, index)=>{
                return(
                    <CarouselItem>
                        <img src={item}
                        className='w-100'
                        alt="" 
                        index={index}/>
                    </CarouselItem>
                )
            })
           }  
        </Carousel>
    )
}

export default Slider