import React from 'react'
import "../footer/index.scss"

const Footer = () => {
  return (
    <div className='main_Footer'>
      <div className="topFooter">
        <div className="logo">
          <img src="https://cdn.shopify.com/s/files/1/0568/7902/2234/files/logo-footer.png?v=1635726957" alt="" />
        </div>
        <div className="text">
          <h4 className='text_h-4'>Subscribe to our Newsletter</h4>
          <p className='text_p'>Get all the latest information, Sales and Offers.</p>
        </div>
        <div className="inputEmail">
          <input className='footer_input' type="text" placeholder='Email address here...' />
          <button className='footer_btn'>Subscribe <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <div className="middleFooter">
          <ul className='ul_info'>Contact Info
            <li className='li_phone'>
              <label className='label_li_phone' htmlFor="">PHONE:</label>
              <a className='a_li_phone' href="(123) 456-7890"> Toll Free (123) 456-7890</a>
            </li>
            <li className='li_email'>
              <label className='label_li_email' htmlFor="">EMAIL:</label>
              <a className='a_li_email' href="mail@riode.com"> mail@riode.com</a>
            </li>
            <li className='li_address'>
            <label className='label_li_address' htmlFor="">ADDRESS:</label>
            <span className='span_li_address'> 123 Street Name, City, England</span>
            </li>
            <li className='li_day_hours'>
              <label htmlFor="">WORKING DAYS / HOURS:</label>
            </li>
            <li className='clock'>
              <span>Mon - Sun / 9:00 AM - 8:00 PM</span>
            </li>
          </ul>
          <ul className='ul_account'>My Account
          <li className='li_account'>
            <a href="#">About Us</a>
          </li>
          <li className='li_account'>
            <a href="#">Order History</a>
          </li>
          <li className='li_account'>
            <a href="#">Returns</a>
          </li>
          <li className='li_account'>
              <a href="#">Custom Service</a>
          </li>
          <li className='li_account'>
            <a href="#">Terms & Condition</a>
          </li>
          </ul>
          <ul className='ul_info_2'>Contact Info
          <li className='li_info_2'>
            <a href="#">Sign in</a>
          </li>
          <li className='li_info_2'>
            <a href="#">View Cart</a>
          </li>
          <li className='li_info_2'>
            <a href="#">My Wishlist</a>
          </li>
          <li className='li_info_2'>
            <a href="#">Track My Order</a>
          </li>
          <li className='li_info_2'>
            <a href="#">Help</a>
          </li>
          </ul>
          <div className="right_text">
            <p className='text_top'>Fringilla urna porttitor rhoncus dolor purus luctus venenatis lectus magna fringilla diam maecenas ultricies mi eget mauris.</p>
            <p className='text_bottom'>Riode@example.com</p>
          </div>
      </div>
      <div className="bottomFooter">
        <div className="span_text">
          <p>© 2023, 
          <a href="https://riode-demo-1.myshopify.com/">        Riode | Multi-Purpose Shopify Theme</a>
          <a href="https://www.shopify.com/?utm_campaign=poweredby&utm_medium=shopify&utm_source=onlinestore" target="_blank"> Powered by Shopify</a></p>
        </div>
        <div className="logo_footer">
        <i className="fa-brands fa-cc-amex"></i>
        <i className="fa-brands fa-apple-pay"></i>
        <i className="fa-brands fa-google-pay"></i>
        <i className="fa-brands fa-cc-mastercard"></i>
        <i className="fa-brands fa-amazon-pay"></i>
        <i className="fa-brands fa-cc-visa"></i>
        </div>
      </div>
    </div>
  )
}

export default Footer