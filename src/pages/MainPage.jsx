import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className='wrapper'>
        <Outlet />
      </div>
      <Footer />
    </>
  )
}

export { MainPage }