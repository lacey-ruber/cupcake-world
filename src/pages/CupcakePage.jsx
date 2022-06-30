import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api'

const CupcakePage = ({ productId }) => {
  const navigate = useNavigate()
  const [cupcake, setCupcake] = useState()
  useEffect(() => {
    api.cupcakes.getById(productId).then((data) => setCupcake(data))
  })
  const handleClick = () => {
    navigate(-1)
  }
  if (cupcake) {
    return (
      <div>
        <h1>{cupcake.title}</h1>
        <button onClick={handleClick}>Вернуться назад</button>
      </div>
    )
  } else {
    return <h1>Loading</h1>
  }
}

export default CupcakePage
