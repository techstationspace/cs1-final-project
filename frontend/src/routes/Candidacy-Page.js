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
  const [candidateInfo, setCandidateInfo] = useState(
    <Container className={classes.paddingContainer}>
    <h1>Iscrizione al corso "{nameCourse}"</h1>
    <Paper elevation={3} className={classes.paddingForm}>
      <h1>loading...</h1>
    </Paper>
  </Container>
  )

  let response;

  const fetchUser = async () => {
    response = await fetch(`http://localhost:4000/api/users/register/${userId}`)
    .then((response) => response.json())
     .then(function (response) {
       setCandidateInfo(formCandidacy)
      console.log(response)
      setUserInfo(response.payload);
      //setCompleteAxios(true);
    })
    .catch(function (err) {
      console.log(err);
    }); 
  };

  const formCandidacy = <Container className={classes.paddingContainer}>
  <h1>Iscrizione al corso "{nameCourse}"</h1>
  <Paper elevation={3} className={classes.paddingForm}>
    <FormSendCandidacy
      data={userInfo}
      onSubmit={(e) => confirmCadidacy(e)}
    />
  </Paper>
</Container>
  
  useEffect( () => {
     fetchUser(userInfo)
   }, [setCompleteAxios]
  );

  /* useEffect(() => {
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
 */
const [isRegister, setIsRegister] = useState(false);

  const confirmCadidacy = (e) => {
    console.log(e);
    let bodyParameters = JSON.stringify(e);
    console.log(bodyParameters);
    axios
      .patch(`http://localhost:4000/api/users/register/${userId}`, bodyParameters)
      .then(function (response) {
        if (!!response) {
          console.log("wow")
        }
        console.log("ok")
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };

  /* const checkLogin = (loginData) => {
    const bodyParameters = {
      user: loginData,
    };
    axios
      .post("http://localhost:4000/api/login", bodyParameters)
      .then(function (response) {
        setToken(response.data.token);
        setIsLogged(true);
        submitForm(response.data.token, true);
        // console.log(!!token)
      })
      .catch(function (err) {
        console.log(err);
        setIsError(true)
      });
  }; */




  
  /* if (!completeAxios) {
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
  } */

return(candidateInfo);

};

export default CandidacyPage;
