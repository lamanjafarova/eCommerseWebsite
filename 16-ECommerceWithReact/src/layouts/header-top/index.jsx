import React from 'react'
import "../header-top/index.scss"

const HeaderTop = () => {
  return (
    <div className='top_header'>
        <div className="left">
            <p>Welcome to Riode store message or remove it!</p>
          <div className="selectBox">
          <select name="" id="">Eur
            <option value="eur">Eur</option>
            <option value="usd">USD</option>         
            <option value="vnd">VND</option>         
            </select>
            <select name="" id="">En
            <option value="en">EN</option>
            <option value="en">UR</option>
            </select>
          </div>
        </div>
        <div className="right">
          <p className='p_contact'>
          <i className="fa-solid fa-location-dot"></i>
          <a href="#">Contact</a>
          </p>
          <p className='p_help'>
          <i className="fa-solid fa-circle-info"></i>
          <a href="#">Need Help</a>
          </p>
          <div className="sign_in_register">
          <i className="fa-solid fa-user"></i>
          <span>Sign in</span>
          <span> / Register</span>
          </div>
        </div>
    </div>
  )
}

export default HeaderTop