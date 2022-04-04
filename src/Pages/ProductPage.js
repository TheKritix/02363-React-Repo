import React from 'react';
import { useState } from 'react'
import Navbar from '../components/Navbar/Navbar.js';
import Topbar from '../components/Topbar/Topbar.js';
import { ItemImage } from '../components/ProductPageComponents/ItemImage.js';
import ItemTitle  from '../components/ProductPageComponents/ItemTitle.js';
import ItemDescription from '../components/ProductPageComponents/ItemDescription.js';
import Card from "@material-ui/core/Card";
import { CardContent } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import IconButton from "@material-ui/core/IconButton";
import { Favorite } from '@mui/icons-material';

function ProductPage() {

    const [isFavClicked, setFavClicked] = useState(false);

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
                        <IconButton onClick={event => window.location.href='/buy'}>
                            <ArrowBackRoundedIcon/>
                        </IconButton>

                        {isFavClicked === false
                        ? <IconButton onClick={() => setFavClicked === true} style={{float: 'right'}}>
                            <FavoriteBorder/>
                        </IconButton>
                        : <IconButton onClick={() => setFavClicked === false} style={{float: 'right'}}>
                            <FavoriteIcon/>
                        </IconButton>
                        }
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
