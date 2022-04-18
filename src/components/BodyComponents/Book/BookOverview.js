import React from "react";
import Book from "./Book";
import { BookItem } from "./BookItem.js";
import "./BookOverview.css";
import { useState } from "react";
import { Grid, Container } from "@mui/material";

export const BookOverview = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(2000);
  const [title, setTitle] = useState("");
  const [university, setUniversity] = useState("THIS DOES NOTHING");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  return (
    <div className='Overview'>
      <div className="SideMenu">
        <p id="priceMin">Price (dkk): </p>
        <input
          id="pMin"
          value={priceMin}
          onChange={(e) => setPriceMin(e.target.value)}
        />
        <p id="priceMax"></p>
        <input
          id="pMax"
          value={priceMax}
          onChange={(e) => setPriceMax(e.target.value)}
        />
        <p id="title">Title: </p>
        <input
          id="titleInput"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <p id="university">University: </p>
        <input
          id="universityInput"
          value={university}
          onChange={(e) => setUniversity(e.target.value)}
        />
        <p id="author">Author: </p>
        <input
          id="authorInput"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <p id="year">Year: </p>
        <input
          id="yearInput"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        />
      </div>
      <div className="gridBox">
      <Container className="bookOverview">
          <Grid container spacing={0}>
            {BookItem.filter((element) => {
              return (
                element.title.toLowerCase().includes(title.toLowerCase()) &&
                element.author.toLowerCase().includes(author.toLowerCase())
              )
              
            })
            .filter(item => item.price >= priceMin)
            .filter(item => item.price <= priceMax)
            .map((item, index) => {
              return (
                <Grid item xs={5} md={3} key={index}>
                  <div className="card-item">
                    <div className="img-div">
                      <img className="item-image" alt="bookimage" src={item.imageUrl}></img>
                    </div>
                    <div className="content">
                      <h5>{item.title}</h5>
                      <h6>{item.price}</h6>
                      <h6>
                        {item.city}, {item.country}
                      </h6>
                    </div>
                  </div>
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default BookOverview;
