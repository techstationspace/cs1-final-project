import React, { useState } from "react";
import "./App.css";
import AppView from "./components/AppView";
import LoginView from "./components/LoginView";
import SignUp from "./components/RegisterView";
import CandidacyPage from "./routes/Candidacy-Page";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

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
      <Router>
        <Route path="/" exact><Redirect to="/api/login"/></Route>        
          <Route path="/signup">
            <SignUp/>
          </Route>
          <Route path="/api/users/register/5f6afd26ee25e3ba35df29db">
            <CandidacyPage dataId="5f6afd26ee25e3ba35df29db"/>
          </Route>
          <Route path="/api/login">
        {isLogged ? (
          <AppView token={token} />
        ) : (
            <LoginView submitForm={(token, isLogged) => { setToken(token); setIsLogged(isLogged) }} />
          )}
          </Route>
        </Router>
        
        {/*LOGIN VIEW */}
    </>
  );
}

export default App;
