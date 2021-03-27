
import React from 'react'

export const Input = ({name, type, label, placeholder, myClass }) => {
  return (
    <>
      <div>
        <label htmlFor={name} className={myClass}>{label}</label>
      </div>
        <input id={name} type={type} placeholder={placeholder} className="login__input" />
    </>
  )
}
