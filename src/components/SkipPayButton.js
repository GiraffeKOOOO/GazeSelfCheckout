import React from 'react';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

import '../css/SkipPayButton.css';

function SkipPayButton() {
    return (
        <Button 
            variant="outlined" 
            id='skip-pay-button' 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="/receipt_screen" }, 250)
                }
            }
        >Skip<ArrowForwardIosIcon fontSize="large" style={{"marginLeft":"5px"}}/></Button>
    );
  }
  
  export default SkipPayButton;