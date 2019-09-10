import { Divider, Typography } from '@material-ui/core';
import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import Card from '../Card';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {

        return (

            <div>
                <Typography> Produtos </Typography>
                <Divider></Divider>
                <Grid container spacing={3}>
                    {
                        this.props.products.map(product => {
                            return <Grid key={product.img} item xs><Card product={product} ></Card></Grid>
                        })
                    }
                </Grid>
            </div>
        );
    }
}

export default Products;