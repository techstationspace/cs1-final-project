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
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      { isLogged
        ? <AppView />
        : <LoginView submitForm={(e) => checkLogin(e)} />
      }
    </div>
  );
}
export default App;
