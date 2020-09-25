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

function CandidacyPage({ userId }) {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState();

  const fetchUser = async () => {
    await fetch(`http://localhost:4000/api/users/register/${userId}`)
    .then((response) => response.json())
     .then(function (response) {
      console.log("ok request");
      console.log(response.payload)
      setUserInfo(response.payload);
    })
    .catch(function (err) {
      console.log(err);
    }); 
  };

  useEffect(() => {
    console.log("in useEffect ok")
    fetchUser();
    console.log(userInfo);
  }, []);

  const confirmCadidacy = () => {
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

  return (
    <Container className={classes.paddingContainer}>
      <h1>Iscrizione al corso "{nameCourse}"</h1>
      <Paper elevation={3} className={classes.paddingForm}>
        {userInfo ?
        <FormSendCandidacy
          data={userInfo}
          onSubmit={(e) => confirmCadidacy(e)}
        />
        :
        'loading'
        }
      </Paper>
    </Container>
  );
}
export default CandidacyPage;
