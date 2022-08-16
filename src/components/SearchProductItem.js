import React from 'react';
import Button from '@mui/material/Button';

import '../css/SearchProductItem.css';

function SearchProductItem(props) {
    return (
        <Button 
            variant="outlined" 
            id='search-product-item' 
            onClick={
                () => {
                    console.log(props.productName)
                }
            }
        >{props.productName}</Button>
    );
  }
  
  export default SearchProductItem;