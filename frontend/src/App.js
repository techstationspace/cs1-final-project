import React from "react";
import "./App.css";
import { AccessAlarm } from "@material-ui/icons";
import { Button, ButtonBase } from "@material-ui/core";

import TopicsLibrary from "./pages/curriculum/TopicsLibrary";
import  SimpleModal  from "./components/LateralView";

function App() {
  return (
    <div className="App">
      <h1>Frontend CS Final Project</h1>
      <TopicsLibrary />
      <AccessAlarm />
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <SimpleModal></SimpleModal>
    </div>
  );
}

export default App;
