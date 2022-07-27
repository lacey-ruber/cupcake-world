import React from 'react'
import { Link } from 'react-router-dom'
import cupcake2 from '../../assets/img/mr-cupcake-2.png'
// import { useSelector, useDispatch } from 'react-redux'
// import { addProduct } from '../../store/slices/cartSlice'

const CupcakeCard = ({ cupcakeCrop }) => {
  // const dispatch = useDispatch()
  // const { cartProduct } = useSelector()
  // const handleAddCupcake = () => {
  //   const item = {
  //     _id,
  //     title,
  //     price,
  //   }
  //   dispatch(addProduct(item))
  // }

  return (
    <div className='goods__wrapper'>
      {cupcakeCrop.map((cupcake) => (
        <Link
          to={`/catalog/${cupcake._id}`}
          className='cupcake-card'
          key={cupcake._id}
        >
          <img className='cupcake-card__image' src={cupcake2} alt='Cupcake' />
          <div className='cupcake-card__title'>{cupcake.title}</div>
          <div className='cupcake-card__price'>{cupcake.price} ₽</div>
          <div
            className='cupcake-card__order'
            // onClickAddCupcake={handleAddCupcake}
          >
            Заказать
          </div>
        </Link>
      ))}
    </div>
  )
}

export default CupcakeCard
