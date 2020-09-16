import React, {useState} from "react";
import "./App.css";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  const checkLogin = (loginData) => {
    const user = loginData.username;
    const pwd = loginData.password;

    // chiamata Autenticazione

    if(!!user && !!pwd) {
      setIsLogged(true);
    } else {
      setIsLogged(false);
    }
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
