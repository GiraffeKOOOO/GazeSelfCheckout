import React, { useContext } from 'react';
import Button from '@mui/material/Button';
import CartContext from '../components/CartContext';

import '../css/ReceiptButton.css';

function ReceiptButton(props) {
    const { clearCart } = useContext(CartContext);

    return (
        <Button 
            variant="outlined" 
            id='receipt-button'
            data-testid="receiptButtonTest" 
            onClick={
                () => {
                    clearCart()
                    setTimeout(() => { window.location.href="/" }, 250)
                }
            }
        >{props.option}</Button>
    );
  }
  
  export default ReceiptButton;