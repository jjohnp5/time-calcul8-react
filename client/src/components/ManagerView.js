import React from "react";
import user from "../util/user";
import punch from "../util/timeSheet";

import { Button, Form, FormGroup, Label, Input } from "reactstrap";

class ManagerView extends React.Component {
  state = {
    employees: []
  };

  componentDidMount() {
    //map through array of data
    this.showAllEmployees();
  }

  //calling to DB to render employees
  showAllEmployees = () => {
    user
      .loadUsers()
      .then(res => {
        this.setState({ employees: res.data });
      })
      .catch(err => console.log(err));
  };

  handleEnrollRedirect = () => {
    this.props.history.push("/manager/enroll"); //register route
  };

  handleTimeCardSelection = event => {
    //only taking in employeeNum, changed state to just employeeNum in order findbyID
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  //
  handleTimeCardSelectionSubmit = event => {
    event.preventDefault();
    punch.findById(this.state.employees.employeeNum);
    this.props.history.push(`/manager/employee/${this.state.employeeNum}`);
  };

  render() {
    let list = this.state.employees;

    return (
      <React.Fragment>
        {/* direct to enroll */}
        <Button type="submit" onClick={this.handleEnrollRedirect}>
          Enroll
        </Button>

        {/* drop down selection for timecards */}
        <FormGroup>
          <Label for="Select">Select Employee</Label>
          <Input
            type="select"
            name="employeeNum"
            id="exampleSelect"
            value={this.state.employees.employeeNum}
            onChange={this.handleTimeCardSelection}
          >
            {list.map(selection => (
              <option value={selection.employeeNum}>
                Name: {selection.firstName} {selection.lastName}, Employee ID:{
                  selection.employeeNum
                }
              </option>
            ))}
          </Input>
          <Button type="submit" onClick={this.handleTimeCardSelectionSubmit}>
            Show Card
          </Button>
        </FormGroup>
      </React.Fragment>
    );
  }
}

export default ManagerView;
