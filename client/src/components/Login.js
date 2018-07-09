import React from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import login from '../util/login'

class Login extends React.Component {
    state = {
      username: '',
      password: ''
    }

    handleInputChange = event => {
      const { name, value } = event.target;
    
        // Set the state for the appropriate input field
        this.setState({
          [name]: value
        });

    }
      handleFormSubmit = event => {
        event.preventDefault();
        const {username, password} = this.state
        login.login(username, password)
          .then(data=>{
            console.log(data);
          })
      };
    

  render () {
    return (
      <Form className="register-employee" >
        <FormGroup>
          <Label for='username'>
            Employee Number
          </Label>
          <Input
            type='text'
            name='username'
            id='username'
            placeholder="Please enter employee number" 
            onChange={this.handleInputChange}
            />
        </FormGroup>
        <FormGroup>
          <Label for='password'>
            Last Name
          </Label>
          <Input
            type='password'
            name='password'
            id='password'
            placeholder="Please enter password"
            onChange={this.handleInputChange}
             />
        </FormGroup>
        
        <Button type="submit" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </Form>
    )
  }
}


export default Login