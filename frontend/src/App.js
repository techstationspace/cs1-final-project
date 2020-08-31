import React from 'react';
import './App.css';
import { Button } from '@material-ui/core';
import { AccessAlarm } from '@material-ui/icons';

import TopicsLibrary from './pages/curriculum/TopicsLibrary';

function App() {
  return (
    <div className='App'>
      <h1>Frontend CS Final Project</h1>
      <Button color="primary">Good moarning</Button> 
      <AccessAlarm color="primary" />
    </div>
  );
}

export default App;
