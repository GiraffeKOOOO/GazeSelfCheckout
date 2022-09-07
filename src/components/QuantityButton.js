import React from 'react';
import Button from '@mui/material/Button';

import '../css/QuantityButton.css';

function QuantityButton(props) {
    return (
        <Button 
            variant="outlined" 
            id='quantity-button' 
            data-testid="quantityButtonTest"
            onClick={
                () => {
                    props.setQuantity(props.number)
                }
            }
        >{props.number}</Button>
    );
  }
  
  export default QuantityButton;