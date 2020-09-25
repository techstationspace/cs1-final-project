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
let user;
const CandidacyPage = ({ userId }) => {
  const classes = useStyles();
  let form = <Container className={classes.paddingContainer}>
  <h1>Iscrizione al corso "{nameCourse}"</h1>
  <Paper elevation={3} className={classes.paddingForm}>
    <FormSendCandidacy
      onSubmit={(e) => confirmCadidacy(e)}
    />
  </Paper>
</Container>
  const [completeAxios, setCompleteAxios] = useState(false);
  const [userInfo, setUserInfo] = useState({});
  const [candidacyPageResponse, setCandidacyPageResponse] = useState(form)

  // const fetchUser = ()=> {
  //   user = fetch(`http://localhost:4000/api/users/register/${userId}`).then( res => res.json())
  //  // user = apiCall.json()
  //   setUserInfo(user)
  // }
  // useEffect(()=>{
  //   fetchUser()
  //   console.log(userInfo)
  // }, [])


  
  useEffect(() => {
    const setUser = (a) => {
      console.log(a)
      setUserInfo(a)
      setCompleteAxios(true);
      console.log(completeAxios)
      console.log(userInfo)
    };
    // let result= await axios
    // .get(`http://localhost:4000/api/users/register/${userId}`)
    // .then(function (response) {
    //   !!response.data.payload && setUserInfo(response.data.payload);
    //   setCompleteAxios(true);
    // })
    // .catch(function (err) {
    //   console.log(err);
    // });
      axios
      .get(`http://localhost:4000/api/users/register/${userId}`)
      .then(async function (response) {
        console.log(response.data.payload);
        await setUser(response.data.payload);
        setCandidacyPageResponse(form)
      })
      .catch(function (err) {
        console.log(err);
      });
  }, []);



  const confirmCadidacy = (info) => {
    //let bodyParameters = JSON.stringify(info);
    //console.log(bodyParameters)
    axios
      .patch(`http://localhost:4000/api/users/register/${userId}`, info)
      .then(function (response) {
        console.log("Ok");
        console.log(response);
      })
      .catch(function (err) {
        console.log(err);
      });
  };
//     if (!completeAxios) {
//     return (
//       <Container className={classes.paddingContainer}>
//         <h1>Iscrizione al corso "{nameCourse}"</h1>
//         <Paper elevation={3} className={classes.paddingForm}>
//           <h1>loading...</h1>
//         </Paper>
//       </Container>
//     );
//   } else {
//     return (<Container className={classes.paddingContainer}>
//       <h1>Iscrizione al corso "{nameCourse}"</h1>
//       <Paper elevation={3} className={classes.paddingForm}>
//         <FormSendCandidacy
//           data={userInfo}
//           onSubmit={(e) => confirmCadidacy(e)}
//         />
//       </Paper>
//     </Container>)
// }
  return candidacyPageResponse
}
export default CandidacyPage;
