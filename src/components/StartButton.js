import React from 'react';
import Button from '@mui/material/Button';

import '../css/StartButton.css';

function StartButton() {
    return (
        <Button variant="contained" id='start-button' onClick={
            () => {
              setTimeout(() => { window.location.href="basket_screen" }, 250)
            }
          }>Start</Button>
    );
  }
  
  export default StartButton;