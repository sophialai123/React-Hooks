import './App.css';
import React from 'react';
import StateExample from './components/useStateHook/StateExample';
import Form from './components/useStateHook/Form'
import TaskFunction from './components/tasks/TaskFunction';
import Timer from './components/useEffectHook/Timer';
import Forecast from './components/useEffectHook/WeatherApp/Forecast';


function App() {
  return (
    <div className="App">
      <Timer />
      <StateExample />
      <Form />
      <TaskFunction />

      <Forecast />

    </div>
  );
}

export default App;
