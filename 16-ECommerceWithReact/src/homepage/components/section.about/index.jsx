import React from 'react'
import ForMens from "../../../images/formens.png"
import BlackFriday from "../../../images/blackfriday.png"
import Fashion from "../../../images/fashionable.png"
import "../section.about/index.scss"

const SectionInformation = () => {
  return (
    <div className='about_section'>
        <div className="for_mens">
        <img src={ForMens} alt="" />
        <div className="text_for_mens">
            <h3>For Men's</h3>
            <p>STARTING AT 29$</p>
            <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
        <div className="black_friday">
        <img src={BlackFriday} alt="" />
        <div className="text_black_friday">
            <h5>Up to 20% Off</h5>
            <h1>Black Friday Sale</h1>
            <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
        <div className="fashion">
        <img src={Fashion} alt="" />
        <div className="text_fashion">
            <h3>Fashions</h3>
            <p>30% OFF</p>
            <button>Shop Now <i className="fa-solid fa-arrow-right"></i></button>
        </div>
        </div>
    </div>
  )
}

export default SectionInformation