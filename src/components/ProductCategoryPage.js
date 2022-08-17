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
    const products = [{name: 'Banana', image: banana}, {name: 'Apple', image: apple}, {name: 'Watermelon', image: watermelon}, {name: 'Carrot', image: carrot}]

    return (
        <>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                id='search-screen-container'
            >
    
                <Grid item id='search-title-row'>
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
                            <h1 id='title-text' className='selected-font'>Product Search</h1>
                        </Grid>
                        <Grid item xs={2}>
                            <HelpButton/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item id='product-result-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        <Grid item xs={1}>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                {
                                    products.map((item, index) => (
                                            <SearchProductItem key={index} productName={item.name} image={item.image}/>
                                        )
                                    )
                                }
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                        </Grid>
                    </Grid>
                </Grid>
                        
            </Grid>
        </>
    );  
}

export default ProductCategoryPage;