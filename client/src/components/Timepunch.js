import React from "react";
import { Button, Form, FormGroup, Label, Input, FormText } from "reactstrap";
import punch from "../util/punch";

export default class Timepunch extends React.Component {
  state = {
    employeeId: "",
    punch: "In",
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
      ? this.setState({ employeeId: this.state.id,punch: "In", in: false})
      : this.setState({ employeeId: this.state.id,punch: "Out", in: true });

    punch
      .createPunch({
        employeeId: this.state.employeeId,
        punch: this.state.punch
      })
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
