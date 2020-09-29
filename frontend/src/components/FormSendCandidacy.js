import React, { useState, useEffect } from "react";

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
import moment from "moment";

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
  const [birthday, setBirthday] = useState(
    moment(data.birthday).format("YYYY-MM-DD")
  );
  console.log(birthday);
  const [form, setForm] = useState({
    name: !!data.name ? data.name : "",
    surname: !!data.surname ? data.surname : "",
    email: !!data.email ? data.email : "",
    password: !!data.password ? data.password : "",
    gender: !!data.gender ? data.gender : "",
    address: !!data.address ? data.address : "",
    municipality: !!data.municipality ? data.municipality : "",
    zipCode: !!data.zipCode ? data.zipCode : "",
    nationality: !!data.nationality ? data.nationality : "",
    termsCondition: !!data.termsCondition ? data.termsCondition : "",
    privacy: !!data.privacy ? data.privacy : "",
    images: !!data.images ? data.images : "",
    birthday: !!data.birthday ? data.birthday : "",
    verifiedEmail: !!data.verifiedEmail ? data.verifiedEmail : "",
  });
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");

  function handleSubmit(event) {
    form.nationality = nationality;
    form.password = password;
    event.preventDefault();
    form.birthday = birthday; /* moment(birthday).format('yyyy-MM-dd\'T\'HH:mm:ss.SSS\'Z\''); */
    console.log(birthday);
    console.log(form.birthday);
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
    <form onSubmit={handleSubmit}>
      <Grid container direction="row" spacing={4}>
        <Grid xs={12} sm={6} item>
          <TextField
            fullWidth
            required
            name="name"
            value={form.name}
            onInput={updateData}
            label="Name"
          />
        </Grid>
        <Grid xs={12} sm={6} item>
          <TextField
            fullWidth
            required
            name="surname"
            value={form.surname}
            onInput={updateData}
            label="Surname"
          />
        </Grid>
        <Grid xs={12} item>
          <TextField
            disabled={!!data.email ? true : false}
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
      <Grid container className={classes.marginTop} direction="row" spacing={3}>
        <Grid item xs={6}>
          <TextField
            value={data.birthday}
            onInput={(e) => setBirthday(e.target.value)}
            required
            fullWidth
            name="birthday"
            label="Birthday"
            type="date"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Grid>
      </Grid>
      <Grid container className={classes.marginTop}>
        <Grid item xs={12}>
          <FormControl component="fieldset" required name="gender" fullWidth>
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
              <FormControlLabel value="male" control={<Radio />} label="Male" />
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
        <Grid xs={12} item>
          <TextField
            fullWidth
            required
            name="municipality"
            value={form.municipality}
            onInput={updateData}
            label="Municipality"
          />
        </Grid>
        <Grid xs={6} item>
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
        <Grid xs={12} item>
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
        <Grid item xs={6}>
          <TextField
            name="password"
            label="Password"
            type="password"
            fullWidth
            required
            onInput={(e) => setPassword(e.target.value)}
            onChange={(e) =>
              confPassword !== e.target.value
                ? setCorrectPassword(false)
                : setCorrectPassword(true)
            }
          />
        </Grid>
        {!!password && (
          <Grid item xs={6}>
            <TextField
              error={!correctPassword}
              id="confirm-password"
              label="Confirm Password"
              type="password"
              fullWidth
              required
              onInput={(e) => setConfPassword(e.target.value)}
              onChange={(e) =>
                password !== e.target.value
                  ? setCorrectPassword(false)
                  : setCorrectPassword(true)
              }
            />
          </Grid>
        )}
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
            <FormControlLabel value="true" control={<Radio />} label="Accept" />
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
            <FormControlLabel value="true" control={<Radio />} label="Accept" />
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
            <FormControlLabel value="true" control={<Radio />} label="Accept" />
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
        fullWidth
        type="submit"
        variant="outlined"
        style={{ color: "white", backgroundColor: "#874399" }}
      >
        Send Form
      </Button>
    </form>
  );
}
export default FormSendCandidacy;
