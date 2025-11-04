import React from 'react'

const RevieweC = ({rItem}) => {
  return (
    <div>
       <div className='px-7 bg-third max-w-[377px] rounded-[15px]'>
                    <h2 className='text-[36px] font-Anik font-semibold text-white pt-9 '>
                        {rItem.presrnt}</h2>
                    <h3 className='text-[36px] font-Anik font-semibold text-white'>{rItem.rTitle}</h3>
                    <p className='font-Anik font-normal text-lg text-white pt-[23px] pb-[86px]'>
                        {rItem.pItem}</p>
      </div>
    </div>
  )
}

export default RevieweC
