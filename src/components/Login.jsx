import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

export default function Login() {
    return (
        <div className="App-header">
            <Card style={{ width: '30rem' }}>

                <Form className="m-3">

                    <Form.Group controlId="formBasicEmail">
                        <Form.Label style={{'color' : 'black'}} >Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label style={{'color' : 'black'}}>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">Login</Button>
                </Form>
            </Card>
        </div>
    );
}