import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Cart from './layouts/Cart'
import Login from './layouts/Login'
import LogOut from './layouts/LogOut'
import Catalog from './layouts/Catalog'
import Layout from './layouts/Layout'
import NotFound from './layouts/NotFound'
import CupcakePage from './components/page/CupcakePage'
import './scss/app.scss'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Catalog />} />
          <Route path='catalog/:productId' element={<CupcakePage />} />
          <Route path='login' element={<Login />} />
          <Route path='logout' element={<LogOut />} />
          <Route path='cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
