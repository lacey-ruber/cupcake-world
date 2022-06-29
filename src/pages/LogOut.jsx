import React from 'react'
import { Link } from 'react-router-dom'

const LogOut = () => {
  return (
    <div className='logout'>
      <div className='logout__wrapper wrapper'>
        <h1 className='logout__title'>Зарегистрироваться</h1>
        <form className='logout__form' action=''>
          <div className='logout__item'>
            <label htmlFor='email'>Электронная почта</label>
            <div>
              <input type='text' />
              <div>Электронная почта обязательна для заполнения</div>
            </div>
          </div>
          <div className='logout__item'>
            <label htmlFor='email'>Имя</label>
            <div>
              <input type='text' />
              <div>Имя обязательно для заполнения</div>
            </div>
          </div>
          <div className='logout__item'>
            <label htmlFor='email'>Пароль</label>
            <div>
              <input type='text' />
              <button type='button'>
                <i></i>
              </button>
              <div>Пароль обязателен для заполнения</div>
            </div>
          </div>
          <div>
            <input type='text' />
            <label htmlFor=''></label>
          </div>
          <button type='submit'>Отправить</button>
        </form>
        <p>
          У вас уже есть аккаунт?
          <Link to='/login' role='button'>
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogOut
