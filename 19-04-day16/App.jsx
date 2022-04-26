import "./App.css";

import React, { Component } from "react";
import Calculator from "./components/calculator/Calculator";

export default class App extends Component {
  render() {
    return (
      <div className="App App-header">
        <Calculator />
      </div>
    );
  }
}
