import React from 'react';
import './Book.css'

export const Book = ({ item }) => {
  return (
    <div className='ItemBox'>
      <img id='bookImage' src={item.imageUrl} alt="Logo" />
      <p id='id'>{item.id}</p>
      <p id='bookTitle'>{item.title}</p>
      <p id='price'>{item.price}</p>
      <p id='city'>{item.city}</p>
      <p id='language'>{item.language}</p>
      <p id='course'>{item.course}</p>
      <p id='condition'>{item.condition}</p>
      <p id='topic'>{item.topic}</p>
      <p id='publisher'>{item.publisher}</p>
      <p id='description'>{item.description}</p>
    </div>
  )
}
export default Book

