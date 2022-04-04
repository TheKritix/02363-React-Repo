import { useState } from "react";
//import { BookItem } from './BookItem.js';
import Navbar from "../../Navbar/Navbar";
import Topbar from "../../Topbar/Topbar";

export const AddBook = () => {
  const [books, setBooks] = useState([
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
    },
  ]);

  const handleChange = (e) => {
    setBooks({
      ...books,
      [e.target.name]: e.target.value,
    });
    
  };

  const addBook = (e) => {
    console.log("new value", e.target.value);
    e.preventDefault();
    const bookObject = {
      Book_Id: 2,
      Title: "Woop",
      Author: "test",
      Price: 123,
      Publisher: "Test",
      Description: "Test",
      University: "Test",
      Cond: "Perfect",
      Course: "Test",
      Lang: "Test",
      Topic: "Test",
      image: null,
    };
    setBooks([books, bookObject]);
    //setBooks(...books.concat(bookObject))
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://stoodle.bhsi.xyz:3000/api/stoodle", {
      method: "POST",
      // We convert the React state to JSON and send it as the POST body
      body: JSON.stringify(...books),
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
      <form className="AddBook" onSubmit={addBook}>
        <div>
          <label id="bookTitle"> Title: </label>
          <input
            name="Title"
            type="text"
            value={books.value}
            onChange={handleChange}
          />

          <button type="submit">Submit</button>
        </div>
      </form>
      <h2>Book list:</h2>
      <div></div>
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
