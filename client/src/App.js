import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './images/logo.png'
import LoginEmployee from './components/Login-Employee'
import LoginManager from './components/Login-Manager'
import Timesheet from './components/EmployeeTimesheet'
import Timepunch from './components/Timepunch'
import {setLocalUser} from './actions/authUser'
import Nav from './components/Nav'
import Unauthorized from './components/Unauthorized'

class App extends Component {
  componentDidMount(){
    if(localStorage.getItem('token')){
      this.props.dispatch(setLocalUser(localStorage.getItem('token'), this.props.dispatch))
    }
  }
  render() {
    return (
      
      
      <Router>
        <div className="container-fluid">
          <div className="masthead text-white text-center">
            <div className="container">
                <Link to="/">
                    <img className="img-responsive center-block mb-5 d-block mx-auto" src={logo} width="250" />
                </Link>

                <hr className="star-light" />
            </div>
          </div>
          <Nav />
        <Switch>
        
          <Route exact path="/" component={Home} />
          <Route exact path="/punch" component={this.props.authUser.position === 2 ? Timepunch : Unauthorized} />
          <Route exact path="/employee/login" component={!this.props.authUser.id ? LoginEmployee : Timesheet} />
          <Route exact path="/manager/login" component={!this.props.authUser.id || !this.props.authUser.position >= 2  ? LoginManager: Unauthorized}/>
          <Route exact path='/timesheet' component={this.props.authUser.id ? Timesheet : Home} />
        </Switch>
        </div>
      </Router>
    
    );
  }
}

export default connect(store=>({authUser: store.authUser}))(App)
