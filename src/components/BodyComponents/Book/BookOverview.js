import React from "react";
import Book from "./Book";
import { BookItem } from "./BookItem.js";
import "./BookOverview.css";
import { useState } from "react";
import { Grid } from "@mui/material";
import Navbar from "../../Navbar/Navbar";
import Topbar from "../../Topbar/Topbar";

export const BookOverview = () => {
  const [priceMin, setPriceMin] = useState("0 BROKEN");
  const [priceMax, setPriceMax] = useState("1000 BROKEN");
  const [title, setTitle] = useState("");
  const [university, setUniversity] = useState("THIS DOES NOTHING");
  const [author, setAuthor] = useState("");
  const [year, setYear] = useState("");

  console.log(Number(priceMax));

  return (
    <div>
      <Topbar></Topbar>
      <Navbar></Navbar>
      <div className="SideMenu">
        <p id="priceMin">Price: </p>
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
        <Grid
          margin={2}
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          {BookItem.filter((element) => {
            return (
              element.title.includes(title) &&
              element.author.includes(author) &&
              /*&& Number(element.price) <= priceMin*/
              element.year.includes(year)
            );
          }).map((item, index) => {
            return (
              <div className="indiGrid">
                <Grid container item xs={12} sm={3} md={12} key={index}>
                  <Book className="Book" item={item} />
                </Grid>
              </div>
            );
          })}
        </Grid>
      </div>
    </div>
  );
};

export default BookOverview;
