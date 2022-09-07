import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../css/BackPayButton.css';

function BackPayButton() {
    return (
        <Button 
            variant="outlined" 
            id='back-pay-button'
            data-testid="backPayButtonTest"  
            onClick={
                () => {
                    setTimeout(() => { window.location.href="/pay_screen" }, 250)
                }
            }
        ><ArrowBackIosNewIcon fontSize="large" style={{"marginRight":"5px"}}/>Cancel</Button>
    );
  }
  
  export default BackPayButton;