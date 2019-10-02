import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function Login() {
    return (
        <div className="App-header">
            <Card style={{ width: '30rem' }}>

                <Form className="m-3 white">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{'color' : 'black'}} >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{'color' : 'black'}}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{'color' : 'black'}} >Full Name</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Terms and conditions" style={{'color' : 'black'}} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </Card>
        </div>
    );
}