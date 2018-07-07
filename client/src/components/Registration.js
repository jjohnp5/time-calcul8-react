import React from 'react'
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap'
import user from '../util/user'

export default class Registration extends React.Component {

    state = {
        firstName: "",
        lastName: "",
        position: 0,
        password: ""
    }


    handleInputChange = event => {
        // Pull the name and value properties off of the event.target (the element which triggered the event)
        const { name, value } = event.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
        });

      };

      handleFormSubmit = event => {
        event.preventDefault();
        user.createUser(this.state)
          .then(data=>{
            console.log(data)
          })
        this.setState({ firstName: "", lastName: "",position: ""});
      };
    

  render () {
    return (
      <Form className="register-employee" onSubmit={this.registerEmployee}>
        <FormGroup>
          <Label for='firstName'>
            First Name
          </Label>
          <Input
            type='text'
            name='firstName'
            value={this.state.firstName}
            id='firstName'
            placeholder="Please enter employee's first name" 
            onChange={this.handleInputChange}/>
        </FormGroup>
        <FormGroup>
          <Label for='lastName'>
            Last Name
          </Label>
          <Input
            type='text'
            ref={this.state.lastName}
            name='lastName'
            id='lastName'
            placeholder="Please enter employee's last name"
            onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for='password'>
            Last Name
          </Label>
          <Input
            type='text'
            ref={this.state.password}
            name='password'
            id='password'
            placeholder="Please enter employee's initial password"
            onChange={this.handleInputChange} />
        </FormGroup>
        <FormGroup>
          <Label for='positionSelect'>
            Select Position
          </Label>
          <Input type='select' value={this.state.position} name='position' id='positionSelect' onChange={this.handleInputChange}>
          <option value="" selected disabled hidden>Choose here</option>

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
        <Button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </Form>
    )
  }
}
