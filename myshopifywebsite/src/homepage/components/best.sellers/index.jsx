import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { Pagination } from "swiper";
// import Product1 from "../../../images/product_1.webp"
// import Product2 from "../../../images/product_2.webp"
// import Product3 from "../../../images/product_3.webp"
// import Product4 from "../../../images/product_4.webp"
// import Product5 from "../../../images/product_5.webp"
// import Product6 from "../../../images/product_6.webp"
// import Product7 from "../../../images/product_7.webp"
// import Product8 from "../../../images/product_8.webp"
import axios from 'axios';
import Rating from '../rating';

const BestSellers = ({ addBasket, setAddBasket }) => {
  const [sellersData, setSellersData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/sellers")
    .then((response) => setSellersData(response.data))
  }, [])
  const handleAddBasket = (obj) => {
    if (!addBasket.find((el) => el.id === obj.id)) {
      setAddBasket([...addBasket, obj]);
    } else {
      alert("This product is already added");
    }
  }
  return (
  <div className='seller'>
  <h1>Best Sellers</h1>
  <Swiper
        slidesPerView={1}
        spaceBetween={10}
        // pagination={{
        //   clickable: true,
        // }}
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
        modules={[Pagination]}
        className="mySwiper"
      >
        {sellersData.map((seller) => {
          return  <>
        <SwiperSlide><div className="sellers">
        <img src={seller.imgUrlOne} alt="" />
       <div className="seller-div">
        <p>{seller.brend}</p>
        <h3>{seller.name}</h3>
        <span>€{seller.price}</span> 
        <Rating rating={seller.rating}/>
        </div> 
        <button onClick={() => handleAddBasket(seller)}>Add To Cart</button>
        </div>
        </SwiperSlide>
          </>
        })}
      </Swiper>
  </div>
  )
}

export default BestSellers