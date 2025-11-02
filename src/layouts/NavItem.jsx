import React from 'react'
import Contener from '../components/Contener.jsx'
import ListItems from '../components/ListItems.jsx'
import Flex from '../components/Flex.jsx'
import Image from '../components/Image.jsx'
import Logo from '../assets/iamges/logo.png'
import Button from '../components/Button.jsx'
const NavItem = () => {
    return (
        <header>
            <nav className='bg-primary'>
                <Contener>
                    <Flex className='justify-between items-center'>
                        <Image src={Logo} alt='logo'className='py-[15px]'/>


                        <ul className='text-white flex gap-[25px]'>
                            <ListItems className='text-2xl font-semibold' Items='হোম' />
                            <ListItems className='text-2xl font-semibold' Items='আমাদের কোর্সসমূহ' />
                            <ListItems className='text-2xl font-semibold' Items='যোগাযোগ' />
                            <ListItems className='text-2xl font-semibold' Items='ক্যারিয়ার গাইডলাইন' />
                        </ul>

                       <Button Items='কোর্স দেখুন'className='py-1 px-[58px] bg-[#415A77] rounded-[10px] text-white text-2xl font-semibold'/>

                    </Flex>
                </Contener>
            </nav>
        </header>
    )
}

export default NavItem
