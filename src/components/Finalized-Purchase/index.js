//react
//material-ui
import { Box, Container, makeStyles, Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import React from 'react';
//react-redux
import { connect } from 'react-redux';

const useStyles = makeStyles({
    maxHeight: {
        height: "100vh"
    },
    card: {
        maxWidth: 345,
    },
    img: {
        height: "200px",
        width: "200px"
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
                    <Card
                        className={classes.card}
                    >
                        <CardContent>
                            <Typography variant="h6" align="center">
                            {`${props.name},`}
                            </Typography>
                            <Typography variant="body2" component="p" align="center">
                                {`Sua compra no valor de R$ ${props.totalPrice.toFixed(2)} foi finalizada com sucesso`},
                            </Typography>
                            <CardMedia
                                image="/assets/purchase.png"
                                className={classes.img}
                                component="img"
                                alt="purchase image"
                            >
                            </CardMedia>
                            <Button size="large" variant="contained" color="secondary">
                                <Typography style={{ color: "#fff9f5" }} color="textPrimary">
                                    FINALIZAR COMPRA
                                </Typography>
                            </Button>
                        </CardContent>
                    </Card>
                </Box>
            </Box>
        </Container>
    );
}

const mapStateProps = (state) => {
    /* const { productsReducer: { totalPrice } } = state;
    const { form: { clientData: { values: { name } } } } = state;
 */
    const totalPrice = 5798;
    const name = "Carlos Gabriel Goiani Flor";
    return {
        totalPrice,
        name
    }

}

export default connect(mapStateProps)(FinalizedPurchase);
