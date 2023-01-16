import React from 'react'
import BackGroundImg from "../../../images/background-image.webp"
import "../section.background/index.scss"

const SectionBackground = () => {
  return (
    <div className='main_section'>
        <img src={BackGroundImg} alt="" />
        <div className="background_section_text">
            <p className='extra'>Extra 30 Off Online</p>
            <h1 className='summer'>SUMMER SEASON SALE</h1>
            <p className='free'>Free shipping on orders over 99$</p>
            <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
        </div>

    </div>
  )
}

export default SectionBackground