import React from 'react'
import "../header/index.scss"
import logoheader from  "../../images/logoheader.svg"

const Header = () => {
  return (
   <nav>
     <div className='header'>
      <div className="logo_header">
        <img src={logoheader} alt="" />
        </div> 
        <div className="header_input">
          <input className='search_input' type="text" placeholder='Search in...'/>
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div className="basket">
          <div className="phone">  
          <div><i className="fa-solid fa-phone"></i></div>
          <div className="phone_help">
          <p>Need Help?</p>
          <strong>0(800) 123-456</strong>
          </div>
          </div>
          <div className="heart">
          <a href="#">
          <i className="fa-regular fa-heart"></i>
          </a>
          </div>
          <div className="shopping_cart">
             <div className='cart_text'>
             <p>Shopping Cart:</p>
              <strong>€0,00</strong>
             </div>
             <div><i className="fa-solid fa-bag-shopping"></i></div>
          </div>
        </div>





        </div>
   </nav>


  )
}

export default Header