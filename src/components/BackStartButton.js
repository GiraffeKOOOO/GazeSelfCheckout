import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../css/BackStartButton.css';

function BackStartButton() {
    return (
        <Button 
            variant="outlined" 
            id='back-start-button' 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="/" }, 250)
                }
            }
        ><ArrowBackIosNewIcon fontSize="large" style={{"marginRight":"5px"}}/>Cancel</Button>
    );
  }
  
  export default BackStartButton;