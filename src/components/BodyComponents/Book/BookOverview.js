import React from "react";
import "./BookOverview.css";
import { useState, useEffect } from "react";
import { Grid, Container } from "@mui/material";
import { Link } from "react-router-dom";

export const BookOverview = () => {
  const [priceMin, setPriceMin] = useState(0);
  const [priceMax, setPriceMax] = useState(2000);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");

  //Used general idea from https://stackoverflow.com/questions/49023587/react-fetch-json-data-from-url-and-display-it
  const [bookData, setBookData] = useState([]);
  const retrieveBookData = () => {
    fetch('https://stoodle.bhsi.xyz/api/books',{
      headers : {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      }
    })
      .then ((response) => {
        console.log(response)
        return response.json();
      })
      .then((JSON) => {
        console.log(JSON);
        setBookData(JSON)
      }); 
  }

  useEffect(() => {
    retrieveBookData()
  }, [])
  

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
        <p id="author">Author: </p>
        <input
          id="authorInput"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
      </div>
      <div className="gridBox">
      <Container className="bookOverview">
          <Grid container spacing={0}>
            {bookData.filter((element) => {
              return (
                element.Title.toLowerCase().includes(title.toLowerCase()) &&
                element.Author.toLowerCase().includes(author.toLowerCase())
              )
            })
            .filter(item => item.Price >= priceMin)
            .filter(item => item.Price <= priceMax)
            .map((item, index) => {
              return (
                <Grid item xs={6} md={3} key={index} spacing = {0}>
                  <Link to={`/productpage/${item.Book_Id}`}>
                    <div className="card-item">
                      <div className="img-div">
                        <img className="item-image" crossOrigin="anonymous" alt="bookimage" src={item.Image}></img>
                      </div>
                      <div className="content">
                        <h5>{item.Title}</h5>
                        <h6>by {item.Author}</h6>
                        <h6>{item.Price}</h6>
                        <h6>
                          {item.Publisher}, {item.Country}
                        </h6>
                      </div>
                    </div>
                  </Link>
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
