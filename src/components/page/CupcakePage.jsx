import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import '../../scss/components/_cupcake-page.scss'
import api from '../../api'

const ProductPage = () => {
  const { productId } = useParams()
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate('/')
  }

  const [cupcake, setCupcake] = useState()
  useEffect(() => {
    api.cupcakes.getById(productId).then((data) => setCupcake(data))
  }, [])

  console.log(cupcake)

  if (cupcake) {
    return (
      <div className='cupcake-page'>
        <img src={cupcake.icon} alt="Cupcake" />
        <h1>{cupcake.title}</h1>
        <p>Цена {cupcake.price} ₽</p>
        <button onClick={handleGoBack}>Все кексы</button>
      </div>
    )
  } else {
    return <h2>Загрузка...</h2>
  }
}



export default ProductPage