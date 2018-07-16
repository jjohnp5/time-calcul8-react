import React from "react";
import user from "../util/user";
import punch from "../util/timeSheet";
import {handleManagedUsers} from '../actions/managerMapUsers'
import {connect} from 'react-redux'
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import Nav from './Nav'
import {handleViewTimesheet} from '../actions/viewSheet'

class ManagerView extends React.Component {
  
  componentDidMount() {
    //map through array of data
    this.showAllEmployees();
    
  }

  //calling to DB to render employees
  showAllEmployees = () => {
    if(this.props.store.authUser.id){
      return this.props.dispatch(handleManagedUsers(this.props.history))

    }
    this.props.history.push('/')
    
  }
  
  handleEnrollRedirect = () => {
    this.props.history.push("/manager/enroll"); //register route
  };

  handleChange = e => {
    //only taking in employeeNum, changed state to just employeeNum in order findbyID
    if(e.target.value){
      this.props.dispatch(handleViewTimesheet(this.props.store.managedUsers[e.target.value].timesheets))
    }
  };

  //
  handleTimeCardSelectionSubmit = event => {
    event.preventDefault();
    
    this.props.history.push(`/manager/view/timesheet`);
  };

  render() {
    
    // let list = this.state.employees;
    return (
      <React.Fragment>
        <Nav/>
        <br/>
        <br/>
        {/* direct to enroll */}
        <Button type="submit" onClick={()=>{this.props.history.push('/manager/enroll')}}>
          Enroll
        </Button>
        


        {/* drop down selection for timecards */}
        <FormGroup>
          <Label for="Select">Select Employee</Label>
          <Input
            type="select"
            name="employeeNum"
            id="exampleSelect"
            defaultValue={null}
            onChange={this.handleChange}
          >
          <option></option>
            {this.props.store.managedUsers.map((selection,i) => 
              (
              
              <option value={i} >
                Name: {selection.firstName} {selection.lastName}, Employee ID:{
                  selection.employeeNum
                }
              </option>
            ))}
          </Input>
          <br/>
          <Button type="submit" onClick={this.handleTimeCardSelectionSubmit}>
            Show Card
          </Button>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default connect((store)=>({store: store}))(ManagerView);
