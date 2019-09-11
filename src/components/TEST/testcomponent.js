import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import { Paper } from '@material-ui/core';

class Test extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <Grid container direction="row" justify="center" alignItems="center" spacing={3}>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Ce</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Ca</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Cb</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Cn</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Ce</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Ca</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Cb</Paper>
                </Grid>
                <Grid item lg={3}>
                    <Paper style={{width:"200px", height:"200px"}}>Cn</Paper>
                </Grid>
            </Grid>
        );
    }
}

export default Test;