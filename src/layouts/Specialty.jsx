import React from 'react'
import Contener from '../components/Contener.jsx'
import Flex from '../components/Flex.jsx'
import Titale from '../components/Titale.jsx'
import ListItems from '../components/ListItems.jsx'
import Speciality from '../assets/iamges/speciality.png'
import Image from '../components/Image.jsx'
const Specialty = () => {
  return (
    <section className='mt-20 md:mt-[186px]'>
      <Contener>
        <Flex className='justify-around  flex-col md:flex-row '>
     
            <Image className="max-h-[378px]" src={Speciality} alt='speciality img'/>
           
            <div>
                <Titale head_title ="আমাদের ক্লাসের বিশেষত্ব"/>
                <ul className='mt-[31px] list-disc' >
                    <ListItems className='mt-1.5 mx-[65px]' Items="সপ্তাহে ২ - ৩ দিন ক্লাস"/>
                    <ListItems className='mt-1.5 mx-[65px]' Items="অনলাইন / অফলাইন ক্লাস প্রতিটি কোর্সে"/>
                    <ListItems className='mt-1.5 mx-[65px]' Items="মনোরম ক্লাস রুম"/>
                    <ListItems className='mt-1.5 mx-[65px]' Items="অনলাইন ২৪/৭ সাপোর্ট"/>
                    <ListItems className='mt-1.5 mx-[65px]' Items="অত্যাধুনিক মনিটর এবং প্রজেক্টর এর সুবিধা"/>
                </ul>
            </div>
        </Flex>
      </Contener>
    </section>
   
  )
}
 
export default Specialty
