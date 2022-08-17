import React from 'react'
import { Link } from 'react-router-dom'
import '../../scss/components/_cart.scss'


const CartEmptyPage = () => {
  return (
    <div className='cart-empty'>
      <h1>В вашей корзине ещё нет товаров</h1>
      <p>
        Чтобы начать <b>сладкую жизнь</b>, перейдите на страницу товаров
      </p>
      <Link to="/">Перейти к покупкам</Link>
    </div>
  )
}

export default CartEmptyPage
