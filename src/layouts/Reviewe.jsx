import React, { useRef  } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Contener from '../components/Contener'
import RevieweC from '../components/RevieweC.jsx'
import Titale from '../components/Titale.jsx';
import Button from "../components/Button.jsx"
const Reviewe = () => {
    let rev = [
        {
            presrnt: "৯০ % ",
            rTitle: "সফলতার হার",
            pItem: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"

        },
        {
            presrnt: "১০,০০০ + ",
            rTitle: "ক্যারিয়ার প্লেসমেন্ট",
            pItem: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"

        },
        {
            presrnt: "১০০০০০ + ",
            rTitle: "স্টুডেন্ট এর পছন্দ",
            pItem: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"
        }, {
            presrnt: "৯০ % ",
            rTitle: "সফলতার হার",
            pItem: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"

        },
        {
            presrnt: "১০,০০০ + ",
            rTitle: "ক্যারিয়ার প্লেসমেন্ট",
            pItem: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"

        },
        {
            presrnt: "১০০০০০ + ",
            rTitle: "স্টুডেন্ট এর পছন্দ",
            pItem: "এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে  এখানে কিছু টেক্সট বাসবে এখানে কিছু টেক্সট  বাসবে এখানে কিছু টেক্সট বাসবেএখানে কিছু টেক্সট  বাসবে"
        }

    ]

    let sliderRef = useRef(null);


    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      }
        ]
       
    }
    
        return (
            <div>
                <Contener>
                    <div className='mt-[50px] md:mt-[93px] mb-10 md:mb-[55px]'>
                        <Titale head_title="কেন আমরাই সেরা" sub_title='কেন আপনি আমাদের লার্নার হবেন ' />
                    </div>
                    <div className='grig grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2'>
                        <Slider 
                     ref={sliderRef }
                     {...settings}>

                        {
                            rev.map((aaa, i) => (
                                <RevieweC rItem={aaa} key={i}/>
                            ))
                        }
                    </Slider>
                    </div>
                    

                    <div className= "text-center mt-9 " >

                        <Button className=" bg-third text-white py-1 px-4 rounded-2xl mr-3 " onClick={() => {
                            sliderRef.current.slickPrev();
                        }} Items="previous" />

                        <Button className=" bg-third text-white py-1 px-4 rounded-2xl " onClick={() => {
                            sliderRef.current.slickNext();
                        }} Items="next" />




                    </div>
                </Contener>
            </div>
        )
}

export default Reviewe
