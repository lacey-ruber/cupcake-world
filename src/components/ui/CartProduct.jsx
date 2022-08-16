import React from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import {
  addProduct,
  minusProduct,
  removeProduct,
} from '../../store/slices/cartSlice'

const CartProduct = ({ id, title, price, count, image }) => {
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
        <img src={image} alt='Cupcake' />
      </div>
      <div className='cart__item-info'>
        <h3>{title}</h3>
      </div>
      <div className='cart__item-count'>
        <button
          onClick={handleClickMinus}
          className='button-circle button-minus'
          disabled={count === 1}
        >
          -
        </button>
        <b>{count}</b>
        <button onClick={handleClickPlus} className='button-circle button-plus'>
          +
        </button>
      </div>
      <div className='cart__item-price'>
        <b>{price * count} ₽</b>
      </div>
      <div className='cart__item-remove'>
        <button
          onClick={handleClickRemove}
          className='button-circle button-remove'
        >
          x
        </button>
      </div>
    </li>
  )
}

CartProduct.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  count: PropTypes.number,
}

export default CartProduct
