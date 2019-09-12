//material-ui
import { Button, Typography } from '@material-ui/core';
// react
import React from 'react';
//react-redux
import { connect } from 'react-redux'
//react-router-dom
import { withRouter } from "react-router-dom";

const CheckOut = (props) => {
    const { formErrors, products } = props;
    ((props) => {
        console.log(props);
    })(props)

    const buyIsDisabled = (formErrors !== undefined) || (products.length < 1);

    function onNavigate() {
        props.history.push('/finish');
    }

    return (
        <div>
            <Typography variant="h5">
                Total: R$ {props.totalPrice.toFixed(2)}
            </Typography>

            <Button size="large" variant="contained" color="secondary" disabled={buyIsDisabled} onClick={onNavigate}>
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
    const { productsReducer: { totalPrice } } = state;

    return {
        products,
        formErrors,
        totalPrice
    }
}

export default connect(mapStateToProps)(withRouter(CheckOut));