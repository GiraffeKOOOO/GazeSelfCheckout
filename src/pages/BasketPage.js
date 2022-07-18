import React from 'react';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import ProductButton from '../components/ProductButton';

import '../css/BasketPage.css';
import PayButton from '../components/PayButton';

function BasketPage() {
  return (
      <Container id='basket-page-container'>

        <Grid container id='first-row'>

          <Grid id='left-grid' item xs={9}>
            asdasd
          </Grid>

          <Grid id='right-grid' item xs={3}>

            <Grid id='help-button-grid' 
              container 
              justifyContent="flex-end" 
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
                ProductName="All Products"
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
              alignItems="center"
            >
                <PayButton/>
            </Grid>

          </Grid>

        </Grid>

      </Container>
  );
}

export default BasketPage;