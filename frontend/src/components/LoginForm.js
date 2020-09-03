import React, { useState } from 'react';
import { Container, Paper, withStyles, Grid, TextField, Button, FormControlLabel, Checkbox, makeStyles } from '@material-ui/core';
import { Face, Fingerprint, PinDropSharp } from '@material-ui/icons'

const styled = makeStyles({
    margin: {
        margin: "1rem",
    },
    marginTop: {
        marginTop: "1rem"
    },
    padding: {
        padding: "1rem"
    }
});

const LoginForm = ({loginDataEx, onSubmit}) => {

    const classes = styled()

    const [loginData, setLoginData] = useState({ username:loginDataEx.username, password: loginDataEx.password })
    const updateField = (element) => {
        setLoginData(
            { ...loginData, [element.target.id]: element.target.value }
        )
    }

    //Remember me function needs to be implemented <------------------

    //Forgot Password function needs to be implemented <--------------

 
    return (
        <Container maxWidth="sm">
            <Paper className={classes.padding}elevation={3}>
                <div className={classes.margin}>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Face />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField
                                id="username"
                                label="Username"
                                type="email"
                                value={loginData.username}
                                onInput={updateField}
                                fullWidth
                                autoFocus
                                required
                            />
                        </Grid>
                    </Grid>
                    <Grid container spacing={8} alignItems="flex-end">
                        <Grid item>
                            <Fingerprint />
                        </Grid>
                        <Grid item md={true} sm={true} xs={true}>
                            <TextField 
                            id="password"
                            label="Password"
                            type="password"
                            value={loginData.password}
                            onInput={updateField}
                            fullWidth
                            required />
                        </Grid>
                    </Grid>
                    <Grid container alignItems="center" justify="space-between">
                        <Grid item className={classes.marginTop}>
                            <FormControlLabel control={
                                <Checkbox
                                    color="primary"
                                />
                            } label="Remember me" />
                        </Grid>
                        <Grid item className={classes.marginTop}>
                            <Button
                            disableFocusRipple 
                            disableRipple 
                            style={{ textTransform: "none" }} 
                            variant="text" color="primary">
                            Forgot password ?
                            </Button>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" style={{ marginTop: '10px' }}>
                        <Button 
                        variant="outlined" 
                        color="primary" 
                        style={{ textTransform: "none" }} 
                        onClick={() => onSubmit(loginData)}> 
                        Login 
                        </Button>
                    </Grid>
                </div>
            </Paper>
        </Container>
    );
}

export default LoginForm;
