import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { validator } from '../../utils/validator'
import '../../scss/components/_forms.scss'
import TextField from '../common/form/TextField'
import CheckBoxField from '../common/form/CheckBoxField'

const LoginForm = () => {
  const [data, setData] = useState({ email: '', password: '', stayOn: false })
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value,
    }))
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: {
        message: 'Email введён некорректно',
      },
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву',
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число',
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8,
      },
    },
  }

  const validate = () => {
    const errors = validator(data, validatorConfig)
    setErrors(errors)
    return Object.keys(errors).length === 0
  }

  useEffect(() => {
    validate()
  }, [data])

  const isValid = Object.keys(errors).length === 0

  const handleSubmit = (e) => {
    e.preventDefault()
    const isValid = validate()
    if (!isValid) return
    console.log(data)
  }

  return (
    <div className='forms'>
      <div className='forms__wrapper'>
        <h1 className='forms__title'>Ввойти в систему</h1>
        <form onSubmit={handleSubmit} className='forms__form'>
          <TextField
            label='Электронная почта'
            name='email'
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label='Пароль'
            type='password'
            name='password'
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <CheckBoxField
            value={data.stayOn}
            onChange={handleChange}
            name='stayOn'
          >
            Оставаться в системе
          </CheckBoxField>
          <button
            className={'forms__item-btn' + (isValid ? ' active' : '')}
            type='submit'
            disabled={!isValid}
          >
            Войти
          </button>
        </form>
        <p className='forms__text-help'>
          У вас нет аккаунта?
          <Link to='/logout' role='button'>
            Зарегистрироваться
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginForm
