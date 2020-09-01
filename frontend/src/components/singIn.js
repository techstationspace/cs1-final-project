import React from 'react';
import {TextField, Container, Radio, Paper, Grid, withStyles, FormControl, FormLabel, RadioGroup, FormControlLabel, Button} from '@material-ui/core';

const styles = theme => ({
  marginTop: {
      marginTop: '1rem',
  },
  padding: {
      padding: theme.spacing.unit
  }
});
let nameCourse = "CODING SCHOOL"
class SingIn extends React.Component{
  render(){
    const { classes } = this.props;
      return(
        <Container>
          <h1>Iscrizione al corso "{nameCourse}"</h1>
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
          </Paper>
          <Grid container className={classes.marginTop} >
            <Grid item>
              <Button variant="contained" color="primary">
                Send Email
              </Button>
            </Grid>
          </Grid>
        </Container>
  )  
 }
}
export default withStyles(styles)(SingIn);