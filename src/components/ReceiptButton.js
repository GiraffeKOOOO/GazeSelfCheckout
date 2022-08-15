import React from 'react';
import Button from '@mui/material/Button';

import '../css/ReceiptButton.css';

function ReceiptButton(props) {
    return (
        <Button 
            variant="outlined" 
            id='receipt-button' 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="/" }, 250)
                }
            }
        >{props.option}</Button>
    );
  }
  
  export default ReceiptButton;