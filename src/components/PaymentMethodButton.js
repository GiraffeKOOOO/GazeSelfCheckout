import React from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import cardImage from '../media/card.png';
import giftCardImage from '../media/gift.png';
import couponImage from '../media/coupon.png';

import '../css/PaymentMethodButton.css';

function PaymentMethodButton(props) {
    if(props.paymentMethod === 'Card'){
        return(
            <Button variant="outlined" id='payment-method-button' 
                onClick={
                    () => { setTimeout(() => { window.location.href="payment_card" }, 250)}
                }
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={cardImage} alt="paymentButtonImage" id='payment-button-image'/>
                    <p id='payment-button-text' className='selected-font'>{props.paymentMethod}</p>
                </Grid>
            </Button>
        );
    } else if (props.paymentMethod === 'Gift Card') {
        return(
            <Button variant="outlined" id='payment-method-button' 
                onClick={
                    () => { setTimeout(() => { window.location.href="payment_gift_card" }, 250)}
                }
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={giftCardImage} alt="paymentButtonImage" id='payment-button-image'/>
                    <p id='payment-button-text' className='selected-font'>{props.paymentMethod}</p>
                </Grid>
            </Button>
        );
    } else if (props.paymentMethod === 'Coupon') {
        return(
            <Button variant="outlined" id='payment-method-button' 
                onClick={
                    () => { setTimeout(() => { window.location.href="payment_coupon" }, 250)}
                }
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={couponImage} alt="paymentButtonImage" id='payment-button-image'/>
                    <p id='payment-button-text' className='selected-font'>{props.paymentMethod}</p>
                </Grid>
            </Button>
        );
    }
  }
  
  export default PaymentMethodButton;