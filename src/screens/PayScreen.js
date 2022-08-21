import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import PaymentMethodButton from '../components/PaymentMethodButton';
import BackBasketButton from '../components/BackBasketButton';
import CartContext from '../components/CartContext';

import '../css/PayScreen.css';

function PayScreen() {
    const { cartTotal } = useContext(CartContext);

  return (
      <>
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
            id='pay-screen-container'
        >

            <Grid item id='title-row'>
                <Grid
                    container
                    direction="row"
                    justifyContent="center"
                    alignItems="center"
                >
                    <Grid item xs={2}/>
                    <Grid item xs={8}>
                        <Grid
                            container
                            direction="column"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <h1 id='total-string-value' className='selected-font'>Total £{cartTotal}</h1>
                            <p id='payment-instructions-text' className='selected-font'>Please select a method of payment</p>
                        </Grid>
                    </Grid>
                    <Grid item xs={2}>
                        <HelpButton/>
                    </Grid>
                </Grid>
            </Grid>

            <Grid item id='payment-methods-row'>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                    id='payment-button-container'
                >
                    <PaymentMethodButton paymentMethod="Card"/>
                    <PaymentMethodButton paymentMethod="Gift Card"/>
                    <PaymentMethodButton paymentMethod="Coupon"/>
                </Grid>
            </Grid>

            <Grid item id='cancel-button-row'>
                <Grid
                    container
                    direction="row"
                    justifyContent="flex-start"
                    alignItems="center"
                    id='cancel-row-payscreen'
                >
                    <BackBasketButton/>
                </Grid>
                
            </Grid>

        </Grid>
      </>
  );
}

export default PayScreen;