import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';

import '../css/SearchProductItem.css';

function SearchProductItem(props) {
    return (
        <Button 
            variant="outlined" 
            id='search-product-item' 
            onClick={
                () => {
                    console.log('hello')
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