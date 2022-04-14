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

  const handChaBookLib = (e) => {
    setBookLib({
      ...bookLib,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    const bookObject = {
      body: {
        title: bookLib.title,
        publisher: bookLib.publisher,
        author: bookLib.author,
        price: bookLib.price,
        description: bookLib.description,
        university: bookLib.university,
        cond: bookLib.cond,
        lang: bookLib.lang,
        topic: bookLib.topic,
        image: bookLib.image
      }
    };
    console.log(bookObject)
    fetch('http://stoodle.bhsi.xyz:3000/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
      },
      body: JSON.stringify(bookObject)
    }).then(response => response.json())
    .then(result => {
      console.log("Success: ", result);
    }).catch(error => {
      console.log("Error: ", error);
    });
  }

  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <h1>Books</h1>
      <h2>Add book:</h2>
      <form className="AddBook" onSubmit={addBook}>
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
          <select id="bookConInput" name="cond" type="text" value={bookLib.cond} onChange={handChaBookLib} >
            <option value="select">Select condition</option>
            <option value="perfect">Perfect</option>
            <option value="great">Great</option>
            <option value="poor">Poor</option>
          </select>
          <label id="bookLang">Language: </label>
          <select id="bookLangInput" name="lang" type="number" value={bookLib.lang} onChange={handChaBookLib}>
            <option value="select">Select language</option>
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
        </div>
      </form>
    </div>
  );
};
export default AddBook;
