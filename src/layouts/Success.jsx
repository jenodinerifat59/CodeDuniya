import React, { useState } from 'react'
import Contener from '../components/Contener.jsx'
import Titale from '../components/Titale.jsx'
import Iframe from '../components/Iframe.jsx'
import Button from '../components/Button.jsx'

const Success = () => {
    let [sIframe ,setsIframe] = useState(4)
    let alIframe=[
          
    { src: "https://www.youtube.com/embed/dQw4w9WgXcQ" }, 
    { src: "https://www.youtube.com/embed/3JZ_D3ELwOQ" }, 
    { src: "https://www.youtube.com/embed/LsoLEjrDogU" }, 
    { src: "https://www.youtube.com/embed/9bZkp7q19f0" }, 
    { src: "https://www.youtube.com/embed/e-ORhEE9VVg" }, 
    { src: "https://www.youtube.com/embed/kJQP7kiw5Fk" }, 
    { src: "https://www.youtube.com/embed/YQHsXMglC9A" },
    { src: "https://www.youtube.com/embed/tVj0ZTS4WF4" }  


    ]
    const handel=()=>{
        if(sIframe === 4){
            setsIframe(alIframe.length)
        }else{
            setsIframe(4)
        }
    }
   let show = alIframe.slice(0,sIframe)
    return (
        <section>
            <Contener>
                <div className='mt-[118px]'>
                    <Titale head_title="আমাদের সফলতার গল্পগুলো" sub_title="আমাদের হাতে তৈরি হওয়া প্রতিটি নক্ষত্র" />
                </div>
                <div className='grid grid-cols-2 gap-4 mt-[90px]'>
                  {
                    show.map((item)=>(
                        <Iframe Iitems = {item}/>
                    ))
                  }
                </div>
                <div>
                    <Button onClick={handel} Items= { sIframe == 4 ? "আরও দেখুন" : "আগের অবস্থানে যাই"} className='py-1 px-[58px] bg-sec rounded-[10px] text-white text-2xl font-semibold mx-auto block mt-12 mb-[90px]'  />
                </div>
            </Contener>
        </section>
    )
}

export default Success
