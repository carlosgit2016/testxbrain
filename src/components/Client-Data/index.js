// material-ui
import { Grid, MenuItem } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
// react
import React from 'react';
//redux-form
import { Field, reduxForm } from 'redux-form'

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

const validate = values => {
    const errors = {}
    const requiredFields = [
        'name',
        'sex',
        'email'
    ]
    requiredFields.forEach(field => {
        if (!values[field]) {
            errors[field] = 'Required'
        }
    })
    if (values.email && (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email))) {
        errors.email = "Endereço de email invalido"
    }
    return errors
}

const renderTextField = ({
    input,
    label,
    meta: { touched, error },
    ...custom
}) => {
    return (

        <TextField
            label={label}
            error={checkError(touched, error)}
            {...input}
            {...custom}
        />
    )
}

const renderSelectField = ({
    input,
    label,
    children,
    meta: { touched, error },
    ...custom
}) => (
        <TextField
            label={label}
            error={checkError(touched, error)}
            {...input}
            children={children}
            {...custom}
        >
        </TextField>
    )



function checkError(touched, error) {
    return touched && (typeof error === 'string');
}

const ClientData = () => {
    const classes = useStyles();
    
    return (
        <form>
            <Grid container spacing={3}>
                <Grid item lg={5}>
                    <Field
                        id="name"
                        name="name"
                        component={renderTextField}
                        label="Nome"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        fullWidth
                        className={classes.textField}
                        variant="outlined"
                        margin="normal"
                        placeholder="Nome do cliente aqui"
                    />
                </Grid>
                <Grid item lg={5}>
                    <Field
                        id="email"
                        name="email"
                        component={renderTextField}
                        fullWidth
                        label="Email"
                        className={classes.textField}
                        placeholder="Digite seu email aqui"
                        margin="normal"
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}>
                    </Field>
                </Grid>
                <Grid item lg={2}>

                    <Field
                        id="sex"
                        name="sex"
                        component={renderSelectField}
                        fullWidth
                        select
                        label="Sexo"
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

                    </Field>
                </Grid>
            </Grid>
        </form>
    )
}

export default reduxForm({ form: 'clientData', validate,destroyOnUnmount:false })(ClientData);