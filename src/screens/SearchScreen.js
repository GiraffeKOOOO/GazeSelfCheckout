import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import SearchBackButton from '../components/SearchBackButton';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import SearchIcon from '@mui/icons-material/Search';
import PageForwardButton from '../components/PageForwardButton';
import PageBackwardButton from '../components/PageBackwardButton';
import SearchProductItem from '../components/SearchProductItem';
import KeyboardButton from '../components/KeyboardButton';
import SpacebarButton from '../components/SpacebarButton';
import BackspaceButton from '../components/BackspaceButton';

import apple from '../media/apple.png';
import banana from '../media/banana.png';
import watermelon from '../media/watermelon.png';
import carrot from '../media/carrot.png';

import '../css/SearchScreen.css';

function SearchScreen() {
    const [searchString, setSearchString] = useState("");

    const keyboardRow1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
    const keyboardRow2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const products = [{name: 'banana', image: banana}, {name: 'apple', image: apple}, {name: 'watermelon', image: watermelon}, {name: 'carrot', image: carrot}]

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
                                value={searchString}
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
                                {
                                    products.filter(product => product.name.includes(searchString)).slice(0,3).map((item, index) => (
                                            <SearchProductItem key={index} productName={item.name} image={item.image}/>
                                        )
                                    )
                                }
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
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        {
                            keyboardRow1.map(
                                (iterator) => <KeyboardButton key={iterator} letter={iterator} setSearchString={setSearchString} searchString={searchString}/>
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
                                (iterator) => <KeyboardButton key={iterator} letter={iterator} setSearchString={setSearchString} searchString={searchString}/>
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
                        <SpacebarButton setSearchString={setSearchString} searchString={searchString}/>
                        <BackspaceButton setSearchString={setSearchString} searchString={searchString}/>
                    </Grid>
                </Grid>
                        
            </Grid>
        </>
    );  
}

export default SearchScreen;