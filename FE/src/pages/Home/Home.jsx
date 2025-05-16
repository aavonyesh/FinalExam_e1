import React from 'react'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Cards from '../../components/Cards/Cards'
import OurProducts from '../../components/Products/OurProducts'
import Customer from '../../components/Customer/Customer'
import Subscribe from '../../components/Subscribe/Subscribe'

function Home() {
  return (
    <div>
        <Hero/>
        <Cards/>
        <OurProducts/>
        <Customer/>
        <Subscribe/>
    </div>
  )
}

export default Home