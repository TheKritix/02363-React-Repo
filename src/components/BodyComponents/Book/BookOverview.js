import React from 'react';
import Book from './Book';
import { BookItem } from './BookItem.js';
import './BookOverview.css'
import { useState } from 'react'
import { Grid } from '@mui/material';

export const BookOverview = () => {

    const [search, setSearch] = useState('')
    const [title, setTitle] = useState('')

    return (
        <div>
            <div className="SideMenu">
                <p id="search">Search: </p>
                <input value={search} onChange={(e) => setSearch(e.target.value)} />
                <p id="title">Title: </p>
                <input value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className = "gridBox">
            <Grid
                margin={2}
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
            >
                {BookItem.map((item, index) => {
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