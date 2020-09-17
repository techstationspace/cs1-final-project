import React, { useState } from "react";
import {
  Container,
  Paper,
  Grid,
  TextField,
  Button,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import { Face, Fingerprint } from "@material-ui/icons";

// TO DO LIST:
//"Remember me" function needs to be implemented
//"Forgot Password" function needs to be implemented

function LoginForm({ submitForm = () => {} }) {
  const [loginData, setLoginData] = useState({
    username: "",
    password: "",
  });


  const updateField = (element) => {
    setLoginData({ ...loginData, [element.target.id]: element.target.value });
  };

  return (
    <Container maxWidth="sm">
      <Paper style={{ padding: "2rem" }} elevation={3}>
        <Grid container spacing={8}>
          <Grid item>
            <Grid container spacing={2} alignItems="flex-end">
              <Grid item xs={12}>
                <h1 style={{ margin: 0 }}>Login</h1>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item xs={1}>
                    <Face />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="username"
                      label="Username"
                      type="email"
                      value={loginData.username}
                      onChange={updateField}
                      fullWidth
                      autoFocus
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={1} alignItems="flex-end">
                  <Grid item xs={1}>
                    <Fingerprint />
                  </Grid>
                  <Grid item xs={11}>
                    <TextField
                      id="password"
                      label="Password"
                      type="password"
                      value={loginData.password}
                      onChange={updateField}
                      fullWidth
                      required
                    />
                  </Grid>
                </Grid>
              </Grid>
              <>
              {/*
                <Grid item xs={12}>
                  <Grid container justify="space-between" spacing={1}>
                    <Grid item>
                      <FormControlLabel
                        control={<Checkbox color="primary" />}
                        label="Remember me"
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        disableFocusRipple
                        disableRipple
                        style={{ textTransform: "none" }}
                        variant="text"
                        color="primary"
                      >
                        Forgot password ?
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
              */}
              </>
            </Grid>
            <Grid container justify="center" style={{ marginTop: "10px" }}>
              <Button
                fullWidth
                variant="outlined"
                color="primary"
                style={{ textTransform: "none" }}
                onClick={() => submitForm(loginData)}
              >
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default LoginForm;
