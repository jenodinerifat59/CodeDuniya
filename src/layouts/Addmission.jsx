import React from 'react'
import Contener from '../components/Contener.jsx'
import Titale from '../components/Titale.jsx'
import Flex from '../components/Flex.jsx'
import Button from '../components/Button.jsx'
import ListItems from '../components/ListItems.jsx'
import Image from '../components/Image.jsx'
import logo from '../assets/iamges/logo.png'
import { IoIosSend } from "react-icons/io"
import { MdAddIcCall } from "react-icons/md"
import { IoIosMail } from "react-icons/io"
import { FaXTwitter } from "react-icons/fa6"
import { FaYoutube } from "react-icons/fa"
import { FaLinkedin } from "react-icons/fa"
import { FaFacebookSquare } from "react-icons/fa"




const Addmission = () => {
  return (
    <div className=' bg-primary text-white pt-4'>
      <Contener>
        <div>
          <Titale head_title="ভর্তি চলছে" sub_title="আমাদের অনলাইন অথবা অফলাইন কোর্সে এনরোল করে ফেলুন" />
        </div>
        <Flex className='justify-center gap-x-12  mt-[35px]'>
          <Button Items="সকল কোর্স দেখুন" className='border border-white rounded md:rounded-[15px] px-7  md:px-[61px] py-2' />
          <Button Items="আমাদের সেমিনারে যোগ দিন" className='border border-white rotate md:rounded-[15px] px-7 md:px-[61px] md:py-2' />
        </Flex>
        <div className='mt-20 md:mt-[118px]'>
          <Flex className='justify-between flex-col md:flex-row pl-5 md:pl-0 gap-3 md:gap-0'>
            <div>
              <h5 className=" font-Anik font-semiBold text-2xl ">আমাদের ঠিকানা</h5>
              <div className='md:list-none'>
                <Flex className='gap-2'>
                  <IoIosSend />
                  <ListItems Items="২৮ / ২, মেহের প্লাজা, ধানমন্ডি, ঢাকা" />
                </Flex>
                <Flex className='gap-2'>
                  <MdAddIcCall />

                  <ListItems Items="+৮৮ ০১৭১৫৫৫৭৮৯৬" />
                </Flex>
                <Flex className='gap-2'>
                  <IoIosMail />
                  <ListItems Items="info@codeduniya.com" />
                </Flex>
              </div>
            </div>
            <div>
              <h5 className=" font-Anik font-semiBold text-2xl ">গুরুত্বপূর্ণ লিংক</h5>
              <div className='md:list-none'>
                <ListItems Items="আমাদের কোর্স" />
                <ListItems Items="মেন্টর" />
                <ListItems Items="আমাদের ব্লগ" />
                <ListItems Items="প্রাইভেসি পলিসি" />
                <ListItems Items="আমাদের সেমিনার" />
              </div>
            </div>
            <div>
              <h5 className=" font-Anik font-semiBold text-2xl ">জনপ্রিয় কোর্সগুল</h5>
              <div className='md:list-none'>
                <ListItems Items="ওয়েব ডেভেলপমেন্ট" />
                <ListItems Items="গ্রাফিক্স ডিজাইন" />
                <ListItems Items="অ্যাপ ডেভেলপমেন্ট" />
                <ListItems Items="সাইবার সিকিউরিটি" />
                <ListItems Items="ভিডিও এডিটিং" />
              </div>

            </div>
            <div className='max-w-[377px] max-h-[230px] rounded-xl overflow-hidden shadow-md'>
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3651.984142971315!2d90.3697629!3d23.7426667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bfc92e944ea5%3A0x7cd9e2ccd0ed228d!2s315%2F1%20West%20Dhanmondi!5e0!3m2!1sen!2sbd!4v1730960000000!5m2!1sen!2sbd"
                width="100%"
                height="100%" frameborder="0"></iframe>
            </div>
          </Flex>
        </div>
        <div className='text-center mt-[54px]'>
          <Image className="block mx-auto" src={logo} />
          <h3 className='font-Anik font-normal text-7 md:text-[36px] mt-2'>দেশের সর্ববৃহৎ আইটি ট্রেনিং প্লাটফর্ম</h3>
        </div>
        <Flex className='gap-5 justify-center mt-3 pb-20 text-white'>
          <FaFacebookSquare className='w-10 h-10 cursor-pointer' />
          <FaLinkedin className='w-10 h-10 cursor-pointer' />
          <FaYoutube className='w-10 h-10 cursor-pointer' />
          <FaXTwitter className='w-10 h-10 cursor-pointer' />
        </Flex>
      </Contener>
    </div>
  )
}

export default Addmission
