import React from 'react';
import {useHistory} from "react-router-dom";
import { Container, Paper, Grid, makeStyles, Button } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: '1rem',
  },
  padding: {
    padding: '2rem'
  }
}))
let nameCourse = "CODING SCHOOL"
function ConfirmSingIn() {
  const classes = useStyles();
  const history = useHistory();
  const navigateTo = () => history.push('/api/login');
    return (
      <Container>
          <h1>COMPLIMENTI HAI COMPLETATO L’ISCRIZIONE AL CORSO “{nameCourse}”!!</h1>
          <h4>Entrando in questo link entrerai nel portale dei corsi di Tech Station dove potrai trovare eventuali esercizi per la selezione dei candidati.</h4>
          <h3>Buona Fortuna!!!</h3>
        <Grid container className={classes.marginTop} >
          <Grid item>
            <Button  variant="contained" color="primary" onClick={navigateTo} >
              Entra
              </Button>
          </Grid>
        </Grid>
      </Container>
    )
  }
export default ConfirmSingIn;