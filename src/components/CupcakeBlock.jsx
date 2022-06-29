import React from 'react'
import cupcake1 from '../assets/img/mr-cupcake.png'

const CupcakeBlock = ({ cupcakeCrop, cupcakes }) => {
  return (
    <div className='goods__wrapper wrapper'>
      {cupcakes &&
        cupcakeCrop.map((cupcake) => (
          <a href='/' className='cupcake-card' key={cupcake._id}>
            <img className='cupcake-card__image' src={cupcake1} />
            <div className='cupcake-card__title'>{cupcake.title}</div>
            <div className='cupcake-card__price'>{cupcake.price} ₽</div>
            <div className='cupcake-card__order'>Заказать</div>
          </a>
        ))}
    </div>
  )
}

export default CupcakeBlock
