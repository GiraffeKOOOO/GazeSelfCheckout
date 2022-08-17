import React from 'react';
import Button from '@mui/material/Button';

import '../css/SpacebarButton.css';

function SpacebarButton(props) {
    return (
        <Button 
            variant="outlined" 
            id='spacebar-button' 
            onClick={
                () => {
                    props.setSearchString(props.searchString + ' ')
                }
            }
        >Spacebar</Button>
    );
  }
  
  export default SpacebarButton;