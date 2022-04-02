import React from 'react';
import Navbar from '../components/Navbar/Navbar.js';
import Topbar from '../components/Topbar/Topbar.js';
import { ItemImage } from '../components/ProductPageComponents/ItemImage.js';
import ItemDescription from '../components/ProductPageComponents/ItemDescription.js';
import Card from "@material-ui/core/Card";
import { CardContent } from '@mui/material';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';

function ProductPage() {
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
                        <ArrowBackRoundedIcon/>
                        <FavoriteBorder style={{
                            float: 'right',
                            }}/>
                        <div style={{display: 'flex', justifyContent: 'Center'}}>
                            <ItemImage />
                        </div>
                        <h3>Book with text in it</h3> 
                        <h3 id='price'>999 kr</h3>
                        <h3 id='city'><LocationOnOutlinedIcon/> Rødovre</h3>                                               
                    </CardContent>
                </Card>
                
            </div>
            <div className='rowC'>
                <ItemDescription/>
            </div>
        </div>
        </>
    )
  }
  export default ProductPage;