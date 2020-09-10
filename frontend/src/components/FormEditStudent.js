import React, { useState } from "react";
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

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "2rem",
  },
  padding: {
    padding: "6rem",
  },
}));
let emptyData = {
  name: "",
  surname: "",
  email: "",
  password: "",
  gender: "",
  address: "",
  municipality: "",
  zipCode: "",
  nationality: { code: "", label: "", phone: "" },
  termsCondition: "",
  privacy: "",
  images: "",
  birthday: "",
};

function Form({ data, onSubmit }) {
  const entryNationality = data? data.nationality : { code: "", label: "", phone: "" }
  const classes = useStyles();
  const [nationality, setValue] = useState( entryNationality);
  const [form, setForm] = useState(data || emptyData);

  function handleSubmit(event) {
    form.nationality = nationality;
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
          <Grid xs={6} item >
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
            getOptionSelected={(option)=> option.label}
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
                value={true}
                control={<Radio />}
                label="Accept"
              />
              <FormControlLabel
                value={false}
                control={<Radio />}
                label="No accept"
              />
            </RadioGroup>
          </FormControl>
        </Grid>
        <Button
          disabled={
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
export default Form;
