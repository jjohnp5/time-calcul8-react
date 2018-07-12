import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import punch from "../util/punch";
import {connect} from 'react-redux';
import axios from 'axios';

class Timepunch extends React.Component {
  componentDidMount(){
    console.log(this.props);
    
  }
  
  state = {
    employeeId: "",
    punchType: "In",
    in: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.state.in
      ? this.setState({ employeeId: this.state.employeeId,punchType: "In", in: false})
      : this.setState({ employeeId: this.state.employeeId,punchType: "Out", in: true });

    punch
      .createPunch(this.state.employeeId,
        {punchType: this.state.punchType}
      )
      .then(data => {
        console.log(data);
      });

    console.log(this.state);
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
            value={this.state.id}
          />
        </FormGroup>

        <Button
          type="button"
          class="btn btn-success"
          onClick={this.handleFormSubmit}
        >
          Clock {this.state.punch}
        </Button>
      </Form>
    );
  }
}

export default connect(store=>({authUser: store.authUser}))(Timepunch)