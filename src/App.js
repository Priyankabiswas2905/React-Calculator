import React, { Component } from "react";
import Calculator from "./components/Calculator";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div id="wrapper">
          <div id="calculator-wrapper">
            <Calculator />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
