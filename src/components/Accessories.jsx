import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/accessories.css'

const Accessories = () => {
  return (
    <div className='accessoriesmenu'>
        <Link className='accessorieslink' to={"/music"}>Music Store</Link>
        <Link className='accessorieslink' to={"/SmartDevice"}>Smart Devices</Link>
        <Link className='accessorieslink' to={"/Home"}>Home</Link>
        <Link className='accessorieslink' to={"/LifeStyle"}>Life Style</Link>
        <Link className='accessorieslink' to={"/MobileAccessories"}>Mobile Accessories</Link>
    </div>
  )
}

export default Accessories