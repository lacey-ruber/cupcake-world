import React from 'react'
import { Link } from 'react-router-dom'

import '../scss/components/_login.scss'

const Login = () => {
  return (
    <div className='login'>
      <div className='login__wrapper'>
        <h3>Ввойти в систему</h3>
        <form className='login__form'>
          <div className='login__form-container'>
            <label htmlFor='email'>Электронная почта</label>
            <div className='login__form-item'>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Введите email'
              />
              <span>Электронная почта обязательна для заполнения</span>
            </div>
          </div>
          <div className='login__form-container'>
            <label htmlFor='password'>Пароль</label>
            <div className='login__form-item'>
              <input
                type='password'
                id='password'
                name='password'
                placeholder='Введите пароль'
              />
              {/* <button type='button'>
                <i></i>
              </button> */}
              <span>Пароль обязателен для заполнения</span>
            </div>
          </div>
          <div className='login__form-checkbox'>
            <input type='checkbox' id='stayOn' />
            <label htmlFor='stayOn'>Оставаться в системе</label>
          </div>
          <button className='login__form-btn' type='submit'>
            Отправить
          </button>
        </form>
        <p className='login__text-help'>
          У вас нет аккаунта?
          <Link className='login__text-registration' to='/logout'>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Login
