import React, { useState, useEffect } from "react";
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';
import { makeStyles } from "@material-ui/core/styles";
import {
  TextField,
  Radio,
  Grid,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Button,
} from "@material-ui/core";
import countries from "./list-nations";
import { Autocomplete } from "@material-ui/lab";
import {MuiPickersUtilsProvider, KeyboardDatePicker} from "@material-ui/pickers"
import moment from "moment";;

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "2rem",
  },
  padding: {
    padding: "2rem",
  },
}));

function FormSendCandidacy({ data, onSubmit }) {
  console.log(data);
  const entryNationality = data
    ? data.nationality
    : { code: "", label: "", phone: "" };

  const classes = useStyles();
  const [correctPassword, setCorrectPassword] = useState(false);
  const [nationality, setValue] = useState(entryNationality);
  const [birthday, setBirthday] = useState(moment().format("DD-MM-YYYY"))
  const [form, setForm] = useState({
    name: !!data.name? data.name : "",
    surname: !!data.surname? data.surname : "",
    email: !!data.email? data.email : "",
    password: !!data.password? data.password : "",
    gender: !!data.gender? data.gender : "",
    address: !!data.address? data.address : "",
    municipality: !!data.municipality? data.municipality : "",
    zipCode: !!data.zipCode? data.zipCode : "",
    nationality: !!data.nationality? data.nationality : "",
    termsCondition: !!data.termsCondition? data.termsCondition : "",
    privacy: !!data.privacy? data.privacy : "",
    images: !!data.images? data.images : "",
    birthday: !!data.birthday? data.birthday : "",
    verifiedEmail: !!data.verifiedEmail? data.verifiedEmail : "",
  });
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  function handleSubmit(event) {
    form.nationality = nationality;
    form.password = password;
    event.preventDefault();
    form.birthday= birthday;
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
    <div className={classes.padding}>
      <form onSubmit={handleSubmit}>
        <Grid container direction="row" spacing={4}>
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
          <Grid item xs={6}></Grid>
          <Grid xs={6} item>
            <TextField
              disabled={!!data.email? true : false}
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
        </Grid>
        <Grid
          container
          className={classes.marginTop}
          direction="row"
          spacing={3}
        >
          <Grid item>
          <TextField
              value={form.birthday}
              onInput={updateData}
              required
              name="birthday"
              label="Birthday"
              type="date"
              InputLabelProps={{
                shrink: true,
              }}
            />
            {/* <MuiPickersUtilsProvider libInstance={moment} utils={DateFnsUtils}>
        <KeyboardDatePicker
          margin="normal"
          label="Birthday"
          required
          name="birthday"
          format="MM/gg/yyyy"
          value={birthday}
          onChange={(event, newValue) => {
            setBirthday(newValue);
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
            </MuiPickersUtilsProvider> */}
        
          </Grid>
        </Grid>
        <Grid container className={classes.marginTop}>
          <Grid item>
            <FormControl component="fieldset" required name="gender">
              <FormLabel component="legend">Gender</FormLabel>
              <RadioGroup
                row
                aria-label="gender"
                value={form.gender}
                onChange={updateData}
                name="gender"
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
                <FormControlLabel
                  value="notSpecified"
                  control={<Radio />}
                  label="Not specified"
                />
              </RadioGroup>
            </FormControl>
          </Grid>
        </Grid>
        <Grid container direction="row" spacing={4}>
          <Grid xs={3} item>
            <TextField
              fullWidth
              required
              name="municipality"
              value={form.municipality}
              onInput={updateData}
              label="Municipality"
            />
          </Grid>
          <Grid xs={3} item>
            <TextField
              fullWidth
              required
              name="zipCode"
              type="number"
              value={form.zipCode}
              onInput={updateData}
              label="Zip Code"
            />
          </Grid>
          <Grid item xs={6}></Grid>
          <Grid xs={6} item>
            <TextField
              multiline
              name="address"
              fullWidth
              value={form.address}
              onInput={updateData}
              label="Address"
              required
            />
          </Grid>
        </Grid>
        <Grid container className={classes.marginTop}>
          <Autocomplete
            name="nationality"
            value={nationality}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
            style={{ width: 300 }}
            options={countries}
            getOptionSelected={(option) => option.label}
            classes={{
              option: classes.option,
            }}
            autoHighlight
            getOptionLabel={(option) => option.label}
            renderOption={(option) => (
              <React.Fragment>{option.label}</React.Fragment>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Nationality"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password", // disable autocomplete and autofill
                }}
              />
            )}
          />
        </Grid>
        <Grid container className={classes.marginTop} spacing={3}>
          <Grid item>
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
          <Grid item>
            <TextField
              error={!correctPassword}
              id="confirm-password"
              label="Confirm Password"
              type="password"
              required
              onInput={(e) => setConfPassword(e.target.value)}
              onChange={(e) =>
                password !== e.target.value
                  ? setCorrectPassword(false)
                  : setCorrectPassword(true)
              }
            />
          </Grid>
        </Grid>
        <Grid container className={classes.marginTop}>
          <FormControl component="fieldset">
            <FormLabel component="legend">
              Accept the terms and condition
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="termsCondition"
              //defaultValue={form.termsCondition}
              value={form.termsCondition}
              onChange={updateData}
              required
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Accept"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="No accept"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container className={classes.marginTop}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">Accept the privacy policy</FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="privacy"
              //defaultValue={form.privacy}
              value={form.privacy}
              onChange={updateData}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Accept"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="No accept"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Grid container className={classes.marginTop}>
          <FormControl component="fieldset" required>
            <FormLabel component="legend">
              Agreement to the use of images
            </FormLabel>
            <RadioGroup
              row
              aria-label="gender"
              name="images"
              //defaultValue={form.images}
              value={form.images}
              onChange={updateData}
            >
              <FormControlLabel
                value="true"
                control={<Radio />}
                label="Accept"
              />
              <FormControlLabel
                value="false"
                control={<Radio />}
                label="No accept"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button
          className={classes.marginTop}
          disabled={
            correctPassword === true &&
            form.privacy === "true" &&
            form.termsCondition === "true"
              ? false
              : true
          }
          type="submit"
          variant="outlined"
          color="primary"
        >
          Send Form
        </Button>
      </form>
    </div>
  );
}
export default FormSendCandidacy;
