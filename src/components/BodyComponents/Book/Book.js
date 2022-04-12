import React from "react";
import "./Book.css";
import ButtonBase from '@mui/material/ButtonBase';

export const Book = ({ item }) => {
  return (
    <ButtonBase href={`/productpage/${item.bookId}`}>
      <div className="ItemBox">
        <img id="bookImage" src={item.imageUrl} alt="Logo" />
        <p id="bookTitle">{item.title}</p>
        <p id="price">{item.price}</p>
        <p id="city">{item.city}</p>
      </div>
    </ButtonBase>
  );
};
export default Book;
