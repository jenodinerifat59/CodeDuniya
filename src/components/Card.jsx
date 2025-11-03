import React from 'react'
import Flex from './Flex'
import Button from './Button'
import { IoStar } from "react-icons/io5";


const Card = ({ course }) => {

    return (
        <div className='bg-sec rounded-[25px] mt-[53px]'>
            <img src={course.thm} alt="" />
            <div className='px-4 pt-1.5'>
                <Flex className='justify-between'>
                    <p className='font-medium font-pop text-4 text-white '>{course.dep}</p>
                    <p className='font-medium font-Anik text-4 text-white'>{course.endrle}</p>
                </Flex>
                <h3 className='font-bold font-pop text-2xl text-white pt-1'>{course.name}</h3>
                <Flex className='justify-between'>
                    <div className='pt-3'>
                        <Flex className='items-center gap-2'>
                            <IoStar className="text-yellow-500 text-xl" />
                            <p className='font-pop font-normal text-[13px] text-white'>{course.rev}</p>
                        </Flex>
                        <h3 className='font-extrabold font-Anik text-2xl text-white pb-3.5'>{course.price}</h3>
                    </div>
                    <Button className='bg-primary rounded-[15px] px-5 text-white' Items="ডিসকাউন্ট" />

                </Flex>
            </div>
        </div>
    )
}

export default Card
