import { Details } from "@mui/icons-material";
import React, { useState } from "react";
//import { BookItem } from './BookItem.js';
import Navbar from "../components/Navbar/Navbar";
import Topbar from "../components/Topbar/Topbar";


export const AddBook = () => {
  const [bookLib, setBookLib] = useState([
    {
      title: "",
      publisher: "",
      author: "",
      price: "",
      description: "",
      university: "",
      cond: "",
      course: "",
      lang: "",
      topic: "",
      image: ""
    },
  ])

  const [bookTest, setBookTest] = useState([
    {
      title: "",
      publisher: "",
      author: "",
      price: "",
      description: "",
      university: "",
      cond: "",
      course: "",
      lang: "",
      topic: "",
      image: ""
    },
  ])

  const findBookID = (arr, bookID) => {
    return arr.find((element) => {
      return element.book_Id === bookID;
    })
  }

  const handChaBookLib = (e) => {
    setBookLib({
      ...bookLib,
      [e.target.name]: e.target.value,
    });
  };


  const addBook = (e) => {
    e.preventDefault()
    const bookObject = {
      title: bookLib.title,
      author: bookLib.author,
      price: 123,
      publisher: "Test",
      description: "Test",
      university: "Test",
      cond: "Perfect",
      course: "Test",
      lang: "Test",
      topic: "Test",
      image: null,
    };
    setBookLib([...bookLib, bookObject])
    //setBookLib(bookLib.concat(bookObject))
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(bookLib.title, " ", bookLib.author);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'x-www-form-urlencoded' },
      body: JSON.stringify({
        title: bookLib.Title,
        publisher: bookLib.publisher,
        author: bookLib.Author,
        price: bookLib.price,
        description: bookLib.description,
        university: bookLib.university,
        cond: bookLib.cond,
        lang: bookLib.lang,
        topic: bookLib.topic,
        image: bookLib.image
      })
    };
    fetch('http://stoodle.bhsi.xyz:3000/api/books', requestOptions)
      .then(response => response.json())
      .then(data => setBookTest({ title: data.title }));
  };


  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <h1>Books</h1>
      <h2>Add book:</h2>
      <form className="AddBook" onSubmit={handleSubmit}>
        <div>
          <label id="bookTitle"> Title: </label>
          <input name="title" type="text" value={bookLib.title} onChange={handChaBookLib} />
          <label id="bookPub">Publisher: </label>
          <input id="bookPubInput" name="publisher" type="text" value={bookLib.publisher} onChange={handChaBookLib} />
          <label id="bookAuth"> Author: </label>
          <input name="author" type="text" value={bookLib.author} onChange={handChaBookLib} />
          <label id="bookPrice">Price: </label>
          <input id="bookPriceInput" name="price" type="number" value={bookLib.price} onChange={handChaBookLib} />
          <label id="bookDesc">Description: </label>
          <input id="descInput" name="description" type="text" value={bookLib.description} onChange={handChaBookLib} />
          <label id="bookUni">University: </label>
          <input id="bookUniInput" name="university" type="text" value={bookLib.university} onChange={handChaBookLib} />
          <label id="bookCon">Condition: </label>
          <select id="bookConInput" name="condition" type="text" value={bookLib.condition} onChange={handChaBookLib} >
            <option value="perfect">Perfect</option>
            <option value="great">Great</option>
            <option value="Poor">Poor</option>
          </select>
          <label id="bookLang">Language: </label>
          <select id="bookCourseInput" name="course" type="number" value={bookLib.course} onChange={handChaBookLib}>
            <option value="danish">Danish</option>
            <option value="english">English</option>
          </select>
          <label id="bookTopic">Topic: </label>
          <input id="bookTopicInput" name="topic" type="text" value={bookLib.topic} onChange={handChaBookLib} />
          <label id="bookImage">Image: </label>
          <input id="bookImageInput" name="image" type="image" value={bookLib.image} onChange={handChaBookLib} />
          <button id="bookSubmit" type="submit" >
            Submit
          </button>
          <div>
            {bookTest.map(book => {
              <Details key={book.id} p={book} />
            }
            )}
            <p>test</p>
          </div>
        </div>
      </form>
    </div>
  );
};
export default AddBook;
