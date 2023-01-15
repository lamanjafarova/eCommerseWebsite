import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SellerDetail = () => {
    const [sellerdData, setsellerdData] = useState([])
    useEffect(() => {
      axios.get(`http://localhost:8080/sellers/${id}`)
      .then((response) => setsellerdData(response.data))
    }, [])
      const { id } = useParams();
    return (
      
      <div className='container'>
        <div className="details">
        <div className="images">
          <img src={sellerdData.imgUrlOne} alt="" />
        </div>
        <div className="info">
          <h5>{sellerdData.name}</h5>
          <p className='name'>Vendor: {sellerdData.brend}</p>
          <p className='price'>€{sellerdData.price}</p>
          <p className='about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum quas facere, repellat velit laudantium molestias ipsa, sequi vero illo, quos nisi obcaecati! Ab rerum libero tempora quis architecto? Vel?</p>
          <button><i className="fa-solid fa-cart-shopping"></i> Add To Cart</button>
          <div className="icon">
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest-p"></i>
          <i className="fa-regular fa-heart"></i>
          <span>Add To Wishlist</span>
          <i className="fa-solid fa-scale-balanced"></i>
          <span>Add To Compare</span>
          </div>
        </div>
        </div>
      </div>
    )
}

export default SellerDetail