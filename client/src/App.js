import React, { Component } from "react";
import "./App.css";
import Registration from "./components/Registration"
import Login from './components/Login'
import Timepunch from "./components/Timepunch";
import {connect} from 'react-redux'

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <React.Fragment>
        {!this.props.authUser ? 
      <Login /> :
      <Registration />}
      </React.Fragment>
    
     
    );
  }
}

export default connect(store=>({authUser: store.authUser}))(App)
