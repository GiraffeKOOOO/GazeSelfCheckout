import React from 'react';
import Button from '@mui/material/Button';

import '../css/PageBackwardButton.css';

function PageBackwardButton() {
    return (
        <>
            <Button 
                variant="outlined" 
                id='page-backward-button'
                data-testid="pageBackwardButtonTest"
                onClick={ () => console.log('hello') }
            >
                <div id='backward-triangle-div'/>
            </Button>
        </>
    );
  }
  
  export default PageBackwardButton;