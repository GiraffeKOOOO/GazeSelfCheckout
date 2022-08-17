import React from 'react';
import Button from '@mui/material/Button';

import '../css/KeyboardButton.css';

function KeyboardButton(props) {
    return (
        <Button 
            variant="outlined" 
            id='keyboard-button' 
            onClick={
                () => {
                    props.setSearchString(props.searchString + props.letter)
                }
            }
        >{props.letter}</Button>
    );
  }
  
  export default KeyboardButton;