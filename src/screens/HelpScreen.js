import React from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import helpImage from '../media/help.png';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../css/HelpScreen.css';


function HelpScreen(props) {
    return (
        <>
            <Grid 
                container
                direction="column" 
                id='help-screen-grid'
                data-testid="helpScreenTest" 
            >
                <Grid item id='help-title-grid-item'>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        id='help-title-column-grid'
                    >
                        <Grid item><h1 id='help-title' className='selected-font'>Help Requested</h1></Grid>
                        <Grid item><p className='selected-font instruction-text margin-5'>Please wait</p></Grid>
                        <Grid item><p className='selected-font instruction-text margin-5'>A member of staff is on their way to help you</p></Grid>
                    </Grid>
                </Grid>

                <Grid item id='help-body-grid-item'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        id='help-content-column-grid'
                    >
                        <Grid item xs={2}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="center"
                                id='help-cancel-grid'
                            >
                                <Button 
                                    variant="outlined" 
                                    id='cancel-modal-button' 
                                    onClick={
                                        () => {
                                            setTimeout(() => { props.handleClose() }, 250)
                                        }
                                    }
                                >
                                    <ArrowBackIosNewIcon fontSize="large" style={{"marginRight":"5px"}}/>Cancel
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={8}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <img src={helpImage} alt="helpImage" id='help-image'/>
                            </Grid>
                        </Grid>

                        <Grid item xs={2}/>

                    </Grid>
                </Grid>

            </Grid>
        </>
    );
  }
  
  export default HelpScreen;