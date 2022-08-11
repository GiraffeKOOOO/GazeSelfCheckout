import React from 'react';
import Button from '@mui/material/Button';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';

import '../css/PayButton.css';

function PayButton() {
    return (
        <Button variant="outlined" id='pay-button' 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="pay_page" }, 250)
                }
            }
        >Pay<ArrowCircleRightIcon fontSize="large" style={{"marginLeft":"10px"}}/></Button>
    );
  }
  
  export default PayButton;