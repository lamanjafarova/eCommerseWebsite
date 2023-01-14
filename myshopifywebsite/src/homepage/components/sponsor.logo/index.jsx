import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {Autoplay, Pagination } from "swiper";
import SkilStar from "../../../images/skilstar.png"
import Sponsor1 from "../../../images/sponsor1.png"
import Sponsor2 from "../../../images/sponsor2.png"
import Sponsor3 from "../../../images/sponsor3.png"
import Sponsor4 from "../../../images/sponsor4.png"
import Sponsor5 from "../../../images/sponsor5.png"
import "./index.scss"
export const SponsorLogo = () => {
  return (
    <div className='sponsor'>
    <Swiper
          slidesPerView={1}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper"
        >
    <SwiperSlide><img src={SkilStar} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sponsor1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sponsor2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sponsor3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sponsor4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sponsor5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Sponsor2} alt="" /></SwiperSlide>
        </Swiper>
    </div>
   
  )
}
