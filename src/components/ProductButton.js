import React from 'react';
import Button from '@mui/material/Button';

import '../css/ProductButton.css';

function ProductButton(props) {
    return (
        <Button variant="outlined" id='product-button' 
            onClick={
                () => {
                    if(props.ProductName === 'All Products'){
                        window.location.href="all_products";
                    } else {
                        window.location.href=props.ProductName;
                    }
                }
            }
        >{props.ProductName}</Button>
    );
  }
  
  export default ProductButton;