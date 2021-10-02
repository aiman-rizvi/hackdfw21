import logo from './logo.svg';
import './App.css';
import React from "react";
import Portfolio from './Portfolio';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Portfolio example={"test prop please ignore"}/>

      </header>
    </div>
  );
}

export default App;
