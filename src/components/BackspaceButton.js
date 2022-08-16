import React from 'react';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

import '../css/BackspaceButton.css';

function BackspaceButton() {
    return (
        <Button 
            variant="outlined" 
            id='backspace-button' 
            onClick={
                () => {
                    console.log('Backspace')
                }
            }
        ><BackspaceIcon fontSize="large" style={{"marginRight":"15px"}}/>Backspace</Button>
    );
  }
  
  export default BackspaceButton;