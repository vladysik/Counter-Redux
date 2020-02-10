import React from 'react';

import logo from './logo.svg';
import './App.css';

import Counter from './containers/counter/counter.js';
import './containers/counter/counter.css'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Counter</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
