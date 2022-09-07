import React  from 'react';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import QuantitySelectModal from '../screens/QuantitySelectModal';

import '../css/SearchProductItem.css';

function addZeroes(number) {
    var integer = Number(number);
    
    if (isNaN(integer)) {
        return 0;
    }

    if (String(integer).split(".").length < 2 || String(integer).split(".")[1].length<=2 ){
      integer = integer.toFixed(2);
    }

    return integer;
  }

function SearchProductItem(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Button 
                variant="outlined" 
                id='search-product-item' 
                data-testid="searchProductItemTest"
                onClick={
                    () => {
                        handleOpen()
                    }
                }
            >
                <Grid
                    container
                    direction="column"
                    justifyContent="center"
                    alignItems="center"
                >
                    <img src={props.productImage} alt="itemButtonImage" id='item-button-image'/>
                    <p id='item-button-text' className='selected-font'>{props.productName}</p>
                    <p id='item-price-text' className='selected-font'>Price: £{addZeroes(props.productPrice)}</p>
                </Grid>
                <Modal
                    open={open}
                    onClose={handleClose}
                    closeAfterTransition
                    BackdropProps={{
                    timeout: 500,
                    }}
                >
                    <Fade in={open}>
                        <Box id='quantity-select-modal-box'>
                            <QuantitySelectModal
                                handleClose={handleClose}
                                productName={props.productName} 
                                productPrice={props.productPrice}
                                productImage={props.productImage}
                            />
                        </Box>
                    </Fade>
                </Modal>        
            </Button>
        </>
    );
  }
  
  export default SearchProductItem;