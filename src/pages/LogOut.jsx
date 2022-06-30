import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/components/_logout.scss'

const LogOut = () => {
  return (
    <div className='logout'>
      <div className='logout__wrapper'>
        <h1 className='logout__title'>Зарегистрироваться</h1>
        <form className='logout__form' action=''>
          <div className='logout__item'>
            <label htmlFor='email'>Электронная почта</label>
            <div className='logout__item-input'>
              <input type='text' id='email' placeholder='Введите email' />
              <span>Электронная почта обязательна для заполнения</span>
            </div>
          </div>
          <div className='logout__item'>
            <label htmlFor='name'>Имя</label>
            <div className='logout__item-input'>
              <input type='text' id='name' placeholder='Укажите имя' />
              <span>Имя обязательно для заполнения</span>
            </div>
          </div>
          <div className='logout__item'>
            <label htmlFor='password'>Пароль</label>
            <div className='logout__item-input'>
              <input
                type='password'
                id='password'
                placeholder='Задайте пароль'
              />
              <button type='button'>
                <i></i>
              </button>
              <span>Пароль обязателен для заполнения</span>
            </div>
          </div>
          <div className='logout__item-checkbox'>
            <input type='checkbox' />
            <label>Я принимаю условия пользовательского соглашения</label>
          </div>
          <button className='logout__item-btn' type='submit'>
            Зарегистрироваться
          </button>
        </form>
        <p className='logout__text-help'>
          У вас уже есть аккаунт?
          <Link className='logout__text-login' to='/login' role='button'>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogOut
