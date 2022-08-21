import React from 'react';
import Grid from '@mui/material/Grid';

import '../css/BasketItem.css';

function BasketItem(props) {
    return (
        <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            id="basket-item-container"
            >
            <Grid item xs={1}><img src={props.itemImage} alt="itemImage" id='basket-item-image'/></Grid>
            <Grid item xs={6.8}><p id='basket-item-name' className='selected-font'>{props.itemName}</p></Grid>
            <Grid item xs={2} id='basket-item-quantity'><p className='selected-font'>{props.itemQuantity}</p></Grid>
            <Grid item xs={2} id='basket-item-price'><p className='selected-font'>£{props.itemPrice}</p></Grid>
        </Grid>
    );
  }
  
  export default BasketItem;