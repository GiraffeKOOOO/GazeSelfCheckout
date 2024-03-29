import React from 'react';
import Grid from '@mui/material/Grid';

import '../css/BasketItem.css';

function addZeroes(number) {
    var integer = Number(number);
    
    if (isNaN(integer)) {
        return 0;
    }

    if (String(integer).split(".").length < 2 || String(integer).split(".")[1].length<=2 ){
      integer = integer.toFixed(2);
    }

    return integer;
  }

function BasketItem(props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            id="basket-item-container"
            data-testid="basketItemTest" 
            >
            <Grid item xs={1}><img src={props.itemImage} alt="itemImage" id='basket-item-image'/></Grid>
            <Grid item xs={6.8}><p id='basket-item-name' className='selected-font'>{props.itemName}</p></Grid>
            <Grid item xs={2} id='basket-item-quantity'><p className='selected-font'>{props.itemQuantity}</p></Grid>
            <Grid item xs={2} id='basket-item-price'><p className='selected-font'>£{addZeroes(props.itemPrice)}</p></Grid>
        </Grid>
    );
  }
  
  export default BasketItem;