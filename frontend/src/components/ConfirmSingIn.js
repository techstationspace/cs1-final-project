import React from 'react';
import {Container, Paper, Grid, withStyles,  Button} from '@material-ui/core';

const styles = theme => ({
  marginTop: {
      marginTop: '1rem',
  },
  padding: {
      padding: '2rem'
  }
});
let nameCourse = "CODING SCHOOL"
class ConfirmSingIn extends React.Component{
  render(){
    const { classes } = this.props;
      return(
        <Container>
          <h1>Iscrizione al corso "{nameCourse}"</h1>
          <Paper className={classes.padding} elevation={3}>
            <h1>COMPLIMENTI HAI COMPLETATO L’ISCRIZIONE AL CORSO “{nameCourse}”!!</h1>
            <h4>Entrando in questo link entrerai nel portale dei corsi di Tech Station dove potrai trovare eventuali esercizi per la selezione dei candidati.</h4>
            <h3>Buona Fortuna!!!</h3>
          </Paper>
          <Grid container className={classes.marginTop} >
            <Grid item>
              <Button variant="contained" color="primary">
                Entra
              </Button>
            </Grid>
          </Grid>
        </Container>
  )  
 }
}
export default withStyles(styles)(ConfirmSingIn);