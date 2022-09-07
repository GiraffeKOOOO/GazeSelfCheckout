import React from 'react';
import Button from '@mui/material/Button';

import '../css/PageForwardButton.css';

function PageForwardButton() {
    return (
        <>
            <Button 
                variant="outlined" 
                id='page-forward-button'
                data-testid="pageForwardButtonTest"
                onClick={ () => console.log('hello') }
            >
                <div id='forward-triangle-div'/>
            </Button>
        </>
    );
  }
  
  export default PageForwardButton;