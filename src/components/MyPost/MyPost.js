import React, { Component } from "react";
import { BookItem } from "../BodyComponents/Book/BookItem";
import { Grid, Container, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import "./MyPost.css";

export const MyPost = () => {
  const userId = window.sessionStorage.getItem("userId");

  const [bookData, setBookData] = useState([]);

  const deleteBook = (item) => {
    const formData = new FormData();
    formData.append("book_id", item.bookId);
    console.log(item)
    fetch("http://localhost:3001/api/books", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      action: "/",
      body: JSON.stringify(item),
    })
    .then(() => retrieveBookData())
  }

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



  return (
    <div>
      <Container className="myPost-container">
        <Grid container spacing={0}>
          {bookData.map((item, index) => {
            return (
              <Grid item xs={5} md={3} key={index}>
                <div className="card-item">
                  <div className="icon-div">
                    <IconButton
                      className="bookEditBtn"
                    >
                      <Edit></Edit>
                    </IconButton>
                    <IconButton className="deleteBtn"
                    onClick={() => {deleteBook(item);}}>
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
