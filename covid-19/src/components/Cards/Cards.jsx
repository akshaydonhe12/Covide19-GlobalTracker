import React from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import styles from './Cards.module.css';


const Cards = (props) => {
    console.log(props);

    return(
        <div className={Styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={card}>
                    <
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards;