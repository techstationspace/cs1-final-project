import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const [token, setToken] = useState("");

  const checkLogin = (loginData) => {
    const bodyParameters = {
      user: loginData,
    };
    axios.post(
      "http://localhost:4000/api/login",
      bodyParameters
    )
      .then(function (response) {
        setToken(response.data.token);
        setIsLogged(true)
        // console.log(!!token)
      })
      .catch(function (err) { 
        console.log(err)
      });

     
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      {/* {!!token ? <AppView/>  : <LoginView submitForm={(e) => checkLogin(e)} />} */}
      {isLogged ? <AppView token={token}/> : <LoginView submitForm={(e) => checkLogin(e)} />}
    </>
  );
}

export default App;
