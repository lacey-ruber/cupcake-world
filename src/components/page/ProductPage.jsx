import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

import api from '../../api'

const ProductPage = () => {
  const params = useParams()
  const { productId } = params
  const navigate = useNavigate()
  const handleGoBack = () => {
    navigate(-1)
  }

  const [cupcake, setCupcake] = useState()
  useEffect(() => {
    api.cupcakes.getById(productId).then((data) => setCupcake(data))
  }, [])

  if (cupcake) {
    return (
      <div>
        <h1>{cupcake.title}</h1>
        <p>Цена {cupcake.price} ₽</p>
        <button onClick={handleGoBack}>Все кексы</button>
      </div>
    )
  } else {
    return <h2>Загрузка</h2>
  }
}

export default ProductPage
