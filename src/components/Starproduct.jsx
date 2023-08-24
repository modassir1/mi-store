import React from 'react'
import '../styles/starproduct.css'

const Starproduct = ({Starproduct}) => {
  return (
    <div className='starproduct'>
        <div>
            <a href=""><img src={Starproduct[0].image} alt="" /></a>
        </div>

        <div>
        <a href=""><img src={Starproduct[1].image} alt="" /></a>
        <a href=""><img src={Starproduct[2].image} alt="" /></a>
        <a href=""><img src={Starproduct[3].image} alt="" /></a>

        </div>
    </div>
  )
}

export default Starproduct