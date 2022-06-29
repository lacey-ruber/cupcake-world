import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { MainPage } from './pages/MainPage'
import Cart from './pages/Cart'
import Login from './pages/Login'
import LogOut from './pages/LogOut'
import Catalog from './pages/Catalog'

import './scss/app.scss'
import NotFound from './pages/NotFound'
import CupcakePage from './pages/CupcakePage'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainPage />}>
          <Route index element={<Catalog />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<LogOut />} />
          <Route path='cart' element={<Cart />} />
          <Route path='catalog/:productId' element={<CupcakePage />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
