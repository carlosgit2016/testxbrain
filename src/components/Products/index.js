import React, { Component } from 'react';
import Card from '../Card';

class Products extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }
    render() {
        return (
            <div>
                This is products
                <Card></Card>
            </div>
        );
    }
}

export default Products;