import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Rating from '../rating'
import "./index.scss"
const ProductsFooter = () => {
  const [productsData, setproductsData] = useState([])
  useEffect(() => {
    axios.get("http://localhost:8080/products")
    .then((response) => setproductsData(response.data))
  }, [])
  return (
    <div className='products-footer'>
     <div className="sale-products">
      <ul>
        {productsData.map((element) => {
          return <li><img src={element.imgUrlOne} alt="" />
          <div className="text">
            <p>{element.name}</p>
            <p>{element.price}</p>
            <p><Rating rating={element.rating} /></p>
          </div>  
          </li>
        })}
      </ul>
     </div>
        



    </div>
  )
}

export default ProductsFooter