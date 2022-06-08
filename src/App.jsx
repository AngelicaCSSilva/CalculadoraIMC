import React from 'react';
import './App.css';
import UsingHooks from './components/UsingHooks';
import UsingBackends from './components/UsingBackend';

function App() {
  return (
    <div className="App">
      <UsingHooks />
      <hr />
      <UsingBackends />
    </div>
  );
}

export default App;
