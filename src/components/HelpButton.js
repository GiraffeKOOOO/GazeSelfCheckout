import React from 'react';
import Button from '@mui/material/Button';
import HelpScreen from '../screens/HelpScreen';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';

import '../css/HelpButton.css';

function HelpButton() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button variant="outlined" id='help-button' onClick={handleOpen}>Help</Button>
            <Modal
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropProps={{
                timeout: 500,
                }}
            >
                    <Fade in={open}>
                        <Box>
                            <HelpScreen
                                handleClose={handleClose}
                            />
                        </Box>
                    </Fade>
                </Modal>
        </>
    );
  }
  
  export default HelpButton;