import React from 'react'
import { Button, Form, FormGroup, Label, Input, Container } from 'reactstrap'
import {connect} from 'react-redux'
import { handleAddUser } from '../actions/authUser';

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
        this.props.dispatch(handleAddUser(username, password, this.props.history))
        
      };
    

  render () {
    return (
      <Container>
        <h1>Login as Employee</h1>
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
        
        <Button type="submit" color="success" onClick={this.handleFormSubmit}>
          Submit
        </Button>
      </Form>
      </Container>
    )
  }
}


export default connect(store=>({store: store.authUser}))(Login)