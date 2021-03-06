import React, { Component } from "react";
import { BookItem } from "../BodyComponents/Book/BookItem";
import { Grid, Container, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import "./MyPost.css";
import PopUp from "../PopUp/PopUp";

export const  MyPost = () => {
  const userId = window.sessionStorage.getItem("userId");

  const [bookData, setBookData] = useState([]);

  const deleteBook = (item) => {
    const formData = new FormData();
    formData.append("book_id", item.bookId);
    console.log(item);
    fetch("https://stoodle.bhsi.xyz/api/books", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      action: "/",
      body: JSON.stringify(item),
    }).then(() => retrieveBookData());
  };

  const retrieveBookData = () => {
    fetch(`https://stoodle.bhsi.xyz/api/userBooks/${userId}`, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((response) => {
        return response.json();
      })
      .then((JSON) => {
        setBookData(JSON);
      });
  };

  useEffect(() => {
    retrieveBookData();
  }, []);

  // Handles closing of popup window when changing book information
  const [isOpen, setisOpen] = useState(false);
  const togglePopup = () => {
    setisOpen(!isOpen);
  };

  // Update book data
  const [updatedBookInfo, setUpdatedBookInfo] = useState([
    {
      Title: "",
      Publisher: "",
      Author: "",
      Price: 0,
      Description: "",
      University: "",
      Cond: "",
      Lang: "",
      Topic: "",
    },
  ]);

  const handleBookUpdated = (e) => {
    setUpdatedBookInfo({
      ...updatedBookInfo,
      [e.target.name]: e.target.value,
    });
  };

  const SubmitBookInfo = (event, item) => {
   event.preventDefault();
    const bookObject = {
      Title: updatedBookInfo.Title,
      Publisher: updatedBookInfo.Publisher,
      Author: updatedBookInfo.Author,
      Price: updatedBookInfo.Price,
      Description: updatedBookInfo.Description,
      University: updatedBookInfo.University,
      Cond: updatedBookInfo.Cond,
      Lang: updatedBookInfo.Lang,
      Topic: updatedBookInfo.Topic,
      book_id: item.Book_Id,
    };
    console.log(bookObject);
    fetch(`https://stoodle.bhsi.xyz/api/updatebook`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookObject),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
    console.log("book information is updated");
  };

  return (
    <div>
      <Container className="myPost-container">
        <Grid container spacing={0}>
          {bookData.map((item, index) => {
            return (
              <Grid item xs={5} md={3} key={index}>
                <div className="card-item">
                  <div className="icon-div">
                    <IconButton className="bookEditBtn" onClick={togglePopup}>
                      <Edit />
                    </IconButton>
                    {isOpen && (
                      <PopUp
                        content={
                          <form onSubmit={(event) => SubmitBookInfo(event, item)} className="bookFormDiv">
                            <h2 id="">Edit book</h2>
                            <input
                              type="title"
                              name="Title"
                              value={updatedBookInfo.Title}
                              placeholder="Title"
                              onChange={handleBookUpdated}
                            />
                            <br />
                            <input
                              type="price"
                              name="Price"
                              value={updatedBookInfo.Price}
                              onChange={handleBookUpdated}
                              placeholder="Price"
                            />
                            <input
                              type="cond"
                              name="Cond"
                              value={updatedBookInfo.Cond}
                              onChange={handleBookUpdated}
                              placeholder="Condition"
                            />
                            <br />
                            <input
                              type="lang"
                              name="Lang"
                              onChange={handleBookUpdated}
                              value={updatedBookInfo.Lang}
                              placeholder="Language"
                            />
                            <input
                              type="topic"
                              name="Topic"
                              onChange={handleBookUpdated}
                              value={updatedBookInfo.Topic}
                              placeholder="Topic"
                            />
                            <br />
                            <input
                              type="publisher"
                              name="Publisher"
                              value={updatedBookInfo.Publisher}
                              placeholder="Publisher"
                              onChange={handleBookUpdated}
                            />

                            <input
                              type="author"
                              name="Author"
                              value={updatedBookInfo.Author}
                              placeholder="Author"
                              onChange={handleBookUpdated}
                            />
                            <br />
                            <br />
                            <input
                              type="description"
                              name="Description"
                              onChange={handleBookUpdated}
                              value={updatedBookInfo.Description}
                              placeholder="Description"
                            />

                      
                            <br />
                            <button
                            >
                              Confirm changes
                            </button>
                          </form>
                        }
                        handleClose={togglePopup}
                      ></PopUp>
                    )}

                    <IconButton
                      className="deleteBtn"
                      onClick={() => {
                        deleteBook(item);
                      }}
                    >
                      <Delete></Delete>
                    </IconButton>
                  </div>
                  <div className="img-div">
                    <img
                      className="item-image"
                      crossOrigin="anonymous"
                      alt="imageurl"
                      src={item.Image}
                    ></img>
                  </div>
                  <div className="content">
                    <h5>{item.Title}</h5>
                    <h6>{item.Price}</h6>
                    <h6>
                      {item.City}, {item.Country}
                    </h6>
                  </div>
                </div>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};

export default MyPost;