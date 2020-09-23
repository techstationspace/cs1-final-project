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

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

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

export default function SignUp({ submitForm = () => {} }) {
  const [registerData, setRegisterData] = useState({
    email: "",
    name: "",
    surname: "",
  });

  const updateField = (element) => {
    setRegisterData({
      ...registerData,
      [element.target.id]: element.target.value,
    });
  };

  const classes = useStyles();

  const checkRegister = (registerData) => {
    const bodyParameters = {
      user: registerData,
    };
    axios
      .post("http://localhost:4000/api/users/register/new", bodyParameters)
      .then(function (response) {
        console.log(response.user.name);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
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
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              id="email"
              label="Email"
              type="email"
              value={registerData.email}
              onChange={updateField}
              fullWidth
              autoFocus
              required
            />
            <TextField
              id="name"
              label="Name"
              type="name"
              value={registerData.password}
              onChange={updateField}
              fullWidth
              required
            />
            <TextField
              id="surname"
              label="Surname"
              type="surname"
              value={registerData.password}
              onChange={updateField}
              fullWidth
              required
            />

            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              style={{ textTransform: "none" }}
              onClick={() => {
                checkRegister(registerData); handleClickOpen()
              }}
            >
              Sign Up
            </Button>
            <Dialog
              open={open}
              onClose={handleClose}
              aria-labelledby="alert-dialog-title"
              aria-describedby="alert-dialog-description"
            >
              <DialogTitle id="alert-dialog-title">
                {"Messaggio Coding School Staff"}
              </DialogTitle>
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                Al tuo indirizzo è stata inviata una mail per prosseguire la registrazione. Grazie!
                </DialogContentText>
              </DialogContent>
              <Button onClick={handleClose} color="primary" autoFocus>
            OK
          </Button>
            </Dialog>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
