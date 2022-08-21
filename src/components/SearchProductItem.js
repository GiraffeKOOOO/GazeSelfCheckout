import React, { useContext }  from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import CartContext from './CartContext';

import '../css/SearchProductItem.css';

function SearchProductItem(props) {
    const { addToCart, cartItems} = useContext(CartContext);

    return (
        <Button 
            variant="outlined" 
            id='search-product-item' 
            onClick={
                () => {
                    addToCart(props.productName, props.productPrice, 1)
                    console.log(cartItems)   
                }
            }
        >
            <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={props.productImage} alt="itemButtonImage" id='item-button-image'/>
                    <p id='item-button-text' className='selected-font'>{props.productName}</p>
            </Grid>        
        </Button>
    );
  }
  
  export default SearchProductItem;