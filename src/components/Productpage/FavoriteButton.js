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
            className="FavInactive" 
            style={{float: 'right'}}
            onClick={() => handleFavClick()}>
              <FavoriteBorder/>
          </IconButton>
        )
        : (
          <IconButton 
            className="FavActive" 
            style={{float: 'right'}}
            onClick={() => handleFavClick()}>
              <FavoriteIcon/>
          </IconButton>
        ) 
        }
      </>
  );
}

export default FavoriteButton;