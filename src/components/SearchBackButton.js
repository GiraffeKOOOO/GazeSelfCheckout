import React from 'react';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

import '../css/SearchBackButton.css';

function SearchBackButton() {
    return (
        <Button 
            variant="outlined" 
            id='search-back-button' 
            onClick={
                () => {
                    setTimeout(() => { window.location.href="/basket_screen" }, 250)
                }
            }
        ><ArrowBackIosNewIcon fontSize="large" style={{"marginRight":"5px"}}/>Cancel</Button>
    );
  }
  
  export default SearchBackButton;