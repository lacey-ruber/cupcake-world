import React from 'react'
import { useParams } from 'react-router-dom'
import CupcakePage from './CupcakePage'
import CupcakesList from '../components/CupcakesList'

const Catalog = () => {
  const { productId } = useParams()
  return (
    <>{productId ? <CupcakePage productId={productId} /> : <CupcakesList />}</>
  )
}

export default Catalog
