import React from 'react'
import Contener from '../components/Contener'
import Titale from '../components/Titale'
import Card from '../components/Card'
import Mern from '../assets/iamges/mern.png'
import UiUx from '../assets/iamges/uiux.png'
import Video from '../assets/iamges/videoEditing.png'
import Button from '../components/Button.jsx'
const Courses = () => {
  let card = [
    {
      name: "MERN Stack Development",
      dep: "Web and Software",
      price: "৳ 1,20000 BDT",
      endrle: "৩০০০ স্টুডেন্ট",
      rev: "Rating | 450 Reviews",
      thm: Mern

    },
    {
      name: "Professional Video Editing",
      dep: "Films & Media",
      price: "৳ 1,20000 BDT",
      endrle: "৩০০০ স্টুডেন্ট",
      rev: "Rating | 450 Reviews",
      thm: Video

    },
    {
      name: "UI/UX Design",
      dep: "Graphics & Multimedia",
      price: "৳ 1,20000 BDT",
      endrle: "৩০০০ স্টুডেন্ট",
      rev: "Rating | 450 Reviews",
      thm: UiUx

    },
    {
      name: "MERN Stack Development",
      dep: "Web and Software",
      price: "৳ 1,20000 BDT",
      endrle: "৩০০০ স্টুডেন্ট",
      rev: "Rating | 450 Reviews",
      thm: Mern

    },
    {
      name: "Professional Video Editing",
      dep: "Films & Media",
      price: "৳ 1,20000 BDT",
      endrle: "৩০০০ স্টুডেন্ট",
      rev: "Rating | 450 Reviews",
      thm: Video

    },
    {
      name: "UI/UX Design",
      dep: "Graphics & Multimedia",
      price: "৳ 1,20000 BDT",
      endrle: "৩০০০ স্টুডেন্ট",
      rev: "Rating | 450 Reviews",
      thm: UiUx

    }
  ]
  return (
    <div className='mt-[170px]'>
      <Contener>
        <Titale head_title='আমাদের কোর্স সমুহ' sub_title='আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ' />
        <div className='grid grid-cols-3 gap-6 '>
          {
          card.map((Citem) => (
            <Card course ={Citem}/>
          )) 
         }
        </div>
         <Button Items='আরও কোর্স দেখুন'className='py-1 px-[58px] bg-[#415A77] rounded-[10px] text-white text-2xl font-semibold mx-auto block mt-[48px]'/>
      </Contener>


    </div>
  )
}

export default Courses
