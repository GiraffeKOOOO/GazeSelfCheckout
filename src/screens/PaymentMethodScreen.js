import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import BackPayButton from '../components/BackPayButton';
import SkipPayButton from '../components/SkipPayButton';
import cardImage from '../media/card.png';
import giftImage from '../media/gift.png';
import couponImage from '../media/coupon.png';
import CartContext from '../components/CartContext';

import '../css/PaymentMethodScreen.css';

function PaymentMethodScreen() {
    const queryParams = new URLSearchParams(window.location.search)
    const type = queryParams.get('type');
    const { cartTotal } = useContext(CartContext);
 
    if(type === 'card' ){
        // card page
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
                                  <p id='payment-instructions-text' className='selected-font'>Please pay using your card</p>
                              </Grid>
                          </Grid>
                          <Grid item xs={2}>
                              <HelpButton/>
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item id='payment-method-image-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        id='payment-button-container'
                    >
                        <Grid item xs={2}/>
                            <div id='payment-image-div'>                            
                                <img src={cardImage} alt="cardImage" id='payment-image'/>
                                <p id='payment-image-text' className='selected-font'>Card</p>
                            </div>
                        <Grid item xs={2}/>
                    </Grid>
                </Grid>

                <Grid item id='cancel-button-row'>
                    <BackPayButton/>
                    <SkipPayButton/>
                </Grid>
      
              </Grid>
            </>
        );
    } else if(type === 'gift') {
        // gift page
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
                                  <p id='payment-instructions-text' className='selected-font'>Please pay using your gift card</p>
                              </Grid>
                          </Grid>
                          <Grid item xs={2}>
                              <HelpButton/>
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item id='payment-method-image-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        id='payment-button-container'
                    >
                        <Grid item xs={2}/>
                            <div id='payment-image-div'>                            
                                <img src={giftImage} alt="giftImage" id='payment-image'/>
                                <p id='payment-image-text' className='selected-font'>Gift Card</p>
                            </div>
                        <Grid item xs={2}/>
                    </Grid>
                </Grid>

                <Grid item id='cancel-button-row'>
                    <BackPayButton/>
                    <SkipPayButton/>
                </Grid>
      
              </Grid>
            </>
        );
    } else if(type === 'coupon') {
        // coupon page
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
                                  <p id='payment-instructions-text' className='selected-font'>Please pay using your coupon</p>
                              </Grid>
                          </Grid>
                          <Grid item xs={2}>
                              <HelpButton/>
                          </Grid>
                      </Grid>
                  </Grid>

                  <Grid item id='payment-method-image-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                        id='payment-button-container'
                    >
                        <Grid item xs={2}/>
                            <div id='payment-image-div'>                            
                                <img src={couponImage} alt="couponImage" id='payment-image'/>
                                <p id='payment-image-text' className='selected-font'>Coupon</p>
                            </div>
                        <Grid item xs={2}/>
                    </Grid>
                </Grid>

                <Grid item id='cancel-button-row'>
                    <BackPayButton/>
                    <SkipPayButton/>
                </Grid>
      
              </Grid>
            </>
        );
    }

  
}

export default PaymentMethodScreen;