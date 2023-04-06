import React from 'react'
import './Portfolio.css'
import {Swiper, SwiperSlide} from 'swiper/react'
import Library from "../../img/library.png";
import Admin from "../../img/admin.png";
import Teacher from "../../img/teacher.png";
import Student from "../../img/student.png";
import 'swiper/css'
import { themeContext } from "../../Context";
import { useContext } from "react";

const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id='Portfolio'>
        {/* Heading */}

        <span style={ {color: darkMode ? 'white' : ''}}>Recent Projects</span>
        <span>Portfolio</span>

        {/* Slider */}
        
        <Swiper
        spaceBetween={60}
        slidesPerView={3}
        grabCursor={true}
        className='portfolio-slider'
        >
            <SwiperSlide>
                <img src={Library} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Admin} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Teacher} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={Student} alt="" />
            </SwiperSlide>
        </Swiper>

    </div>
  )
}

export default Portfolio