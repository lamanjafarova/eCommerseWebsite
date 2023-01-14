import React from 'react'

const ShoppingBasket = ({ addBasket, setAddBasket }) => {
  return (
    <div>
        {addBasket.map((element) => {
            return <p>{element.name}</p>
        })}
    </div>
  )
}

export default ShoppingBasket