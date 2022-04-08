import React from "react";

export const ItemImage = ({item}) => {

  return (
    <img 
    src={item.imageUrl}
    className="itemImage" 
    height='560px'
    width='70%'
    ></img>
  )
}

export default ItemImage