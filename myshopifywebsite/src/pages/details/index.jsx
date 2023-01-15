import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import "./index.scss"

const ProductsDeatil = ({addBasket, setAddBasket, count, setCount }) => {
    const [featuredData, setFeaturedData] = useState([])
  useEffect(() => {
    axios.get(`http://localhost:8080/featured/${id}`)
    .then((response) => setFeaturedData(response.data))
  }, [])
    const { id } = useParams();
    const handleAddBasket = (obj) => {
      if (!addBasket.find((el) => el.id === obj.id)) {
        setAddBasket([...addBasket, obj]);
        setCount(count + 1);
      } else {
        alert("This product is already added");
      }
    }
  return (
    
    <div className='container'>
      <div className="details">
      <div className="images">
        <img src={featuredData.imgUrlOne} alt="" />
      </div>
      <div className="info">
        <h5>{featuredData.name}</h5>
        <p className='name'>Vendor: {featuredData.brend}</p>
        <p className='price'>€{featuredData.price}</p>
        <p className='about'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ex cum quas facere, repellat velit laudantium molestias ipsa, sequi vero illo, quos nisi obcaecati! Ab rerum libero tempora quis architecto? Vel?</p>
        <button onClick={() => handleAddBasket(featuredData)}><i className="fa-solid fa-cart-shopping"></i>  {!addBasket.find((el) => el.id === featuredData.id)
                        ? "Add to Cart"
                        : "Added Already"}</button>
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

export default ProductsDeatil