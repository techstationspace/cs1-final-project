import React, { useState } from "react"
import {
  TextField,
  Grid,
  makeStyles,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "2rem",
  },
  padding: {
    padding: "2rem",
  },
}));

function Form({ onSubmit }) {
  const classes = useStyles();
  const [correctPassword, setCorrectPassword] = useState(false);
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  return (
    <form
      onSubmit={(event) => {
        console.log(password);
        event.preventDefault();
      }}
    >
      <Grid style={{ padding: "1.5rem" }} container spacing={2} xs={12}>
        <Grid item xs={6}>
          <TextField
            name="password"
            label="Password"
            type="password"
            required
            onInput={(e) => setPassword(e.target.value)}
            onChange={(e) =>
              confPassword !== e.target.value
                ? setCorrectPassword(false)
                : setCorrectPassword(true)
            }
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            error={!correctPassword}
            id="confirm-password"
            label="Confirm Password"
            type="password"
            required
            //onChange={(e)=>controlPassword(e)}
            onInput={(e) => setConfPassword(e.target.value)}
            onChange={(e) =>
              password !== e.target.value
                ? setCorrectPassword(false)
                : setCorrectPassword(true)
            }
          />
      </Grid>
      <Grid item>      
      <Button
        style={{margin:"1em", color: "white", backgroundColor: "#874399" }}
        variant="contained"
        style={{ marginTop: "2rem" }}
        disabled={correctPassword === true ? false : true}
        type="submit"
        variant="outlined"
        color="primary"
      >
        Send Form
      </Button>
      </Grid>
      </Grid>
    </form>
  );
}
export default Form;

