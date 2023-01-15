import React from 'react'
import "./index.scss"

const ShoppingBasket = ({ addBasket, setAddBasket }) => {
  const handleRemove = (id) => {
    let newBasket = addBasket.filter((el) => el.id !== id);
    setAddBasket(newBasket);
  }
  return (
    <div>
        {addBasket.map((element) => {
            return <div className="main">
              <img src={element.imgUrlOne} alt="" />
              <div className="main-text">
                <p>{element.brend}</p>
                <p>{element.price}</p>
                <button onClick={() => handleRemove(element.id)}>Remove from basket</button>
              </div>
            </div>
        })}
    </div>
  )
}

export default ShoppingBasket