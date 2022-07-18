import React from 'react';
import Button from '@mui/material/Button';

import '../css/PayButton.css';

function PayButton() {
    return (
        <Button variant="outlined" id='pay-button' 
            onClick={
                () => {
                    window.location.href="pay_page";
                }
            }
        >Pay</Button>
    );
  }
  
  export default PayButton;