import React, { useState } from 'react'
import PropTypes from 'prop-types'

const TextField = ({ label, type, name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = ({ target }) => {
    onChange({ name: target.name, value: target.value })
  }
  const getInputClasses = () => {
    return error ? ' is-invalid' : ''
  }
  const toggleShowPassword = () => {
    setShowPassword((prevState) => !prevState)
  }
  return (
    <div className='forms__item'>
      <div className='forms__item-input'>
        <label htmlFor={name}>{label}</label>
        <input
          type={showPassword ? 'text' : type}
          id={name}
          name={name}
          value={value}
          onChange={handleChange}
          className={getInputClasses()}
          placeholder=''
        />
        {type === 'password' && (
          <button type='button' onClick={toggleShowPassword}>
            {showPassword ? (
              <svg height='32px' viewBox='0 0 32 32' width='32px'>
                <g
                  fill='none'
                  fillRule='evenodd'
                  id='Page-1'
                  stroke='none'
                  strokeWidth='1'
                >
                  <g fill='#929292' id='icon-22-eye'>
                    <path
                      d='M17,9 C8,9 4,16 4,16 C4,16 8,23.000001 17,23 C26,22.999999 30,16 30,16 C30,16 26,9 17,9 L17,9 Z M17,20 C19.2091391,20 21,18.2091391 21,16 C21,13.7908609 19.2091391,12 17,12 C14.7908609,12 13,13.7908609 13,16 C13,18.2091391 14.7908609,20 17,20 L17,20 Z M17,19 C18.6568543,19 20,17.6568543 20,16 C20,14.3431457 18.6568543,13 17,13 C15.3431457,13 14,14.3431457 14,16 C14,17.6568543 15.3431457,19 17,19 L17,19 Z M17,17 C17.5522848,17 18,16.5522848 18,16 C18,15.4477152 17.5522848,15 17,15 C16.4477152,15 16,15.4477152 16,16 C16,16.5522848 16.4477152,17 17,17 L17,17 Z'
                      id='eye'
                    />
                  </g>
                </g>
              </svg>
            ) : (
              <svg height='32px' version='1.1' viewBox='0 0 32 32' width='32px'>
                <title />
                <desc />
                <defs />
                <g
                  fill='none'
                  fillRule='evenodd'
                  id='Page-1'
                  stroke='none'
                  strokeWidth='1'
                >
                  <g fill='#929292' id='icon-21-eye-hidden'>
                    <path
                      d='M8.10869891,20.8913011 C4.61720816,18.8301147 3,16 3,16 C3,16 7,9 16,9 C17.3045107,9 18.5039752,9.14706466 19.6014388,9.39856122 L18.7519017,10.2480983 C17.8971484,10.0900546 16.9800929,10 16,10 C8,10 4.19995117,16 4.19995117,16 C4.19995117,16 5.71472808,18.3917225 8.84492713,20.1550729 L8.10869891,20.8913011 L8.10869891,20.8913011 L8.10869891,20.8913011 Z M12.398561,22.601439 C13.4960246,22.8529356 14.6954892,23.0000001 16,23 C25,22.999999 29,16 29,16 C29,16 27.3827918,13.1698856 23.8913008,11.1086992 L23.1550727,11.8449273 C26.2852719,13.6082776 27.8000488,16 27.8000488,16 C27.8000488,16 24,21.999999 16,22 C15.019907,22.0000001 14.1028515,21.9099455 13.2480981,21.7519019 L12.398561,22.601439 L12.398561,22.601439 L12.398561,22.601439 Z M19.8986531,15.1013469 C19.9649658,15.3902115 20,15.6910144 20,16 C20,18.2091391 18.2091391,20 16,20 C15.6910144,20 15.3902115,19.9649658 15.1013469,19.8986531 L16,19 C16.7677669,19.0000001 17.5355339,18.7071068 18.1213203,18.1213203 C18.7071068,17.5355339 19.0000001,16.7677669 19,16 L19.8986531,15.1013469 L19.8986531,15.1013469 L19.8986531,15.1013469 Z M16.8986531,12.1013469 C16.6097885,12.0350342 16.3089856,12 16,12 C13.7908609,12 12,13.7908609 12,16 C12,16.3089856 12.0350342,16.6097885 12.1013469,16.8986531 L13,16 C12.9999999,15.2322331 13.2928932,14.4644661 13.8786797,13.8786797 C14.4644661,13.2928932 15.2322331,12.9999999 16,13 L16.8986531,12.1013469 L16.8986531,12.1013469 L16.8986531,12.1013469 Z M24,7 L7,24 L8,25 L25,8 L24,7 L24,7 Z'
                      id='eye-hidden'
                    />
                  </g>
                </g>
              </svg>
            )}
          </button>
        )}
      </div>
      {error && <span>{error}</span>}
    </div>
  )
}
TextField.defaultProps = {
  type: 'text',
}

TextField.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.string,
}

export default TextField
