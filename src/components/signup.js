import React, { Component } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Signup extends Component {
    render() {
        return (
            <div className="App-header">
                <div id='containers'>
                <h1>SIGN IN TO YOUR ACCOUNT</h1>
                <Form>
                    <Form.Group controlId="fullName">
                       <Form.Label class='Label'>fullname</Form.Label>
                       <Form.Control type="text" onChange={this.handleChange}  placeholder="Enter FullName" />
                    </Form.Group>

                    <Form.Group controlId="userName">
                        <Form.Label class='Label'>Username</Form.Label>
                        <Form.Control type="text"  onChange={this.handleChange}  placeholder="Enter userName" />
                     </Form.Group>

                    <Form.Group controlId="formGroupEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formGroupPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="submit" block>Submit</Button>
                </Form>
                </div>
            </div>
        )
    }
    
    }

