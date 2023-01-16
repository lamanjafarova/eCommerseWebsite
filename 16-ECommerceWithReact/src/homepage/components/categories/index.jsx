import React from 'react'
import "./index.scss"
const OurCategories = () => {
  return (
   <>
   <h1>Our Categories</h1>
    <div className='our_categories'>
        <div className="for_men">
            <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/category1.jpg?v=1634142528&width=240" alt="" />
            <div className="for_men_btn">
            <a href="https://riode-demo-1.myshopify.com/"><button>For Men's</button></a>
            </div>
        </div>
        <div className="accessories">
            <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/category2.jpg?v=1634142541&width=240" alt="" />
            <div className="accessories_btn">
            <a href="https://riode-demo-1.myshopify.com/"><button>Accessories</button></a>
            </div>
        </div>
        <div className="fashionable">
            <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/category3.jpg?v=1634142541&width=240" alt="" />
            <div className="fashionable_btn">
            <a href="https://riode-demo-1.myshopify.com/"><button>Fashionable</button></a>
            </div>
        </div>
        <div className="cosmetic">
            <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/category4.jpg?v=1634142541&width=240" alt="" />
            <div className="cosmetic_btn">
            <a href="https://riode-demo-1.myshopify.com/"><button>Cosmetic</button></a>
            </div>
        </div>

    </div>
   </>
  )
}

export default OurCategories