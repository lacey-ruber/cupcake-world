import React, { useState, useEffect } from 'react'
import CheckBoxField from '../common/form/CheckBoxField'
import { Link } from 'react-router-dom'
import { validator } from '../../utils/validator'
import TextField from '../common/form/TextField'

const LogOut = () => {
  const [data, setData] = useState({
    email: '',
    password: '',
    name: '',
    licence: false
  })
  const [errors, setErrors] = useState({})

  const handleChange = (target) => {
    setData((prevState) => ({
      ...prevState,
      [target.name]: target.value
    }))
  }

  const validatorConfig = {
    email: {
      isRequired: { message: 'Электронная почта обязательна для заполнения' },
      isEmail: {
        message: 'Email введён некорректно'
      }
    },
    password: {
      isRequired: { message: 'Пароль обязателен для заполнения' },
      isCapitalSymbol: {
        message: 'Пароль должен содержать хотя бы одну заглавную букву'
      },
      isContainDigit: {
        message: 'Пароль должен содержать хотя бы одно число'
      },
      min: {
        message: 'Пароль должен состоять минимум из 8 символов',
        value: 8
      }
    },
    name: {
      isRequired: { message: 'Имя обязательно для заполнения' }
    },
    licence: {
      isRequired: {
        message:
          'Вы не можете зарегистрироваться без подтверждения лицензионного соглашения'
      }
    }
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
    <div className="forms">
      <div className="forms__wrapper">
        <h1 className="forms__title">Зарегистрироваться</h1>
        <form onSubmit={handleSubmit} className="forms__form">
          <TextField
            label="Электронная почта"
            name="email"
            value={data.email}
            onChange={handleChange}
            error={errors.email}
          />
          <TextField
            label="Имя"
            name="name"
            value={data.name}
            onChange={handleChange}
            error={errors.name}
          />
          <TextField
            label="Пароль"
            type="password"
            name="password"
            value={data.password}
            onChange={handleChange}
            error={errors.password}
          />
          <CheckBoxField
            value={data.licence}
            onChange={handleChange}
            name="licence"
            error={errors.licence}
          >
            Я принимаю условия
            <a
              style={{
                cursor: 'pointer',
                textDecoration: 'underline',
                marginLeft: '5px'
              }}
            >
              пользовательского соглашения
            </a>
          </CheckBoxField>
          <button
            className={'forms__item-btn' + (isValid ? ' active' : '')}
            type="submit"
            disabled={!isValid}
          >
            Зарегистрироваться
          </button>
        </form>
        <p className="forms__text-help">
          У вас уже есть аккаунт?
          <Link to="/login" role="button">
            Войти
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LogOut
