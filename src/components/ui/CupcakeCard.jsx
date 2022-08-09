import React from 'react'
import PropTypes from 'prop-types'
import cupcake from '../../assets/img/mr-cupcake-8.png'
import { useSelector, useDispatch } from 'react-redux'
import { addProduct } from '../../store/slices/cartSlice'

const CupcakeCard = ({ id, title, price }) => {
  const dispatch = useDispatch()
  const cartProduct = useSelector((state) =>
    state.cart.goods.find((obj) => obj.id === id)
  )
  const addedCount = cartProduct ? cartProduct.count : 0

  const handleAddProduct = () => {
    const item = {
      id,
      title,
      price,
    }
    dispatch(addProduct(item))
  }

  return (
    <div className='cupcake-card' key={id}>
      <img className='cupcake-card__image' src={cupcake} alt='Cupcake' />
      <div className='cupcake-card__title'>{title}</div>
      <div className='cupcake-card__price'>{price} ₽</div>
      <div className='cupcake-card__order' onClick={handleAddProduct}>
        Добавить в корзину {addedCount > 0 && <span>{addedCount}</span>}
      </div>
    </div>
  )
}

CupcakeCard.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
}

export default CupcakeCard
