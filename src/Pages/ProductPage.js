import React from 'react';
import { useState } from 'react'
import { ItemImage } from '../components/Productpage/ItemImage.js';
import ItemTitle  from '../components/Productpage/ItemTitle.js';
import ItemDescription from '../components/Productpage/ItemDescription.js';
import Card from "@material-ui/core/Card";
import { CardContent } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteButton from '../components/Productpage/FavoriteButton.js';
import ArrowBackButton from '../components/Productpage/ArrowBackButton.js';
import { useParams } from 'react-router-dom';
import { BookItem } from '../components/BodyComponents/Book/BookItem.js';


function ProductPage() {

    const [isFavClicked, setFavClicked] = useState(false);

    const handleFavClick = () => {
        setFavClicked((isFavClicked) => {
            return !isFavClicked;
        });
    }
    
    //useParams to find id by url
    const { bookId } = useParams();
    console.log(bookId);

    //filter BookItems array for id matching id found by useParams
    //selectedbook is an array
    const selectedBook = BookItem.filter(book => book.bookId === bookId)
    console.log(selectedBook)
    

    return (
        <>
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
                            <ItemImage item={selectedBook[0]}/>
                        </div>
                        <h3>{selectedBook[0].title}</h3> 
                        <h3 id='price'>{selectedBook[0].price}</h3>
                        <h3 id='city'><LocationOnOutlinedIcon/>{selectedBook[0].city}</h3>                                               
                    </CardContent>
                </Card>
                
            </div>
            <div className='rowC'>
                <ItemTitle item={selectedBook[0]}/>
                <ItemDescription item={selectedBook[0]}/>
            </div>
        </div>
        </>
    )
  }

  export default ProductPage;
