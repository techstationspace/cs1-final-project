import React, { useState, useEffect } from "react";
import { Paper, Container, makeStyles } from "@material-ui/core";
import FormSendCandidacy from "../components/FormSendCandidacy";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "1rem",
  },
  paddingContainer: {
    padding: "3rem",
  },
  paddingForm: {
    padding: "1rem",
  },
}));
let nameCourse = "CODING SCHOOL";

const CandidacyPage = ({ userId }) => {
  const classes = useStyles();
  const [completeAxios, setCompleteAxios] = useState(false);
  const [userInfo, setUserInfo] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/users/register/${userId}`)
      .then(function (response) {
        !!response.data.payload && setUserInfo(response.data.payload);
        setCompleteAxios(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);

  const confirmCadidacy = (e) => {
    console.log(e);
    // bodyParameters = info;
    // axios
    //   .post("registration-pt2", bodyParameters)
    //   .then(function (response) {
    //     console.log(response);
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
  };
  if (!completeAxios) {
    return (
      <Container className={classes.paddingContainer}>
        <h1>Iscrizione al corso "{nameCourse}"</h1>
        <Paper elevation={3} className={classes.paddingForm}>
          <h1>loading...</h1>
        </Paper>
      </Container>
    );
  } else {
      return (
        <Container className={classes.paddingContainer}>
          <h1>Iscrizione al corso "{nameCourse}"</h1>
          <Paper elevation={3} className={classes.paddingForm}>
            <FormSendCandidacy
              data={userInfo}
              onSubmit={(e) => confirmCadidacy(e)}
            />
          </Paper>
        </Container>
      );
  }
};
export default CandidacyPage;
