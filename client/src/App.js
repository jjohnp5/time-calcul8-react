import React, { Component } from "react";
import "./App.css";
import Registration from "./components/Registration"
import Login from './components/Login'
import Timepunch from "./components/Timepunch";

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Login />
      </React.Fragment>
    
     
    );
  }
}

export default App;
