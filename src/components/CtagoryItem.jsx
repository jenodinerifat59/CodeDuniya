import React from 'react'
import Contener from '../components/Contener.jsx'
import Image from '../components/Image.jsx'
const CtagoryItem = ({aitems}) => {
  return (
    <div className="">
  
         <div className='bg-third max-w-[230px] text-center rounded-2xl pt-3.5 mx-auto'>
        <Image src={aitems.icon} alt='icon' className='mx-auto'/>
        <h3 className='text-2xl text-white font-semibold mt-2.5 pb-8'>{aitems.name}</h3>
    </div>
    
    </div>
  )
}

export default CtagoryItem
