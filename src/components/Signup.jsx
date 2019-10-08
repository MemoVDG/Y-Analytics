import React, { useState } from 'react';
import NavbarPage from './NavbarLinks/NavbarPage';
import { signUpUser } from '../actions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

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
        const { dispatch } = this.props;
        const {email, password } = this.state;
        dispatch(signUpUser(email, password));
        
    }

    render() {
        const { classes, signUpError, isAuthenticated } = this.props;
        if (isAuthenticated) {
            return <Redirect to="/home" />;
        } else {
            return (
                <div>
                    <NavbarPage />
                    {/* <div className="App-header">
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
                                <Button variant="primary" type="button" onClick={this.handleSubmit}>Submit</Button>
                            </Form>
                        </Card>
                    </div> */}

                </div>
            )
        }
    };
}

function mapStateToProps(state) {
    return {
        isLoggingIn: state.auth.isLoggingIn,
        signUpError: state.auth.signUpError,
        isAuthenticated: state.auth.isAuthenticated
    };
};

export default connect(mapStateToProps)(Signup);