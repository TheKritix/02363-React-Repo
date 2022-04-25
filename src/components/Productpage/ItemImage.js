import React from "react";

export const ItemImage = ({book}) => {

  return (
    <img 
    crossorigin="anonymous"
    src={book.Image}
    alt="bookimage"
    className="itemImage" 
    height='45%'
    width='45%'
    ></img>
  )
}

export default ItemImage
