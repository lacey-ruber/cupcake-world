import React from 'react'
import PropTypes from 'prop-types'

const CheckBoxField = ({ name, value, onChange, children, error }) => {
  const handleChange = () => {
    onChange({ name: name, value: !value })
  }
  const getInputClasses = () => {
    return error ? ' is-invalid' : ''
  }
  return (
    <div className='checkbox'>
      <div className='checkbox__container'>
        <input
          className={getInputClasses()}
          type='checkbox'
          value=''
          id={name}
          onChange={handleChange}
          checked={value}
        />
        <label htmlFor={name}>{children}</label>
      </div>
      {error && <span>{error}</span>}
    </div>
  )
}

CheckBoxField.propTypes = {
  name: PropTypes.string,
  value: PropTypes.bool,
  onChange: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  error: PropTypes.string,
}

export default CheckBoxField
