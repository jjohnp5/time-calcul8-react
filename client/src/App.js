import React, { Component } from "react";
import "./App.css";
import {connect} from 'react-redux'
import Home from './components/Home'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import logo from './images/logo.png'
import LoginEmployee from './components/Login-Employee'
import LoginManager from './components/Login-Manager'
import Timesheet from './components/Timesheet'
import Registration from './components/Registration'
import ManagerView from './components/ManagerView'

class App extends Component {
  componentDidMount(){
  }
  render() {
    return (
      
      
      <Router>
        <React.Fragment>
          <div className="masthead text-white text-center">
            <div className="container">
                <Link to="/">
                    <img className="img-responsive center-block mb-5 d-block mx-auto" src={logo} width="250" />
                </Link>

                <hr className="star-light" />
            </div>
          </div>
        <Switch>
        
          <Route exact path="/" component={Home}/>
          <Route exact path="/employee/login" component={LoginEmployee} />
          <Route exact path="/manager/login" component={LoginManager}/>
          <Route exact path='/timesheet' component={this.props.authUser.id ? Timesheet : Home} />
          <Route exact path='/manager/home' component={this.props.authUser.id ? ManagerView : LoginManager}/>
          <Route exact path="/manager/enroll" component={this.props.authUser.id ? Registration : LoginManager} />
          <Route exact path="/manager/employee/:id" component={this.props.authUser.id ? Timesheet : LoginManager} />
"
        </Switch>
        </React.Fragment>
      </Router>
    
    );
  }
}

export default connect(store=>({authUser: store.authUser}))(App)
