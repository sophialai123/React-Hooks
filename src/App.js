import './App.css';
import React from 'react';
import StateExample from './components/useStateHook/StateExample';
import Form from './components/useStateHook/Form'
import TaskFunction from './components/tasks/TaskFunction';
import Timer from './components/useEffectHook/Timer';

function App() {
  return (
    <div className="App">
      <Timer />
      <StateExample />
      <Form />
      <TaskFunction />
    </div>
  );
}

export default App;
