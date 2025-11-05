import React from 'react'

const Iframe = ({Iitems , className=""}) => {
  return (
    <div>
      <iframe src={Iitems.src} className={`w-full h-80 rounded px-4 ${className}`}></iframe>
    </div>
  )
}

export default Iframe
