import React, { useState } from 'react'
import Contener from '../components/Contener.jsx'
import ListItems from '../components/ListItems.jsx'
import Flex from '../components/Flex.jsx'
import Image from '../components/Image.jsx'
import Logo from '../assets/iamges/logo.png'
import Button from '../components/Button.jsx'
import { FaBars } from "react-icons/fa6"

const NavItem = () => {
    let [manu , setmanu] = useState(false)

    let showManu = ()=>{
        setmanu(!manu)
    }
    return (
        <header>
            <nav className='bg-primary'>
                <Contener>
                    <Flex className='justify-between items-center '>
                        <FaBars onClick={showManu}  className='text-xl sm:text-2xl text-white lg:hidden sm:pl-2' />

                        <Image src={Logo} alt='logo'className='py-2  md:py-[15px] w-[70px] sm:w-[100px] md:w-auto '/>

                        <ul className= {`${manu ? 'block absolute left-0 top-10 md:top-[61px] bg-third w-full px-3 md:px-0 sm:text-center overflow-hidden':'hidden' }  text-white lg:flex gap-[25px]`}>
                            <ListItems className='font-medium text-lg md:text-xl lg:text-2xl lg:font-semibold' Items='হোম' />
                            <ListItems className='text-lg md:text-xl lg:text-2xl font-medium lg:font-semibold' Items='আমাদের কোর্সসমূহ' />
                            <ListItems className='font-medium text-lg md:text-xl lg:text-2xl  lg:font-semibold' Items='যোগাযোগ' />
                            <ListItems className='font-medium text-lg md:text-xl ld:text-2xl lg:font-semibold' Items='ক্যারিয়ার গাইডলাইন' />
                        </ul>

                       <Button  Items='কোর্স দেখুন'className='py-1 px-1 sm:px-3 md:px-[58px] bg-[#415A77] rounded-[10px] text-white text-sm sm:text-lg md:text-2xl font-reguler sm:font-medium md:font-semibold'/>

                    </Flex>
                </Contener>
            </nav>
        </header>
    )
}

export default NavItem
