import React from 'react'
import '../scss/components/_footer.scss'

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer__wrapper'>
        <a className='footer__link' href='/'>
          Договор оферты
        </a>
        <a className='footer__link' href='/'>
          Политика конфиденциальности
        </a>
        <span>©2022, Lacey Ruber</span>
      </div>
    </footer>
  )
}

export default Footer
