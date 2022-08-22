import React, { useContext } from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import ProductButton from '../components/ProductButton';
import PayButton from '../components/PayButton';
import BackStartButton from '../components/BackStartButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import BasketItem from '../components/BasketItem';
import CartContext from '../components/CartContext';

import '../css/BasketScreen.css';

function BasketScreen() {
  const { cartItems, cartTotal, cartQuantity } = useContext(CartContext);

  return (
      <>
        <Grid container id='basket-page-grid'>

          <Grid id='left-grid' item xs={10}>
            <Grid id='title-grid' 
              container
              justifyContent="center"
            >
              <h2 id="item-counter"><ShoppingCartIcon fontSize='large'/> Cart Total {cartQuantity}</h2>
            </Grid>

            <Grid id='cart-grid' 
              container
              direction="column"
            >
              <Grid id='cart-grid-title' 
                container
                direction="row"
              >
                <Grid item xs={7.8} id='cart-item-title'>Item name</Grid>
                <Grid item xs={2} id='cart-item-quantity'>Quantity</Grid>
                <Grid item xs={2} id='cart-item-price'>Price</Grid>
              </Grid>

              <Grid id='cart-item-grid' 
                container
              >
                {cartItems.map((item, index) => (
                  <BasketItem 
                      key={index} 
                      itemImage={item.image} 
                      itemName={item.name} 
                      itemQuantity={item.quantity} 
                      itemPrice={item.price}
                    />
                ))}
              </Grid>
              
            </Grid>

            <Grid id='bottom-row' 
              container
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
            >
                <Grid item xs={10}><BackStartButton/></Grid>
                <Grid item xs={2}>
                  <Grid 
                    container
                    direction="column"
                    justifyContent="flex-start"
                    alignItems="center"
                  >
                    <Grid item><h1 className='cart-total-text'>Subtotal</h1></Grid>
                    <Grid item><h1 className='cart-total-text'>£{cartTotal}</h1></Grid>
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

export default BasketScreen;