import React, { useRef } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import Contener from '../components/Contener'
import RevieweC from '../components/RevieweC.jsx'
import Titale from '../components/Titale.jsx';

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

 
        var settings = {
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 1,
            initialSlide: 0,
            
    }
        return (
            <div>
                <Contener>
                    <div className='mt-[93px] mb-[55px]'>
                        <Titale head_title="কেন আমরাই সেরা" sub_title='কেন আপনি আমাদের লার্নার হবেন '/>
                    </div>
                    <Slider {...settings}>

                    {
                        rev.map((aaa) => (
                            <RevieweC rItem={aaa} />
                        ))
                    }
                    </Slider>
                </Contener>
            </div>
        )
    }

    export default Reviewe
