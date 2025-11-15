import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import Image from '../components/Image.jsx'
import Icon1 from '../assets/iamges/icon/icon-park-solid_graphic-design.svg'
import Icon2 from '../assets/iamges/icon/Vector.svg'
import Icon3 from '../assets/iamges/icon/eos-icons_software.svg'
import Icon4 from '../assets/iamges/icon/mdi_filmstrip.svg'
import Contener from '../components/Contener'
import CatagoryItem from '../components/CtagoryItem.jsx'
import { GrCaretNext } from "react-icons/gr";
import { GrCaretPrevious } from "react-icons/gr";
const Catagory = () => {
    let aitems = [
        {
            name: "গ্রাফিকস",
            icon: Icon1,
        },
        {
            name: "নেটওয়ার্কিং",
            icon: Icon2
        },
        {
            name: "সফটওয়্যার",
            icon: Icon3,
        },
        {
            name: "ফিল্ম মিডিয়া",
            icon: Icon4,
        },
        {
            name: "গ্রাফিকস",
            icon: Icon1,
        },
        {
            name: "নেটওয়ার্কিং",
            icon: Icon2
        },
        {
            name: "সফটওয়্যার",
            icon: Icon3,
        },
        {
            name: "ফিল্ম মিডিয়া",
            icon: Icon4,
        }
    ]


    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}

                style={{
                    display: "flex",             
                    justifyContent: "center",
                    alignItems: "center",
                     padding: "30px",
                    borderRadius: "20%",         
                    cursor: "pointer",
                    background: "#1B263B",
                }}

                onClick={onClick}
            >
                <GrCaretNext />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={className}
                style={{
                    ...style,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: "20%",
                    alignItems: "center",
                    padding: "30px",
                    fontSize: "50px",
                    background: "#1B263B",
                   
                }}
                onClick={onClick}
            >
                <GrCaretPrevious />
            </div>
        );
    }

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
      {
        breakpoint: 300,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
         nextArrow : false,
         prevArrow: false,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          nextArrow : false,
           prevArrow: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
           nextArrow : false,
           prevArrow: false,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          infinite: true,
           nextArrow : false,
           prevArrow: false,
        }
      }
        ]
    };

    return (
        <section className='absolute w-full top-[-100px]'>
            <Contener>
                <Slider {...settings}>

                    {aitems.map((cItems) => (
                        < CatagoryItem aitems={cItems}  />
                    ))}
                </Slider>
            </Contener>
        </section>
    )
}

export default Catagory
