import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/img/cupcake-logo.png'
import '../../scss/components/_header.scss'
import { useSelector } from 'react-redux'

const NavBar = () => {
  const { pathname } = useLocation()
  const { goods } = useSelector((state) => state.cart)

  const totalCount = goods.reduce((sum, product) => sum + product.count, 0)

  return (
    <header className='header'>
      <div className='header__wrapper wrapper'>
        <div className='header__controls'>
          <div className='header__menu'>
            <div className='menu-burger'></div>
          </div>
          <div className='header__logo'>
            <Link to='/'>
              <img src={logo} alt='Logo' />
              <div className='header__logo-text'>
                <p>Cupcake world</p>
                <span>Самые сочные кексы на диком западе</span>
              </div>
            </Link>
            <p></p>
          </div>
          {/* <Search /> */}
        </div>
        <div className='header__controls header__controls-right'>
          <Link to='login' className='header-auth-button'>
            <svg width='24' height='23' viewBox='0 0 16 17' fill='none'>
              <path
                d='M11.3691 4.23815C11.3691 6.22553 9.75989 7.83568 7.77604 7.83568C5.79219 7.83568 4.18302 6.22553 4.18302 4.23815C4.18302 2.25077 5.79219 0.640625 7.77604 0.640625C9.75989 0.640625 11.3691 2.25077 11.3691 4.23815ZM12.6837 11.9892C13.8673 13.1742 14.5795 14.7431 14.699 16.4036L0.851958 16.4036C0.971531 14.7431 1.68367 13.1742 2.8673 11.9892C4.16913 10.686 5.93468 9.95391 7.7755 9.95391C9.61633 9.95391 11.3819 10.686 12.6837 11.9892Z'
                stroke='black'
              ></path>
            </svg>
          </Link>
          {pathname !== 'cart' && (
            <Link to='/cart' className='header-cart-button'>
              <div className='header-cart-icon'>
                <svg width='21' height='25' viewBox='0 0 15 19' fill='none'>
                  <path d='M11.6917 5.63767C11.6917 4.49626 11.2676 3.4016 10.5127 2.59451C9.7578 1.78741 8.73395 1.33398 7.66639 1.33398C6.59882 1.33398 5.57497 1.78741 4.82009 2.59451C4.0652 3.4016 3.64111 4.49626 3.64111 5.63767'></path>
                  <rect x='0.5' y='5.18457' width='14' height='12.8839'></rect>
                </svg>
              </div>
              <div className='header-cart-circle'>{totalCount}</div>
            </Link>
          )}
        </div>
      </div>
    </header>
  )
}

export default NavBar
