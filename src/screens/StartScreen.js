import React, { useRef, useEffect } from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import StartButton from '../components/StartButton';

import '../css/StartScreen.css';

function StartScreen() {
  const videoRef = useRef(null);

  useEffect(() => {
    getVideo();
  }, [videoRef]);

  const getVideo = () => {
    navigator.mediaDevices
      .getUserMedia({ video: { width: 1200, height: 800 } })
      .then(stream => {
        let video = videoRef.current;
        video.srcObject = stream;
        video.play();
      })
      .catch(err => {
        console.error("error:", err);
      });
  };

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
            <div id='placeholder'>
              <video
                ref={videoRef}
                id="video-player"
              />
            </div>
          </Grid>
          <Grid item xs={2}/>
            <StartButton/>
        </Grid>
      </>
  );
}

export default StartScreen;