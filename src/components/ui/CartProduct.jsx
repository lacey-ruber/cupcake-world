import React from 'react'
import { useDispatch } from 'react-redux'
import {
  addProduct,
  minusProduct,
  removeProduct,
} from '../../store/slices/cartSlice'

const CartProduct = ({ id, title, price, count }) => {
  const dispatch = useDispatch()

  const handleClickPlus = () => {
    dispatch(
      addProduct({
        id,
      })
    )
  }

  const handleClickMinus = () => {
    dispatch(minusProduct(id))
  }

  const handleClickRemove = () => {
    dispatch(removeProduct(id))
  }

  return (
    <li className='cart__item'>
      <div className='cart__item-img'>
        <img alt='Cupcake' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
        <p>самый сладкий</p>
      </div>
      <div className='cart__item-count'>
        <button
          onClick={handleClickMinus}
          className='button-circle'
          disabled=''
        >
          -
        </button>
        <b>{count}</b>
        <button onClick={handleClickPlus} className='button-circle'>
          +
        </button>
      </div>
      <div className='cart__item-price'>
        <b>{price * count} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <div onClick={handleClickRemove} className='button-circle'>
          x
        </div>
      </div>
    </li>
  )
}

export default CartProduct
