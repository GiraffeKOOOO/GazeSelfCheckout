import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../css/BackBasketButton.css';

function BackBasketButton() {
    return (
        <Button 
            variant="outlined" 
            id='back-basket-button' 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="basket_screen" }, 250)
                }
            }
        ><ArrowBackIosNewIcon fontSize="large" style={{"marginRight":"5px"}}/>Cancel</Button>
    );
  }
  
  export default BackBasketButton;