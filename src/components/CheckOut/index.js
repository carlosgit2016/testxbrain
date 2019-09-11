//material-ui
import { Button, Typography } from '@material-ui/core';
// react
import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <Typography>
                Total: R$ {`299,00`}
            </Typography>
            <Button size="medium" variant="contained" color="secondary">
                    FINALIZAR COMPRA
            </Button>
        </div>
    );
}

export default CheckOut;