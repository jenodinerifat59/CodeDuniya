import React from 'react'

const RevieweC = ({ rItem }) => {
  return (
    <section>
      <div className='px-5 md:px-7 bg-third max-w-[377px] rounded-[15px] '>
        <h2 className='text-7 md:text-[36px] font-Anik font-semibold text-white pt-7 md:pt-9 '>
          {rItem.presrnt}</h2>
        <h3 className='text-[30px] md:text-[36px] font-Anik font-semibold text-white'>{rItem.rTitle}</h3>
        <p className='font-Anik font-normal text-lg text-white pt-[18px] md:pt-[23px] pb-[50px] md:pb-[86px]'>
          {rItem.pItem}</p>
      </div>
    </section>
  )
}

export default RevieweC
