import React from "react";

export const ItemImage = ({item}) => {

  return (
    <img 
    src={item.imageUrl}
    className="itemImage" 
    height='50%'
    width='50%'
    ></img>
  )
}

export default ItemImage