import React from 'react';
import Book from './Book';
import { BookItem } from './BookItem.js';
import './BookOverview.css'
import { useState } from 'react'
import { Grid } from '@mui/material';

export const BookOverview = () => {

    const [priceMin, setPriceMin] = useState('0 BROKEN')
    const [priceMax, setPriceMax] = useState('1000 BROKEN')
    const [title, setTitle] = useState('')
    //const [university, setUniversity] = useState('')
    const [author, setAuthor] = useState('')
    const [year, setYear] = useState('')

    console.log(Number(priceMax))

    return (
        <div>
            <div className="SideMenu">
                <p id="priceMin">Min. price: </p>
                <input value={priceMin} onChange={(e) => setPriceMin(e.target.value)} />
                <p id="priceMax">Max. price: </p>
                <input value={priceMax} onChange={(e) => setPriceMax(e.target.value)} />
                <p id="title">Title: </p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
                {/* <p id="university">University: </p>
                <input value={university} onChange={(e) => setUniversity(e.target.value)} /> */}
                <p id="author">Author: </p>
                <input value={author} onChange={(e) => setAuthor(e.target.value)} />
                <p id="year">Year: </p>
                <input value={year} onChange={(e) => setYear(e.target.value)} />
            </div>
            <div className="gridBox">
                <Grid
                    margin={2}
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    {BookItem.filter(element =>{
                     return element.title.includes(title) 
                     && element.author.includes(author)
                     /*&& Number(element.price) <= priceMin*/
                     && element.year.includes(year);
                        
                    }).map((item, index) => {
                        return (
                            <div className='indiGrid'>
                                <Grid container item xs={12} sm={3} md={12} key={index}>
                                    <Book className="Book" item={item} />
                                </Grid>
                            </div>
                        )
                    })}
                </Grid>
            </div>
        </div>
    )
}

export default BookOverview