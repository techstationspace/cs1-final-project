import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import axios from "axios";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage:
      "url(https://techstationpadova.it/wp-content/uploads/2018/04/Logo2018-vert.png)",
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#874399",
  },
}));

  
  export default function LoginView({ submitForm }) {
    const [loginData, setLoginData] = useState({
      email: "",
      password: "",
    });
  

  const updateField = (element) => {
    setLoginData({ ...loginData, [element.target.id]: element.target.value });
  };

  const classes = useStyles();

  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");
  const [isError, setIsError] = useState(false)

  const checkLogin = (loginData) => {
    const bodyParameters = {
      user: loginData,
    };
    axios
      .post("http://localhost:4000/api/login", bodyParameters)
      .then(function (response) {
        setToken(response.data.token);
        setIsLogged(true);
        submitForm(response.data.token, true);
        // console.log(!!token)
      })
      .catch(function (err) {
        console.log(err);
        setIsError(true)
      });
  };


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={loginData.email}
              onChange={updateField}
              fullWidth
              autoFocus
              required
              error = {isError}
            />
            <TextField
              id="password"
              label="Password"
              type="password"
              value={loginData.password}
              onChange={updateField}
              fullWidth
              required
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ textTransform: "none" }}
              onClick={() => checkLogin(loginData)}
            >
              Login
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
  }
