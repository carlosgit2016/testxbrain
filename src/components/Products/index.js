// material-ui
import { Box, Divider, Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// react
import React from 'react';
// fe-test-master
import Card from '../Card';
import CheckOut from '../CheckOut';
import ClientData from '../Client-Data/index';

const useStyles = makeStyles({
    products: {
        maxWidth: "80em"
    },
    title: {
        paddingTop: "3em",
        paddingBottom: "2em"
    }
});

const Products = (props) => {

    const classes = useStyles();

    return (
        <div className={classes.products}>
            <div className={classes.title} >
                <Typography variant='h5'> Produtos </Typography>
                <Divider></Divider>
            </div>
            <Grid container spacing={3} justify="center" alignItems="center" >
                {
                    props.products.map(product => {
                        return <Grid key={product.img} item lg={3}><Card product={product} ></Card></Grid>
                    })
                }
            </Grid>
            <div className={classes.title} >
                <Typography variant='h5'> Dados do Cliente </Typography>
                <Divider></Divider>
            </div>
            <Box display="flex" flexDirection="row" flexWrap="wrap">
                <Box width="100vw">
                    <ClientData></ClientData>
                </Box>
                <Box display="flex" flexDirection="column" width="100vw" alignSelf="flex-end">
                    <Box alignSelf="flex-end" pb={2} pt={2}>
                        <CheckOut ></CheckOut>
                    </Box>
                </Box>
            </Box>
        </div>
    );
}

export default Products;