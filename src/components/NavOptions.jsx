import React, { useState, useEffect } from 'react'
import NavCard from './NavCard'
import '../styles/NavOptions.css'

const NavOptions = ({ miPhones, redmiPhones, tv, laptop, fitnessAndlifeStyle, home, audio, accessories }) => {

  const [miphoneToggle, setMiphoneToggle] = useState(false);

  const [redmiPhoneToggle, setRedmiPhoneToggle] = useState(false);

  const [tvToggle, setTvToggle] = useState(false);

  const [laptopToggle, setLaptopToggle] = useState(false);

  const [fitnessToggle, setFitnessToggle] = useState(false);

  const [homeToggle, setHomeToggle] = useState(false);

  const [audioToggle, setAudioToggle] = useState(false);

  const [accessoriesToggle, setAccessoriesToggle] = useState(false);

  useEffect(() => {
    if (window.location.pathname === '/miphones') {
      setMiphoneToggle(true)
    }
  }, [])


  useEffect(() => {
    if (window.location.pathname === '/redmiphones') {
      setRedmiPhoneToggle(true)
    }
  }, [])


  useEffect(() => {
    if (window.location.pathname === '/tv') {
      setTvToggle(true)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/laptops') {
      setLaptopToggle(true)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/lifestyle') {
      setFitnessToggle(true)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/redmiphones') {
      setRedmiPhoneToggle(true)
    }
  }, [])


  useEffect(() => {
    if (window.location.pathname === '/home') {
      setHomeToggle(true)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/audio') {
      setAudioToggle(true)
    }
  }, [])

  useEffect(() => {
    if (window.location.pathname === '/accessories') {
      setAccessoriesToggle(true)
    }
  }, [])



  return (
    <div className='navOptions'>
      {
        miphoneToggle ? miPhones.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }

      {
        redmiPhoneToggle ? redmiPhones.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }


      {
        tvToggle ? tv.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }

      {
        laptopToggle ? laptop.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }

      {
        fitnessToggle ? fitnessAndlifeStyle.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }

      {
        homeToggle ? home.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }

      {
        audioToggle ? audio.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }

      {
        accessoriesToggle ? accessories.map((item) => {
          return (
            <NavCard name={item.name} price={item.price} image={item.image} key={item.image} />
          )
        }) : null
      }
    </div>
  )
}

export default NavOptions