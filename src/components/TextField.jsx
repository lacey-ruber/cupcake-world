import React from 'react'

const TextField = (label, type, name, value, onChange) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <div>
        <input
          type={type}
          id={name}
          name={name}
          value={value}
          onChange={onChange}
        />
      </div>
    </div>
  )
}

TextField.defaultProps = {
  type: 'text',
}

export default TextField
