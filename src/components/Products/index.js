import { Divider, Typography } from '@material-ui/core';
import React, { Component } from 'react';
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
                {
                    this.props.products.map(product => {
                        return <Card product={product} ></Card>
                    })
                }
            </div>
        );
    }
}

export default Products;