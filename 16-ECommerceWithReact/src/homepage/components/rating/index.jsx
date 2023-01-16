import React from 'react'
import "./index.scss"

const Rating = ({rating}) => {
    const renderOrangeStars = () => {
       return Array(rating).fill().map((elem) => {
            return  <div className="icon"><i className="fa-solid color-orange fa-star"></i></div>
        })
    }
    const renderGreyStars = () => {
      return ( Array(5 - rating).fill().map((elem) => {
            return   <div className="icon"><i className="fa-solid color-grey fa-star"></i></div>
        }))
    }
  return (
    <div className="rating">
       {renderOrangeStars()}
       {renderGreyStars()} 
  </div>
  )
}

export default Rating