import React, { useState } from "react";
import {
  TextField,
  Container,
  Paper,
  Grid,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "1rem",
  },
  padding: {
    padding: "2rem",
  },
}));
let nameCourse = "CODING SCHOOL";
let emptyData = {
  name: "",
  surname: "",
  email: "",
};
function SingIn({ data, onSubmit }) {
  const classes = useStyles();
  const [form, setForm] = useState(data || emptyData);

  function handleSubmit(event) {
    event.preventDefault();
    console.log(form);
    onSubmit(form);
    // You should see email and password in console.
    // ..code to submit form to backend here...
  }
  function updateData(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  }
  return (
    <Container>
      <h1>Iscrizione al corso "{nameCourse}"</h1>
      <Paper className={classes.padding} elevation={3}>
        <form onSubmit={handleSubmit}>
        <Grid container justify="center" direction="row" className={classes.marginTop} spacing={1}>
          <Grid xs={3} item>
            <TextField
              fullWidth
              required
              name="name"
              value={form.name}
              onInput={updateData}
              label="Name"
            />
          </Grid>
          <Grid xs={3} item>
            <TextField
              fullWidth
              required
              name="surname"
              value={form.surname}
              onInput={updateData}
              label="Surname"
            />
          </Grid>
          </Grid>
          <Grid container justify="center" className={classes.marginTop}>
            <Grid item xs={5}>
            <TextField
              fullWidth
              required
              type="email"
              name="email"
              value={form.email}
              onInput={updateData}
              //onInput={(e) => setForm(e.target.value)}
              label="E-mail"
            />
            </Grid>
            <Grid item xs={1}/>
          </Grid>
        <Grid container justify="center" className={classes.marginTop}>
        <Grid item>
          <Button type="submit"  variant="contained" color="primary">
            Send Email
          </Button>
        </Grid>
      </Grid>
        </form>
      </Paper>
    </Container>
  );
}
export default SingIn;
