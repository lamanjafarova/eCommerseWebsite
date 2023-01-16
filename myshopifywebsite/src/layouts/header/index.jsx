import React from 'react'
import "../header/index.scss"
import logoheader from  "../../images/logoheader.svg"
import { Link, NavLink } from 'react-router-dom'
import ScrollToTop from 'react-scroll-to-top'
import DropDownMenu from '../../homepage/components/dropdown'
import Offcanvas from '../../homepage/components/offcanvas'

const Header = ({count, addBasket, setAddBasket }) => {
  const renderTotal = () => {
    let total = 0;
    addBasket.map(element => {
      total+= +element.price;
    })
    return total
  }
  return (
   <nav>
     <div className='header'>
      <div className="logo_header">
       <NavLink to={"/"}> <img src={logoheader} alt="" /></NavLink>
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
             {/* <p>Shopping Cart:</p> */}
              <span>Total: €{renderTotal()}</span>
             {/* <span>Product:{addBasket.length}</span> */}
             </div>
             {/* <span><i className="fa-solid fa-bag-shopping"></i></span> */}
             <Offcanvas  addBasket={addBasket} setAddBasket={setAddBasket}/>
          </div>
        </div>
        </div>
        <DropDownMenu />
        <ScrollToTop smooth />
   </nav>


  )
}

export default Header