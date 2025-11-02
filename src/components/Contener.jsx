import React from 'react'

const Contener = ({ children, className = '' }) => {
  return (
    <div className={`w-[1180px] mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Contener
