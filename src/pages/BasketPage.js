import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import ProductButton from '../components/ProductButton';
import PayButton from '../components/PayButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import '../css/BasketPage.css';


function BasketPage() {
  return (
      <>
        <Grid container id='basket-page-grid'>

          <Grid id='left-grid' item xs={10}>
            <Grid id='title-grid' 
              container
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <h2 id="item-counter"><ShoppingCartIcon fontSize='large'/> Cart Total 000</h2>
            </Grid>

            <Grid id='cart-grid' 
              container
              justifyContent="flex-start"
              alignItems="flex-start"
            >
              <Grid id='cart-grid-title' 
                container
                direction="row"
                justifyContent="flex-start"
                alignItems="center"
              >
                <Grid item xs={7.8} id='cart-item-title'>Item name</Grid>
                <Grid item xs={2} id='cart-item-quantity'>Quantity</Grid>
                <Grid item xs={2} id='cart-item-price'>Price</Grid>
              </Grid>
            </Grid>

            <Grid id='bottom-row' 
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="flex-start"
            >
                <Grid item xs={10}>Cancel Button</Grid>
                <Grid item xs={2}>
                  <Grid container>
                    <Grid item>Quantity</Grid>
                    <Grid item>Price</Grid>
                  </Grid>
                </Grid>            
            </Grid>

          </Grid>

          <Grid id='right-grid' item xs={2}>
            <Grid id='help-button-grid' 
              container 
              justifyContent="center" 
              alignItems="center"
            >
              <HelpButton/>
            </Grid>

            <Grid id='product-button-grid' 
              container 
              justifyContent="center" 
              alignItems="center"
            >
              <ProductButton
                ProductName="Search Item"
              />
              <ProductButton
                ProductName="Bakery"
              />
              <ProductButton
                ProductName="Fruit"
              />
              <ProductButton
                ProductName="Vegetables"
              />
            </Grid>

            <Grid id='pay-button-grid' 
              container 
              justifyContent="center" 
              alignItems="flex-end"
            >
                <PayButton/>
            </Grid>
          </Grid>

        </Grid>
      </>
  );
}

export default BasketPage;