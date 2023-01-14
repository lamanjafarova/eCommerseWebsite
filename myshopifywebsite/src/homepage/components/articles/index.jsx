import React from 'react'
import ArticlesImg1 from "../../../images/articles1.png";
import ArticlesImg2 from "../../../images/articles2.png";
import ArticlesImg3 from "../../../images/articles3.png";
import "./index.scss"

const FeaturedArticles = () => {
  return (
    <div className='container'>
        <h1>Featured Articles</h1>
        <div className="articles">
            <div className="new-fashion-style">
                <img src={ArticlesImg1} alt="" />
                <div className="month">
                    <p>27</p>
                    <p>Feb</p>
                </div>
                <a href="#"><h2>New Fashion Style</h2></a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                <button>Read more <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="discount-bags-shoes">
                <img src={ArticlesImg2} alt="" />
                <div className="month2">
                    <p>27</p>
                    <p>Feb</p>
                </div>
                <a href="#"><h2>30% Discount for Shoes & Bags</h2></a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                <button>Read more <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className="cyber-week">
                <img src={ArticlesImg3} alt="" />
                <div className="month3">
                    <p>27</p>
                    <p>Feb</p>
                </div>
               <a href="#"> <h2>20% Off Coupon for Cyber Week</h2></a>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting...</p>
                <button>Read more <i className="fa-solid fa-arrow-right"></i></button>
            </div>
        </div>
        


    </div>
  )
}

export default FeaturedArticles