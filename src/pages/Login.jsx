import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className='login'>
      <div className='login__wrapper wrapper'>
        <div className='col-md-6 offset-md-3 shadow p-4'>
          <h3 className='mb-4'>Ввойти в систему</h3>
          <form>
            <div className='mb-4'>
              <label htmlFor='email'>Электронная почта</label>
              <div className='input-group has-validation'>
                <input
                  type='text'
                  name='email'
                  className='form-control is-invalid'
                />
                <div className='invalid-feedback'>
                  Электронная почта обязательна для заполнения
                </div>
              </div>
            </div>
            <div className='mb-4'>
              <label htmlFor='password'>Пароль</label>
              <div className='input-group has-validation'>
                <input
                  type='password'
                  id='password'
                  name='password'
                  className='form-control is-invalid'
                />
                <button className='btn btn-outline-secondary' type='button'>
                  <i className='bi bi-eye'></i>
                </button>
                <div className='invalid-feedback'>
                  Пароль обязателен для заполнения
                </div>
              </div>
            </div>
            <div className='form-check mb-4'>
              <input className='form-check-input' type='checkbox' id='stayOn' />
              <label className='form-check-label' htmlFor='stayOn'>
                Оставаться в системе
              </label>
            </div>
            <button className='btn btn-primary w-100 mx-auto' type='submit'>
              Отправить
            </button>
          </form>
          <p>
            У вас нет аккаунта?<Link to='/logout'>Зарегистрироваться</Link>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Login
