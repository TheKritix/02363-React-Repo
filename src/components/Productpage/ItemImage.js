import React from "react";

export const ItemImage = ({book}) => {

  return (
    <img 
    crossOrigin="anonymous"
    src={book.Image}
    alt="bookimage"
    className="itemImage" 
    height='400px'
    ></img>
  )
}

export default ItemImage
