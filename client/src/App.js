import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Registration from "./components/Registration"
import Timepunch from "./components/Timepunch";

class App extends Component {
  render() {
    return (
      <Timepunch />
    );
  }
}

export default App;
