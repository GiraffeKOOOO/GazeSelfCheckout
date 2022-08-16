import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import '../css/SearchProductItem.css';

import apple from '../media/apple.png';
import banana from '../media/banana.png';
import watermelon from '../media/watermelon.png';

function SearchProductItem(props) {
    return (
        <Button 
            variant="outlined" 
            id='search-product-item' 
            onClick={
                () => {
                    console.log(props.productName)
                }
            }
        >
            <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={props.image} alt="itemButtonImage" id='item-button-image'/>
                    <p id='item-button-text' className='selected-font'>{props.productName}</p>
            </Grid>        
        </Button>
    );
  }
  
  export default SearchProductItem;