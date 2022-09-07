import React from 'react';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import '../css/PayButton.css';

function PayButton(props) {
    return (
        <Button 
            variant="outlined" 
            id={props.cartQuantity > 0 ? 'pay-button' : 'pay-button-disabled'}
            data-testid="payButtonTest"
            disabled={props.cartQuantity > 0 ? false : true} 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="pay_screen" }, 250)
                }
            }
        >Pay<ArrowCircleRightIcon fontSize="large" style={{"marginLeft":"10px"}}/></Button>
    );
  }
  
  export default PayButton;