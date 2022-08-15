import React from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import receiptImage from '../media/receipt.png';
import ReceiptButton from '../components/ReceiptButton';

import '../css/ReceiptScreen.css';

function ReceiptScreen() {
    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                id='receipt-screen-container'
            >
    
                <Grid item id='receipt-title-row'>
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
                                <h1 id='title-text' className='selected-font'>Payment Successful</h1>
                                <Grid
                                    container
                                    direction="row"
                                    justifyContent="center"
                                    alignItems="flex-start"
                                >
                                    <p id='receipt-instructions-text' className='selected-font'>Would you like a receipt?</p>
                                    <img src={receiptImage} alt="receiptImage" id='receipt-image'/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={2} id='receipt-help-row'>
                            <HelpButton/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item id='receipt-button-row'>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-evenly"
                    alignItems="center"
                >  
                    <ReceiptButton option='no'/>
                    <ReceiptButton option='yes'/>
                </Grid>
            </Grid>
    
            </Grid>
        </>
    ); 
}

export default ReceiptScreen;