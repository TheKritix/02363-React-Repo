import './App.css';

import React, { useState } from 'react'
import Book from "./components/book"

const AddBook = () => {

    const [books, setBooks] = useState([{
        id: 1,
        title: 'Physics 101',
        publisher: 'Waterloo',
        price: '200 DKK',
        University_name: 'Starbucks',
        Condition: 'Great',
        Course: '10020',
        Language: 'English',
        Topic: 'Physics',
        Image: '',
        description: "A great book for physics"
    }
    ])

    const handleChange = e => {
        setBooks({
            ...books,
            [e.target.name]: e.target.value,
        })
    }

    const addBook = (e) => {
        e.preventDefault()
        const bookObject = {
        id: 2,
        title: books.title,
        publisher: books.publisher,
        price: books.price,
        University_name: books.University_name,
        Condition: books.Condition,
        Course: books.Course,
        Language: books.Language,
        Topic: books.Topic,
        Image: books.Image,
        description: books.description
        }
        setBooks(books.concat(bookObject))
        setBooks({
            ...books,
            [e.target.name]: "",
        })

    }


    return (
        <div>
            <h1>Books</h1>
            <h2>Add books:</h2>
            <form>
                <label>
                    Book Title:{" "}
                    <input
                        type="text"
                        name="title"
                        value={books.title}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Publisher: {" "}
                    <input
                        type="text"
                        name="publisher"
                        value={books.publisher}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Price:{" "}
                    <input
                        type="number"
                        name="price"
                        value={books.price}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    University:{" "}
                    <input
                        type="text"
                        name="uniName"
                        value={books.University_name}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Condition:{" "}
                    <input
                        type="text"
                        name="condition"
                        value={books.Condition}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Course:{" "}
                    <input
                        type="number"
                        name="course"
                        value={books.Course}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Language:{" "}
                    <input
                        type="text"
                        name="language"
                        value={books.Language}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Topic:{" "}
                    <input
                        type="text"
                        name="topic"
                        value={books.Topic}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Image:{" "}
                    <input
                        type="text"
                        name="Image"
                        value={books.Image}
                        onChange={handleChange}
                    />
                </label> <br/>
                <label>
                    Description:{" "}
                    <input
                        type="text"
                        name="desc"
                        value={books.description}
                        onChange={handleChange}
                    />
                </label>
            </form>
            <h2>Book list:</h2>
            
            <div>
                <button type="submit" onClick={addBook} >Submit</button>
            </div>
        </div>
    )
}
/*
{books.map((item) => (
                <>
                    <p key={item.id}> <b>Title:</b> {item.title}, <b>Topic:</b> {item.Topic} </p>
                </>
            ))}
*/
export default AddBook
