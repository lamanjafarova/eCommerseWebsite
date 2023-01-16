import React from 'react'
import "./index.scss"
import { Dropdown, Menu } from 'antd';
import { Link } from 'react-router-dom';
const DropDownMenu = () => {
  return (
      <div className='dropDown'>
      <Link to={"/"}><span>Home</span></Link>
    <Dropdown
          overlay={(
            <Menu>
           <div className="categories">
           <div className="categoriesOne">
            <Menu.Item key="0">
             <span>VARIATIONS 1</span>
              </Menu.Item>
              <Menu.Item key="1">
              Boxed Banner
              </Menu.Item>
              <Menu.Item key="2">
              Infinite Ajaxscroll
              </Menu.Item>
              <Menu.Item key="3">
              Horizontal Filter
              </Menu.Item>
              <Menu.Item key="4">
              Navigation Filter
              </Menu.Item>
              <Menu.Item key="5">
              Navigation Filter
              </Menu.Item>
              <Menu.Item key="6">
              Off-Canvas Filter
              </Menu.Item>
              <Menu.Item key="7">
              Right Toggle Sidebar
              </Menu.Item>   
            </div>
            <div className="categoriesTwo">
            <Menu.Item key="15">
             <span>VARIATIONS 2</span>
              </Menu.Item>
            <Menu.Item key="8">
               3 Columns Mode
              </Menu.Item>
              <Menu.Item key="9">
              4 Columns Mode
              </Menu.Item>
              <Menu.Item key="10">
              5 Columns Mode
              </Menu.Item>
              <Menu.Item key="11">
              6 Columns Mode
              </Menu.Item>
              <Menu.Item key="12">
              7 Columns Mode
              </Menu.Item>
              <Menu.Item key="13">
              8 Columns Mode
              </Menu.Item>
              <Menu.Item key="14">
              List Mode
              </Menu.Item>  
            </div>
           </div>       
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Categories<i className="fa-solid fa-angle-down"></i>
          </a>
        </Dropdown>
    
        <Dropdown
          overlay={(
            <Menu>
              <div className="products">
                <div className="products-one">
                <Menu.Item key="0">
                <p>PRODUCTS PAGES</p>
              </Menu.Item>
              <Menu.Item key="1">
              Simple Product
              </Menu.Item>
              <Menu.Item key="1">
              On Sale Product
              </Menu.Item>
              <Menu.Item key="1">
              Variable Product
              </Menu.Item>
              <Menu.Item key="1">
              Variation Swatch Product
              </Menu.Item>
              <Menu.Item key="1">
              Grouped Product
              </Menu.Item>
              <Menu.Item key="1">
              External Product
              </Menu.Item>
              <Menu.Item key="1">
              Out Of Stock Product
              </Menu.Item>
              <Menu.Item key="1">
              Upsell Products
              </Menu.Item>
              <Menu.Item key="1">
              Cross Sell Products
              </Menu.Item>
                </div>
                <div className="products-two">
                <Menu.Item key="0">
                <p>PRODUCTS LAYOUTS</p>
              </Menu.Item>
              <Menu.Item key="1">
              Vertical Thumb
              </Menu.Item>
              <Menu.Item key="1">
              Horizontal Thumb
              </Menu.Item>
              <Menu.Item key="1">
              Gallery Type
              </Menu.Item>
              <Menu.Item key="1">
              Grid Images
              </Menu.Item>
              <Menu.Item key="1">
              Masonry Images
              </Menu.Item>
              <Menu.Item key="1">
              Sticky Info
              </Menu.Item>
              <Menu.Item key="1">
              Left & Right Sticky
              </Menu.Item>
              <Menu.Item key="1">
              With Left Sidebar
              </Menu.Item>
              <Menu.Item key="1">
              With Right Sidebar
              </Menu.Item>
                </div>
                <div className="products-three">
                <Menu.Item key="0">
                <p>PRODUCTS FEATURED</p>
              </Menu.Item>
              <Menu.Item key="1">
              Sale Countdown
              </Menu.Item>
              <Menu.Item key="1">
              Hurry Up Notification
              </Menu.Item>
              <Menu.Item key="1">
              Attribute Guide
              </Menu.Item>
              <Menu.Item key="1">
              Add Cart Sticky
              </Menu.Item>
              <Menu.Item key="1">
              Labels On Thumbnail
              </Menu.Item>
              <Menu.Item key="1">
              More Description Tabs
              </Menu.Item>
              <Menu.Item key="1">
              Data In Accordion
              </Menu.Item>
              <Menu.Item key="1">
              Data Inside
              </Menu.Item>
              <Menu.Item key="1">
              Video Thumbnail
              </Menu.Item>
                </div>
              </div>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Products<i className="fa-solid fa-angle-down"></i>
          </a>
        </Dropdown>
        <Dropdown
          overlay={(
            <Menu>
             <div className="pages">
             <Menu.Item key="0">
                About Us
              </Menu.Item>
              <Menu.Item key="1">
              Contact Us
              </Menu.Item>
              <Menu.Item key="1">
              My Account
              </Menu.Item>
              <Menu.Item key="1">
              FAQs
              </Menu.Item>
              <Menu.Item key="1">
              Error 404
              </Menu.Item>
              <Menu.Item key="1">
              Cooming Soon
              </Menu.Item>
             </div>
            </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Pages<i className="fa-solid fa-angle-down"></i>
          </a>
        </Dropdown>
        <Dropdown
          overlay={(
            <Menu>
            <div className="blog">
            <Menu.Item key="0">
                Classic
            </Menu.Item>
            <Menu.Item key="1">
                 Listing
            </Menu.Item>
            <Menu.Item key="1">
                Grid
            </Menu.Item>
            <Menu.Item key="1">
                Masonry
            </Menu.Item>
            <Menu.Item key="1">
                Mask
            </Menu.Item>
            <Menu.Item key="1">
            Single post
            </Menu.Item>
        </div>
    </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Blog<i className="fa-solid fa-angle-down"></i>
          </a>
        </Dropdown>
        <Dropdown
          overlay={(
            <Menu>
            <div className="elements">
            <Menu.Item key="0">
            Products
            </Menu.Item>
            <Menu.Item key="1">
            Typography
            </Menu.Item>
            <Menu.Item key="1">
            Titles
            </Menu.Item>
            <Menu.Item key="1">
            Product Category
            </Menu.Item>
            <Menu.Item key="1">
            Buttons
            </Menu.Item>
            <Menu.Item key="1">
            Accordions
            </Menu.Item>
            <Menu.Item key="1">
            Alert & Notification
            </Menu.Item>
            <Menu.Item key="1">
            Tabs
            </Menu.Item>
            <Menu.Item key="1">
            Testimonials
            </Menu.Item>
            <Menu.Item key="1">
            Blog Posts
            </Menu.Item>
            <Menu.Item key="1">
            Instagrams
            </Menu.Item>
            <Menu.Item key="1">
            Call to Action
            </Menu.Item>
            <Menu.Item key="1">
            Icon Boxes
            </Menu.Item>
            <Menu.Item key="1">
            Icons
            </Menu.Item>

        </div>
    </Menu>
          )}
          trigger={['hover']}>
          <a className="ant-dropdown-link" 
             onClick={e => e.preventDefault()}>
            Elements<i className="fa-solid fa-angle-down"></i>
          </a>
        </Dropdown>
    <Link><span>About Us</span></Link>
     <div className="text">
        <span><i className="fa-solid fa-tag"></i> Special Offers</span>
        <span>Buy Riode!</span>
     </div>
  </div>
 
  

  )
}

export default DropDownMenu