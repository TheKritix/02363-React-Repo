import React, { Component } from "react";
import { BookItem } from "../BodyComponents/Book/BookItem";
import { Grid, Container, IconButton } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { useState, useEffect } from "react";
import "./MyPost.css";
import useToken from "../Login/useToken";
import useUserId from "../Login/useUserId";

export const MyPost = () => {
    

    const userId = window.sessionStorage.getItem("userId");
    console.log(userId);

    const [bookData, setBookData] = useState([]);

    const retrieveBookData = () => {
        fetch(`https://stoodle.bhsi.xyz/api/userBooks/${userId}`,{
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
      <div>
        <Container className="myPost-container">
          <Grid container spacing={0}>
            {bookData.map((item, index) => {
              return (
                <Grid item xs={5} md={3} key={index}>
                  <div className="card-item">
                    <div className="icon-div">
                      <IconButton className="editBtn">
                        <Edit></Edit>
                      </IconButton>
                      <IconButton className="deleteBtn">
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
  
}

export default MyPost;
