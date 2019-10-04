import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import fire from '../config/fire';

class Signup extends React.Component {

    state = {
        email: '',
        password: '',
        full_name: '',
    }

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

        }).then((u)=>{
            console.log(u);
        }).catch((error) =>{
            console.log(error);
        })
    }

    render() {
        return (
            <div className="App-header">
                <Card style={{ width: '30rem' }}>

                    <Form className="m-3 white">

                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }} >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" id='email' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }}>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" id='password' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }} >Full Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Full Name" id='full_name' onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Check type="checkbox" label="Terms and conditions" style={{ 'color': 'black' }} />
                        </Form.Group>
                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Submit</Button>
                    </Form>
                </Card>
            </div>
        )
    };
}

export default Signup;