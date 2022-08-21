import React from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import SearchBackButton from '../components/SearchBackButton';
import SearchProductItem from '../components/SearchProductItem';

import apple from '../media/apple.png';
import banana from '../media/banana.png';
import watermelon from '../media/watermelon.png';
import carrot from '../media/carrot.png';

import '../css/ProductCategoryPage.css';

function ProductCategoryPage() {
    const queryParams = new URLSearchParams(window.location.search)
    const category = queryParams.get('category');

    const products = [{name: 'Banana', price: 0.60, category: 'Fruit', image: banana}, {name: 'Apple', price: 0.80, category: 'Fruit', image: apple}, {name: 'Watermelon', price: 1.00, category: 'Fruit', image: watermelon}, {name: 'Carrot', price: 0.40, category: 'Vegetables', image: carrot}]

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                id='search-screen-container'
            >
    
                <Grid item id='category-title-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Grid item xs={2}>
                            <SearchBackButton/>
                        </Grid>
                        <Grid item xs={8}>
                            <h1 id='title-text' className='selected-font'>{category} products</h1>
                        </Grid>
                        <Grid item xs={2}>
                            <HelpButton/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item id='product-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={12}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                {
                                    products.map((item, index) => (
                                            (item.category === category? <SearchProductItem key={index} productName={item.name} productPrice={item.price} productImage={item.image}/> : "" )
                                        )
                                    )
                                }
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
                        
            </Grid>
        </>
    );  
}

export default ProductCategoryPage;