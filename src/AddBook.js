import "./App.css";

import React, { useState } from "react";
import Book from "./components/book";

const AddBook = () => {
  const [books, setBooks] = useState([
    {
      title: "Physics 101",
      publisher: "Waterloo",
      price: 200,
      university: "Starbucks",
      cond: "Great",
      course: "10020",
      lang: "English",
      topic: "Physics",
      image: "",
      description: "A great book for physics",
    },
  ]);

  const handleChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
    });
  };

  const addBook = (e) => {
    e.preventDefault();
    const bookObject = {
      title: books.title,
      publisher: books.publisher,
      price: books.price,
      university: books.university,
      cond: books.cond,
      course: books.course,
      lang: books.lang,
      topic: books.topic,
      image: books.image,
      description: books.description,
    };
    console.log(bookObject)
    fetch('http://stoodle.bhsi.xyz:3000/api/books',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
        },
        body: bookObject
    })
    // setBooks(bookObject.join("&"));
    // console.log(books)
    // setBooks({
    //   ...books,
    //   [e.target.name]: "",
    // });
  };



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
        </label>{" "}
        <br />
        <label>
          Publisher:{" "}
          <input
            type="text"
            name="publisher"
            value={books.publisher}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          Price:{}
          <input
            type="number"
            name="price"
            value={books.price}
            onChange={handleChange}
          />
        </label>{}
        <br />
        <label>
          University:{" "}
          <input
            type="text"
            name="uniName"
            value={books.university}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          cond:{" "}
          <input
            type="text"
            name="condition"
            value={books.cond}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          course:{" "}
          <input
            type="number"
            name="course"
            value={books.course}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          lang:{" "}
          <input
            type="text"
            name="language"
            value={books.lang}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          topic:{" "}
          <input
            type="text"
            name="topic"
            value={books.topic}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
        <label>
          image:{" "}
          <input
            type="text"
            name="image"
            value={books.image}
            onChange={handleChange}
          />
        </label>{" "}
        <br />
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
        <button type="submit" onClick={addBook}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default AddBook;
