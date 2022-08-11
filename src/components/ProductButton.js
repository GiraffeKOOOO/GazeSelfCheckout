import React from 'react';
import Button from '@mui/material/Button';

import '../css/ProductButton.css';

function ProductButton(props) {
    return (
        <Button variant="outlined" id='product-button' 
            onClick={
                () => {
                    if(props.ProductName === 'Search Item'){
                        setTimeout(() => { window.location.href="search_item" }, 250)
                    } else {
                        setTimeout(() => { window.location.href=props.ProductName }, 250)
                    }
                }
            }
        >{props.ProductName}</Button>
    );
  }
  
  export default ProductButton;