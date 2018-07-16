import React from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import punch from "../util/punch";
import {connect} from 'react-redux';
import {handleMapUserTimesheets} from '../actions/mapUserData'

class Timepunch extends React.Component {
  componentDidMount(){
    console.log(this.props);
    
  }
  
  state = {
    employeeId: ""
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();


    punch
      .createPunch(this.state.employeeId,
        {}
      )
      .then(data => {
        this.props.dispatch(handleMapUserTimesheets(this.props.authUser.employeeNum))
        this.props.history.push('/')
      });

  };

  render() {
    return (
      <Form className="Time-Punch">
        <FormGroup>
          <Label for="employeeId">Enter Your ID</Label>
          <Input
            type="number"
            name="employeeId"
            id="employeeId"
            placeholder="Please enter your Employee ID"
            onChange={this.handleInputChange}
            value={this.state.employeeId}
          />
        </FormGroup>

        <Button
          type="button"
          class="btn btn-success"
          onClick={this.handleFormSubmit}
        >
          Punch
        </Button>
      </Form>
    );
  }
}

export default connect(store=>({authUser: store.authUser}))(Timepunch)