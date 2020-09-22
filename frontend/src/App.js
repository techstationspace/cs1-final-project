import React, {useState} from "react";
import "./App.css";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";

function App() {
  const isLogged = true;
  const checkLogin = (loginData) => {
    console.log(loginData);
  }

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      { isLogged
        ? <AppView />
        : <LoginView submitForm={(e) => checkLogin(e)} />
      }
    </>
  );
}

export default App;
