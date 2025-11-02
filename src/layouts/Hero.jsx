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
                <Flex className='pt-[81px]'>
                    <div className='w-1/2 text-white '>
                        <h2 className='font-bold text-[50px] max-w-[435px]'>দেশের সর্ব বৃহৎ  আইটি ট্রেনিং প্লাটফর্ম </h2>
                        <p className='font-normal text-xl max-w-[457px] mt-4'>আইটি ট্রেনিং এর মাধ্যমে নিজেকে স্বাবলম্বী করুন। নিজেকে আইটি এক্সপার্ট হিসেবে গড়ে তুলুন</p>
                       <Button Items='কোর্স দেখুন'className='py-1 px-[58px] bg-[#415A77] rounded-[10px] text-2xl font-semibold mt-[42px]'/>

                    </div>
                    <div className='w-1/2 text-white '>
                        <Image src={Baner} alt='Banerimage' className='pb-[132px]' />
                    </div>
                </Flex>
            </Contener>

        </section>
    )
}

export default Hero
