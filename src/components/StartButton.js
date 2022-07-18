import React from 'react';
import Button from '@mui/material/Button';

import '../css/StartButton.css';

function StartButton() {
    return (
        <Button variant="contained" id='start-button' onClick={
            () => {
              window.location.href="basket_page";
            }
          }>Start</Button>
    );
  }
  
  export default StartButton;