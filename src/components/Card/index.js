import { Grid, SvgIcon } from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { Button } from '@material-ui/core';
import { Input } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import React from 'react';
import './style.css';

const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        width: "17em"
    },
    price: {
        fontSize: "1.2rem"
    },
    method: {
        fontSize: "0.7rem"
    },
    fab: {
        fontSize: "0.6em"
    },
    input: {
        textAlign: "center",
        color:"red"
    }
});

const AddComponent = (props) => {

    const classes = useStyles();

    return (
        <Grid container spacing={3}>
            <Grid item xs={3}>
                <Fab aria-label="delete" size="small" className={classes.fab}>
                    <RemoveIcon />
                </Fab>
            </Grid>
            <Grid item xs={6}>
                <Input type='up-down' onChange={value => console.log(value)} className={classes.input} />
            </Grid>
            <Grid item xs={3}>
                <Fab aria-label="delete" size="small" className={classes.fab}>
                    <AddIcon />
                </Fab>
            </Grid>
        </Grid>
    )
}

const CardComponent = (props) => {
    const classes = useStyles();
    const { img, description, price, method } = props.product;
    const [expanded, setExpanded] = React.useState(false);

    function handleExpandClick() {
        setExpanded(!expanded);
    }

    return (
        <Card className={classes.card} onClick={handleExpandClick}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="Contemplative Reptile"
                    height="auto"
                    image={img}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="subtitle2" component="h2">
                        {description}
                    </Typography>
                    <Typography className={classes.price}>
                        R$ {price.toFixed(2)}
                    </Typography>
                    <Typography className={classes.method}>
                        Em até {method.howManyTimes}x de {(price / method.howManyTimes).toFixed(2)}
                    </Typography>
                    <Typography className={classes.method}>
                        R$ {method.inCash.toFixed(2)} à vista (10% de desconto)
                    </Typography>
                    <AddComponent></AddComponent>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}

export default CardComponent;