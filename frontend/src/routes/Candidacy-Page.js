import React from 'react';
import {Paper, Container, makeStyles} from '@material-ui/core';
import FormSendCandidacy from '../components/FormSendCandidacy'

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "1rem",
  },
  paddingContainer: {
    padding: "3rem",
  },
  paddingForm:{
    padding: "1rem"
  }
}));
let nameCourse = "CODING SCHOOL";

function CandidacyPage(data){
  const classes = useStyles();
  return(
  <Container className={classes.paddingContainer}>
    <h1>Iscrizione al corso "{nameCourse}"</h1>
    <Paper elevation={3} className={classes.paddingForm}>
      <FormSendCandidacy data={data} onSubmit={(e) => console.log(e)}/>
    </Paper>
  </Container>)

}
export default CandidacyPage;