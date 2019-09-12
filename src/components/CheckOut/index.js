//material-ui
import { Button, Typography } from '@material-ui/core';
// react
import React from 'react';
//react-redux
import { connect } from 'react-redux'

const CheckOut = (props) => {
    const {formErrors, products} = props;
    ((props) => {
        console.log(props);
    })(props)

    const buyIsDisabled = (formErrors !== undefined) || (products.length < 1);

    return (
        <div>
            <Typography variant="h5">
                Total: R$ {
                    props.products.reduce((accumulatorProducts, products) => {
                        accumulatorProducts += (products.product.price * products.amount);
                        return accumulatorProducts;
                    }, 0)
                }
            </Typography>
            <Button size="large" variant="contained" color="secondary" disabled={buyIsDisabled}>
                <Typography style={{ color: "#fff9f5" }} color="textPrimary">
                    FINALIZAR COMPRA
                </Typography>
            </Button>
        </div>
    );
}

const mapStateToProps = (state /*, ownProps*/) => {

    const { productsReducer: { products } } = state;
    const { form: { clientData: { syncErrors: formErrors } } } = state;
    
    return {
        products,
        formErrors
    }
}


export default connect(mapStateToProps)(CheckOut);