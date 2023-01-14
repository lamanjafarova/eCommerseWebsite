import React from 'react'
import Product1 from "../../../images/product_1.webp"

const ProductsFooter = () => {
  return (
    <div className='products-footer'>
        <ul>Sale Products
            <li>
                <img src={Product1} alt="" />
                <div className="text">
                    <h4>Comfortable Brown Scarf</h4>
                </div>
            </li>
        </ul>
        



    </div>
  )
}

export default ProductsFooter