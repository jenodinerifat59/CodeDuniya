import React from 'react'
import Contener from './Contener'

const Titale = ({head_title , sub_title}) => {
  return (
    <div className='text-center'>
      
      <h2 className='font-bold text-[36px] mb-4'>{head_title}</h2>
      <p className= 'font-medium text-xl'>{sub_title}</p>  
      
    </div>
  )
}

export default Titale
