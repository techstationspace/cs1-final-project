import React from "react";

import AppView from "./components/AppView";
import LoginView from "./components/LoginView";
import "./App.css";

const logged = true;

function App() {
  return <div className="App">{!!logged ? <AppView /> : <LoginView />}</div>;
}

export default App;
