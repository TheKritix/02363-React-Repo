import React, { Component } from "react";
import {
  Container,
  Grid,
  IconButton,
} from "@mui/material";
import { BookItem } from "../BodyComponents/Book/BookItem";
import "./Favorit.css";
import { Favorite, FavoriteBorderTwoTone } from "@mui/icons-material";

// The favorit componenet is not implmented correctly yet. It just takes and Maps a JSON file so we could get the visualization of how the favoritpage would look in the next itteration. 


class Favorit extends Component {
  render() {
    return (
      <div>
        <Container className="favorit-container">
          <Grid container spacing={0}>
            {BookItem.map((item, index) => {
              return (
                <Grid item xs={5} md={3} key={index}>
                  <div className="card-item">
                    <div className="icon-div">
                      <IconButton>
                        <Favorite className="favoriteBtn"></Favorite>
                      </IconButton>
                    </div>
                    <div className="img-div">
                      <img className="item-image" src={item.imageUrl}></img>
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
    );
  }
}
export default Favorit;
