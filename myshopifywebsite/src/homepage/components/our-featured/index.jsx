import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Product1 from "../../../images/product_1.webp"
import Product2 from "../../../images/product_2.webp"
import Product3 from "../../../images/product_3.webp"
import Product4 from "../../../images/product_4.webp"
import Product5 from "../../../images/product_5.webp"
import Product6 from "../../../images/product_6.webp"
import Product7 from "../../../images/product_7.webp"
import Product8 from "../../../images/product_8.webp"
import "./index.scss"
import axios from 'axios';
const OurFeatured = () => {
  const [featuredData, setFeaturedData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/featured")
    .then((response) => setFeaturedData(response.data))
  }, [])
  console.log(featuredData);
  return (
    <div className='feauted'>
    <h1>Our Featured</h1>
    <Swiper
          slidesPerView={1}
          spaceBetween={10}
          pagination={{
            clickable: true,
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
          modules={[ Pagination]}
          className="mySwiper"
        >
          {featuredData.map((featured) => {
            return <>
            <SwiperSlide>
              <div className="featured-our">
                <img src={featured.imgUrlOne} alt="" />
                <div className="featured-text">
                <p>{featured.brend}</p>
                <h3>{featured.name}</h3>
                <span>€{featured.price}</span> 
                </div>
              </div>
              </SwiperSlide>
            </>
          })}
    {/* <SwiperSlide><img src={Product1} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product2} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product3} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product4} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product5} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product6} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product7} alt="" /></SwiperSlide>
          <SwiperSlide><img src={Product8} alt="" /></SwiperSlide> */}
    
        </Swiper>
    </div>
  )
}

export default OurFeatured