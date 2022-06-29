import React from 'react'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Cart from './pages/Cart'
import Login from './pages/Login'
import LogOut from './pages/LogOut'
import Home from './pages/Home'
import Footer from './components/Footer'

import './scss/app.scss'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/logout' element={<LogOut />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
