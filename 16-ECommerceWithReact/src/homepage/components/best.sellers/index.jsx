import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./index.scss";
import { Pagination } from "swiper";
import axios from 'axios';
import Rating from '../rating';
import { Link } from 'react-router-dom';


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
      window.alert("This product is already added");
    }
  }
  return (
  <div className='seller'>
  <h1>Best Sellers</h1>
  <Swiper
        slidesPerView={1}
        spaceBetween={10}
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
      <Link  to={`/seller-detail/${seller.id}`}><img src={seller.imgUrlOne} alt="" /></Link>
      <Link  to={`/seller-detail/${seller.id}`}><img className='img-top' src={seller.imgUrlTwo} alt="" /></Link>
       <div className="seller-div">
        <p>{seller.brend}</p>
        <h3>{seller.name}</h3>
        <strong>€{seller.price}</strong> 
        <Rating rating={seller.rating}/>
        </div> 
        <button onClick={() => handleAddBasket(seller)}> {!addBasket.find((el) => el.id === seller.id)
                        ? "Add to Basket"
                        : "Added Already"}
         </button>
        </div>
        </SwiperSlide>
          </>
        })}
      </Swiper>
  </div>
  )
}

export default BestSellers