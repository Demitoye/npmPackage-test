import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button } from "demitoye";
import  {DemiTest1, DemiTest2 } from "./lib/components/DemiTest";

function App() {
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
          <Button label="test" kind="danger" disabled={true} />
          <DemiTest1 style={{ borderRadius: 5 }} label="demo" kind="primary" />
        </a>
        <DemiTest2 style={{ borderRadius: 5 }} label="demo" kind="primary" />
      </header>
    </div>
  );
}

export default App;
