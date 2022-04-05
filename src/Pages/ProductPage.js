import React from 'react';
import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import Topbar from '../components/Topbar/Topbar.js';
import { ItemImage } from '../components/Productpage/ItemImage.js';
import ItemTitle  from '../components/Productpage/ItemTitle.js';
import ItemDescription from '../components/Productpage/ItemDescription.js';
import Card from "@material-ui/core/Card";
import { CardContent } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteButton from '../components/Productpage/FavoriteButton.js';
import ArrowBackButton from '../components/Productpage/ArrowBackButton.js';


function ProductPage() {

    const [isFavClicked, setFavClicked] = useState(false);

    const handleFavClick = () => {
        setFavClicked((isFavClicked) => {
            return !isFavClicked;
        });
    };

    return (
        <>
        <Topbar></Topbar>
        <Navbar></Navbar>
        <div className='rowA' style={{display: 'flex'}}>
            <div>
                <Card style={{
                    width: 600,
                    height: 800, 
                    backgroundColor: "lightgray",
                    margin: 10,             
                }}>
                    <CardContent>
                        <ArrowBackButton/>
                        <FavoriteButton isFavClicked={isFavClicked} handleFavClick={handleFavClick}/>
                        <div style={{display: 'flex', justifyContent: 'Center'}}>
                            <ItemImage/>
                        </div>
                        <h3>Book with text in it</h3> 
                        <h3 id='price'>999 kr</h3>
                        <h3 id='city'><LocationOnOutlinedIcon/> Rødovre</h3>                                               
                    </CardContent>
                </Card>
                
            </div>
            <div className='rowC'>
                <ItemTitle/>
                <ItemDescription/>
            </div>
        </div>
        </>
    )
  }
  export default ProductPage;
