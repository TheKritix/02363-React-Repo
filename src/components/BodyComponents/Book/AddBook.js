import React, { useState } from "react";
//import { BookItem } from './BookItem.js';
import Navbar from "../../Navbar/Navbar";
import Topbar from "../../Topbar/Topbar";


export const AddBook = () => {
  const [bookLib, setBookLib] = useState([
    {
      Book_Id: 0,
      Title: "Physics 101",
      Publisher: "Waterloo",
      Author: "James Jameson",
      Price: "200 DKK",
      Description: "A great book for physics",
      University: "Starbucks",
      Cond: "Great",
      Course: "10020",
      Lang: "English",
      Topic: "Physics",
      Image: null,
    },
    {
      Book_Id: 1,
      Title: "Physics 102",
      Publisher: "NotAloo",
      Author: "John Johnson",
      Price: "200 DKK",
      Description: "A great book for physics",
      University: "Starbucks",
      Cond: "Great",
      Course: "10020",
      Lang: "English",
      Topic: "Physics",
      Image: null,
    }
  ])
  /*const [books, setBooks] = useState([
    {
      Book_Id: 0,
      Title: "Physics 101",
      Publisher: "Waterloo",
      Author: "James Jameson",
      Price: "200 DKK",
      Description: "A great book for physics",
      University: "Starbucks",
      Cond: "Great",
      Course: "10020",
      Lang: "English",
      Topic: "Physics",
      Image: null,
    },
    {
      Book_Id: 1,
      Title: "Physics 102",
      Publisher: "NotAloo",
      Author: "John Johnson",
      Price: "200 DKK",
      Description: "A great book for physics",
      University: "Starbucks",
      Cond: "Great",
      Course: "10020",
      Lang: "English",
      Topic: "Physics",
      Image: null,
    }
  ]);*/

  const findBookID = (arr, bookID) =>{
    return arr.find((element) => {
      return element.Book_Id === bookID;
    })
  }

  const handleChange = (e) => {
    setBookLib({
      ...bookLib,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.name)
  };

  const addBook = (e) => {
    e.preventDefault()
    console.log("What is this: ", bookLib.Title)
    const bookObject = {
      Book_Id: 2,
      Title: bookLib.Title,
      Author: bookLib.Author,
      Price: 123,
      Publisher: "Test",
      Description: "Test",
      University: "Test",
      Cond: "Perfect",
      Course: "Test",
      Lang: "Test",
      Topic: "Test",
      Image: null,
    };
    setBookLib((bookLib) => [...bookLib, bookObject])
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://stoodle.bhsi.xyz:3000/api/stoodle", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(...bookLib),
    }).then(function (response) {
      console.log(response);
      return response.json();
    });
  };

  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <h1>Books</h1>
      <h2>Add book:</h2>
      <form className="AddBook">
        <div>
          <label id="bookTitle"> Title: </label>
          <input
            name="Title"
            type="text"
            value={bookLib.Title}
            onChange={handleChange}
          />
           <label id="bookAuth"> Author: </label>
          <input
            name="Author"
            type="text"
            value={bookLib.Author}
            onChange={handleChange}
          />

          <button type="submit" onClick={addBook}>
            Submit {bookLib.Title}
          </button>
        </div>
      </form>
      <h2>Book list:</h2>
      <div>
      {bookLib.map((item)=>(
          <>
          <p key={item.id}> {item.Author}, {item.Title}</p>
          </>
        ))}
      </div>
    </div>
  );
};
/*
                {books.map((item) => (
                    <>
                        <p key={item.id}> {item.title}, {item.price}</p>
                    </>
                ))}
*/
export default AddBook;
