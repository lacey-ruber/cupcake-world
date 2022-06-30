import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import '../scss/components/_login.scss'

const Login = () => {
  const [data, setData] = useState({ email: '', password: '' })
  const [errors, setErrors] = useState()
  const handleChange = ({ target }) => {
    setData((prevState) => ({ ...prevState, [target.name]: target.value }))
  }

  useEffect(() => {
    validate()
  }, [data])

  const validate = () => {
    const errors = {}
    for (const fieldName in data) {
      if (data[fieldName].trim() === '') {
        errors[fieldName] = `${fieldName} обязательно для заполнения`
      }
    }
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }
  return (
    <div className='login'>
      <div className='login__wrapper'>
        <h3>Ввойти в систему</h3>
        <form onSubmit={handleSubmit} className='login__form'>
          <div className='login__form-container'>
            <label htmlFor='email'>Электронная почта</label>
            <div className='login__form-item'>
              <input
                type='text'
                name='email'
                id='email'
                placeholder='Введите email'
                value={data.email}
                onChange={handleChange}
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
                value={data.password}
                onChange={handleChange}
              />
              <button type='button'>
                <i></i>
              </button>
              <span>Пароль обязателен для заполнения</span>
            </div>
          </div>
          <div className='login__form-checkbox'>
            <input type='checkbox' id='stayOn' name='checkbox' />
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
