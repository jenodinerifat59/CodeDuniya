import React from 'react'
import Contener from '../components/Contener'
import Flex from '../components/Flex'
import Image from '../components/Image.jsx'
import Baner from '../assets/iamges/baner.png'
import Button from '../components/Button.jsx'

const Hero = () => {
    return (
        <section className='bg-primary'>
            <Contener>
                <Flex className=' pt-10 sm:pt-[70px]md:pt-[81px] flex-col md:flex-row'>
                    <div className='w-full md:w-1/2 text-white py-2 md:py-0'>
                        <h2 className='font-medium sm:font-semibold md:font-bold text-3xl md:text-[50px] max-w-[435px]'>দেশের সর্ব বৃহৎ  আইটি ট্রেনিং প্লাটফর্ম </h2>
                        <p className='font-light sm:font-normal text-xl max-w-[457px] mt-2 md:mt-4'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                       <Button Items='কোর্স দেখুন'className='py-1 px-10 md:px-[58px] bg-[#415A77] rounded-[10px] text-lg md:text-2xl font-semibold mt-4  md:mt-[42px] mx-auto md:mx-0 block'/>

                    </div>
                    <div className='w-full md:w-1/2 text-white '>
                        <Image src={Baner} alt='Banerimage' className='pb-10 md:pb-[132px] mt-5 md:mt-0 mx-auto' />
                    </div>
                </Flex>
            </Contener>

        </section>
    )
}

export default Hero
