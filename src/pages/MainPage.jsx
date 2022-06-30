import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const MainPage = () => {
  return (
    <>
      <NavBar />
      <div className='wrapper'>
        <Outlet />
      </div>
    </>
  )
}

export { MainPage }
