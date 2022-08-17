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
            >
            <Grid item xs={2}>Item image</Grid>
            <Grid item xs={5.8}>Banana</Grid>
            <Grid item xs={2}>2</Grid>
            <Grid item xs={2}>£1.00</Grid>
        </Grid>
    );
  }
  
  export default BasketItem;