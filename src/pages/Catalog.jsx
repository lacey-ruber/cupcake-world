import React from 'react'
import { useParams } from 'react-router-dom'
import CupcakePage from './CupcakePage'
import CupcakesList from '../components/CupcakesList'

const Catalog = () => {
  const params = useParams()
  const { productId } = params

  return (
    <>{productId ? <CupcakePage productId={productId} /> : <CupcakesList />}</>
  )
}

export default Catalog
