import React, { Component } from "react";
import IconButton from "@material-ui/core/IconButton";
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import "./FavoriteButton.css";

function FavoriteButton({ isFavClicked, handleFavClick }) {
    return (
      <>
        {isFavClicked
        ? (
          <IconButton  
            style={{float: 'right'}}
            onClick={() => handleFavClick()}>
              <FavoriteIcon className="FavActive"/>
          </IconButton>
        )
        : (
          <IconButton  
            style={{float: 'right'}}
            onClick={() => handleFavClick()}>
              <FavoriteBorder className="FavInactive"/>
          </IconButton>
        ) 
        }
      </>
  );
}

export default FavoriteButton;