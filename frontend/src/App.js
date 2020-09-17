import React, {useState} from "react";
import "./App.css";
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
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      { isLogged
        ? <h1>AppView</h1>
        : <LoginView submitForm={(e) => checkLogin(e)} />
      }
    </div>
  );
}

export default App;
