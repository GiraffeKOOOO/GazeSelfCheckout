import React from 'react';
import Button from '@mui/material/Button';
import BackspaceIcon from '@mui/icons-material/Backspace';

import '../css/BackspaceButton.css';

function BackspaceButton(props) {
    return (
        <Button 
            variant="outlined" 
            id='backspace-button'
            data-testid="backspaceButtonTest"  
            onClick={
                () => {
                    props.setSearchString(props.searchString.slice(0, -1));
                }
            }
        ><BackspaceIcon fontSize="large" style={{"marginRight":"15px"}}/>Backspace</Button>
    );
  }
  
  export default BackspaceButton;