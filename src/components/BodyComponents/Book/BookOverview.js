import React from 'react';
import Book from './Book';
import { BookItem } from './BookItem.js';
import './BookOverview.css'
import { useState } from 'react'

export const BookOverview = () => {

    const [search, setSearch] = useState('')
    const [title, setTitle] = useState('')

    return (
        <div>
            <div className="BookItem">
                <div className="invisBox">
                    <div className="SideMenu">
                        <p id="search">Search: </p>
                        <input value={search} onChange={(e) => setSearch(e.target.value)} />
                        <p id="title">Title: </p>
                        <input value={title} onChange={(e) => setTitle(e.target.value)} />
                    </div>
                </div>
                {BookItem.map((item, index) => {
                    return (
                        <div className="ItemBox">
                            <div>
                                <Book className="Book" item={item} />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default BookOverview