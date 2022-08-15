import React from 'react';
import Grid from '@mui/material/Grid';
import HelpButton from '../components/HelpButton';
import SearchBackButton from '../components/SearchBackButton';

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
    
            </Grid>
        </>
    );  
}

export default SearchScreen;