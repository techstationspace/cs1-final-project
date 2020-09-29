import React, { useState, useEffect } from "react";
import { Paper, Container, Grid, makeStyles } from "@material-ui/core";
import FormSendCandidacy from "../components/FormSendCandidacy";
import ConfirmSingIn from "../components/ConfirmSingIn";
import axios from "axios";
import { useParams } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  marginTop: {
    marginTop: "1rem",
  },
  paddingContainer: {
    padding: "3rem",
  },
  paddingForm: {
    padding: "2rem",
  },
}));
let nameCourse = "CODING SCHOOL";

function CandidacyPage() {
  const classes = useStyles();
  const [userInfo, setUserInfo] = useState();
  const [sendData, setSendData] = useState(false);
  const { userId } = useParams();
  const fetchUser = async () => {
    await fetch(`http://localhost:4000/api/users/register/${userId}`)
      .then((response) => response.json())
      .then(function (response) {
        console.log("ok request");
        console.log(response.payload);
        setUserInfo(response.payload);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("in useEffect ok");
    fetchUser();
    console.log(userInfo);
  }, []);
  const confirmCadidacy = (info) => {
    axios
      .patch(`http://localhost:4000/api/users/register/${userId}`, info)
      .then(function (response) {
        console.log("Ok");
        console.log(response);
        setUserInfo(false);
        setSendData(true);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  return (
    <Container className={classes.paddingContainer}>
      <Grid container alignItems="center" justify="center">
        <Grid item xs={12} sm={12} md={10} lg={8}>
          <Paper elevation={3} className={classes.paddingForm}>
            <h1 style={{ marginTop: "0px" }}>
              Iscrizione al corso "{nameCourse}"
            </h1>
            {userInfo ? (
              <FormSendCandidacy
                data={userInfo}
                onSubmit={(e) => confirmCadidacy(e)}
              />
            ) : sendData ? (
              <ConfirmSingIn />
            ) : (
              "loading"
            )}
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}
export default CandidacyPage;
