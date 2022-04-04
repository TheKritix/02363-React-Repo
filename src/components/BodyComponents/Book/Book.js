import React from "react";
import "./Book.css";

export const Book = ({ item }) => {
  return (
    <div className="ItemBox">
      <img id="bookImage" src={item.imageUrl} alt="Logo" />
      <p id="bookTitle">{item.title}</p>
      <p id="price">{item.price}</p>
      <p id="city">{item.city}</p>
    </div>
  );
};
export default Book;
