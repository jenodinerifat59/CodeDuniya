import React from 'react'

const Button = ({Items, className=""}) => {
  return (
    <button className={`cursor-pointer ${className}`}>{Items}</button>
  )
}

export default Button
