import React from 'react'
// import "../carusel/index.scss"
// import "./index.scss"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./styles.scss";


const MainHomeCarusel = () => {
  return (
   <div>
      <Swiper className="mySwiper">
        <SwiperSlide><div className="carusel">
        <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/slide1.jpg?v=1622183685&width=1780" alt="" />
        <div className="carusel_text">
           <div className="text_buy_free">
           <p>Buy 2 Get</p>
            <div className='stars'>
            <i className="fa-regular fa-star"></i>
            <span>Free</span>
            <i className="fa-regular fa-star"></i>
            </div>
           </div>
            <h1>Fashionable</h1>
            <h3>Collection</h3>
            <p className='getFree'>Get Free Shipping on all orders over 99$</p>
            <button>Shop Now <i className="fa-solid fa-right-long"></i></button>
        </div>
        </div></SwiperSlide>
        <SwiperSlide><div className='carusel_2'>
        <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/slide2.jpg?v=1622183701&width=1780" alt="" />
        <div className="carusel_text_2">
           <div className="cooming_soon_2">
           <p>COOMING SOON</p>
           <h3>Riode Birthday</h3>
           <h1>Sale</h1>
           <p className='upTo'>Up to 70% off on all products online & Free Shipping over 99$</p>
           <button>Shop Now <i className="fa-solid fa-right-long"></i></button>
           </div>
        </div>
        </div></SwiperSlide>
      </Swiper>
   </div>
  )
}

export default MainHomeCarusel