//react
import React from 'react';
//material-ui
import { Box, Container, makeStyles, Typography, Button } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Grid from '@material-ui/core/Grid';
//react-redux
import { connect } from 'react-redux';
//fe-test-master
import { resetState } from '../../redux/actions/index';

const useStyles = makeStyles({
    maxHeight: {
        height: "100vh"
    },
    card: {
        maxWidth: 345,
    },
    img: {
    }
});

const FinalizedPurchase = (props) => {
    const classes = useStyles();

    const onFinish = () => {
        props.history.push('/');
        props.dispatch(resetState())
    }

    return (
        <Container className={classes.maxHeight} style={{ height: "100vh" }} maxWidth="xl" >
            <Box className={classes.maxHeight} height="100vh" display="flex" flexDirection="row" justifyContent="center" alignItems="center" >
                <Box>

                    <Card
                        className={classes.card}
                    >
                        <CardContent>
                            <Grid container spacing={3} justify="center" alignItems="center">
                                <Grid item>

                                    <Typography variant="h6" align="center">
                                        {`${props.name},`}
                                    </Typography>
                                </Grid>
                                <Grid item >

                                    <Typography variant="body2" component="p" align="center">
                                        {`Sua compra no valor de R$ ${props.totalPrice.toFixed(2)} foi finalizada com sucesso`},
                                    </Typography>
                                </Grid>
                                <Grid item>
                                    <CardMedia
                                        image="/assets/purchase.png"
                                        className={classes.img}
                                        component="img"
                                        alt="purchase image"
                                    >
                                    </CardMedia>
                                </Grid>
                                <Grid>
                                    <Button size="large" variant="contained" color="secondary" onClick={onFinish}>
                                        <Typography style={{ color: "#fff9f5" }} color="textPrimary">
                                            FINALIZAR COMPRA
                                        </Typography>
                                    </Button>
                                </Grid>
                            </Grid>



                        </CardContent>
                    </Card>
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
