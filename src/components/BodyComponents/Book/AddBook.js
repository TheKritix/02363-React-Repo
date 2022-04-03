import React, { useState } from 'react'
//import { BookItem } from './BookItem.js';
import Navbar from '../../Navbar/Navbar';
import Topbar from '../../Topbar/Topbar';


export const AddBook = () => {

    const [books, setBooks] = useState([{
        id: 0,
        title: 'Physics 101',
        publisher: 'Waterloo',
        price: '200 DKK',
        university_name: 'Starbucks',
        condition: 'Great',
        course: '10020',
        language: 'English',
        topic: 'Physics',
        image: '',
        description: "A great book for physics"
    }
    ])

    const handleChange = (e) => {
        setBooks({
            ...books,
            [e.target.name]: e.target.value,
        })
    }

    const addBook = (e) => {
        console.log("new value", e.target.value);
        e.preventDefault()
        const bookObject = {
            id: 1,
            title: books.title,
            publisher: books.publisher,
            price: books.price,
            university: books.university,
            condition: books.condition,
            course: books.course,
            language: books.language,
            topic: books.topic,
            image: books.image,
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
            <Topbar></Topbar>
            <Navbar></Navbar>
            <h1>Books</h1>
            <h2>Add book:</h2>
            <div className="AddBook">
                <p id="bookTitle">Title: </p>
                <input id="bookTitleInput" name="title" type="text" value={"test"} onChange={handleChange} />
                <p id="bookDesc">Description: </p>
                <input id="descInput" name="description" type="text" value={books.description} onChange={handleChange} />
                <p id="bookPrice">Price: </p>
                <input id="bookPriceInput" name="price" type="number" value={books.price} onChange={handleChange} />
                <p id="bookCon">Condition: </p>
                <select id="bookConInput" name="condition" type="text" value={books.condition} onChange={handleChange} >
                    <option value="perfect">Perfect</option>
                    <option value="great">Great</option>
                    <option value="Poor">Poor</option>
                </select>
                <p id="bookUni">University: </p>
                <input id="bookUniInput" name="university" type="text" value={books.university} onChange={handleChange} />
                <p id="bookCourse">Course number: </p>
                <input id="bookCourseInput" name="course" type="number" value={books.course} onChange={handleChange} />
                <p id="bookTopic">Topic: </p>
                <input id="bookTopicInput" name="topic" type="text" value={books.topic} onChange={handleChange} />
                <p id="bookPub">Publisher: </p>
                <input id="bookPubInput" name="publisher" type="text" value={books.publisher} onChange={handleChange} />
                <p id="bookImage">Image: </p>
                <input id="bookImageInput" name="image" type="image" value={books.image} onChange={handleChange} />
            </div>
            <h2>Book list:</h2>
            <div>

            </div>

            <div>
                <button type="submit" onClick={addBook}>Submit</button>
            </div>
        </div>
    )
}
/*
                {books.map((item) => (
                    <>
                        <p key={item.id}> {item.title}, {item.price}</p>
                    </>
                ))}
*/
export default AddBook
