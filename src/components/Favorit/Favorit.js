import React, { Component } from 'react';
import {Container, Card, Grid, CardContent, CardMedia, CardActionArea, Button, IconButton } from '@mui/material';
import {BookItem} from '../BodyComponents/Book/BookItem';
import './Favorit.css';
import { Favorite, FavoriteBorderTwoTone } from '@mui/icons-material';


class Favorit extends Component {
    render() {
        return(
            <>
            <Container className='favorit-container'>
                <Grid container spacing = {10}>
                    {BookItem.map ((item,index) => {
                        return(
                            <Grid item xs={5} md={3} key={index}>
                                <Card>
                                    <CardActionArea>
                                    <CardMedia
                                        component="img"
                                        image={item.imageUrl}
                                        alt ="bog"
                                        height={200}
                                    ></CardMedia>
                                    <CardContent>
                                        <h3>{item.title}</h3>
                                        <h4>{item.price}</h4>
                                        <h5>{item.city}, {item.country}</h5>
                                    </CardContent>
                                    </CardActionArea>
                                    <IconButton>
                                    <Favorite className='favoritBtn'></Favorite>
                                    </IconButton>
                       

                                </Card>
                            </Grid>
                        )
                    })}

                </Grid>
            </Container>

            </>
        );
    }
}
export default Favorit;