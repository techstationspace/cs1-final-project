import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const checkLogin = (loginData) => {
    // const config = {
    //   headers: { Authorization: `Bearer ${token}` },
    // };
    console.log(loginData);
    debugger;
    const bodyParameters = {
      user: loginData,
    };
    axios.post(
      "http://localhost:4000/api/login",
      bodyParameters
      // config
    )
      .then(console.log)
      .catch(console.log);
  };

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      {false ? <AppView /> : <LoginView submitForm={(e) => checkLogin(e)} />}
    </>
  );
}

export default App;
