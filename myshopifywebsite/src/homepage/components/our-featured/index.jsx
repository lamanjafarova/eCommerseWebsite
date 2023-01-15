import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import "./index.scss"
import axios from 'axios';
import Rating from '../rating';
import { Link } from 'react-router-dom';
const OurFeatured = ({ addBasket, setAddBasket, count, setCount }) => {
  const [featuredData, setFeaturedData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/featured")
    .then((response) => setFeaturedData(response.data))
  }, [])
  const handleAddBasket = (obj) => {
    if (!addBasket.find((el) => el.id === obj.id)) {
      setAddBasket([...addBasket, obj]);
      setCount(count + 1);
    } else {
      alert("This product is already added");
    }
  }
  return (
    <div className='feauted'>
    <h1>Our Featured</h1>
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
          modules={[ Pagination]}
          className="mySwiper"
        >
          {featuredData.map((featured) => {
            return <>
         
         <SwiperSlide>
              <div className="featured-our">
               <Link to={`/featured-detail/${featured.id}`}><img src={featured.imgUrlOne} alt="" /></Link>
               <Link  to={`/featured-detail/${featured.id}`}><img className='img-top' src={featured.imgUrlTwo} alt="" /></Link>
                <div className="featured-text">
                <p>{featured.brend}</p>
                <h3>{featured.name}</h3>
                <strong>€{featured.price}</strong> 
                <Rating rating={featured.rating}/>
                </div>
                <button onClick={() => handleAddBasket(featured)}> {!addBasket.find((el) => el.id === featured.id)
                        ? "Add to Basket"
                        : "Added Already"}</button>
              </div>
              </SwiperSlide>
            </>
          })}
    
        </Swiper>
    </div>
  )
}

export default OurFeatured