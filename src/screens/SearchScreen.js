import React from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import SearchBackButton from '../components/SearchBackButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PageForwardButton from '../components/PageForwardButton';
import PageBackwardButton from '../components/PageBackwardButton';
import SearchProductItem from '../components/SearchProductItem';

import '../css/SearchScreen.css';

function SearchScreen() {
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

                <Grid item id='search-bar-row'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"

                    >
                        <Grid item xs={1}/>
                        <Grid item xs={10}>
                            <TextField 
                                id="product-search-bar" 
                                label="Type product name here" 
                                variant="outlined"
                                autoFocus
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                            <InputAdornment position="start">
                                                <SearchIcon sx={{ width: 50, height: 50}}/>
                                            </InputAdornment>
                                        ),
                                    }}
                                autoComplete="off"
                            />
                        </Grid>
                        <Grid item xs={1}/>
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
                            <PageBackwardButton/>
                        </Grid>
                        <Grid item xs={10}>
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-around"
                                alignItems="center"
                            >
                                <SearchProductItem productName="Banana" />
                                <SearchProductItem productName="Apple" />
                                <SearchProductItem productName="Watermelon" />
                            </Grid>
                        </Grid>
                        <Grid item xs={1}>
                            <PageForwardButton/>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item id='keyboard-row-1'>
                    <Grid
                        container
                        direction="row"
                        justifyContent="center"
                        alignItems="center"
                    >
                        
                    </Grid>
                </Grid>
    
            </Grid>
        </>
    );  
}

export default SearchScreen;