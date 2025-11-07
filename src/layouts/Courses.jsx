import React, { useState } from 'react'
import Contener from '../components/Contener'
import Titale from '../components/Titale'
import Card from '../components/Card'
import Mern from '../assets/iamges/mern.png'
import UiUx from '../assets/iamges/uiux.png'
import Video from '../assets/iamges/videoEditing.png'
import Button from '../components/Button.jsx'
const Courses = () => {
  let [courseCount , setcourseCount] = useState(3)
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
 const showall=()=>{
  if(courseCount===3){
    setcourseCount(card.length)
  }else{
    setcourseCount(3);
  }
 
 }


let showcard = card.slice(0,courseCount)
  return (
    <div className='mt-[90px] md:mt-[170px]'>
      <Contener>
        <Titale head_title='আমাদের কোর্স সমুহ' sub_title='আমাদের সমস্ত কোর্স সুদক্ষ মেন্টর দ্বারা পরিচালিত  এবং সমৃদ্ধ রিসোর্স দ্বারা পরিপূর্ণ' />
        <div className='grid grid-cols-1 sm:grid-cols-2 max-w-fit md:grid-cols-3 gap-3 md:gap-6 '>
          {
          showcard.map((Citem) => (
            <Card course ={Citem}/>
          )) 
         }
        </div>
         <Button onClick={showall} className='py-1 px-11 md:px-[58px] bg-sec rounded-[10px] text-white text-xl md:text-2xl font-semibold mx-auto block mt-8 md:mt-12 '
         
          Items ={courseCount===3 ? "আরও কোর্স দেখুন" : "আগের অবস্থানে যাই"}
         />
      </Contener>


    </div>
  )
}

export default Courses
