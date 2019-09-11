// material-ui
import { Grid, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// react
import React from 'react';

const useStyles = makeStyles(theme => ({
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    }
}));

const sexs = [
    {
        value: "male",
        label: "Masculino"
    },
    {
        value: "female",
        label: "Feminino"
    }
]

const ClientData = () => {
    const classes = useStyles();
    const [sex, setSex] = React.useState("male")

    const handleSex = sex => setSex(sex.target.value);

    return (
        <form validate="true" autoComplete="off">
            <Grid container spacing={3}>
                <Grid item lg={5}>
                    <TextField
                        id="name"
                        fullWidth
                        label="Nome"
                        className={classes.textField}
                        placeholder="Nome do cliente aqui"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >

                    </TextField>
                </Grid>
                <Grid item lg={5}>
                    <TextField
                        id="email"
                        fullWidth
                        type="email"
                        label="Email"
                        className={classes.textField}
                        placeholder="Digite seu email aqui"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}>

                    </TextField>
                </Grid>
                <Grid item lg={2}>
                    <TextField
                        id="sex"
                        fullWidth
                        select
                        label="Sexo"
                        value={sex}
                        onChange={sex => handleSex(sex)}
                        className={classes.textField}
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                    >
                        {sexs.map(sex => (
                            <MenuItem key={sex.value} value={sex.value}>
                                {sex.label}
                            </MenuItem>
                        ))}
                    </TextField>
                </Grid>
            </Grid>
        </form>
    )
}

export default ClientData;