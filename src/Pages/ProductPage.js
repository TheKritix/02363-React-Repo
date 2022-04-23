import React from 'react';
import "./ProductPage.css";
import { useState, useEffect } from 'react'
import { ItemImage } from '../components/Productpage/ItemImage.js';
import ItemTitle  from '../components/Productpage/ItemTitle.js';
import ItemDescription from '../components/Productpage/ItemDescription.js';
import Card from "@material-ui/core/Card";
import { CardContent } from '@mui/material';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import FavoriteButton from '../components/Productpage/FavoriteButton.js';
import ArrowBackButton from '../components/Productpage/ArrowBackButton.js';
import { useParams } from 'react-router-dom';
import Divider from '@mui/material/Divider';


function ProductPage() {

    const [isFavClicked, setFavClicked] = useState(false);

    const handleFavClick = () => {
        setFavClicked((isFavClicked) => {
            return !isFavClicked;
        });
    }

    //useParams to find id by url, comes as object, parse into integer to match correctly with api
    const { Book_Id } = useParams()
    const b_ID = parseInt(Book_Id);
    console.log(b_ID);

    //Used same general construction as in BookOverview.js
    const [selectedBookData, setSelectedBookData] = useState([]);
    const retrieveSelectedBook = () => {
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
        setSelectedBookData(JSON.filter(book => book.Book_Id === b_ID))
        console.log(JSON.filter(book => book.Book_Id === b_ID))
      });
    }

    useEffect(() => {
        retrieveSelectedBook()
      }, [])

    return (
        <>
        {selectedBookData.map((book) => {     
                return (
                    <div className="container" style={{display: 'flex', justifyContent: 'center'}}>  
                        <div className="left-div">
                            <Card style={{
                                width: 550,
                                height: 660, 
                                backgroundColor: "lightgray",
                                margin: 10,
                                }}>
                                <CardContent>
                                    <ArrowBackButton/>
                                    <FavoriteButton isFavClicked={isFavClicked} handleFavClick={handleFavClick}/>
                                    <div style={{display: 'flex', justifyContent: 'Center'}}>
                                        <ItemImage book={book}/>
                                    </div>
                                    <Divider style={{margin: 10,}}/>  
                                    <h2>{book.Title}</h2> 
                                    <h3>Author: {book.Author}</h3>
                                    <h3 id='University' style={{float: 'right'}}><LocationOnOutlinedIcon/>{book.University}</h3>                                     
                                </CardContent>
                            </Card>
                        </div>
                        <div className="right-child">
                            <ItemTitle item={book}/>
                            <ItemDescription item={book}/>
                            <Divider/>
                            <h3 id='price'>Pris: {book.Price}</h3>
                            <Divider/>
                        </div>  
                    </div>
                );
            })} 
        </>
    )
  }

  export default ProductPage;
