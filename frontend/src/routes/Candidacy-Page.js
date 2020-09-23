import React from 'react';
import {Paper, Container, makeStyles} from '@material-ui/core';
import FormSendCandidacy from '../components/FormSendCandidacy'
import axios from "axios";

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

function CandidacyPage(dataId){

  const classes = useStyles();

  const bodyParameters = {
    user: dataId,
  };

    axios
      .get(`http://localhost:4000/api/users/register/${dataId}`, bodyParameters)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });

  return(
  <Container className={classes.paddingContainer}>
    <h1>Iscrizione al corso "{nameCourse}"</h1>
    <Paper elevation={3} className={classes.paddingForm}>
      <FormSendCandidacy data={dataId} onSubmit={(e) => console.log(e)}/>
    </Paper>
  </Container>)

}
export default CandidacyPage;