import React, { useState, useContext } from 'react';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import TextField from '@mui/material/TextField';
import QuantityButton from '../components/QuantityButton';
import CartContext from '../components/CartContext';

import '../css/QuantitySelectModal.css';

function QuantitySelectModal(props) {
    const { addToCart } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
    const keyboardRow1 = [1, 2, 3];
    const keyboardRow2 = [4, 5, 6];
    const keyboardRow3 = [7, 8, 9];

    console.log(props.productName, props.productPrice)

    return (
        <>
            <Grid 
                container
                direction="column" 
                id='quantity-select-grid'
            >
                <Grid item id='quantity-title-grid-item'>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="center"
                        id='help-title-column-grid'
                    >
                        <Grid item><p id='quantity-instruction-text' className='selected-font instruction-text margin-5'>Please select the quantity of the item</p></Grid>
                    </Grid>
                </Grid>

                <Grid item id='quantity-body-grid-item'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                        id='help-content-column-grid'
                    >
                        <Grid item xs={2}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="center"
                                id='quantity-cancel-grid'
                            >
                                <Button 
                                    variant="outlined" 
                                    id='cancel-modal-button' 
                                    onClick={
                                        () => {
                                            setTimeout(() => { props.handleClose() }, 250)
                                        }
                                    }
                                >
                                    <ArrowBackIosNewIcon fontSize="large" style={{"marginRight":"5px"}}/>Cancel
                                </Button>
                            </Grid>
                        </Grid>

                        <Grid item xs={8}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="center"
                                alignItems="center"
                            >
                                <TextField 
                                    id="quantity-input-bar" 
                                    label="Quantity" 
                                    variant="outlined"
                                    autoFocus
                                    autoComplete="off"
                                    value={quantity}
                                />

                                <Grid item id='keyboard-row-1'>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                    >
                                        {
                                            keyboardRow1.map(
                                                (iterator, key) => <QuantityButton key={key} number={iterator} setQuantity={setQuantity}/>
                                            )
                                        }
                                    </Grid>
                                </Grid>

                                <Grid item id='keyboard-row-2'>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                    >
                                        {
                                            keyboardRow2.map(
                                                (iterator, key) => <QuantityButton key={key} number={iterator} setQuantity={setQuantity}/>
                                            )
                                        }
                                    </Grid>
                                </Grid>

                                <Grid item id='keyboard-row-3'>
                                    <Grid
                                        container
                                        direction="row"
                                        justifyContent="space-evenly"
                                        alignItems="center"
                                    >
                                        {
                                            keyboardRow3.map(
                                                (iterator, key) => <QuantityButton key={key} number={iterator} setQuantity={setQuantity}/>
                                            )
                                        }
                                    </Grid>
                                </Grid>

                            </Grid>
                        </Grid>

                        <Grid item xs={2}>
                            <Grid
                                container
                                direction="column"
                                justifyContent="flex-end"
                                alignItems="center"
                                id='quantity-confirm-grid'
                            >
                                <Button 
                                    variant="outlined" 
                                    id='confirm-modal-button' 
                                    onClick={
                                        () => {
                                            addToCart(props.productName, props.productPrice, quantity, props.productImage)
                                            setTimeout(() => { props.handleClose() }, 150)
                                            setTimeout(() => { window.location.href="../basket_screen" }, 550)
                                        }
                                    }
                                >
                                    Confirm<CheckCircleOutlineIcon fontSize="large" style={{"marginLeft":"10px"}}/>
                                </Button>
                            </Grid>
                        </Grid>

                    </Grid>
                </Grid>

            </Grid>
        </>
    );
  }
  
  export default QuantitySelectModal;