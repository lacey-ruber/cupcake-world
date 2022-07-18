import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/_main-page.scss'

const MainPage = () => {
  return (
    <div className='main-page'>
      <Link to='/catalog'>Начать сладкую жизнь</Link>
    </div>
  )
}

export { MainPage }
