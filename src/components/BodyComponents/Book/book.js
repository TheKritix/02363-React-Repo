import React from 'react';
import './Book.css'
import { BookItem } from './BookItem.js';
import Card from '@mui/material/Card';



export const Book = () => {
  return (
    <div>
      {BookItem.map((item, index) => {
        return (
          <div className='BookItem'>
            <div className='ItemBox'>
              <img id='bookImage' src={item.imageUrl} alt="Logo" />
              <p id='bookTitle'>{item.title}</p>
              <p id='price'>{item.price}</p>
              <p id='city'>{item.city}</p>
            </div>
          </div>
        )
      })}
      </div>
  )
}


export default Book

