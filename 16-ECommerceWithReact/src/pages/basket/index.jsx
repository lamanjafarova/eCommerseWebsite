import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import "./index.scss"

const ShoppingBasket = ({ addBasket, setAddBasket}) => {
  const handleRemove = (id) => {
    let newBasket = addBasket.filter((el) => el.id !== id);
    setAddBasket(newBasket);
  }
  return (
    <div>
      <div className="container">
        <div className="basket">
          <div className="basket-items">
            <div className="my-cart">
              <p>My Cart:</p>
            </div>
            {addBasket.map((el) => {
              return (
                <>
                  <div className="main-info">
                    <div className="img">
                        <img src={el.imgUrlOne} alt="" />
                    </div>
                    <div className="info">
                      <p> {el.name}</p>
                      <p> €{el.price}</p>
                    </div>
                    <button
                      className="removeBtn"
                      onClick={() => handleRemove(el.id)}
                    >
                      Remove from basket
                    </button>
                    <p className="price-per-unit">€{el.price}</p>
                  </div>
                </>
              );
            })}
            <div className="link">
              <NavLink to={"/"}> Continue shopping </NavLink>
            </div>
          </div>
        </div>
      </div>
  
    </div>
  )
}

export default ShoppingBasket