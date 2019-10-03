import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';

class Login extends React.Component {

    state = {
        email : '',
        password : '',
    };

    handleChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(this.state)
    }

    render() {
        return (
            <div className="App-header">
                <Card style={{ width: '30rem' }}>
                    <Form className="m-3">
                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }} >Email address</Form.Label>
                            <Form.Control type="email"  id="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group>
                            <Form.Label style={{ 'color': 'black' }}>Password</Form.Label>
                            <Form.Control type="password" id="password" placeholder="Password" />
                        </Form.Group>

                        <Button variant="primary" type="submit">Login</Button>
                    </Form>
                </Card>
            </div>
        );
    }
}


export default Login;