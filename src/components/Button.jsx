import React from 'react'

const Button = ({Items, className=""}) => {
  return (
    <button className={className}>{Items}</button>
  )
}

export default Button
