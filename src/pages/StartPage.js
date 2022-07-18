import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import StartButton from '../components/StartButton';

import '../css/StartPage.css';
import { Button } from '@mui/material';

function StartPage() {
  return (
      <Container id='start-page-container'>

        <Grid container id='first-row'>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <h1 id="page-title" className='no-margin'>Hello</h1>
          </Grid>
          <Grid item xs={2} id='help-button-div'>
            <HelpButton/>
          </Grid>
        </Grid>

        <Grid container id='second-row'>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <p id="first-line" className='no-margin instruction-text'>Start off by scanning an item</p>
            <p id="second-line" className='no-margin instruction-text'>or</p>
            <p id="third-line" className='no-margin instruction-text'>by clicking on the Start button with your eyes</p>
          </Grid>
          <Grid item xs={2}/>
        </Grid>

        <Grid container id='third-row'>
          <Grid item xs={2}/>
          <Grid item xs={8}>
            <div id='placeholder'></div>
          </Grid>
          <Grid item xs={2}/>
            <StartButton/>
        </Grid>

      </Container>
  );
}

export default StartPage;