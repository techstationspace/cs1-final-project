import React from 'react';
import {TextField, Container, Radio, Paper, Grid, withStyles, FormControl, FormLabel, RadioGroup, FormControlLabel} from '@material-ui/core';
import countries from './list-nations'
import {Autocomplete} from '@material-ui/lab'

const styles = theme => ({
  marginTop: {
      marginTop: '1rem',
  },
  padding: {
      padding: theme.spacing.unit
  }
});

class CanddidacyPage extends React.Component{
  render(){
    const { classes } = this.props;
      return(
        <Container>
          <Paper className={classes.padding} elevation={3}>
            <Grid container direction="row" spacing={3}>
              <Grid justify="flex-start" alignItems="flex-start" item >
                <TextField required id="standard-basic" label="Name" />
              </Grid>
              <Grid justify="flex-start" alignItems="flex-start" item >
                <TextField required id="standard-basic" label="Surname" />
              </Grid>
            </Grid>
            <Grid container className={classes.marginTop}>
                <TextField required id="Email" label="E-mail"/>
            </Grid>
            <Grid container className={classes.marginTop} direction="row" spacing={3}>
              <Grid justify="flex-start" alignItems="flex-start" item>
              <TextField
                required
                id="date"
                label="Birthday"
                type="date"
                defaultValue="2017-05-24"
                InputLabelProps={{
                shrink: true,
                }}
              />
              </Grid>
              <Grid justify="flex-start" alignItems="flex-start" item >
                <FormControl component="fieldset" required>
                  <FormLabel component="legend">Gender</FormLabel>
                  <RadioGroup row aria-label="gender" name="gender1">
                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                    <FormControlLabel value="notSpecified" control={<Radio />} label="Not specified" />
                  </RadioGroup>
                </FormControl>
              </Grid>
            </Grid>
            <Grid container >
                <TextField style={{marginRight: '5rem'}} id="Address" fullWidth label="Address" required/>
            </Grid>
            <Grid container>
              <Autocomplete required
                id="country-select-demo"
                style={{ width: 300, marginTop: '1rem' }}
                options={countries}
                classes={{
                  option: classes.option,
                }}
                autoHighlight
                getOptionLabel={(option) => option.label}
                renderOption={(option) => (
                  <React.Fragment>
                    <span></span>
                    {option.label}
                  </React.Fragment>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Choose a country"
                    variant="outlined"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: 'new-password', // disable autocomplete and autofill
                    }}
                  />
                )}
              />
            </Grid>
            <Grid container className={classes.marginTop} spacing={3}>
              <Grid item>
                <TextField id="password" label="Password" type="password" required />
              </Grid>
              <Grid item>
                <TextField id="confirm-password" label="Confirm Password" type="password" required />
              </Grid>
            </Grid>
            <Grid container className={classes.marginTop}>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Accept the terms and condition</FormLabel>
                <RadioGroup  row aria-label="gender" name="termsCondition" >
                  <FormControlLabel value="yes" control={<Radio />} label="Accept" />
                  <FormControlLabel value="no" control={<Radio />} label="No accept" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid container className={classes.marginTop}>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Accept the privacy policy</FormLabel>
                <RadioGroup  row aria-label="gender" name="termsCondition">
                  <FormControlLabel value="yes" control={<Radio />} label="Accept" />
                  <FormControlLabel value="no" control={<Radio />} label="No accept" />
                </RadioGroup>
              </FormControl>
            </Grid>
            <Grid container className={classes.marginTop}>
              <FormControl component="fieldset" required>
                <FormLabel component="legend">Agreement to the use of images</FormLabel>
                <RadioGroup  row aria-label="gender" name="termsCondition">
                  <FormControlLabel value="yes" control={<Radio />} label="Accept" />
                  <FormControlLabel value="no" control={<Radio />} label="No accept" />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Paper>
        </Container>
  )  
 }
}
export default withStyles(styles)(CanddidacyPage);