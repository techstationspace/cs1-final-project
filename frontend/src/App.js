import React, { useState } from "react";
import axios from "axios";
import "./App.css";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";
import SignUp from "./components/RegisterView";

function App() {

  const [isLogged, setIsLogged] = useState(false);
  const [token, setToken] = useState("");

  return (
    <>
      <link
        href="https://fonts.googleapis.com/icon?family=Material+Icons"
        rel="stylesheet"
      ></link>
      {/* REGISTER VIEW */}

      {/*LOGIN VIEW */}
     {isLogged ? (
        <AppView token={token} />
      ) : (
        <LoginView  submitForm = { (token, isLogged) => {setToken(token); setIsLogged(isLogged)} }/>
      )} 
    </>
  );
}

export default App;
