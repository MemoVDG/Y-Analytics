import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
// import  { fire }   from '../config/fire';

class Login extends React.Component {

    render() {
        return (
            <div className="App-header">
                <Card style={{ width: '30rem' }}>
                    <Form className="m-3">
                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }} >Email address</Form.Label>
                            <Form.Control type="email"  id="email" placeholder="Enter email" onChange = {this.handleChange} />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }}>Password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Password" onChange = {this.handleChange} />
                        </Form.Group>

                        <Button variant="primary" type="submit" onClick={this.handleSubmit}>Login</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default Login;