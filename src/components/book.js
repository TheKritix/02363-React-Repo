import React from 'react'


export const Book = ({bookFilter}) => {
  return bookFilter.maps((bookItem) => (
    <p key={bookItem.id}>

    </p>
  )
  )
}


export default Book

