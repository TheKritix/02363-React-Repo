import React, { Component } from 'react';
import { BookItem } from '../BodyComponents/Book/BookItem';
import { Grid,Container, IconButton } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';
import './MyPost.css';

class MyPost extends Component {
    render() {
        return(
            <div>
            <Container className='myPost-container'>
                 <Grid container spacing = {0}>
                     {BookItem.map ((item,index) => {
                         return(
                             <Grid item xs={5} md={3} key={index}>
                                 <div className='card-item'>
                                     <div className='icon-div'>
                                         <IconButton>
                                             <Edit></Edit>
                                         </IconButton>
                                         <IconButton>
                                             <Delete></Delete>
                                         </IconButton>
                                     </div>
                                     <div className='img-div'>
                                         <img className='item-image' alt ="imageurl" src={item.imageUrl}></img>
                                     </div> 
                                     <div className='content'>
                                         <h5>{item.title}</h5>
                                         <h6>{item.price}</h6>
                                         <h6>{item.city}, {item.country}</h6>
                                     </div>
                                 </div>
                             </Grid>
                         )
                     })}
 
                 </Grid>
             </Container>
             </div>
        );
    }
}

export default MyPost;