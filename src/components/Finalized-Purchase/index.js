//react
import React from 'react';

//material-ui
import { Container, Box, Paper, Typography, makeStyles } from '@material-ui/core';

//react-redux
import { connect } from 'react-redux';

const useStyles = makeStyles({
    maxHeight: {
        height: "100vh"
    }
});

const FinalizedPurchase = (props) => {
    const classes = useStyles();

    ((props) => {
        console.log(props);

    })(props)

    return (
        <Container className={classes.maxHeight} style={{ height: "100vh" }} maxWidth="xl" >
            <Box className={classes.maxHeight} height="100vh" display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
                <Box>
                    <Paper>
                        <Typography variant="h4">
                            {`${props.name} \n\r Sua compra no valor de ${props.totalPrice} foi finalizada com sucesso`},
                        </Typography>
                    </Paper>
                </Box>
            </Box>
        </Container>
    );
}

const mapStateProps = (state) => {
    const { productsReducer: { totalPrice } } = state;
    const { form: { clientData: { values: { name } } } } = state;

    return {
        totalPrice,
        name
    }

}

export default connect(mapStateProps)(FinalizedPurchase);
