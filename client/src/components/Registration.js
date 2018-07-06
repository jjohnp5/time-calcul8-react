import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'

export default class Registration extends React.Component {

firstNameRef = React.createRef();
lastNameRef = React.createRef();
positionRef = React.createRef();

registerEmployee = event => {
event.preventDefault()

//use this to send back to db
// const employeeInfo = {

//     firstName: this.firstNameRef.value.value,
//     lastName: this.lastNameRef.value.value,
//     position: this.positionRef.value.value
// }

console.log(this)

//update state...???


//reset form 
event.currentTarget.reset();
}

  render () {
    return (
      <Form className="register-employee" onSubmit={this.registerEmployee}>
        <FormGroup>
          <Label for='firstName'>
            First Name
          </Label>
          <Input
            type='text'
            ref={this.firstNameRef}
            name='firstName'
            id='firstName'
            placeholder="Please enter employee's first name" />
        </FormGroup>
        <FormGroup>
          <Label for='lastName'>
            Last Name
          </Label>
          <Input
            type='text'
            ref={this.lastNameRef}
            name='lastName'
            id='lastName'
            placeholder="Please enter employee's last name" />
        </FormGroup>
        <FormGroup>
          <Label for='positionSelect'>
            Select Position
          </Label>
          <Input type='select' ref={this.positionRef} name='select' id='positionSelect'>
          <option value="1">
            1
          </option>
          <option value="2">
            2
          </option>
          <option value="3">
            3
          </option>
          </Input>
        </FormGroup>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    )
  }
}
