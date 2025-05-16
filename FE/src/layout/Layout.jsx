import React from 'react'
import Header from '../components/Header/Header'
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router'
import Footer from '../components/Footer/Footer'

function Layout() {
  return (
    <div>
        <Header/>
        <Navbar/>
        <Outlet/>
        <Footer/>
    </div>
  )
}

export default Layout