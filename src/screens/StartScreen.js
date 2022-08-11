import React from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import StartButton from '../components/StartButton';

import '../css/StartScreen.css';

function StartScreen() {
  return (
      <>
        <Grid container id='first-row'>
          <Grid item xs={2}/>
          <Grid item xs={8}>

            <Grid container id='inner-title-container'>

              <Grid item xs={12}>
                <h1 id="page-title" className='no-margin'>Hello</h1>
              </Grid>

              <Grid item xs={12}>
                <p id="first-line" className='no-margin instruction-text'>Start off by scanning an item</p>
                <p id="second-line" className='no-margin instruction-text'>or</p>
                <p id="third-line" className='no-margin instruction-text'>by clicking on the Start button with your eyes</p>
              </Grid>

            </Grid>

          </Grid>
          <Grid item xs={2} id='help-button-div'>
            <HelpButton/>
          </Grid>
        </Grid>

        <Grid container id='second-row'>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <div id='placeholder'></div>
          </Grid>
          <Grid item xs={2}/>
            <StartButton/>
        </Grid>
      </>
  );
}

export default StartScreen;