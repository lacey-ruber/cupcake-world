import React from 'react'
import { Link } from 'react-router-dom'
import cupcake1 from '../assets/img/mr-cupcake.png'

const Cupcake = ({ cupcakeCrop, cupcakes }) => {
  return (
    <div className='goods__wrapper'>
      {cupcakes &&
        cupcakeCrop.map((cupcake) => (
          <Link
            to={`/catalog/${cupcake._id}`}
            className='cupcake-card'
            key={cupcake._id}
          >
            <img className='cupcake-card__image' src={cupcake1} alt='Cupcake' />
            <div className='cupcake-card__title'>{cupcake.title}</div>
            <div className='cupcake-card__price'>{cupcake.price} ₽</div>
            <div className='cupcake-card__order'>Заказать</div>
          </Link>
        ))}
    </div>
  )
}

export default Cupcake
