import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import NavbarPage from './NavbarLinks/NavbarPage';
import { loginUser } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


class Login extends React.Component {
  state = {
    email: '',
    password: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.id]: e.target.value });
  }

  handleSubmit = () => {
    const { dispatch } = this.props;
    const { email, password } = this.state;
    console.log(email,password);
    dispatch(loginUser(email, password));

  };

  render() {
    const { classes, loginError, isAuthenticated } = this.props;
    if (isAuthenticated) {
      return <Redirect to="/home" />;
    } else {
    return (
      <div>
        <NavbarPage />
        <div className="App-header">
          <Card style={{ width: '30rem' }}>
            <Form className="m-3">
              <Form.Group>
                <Form.Label style={{ 'color': 'black' }} >Email address</Form.Label>
                <Form.Control type="email" id="email" placeholder="Enter email" onChange={this.handleChange} />
              </Form.Group>

              <Form.Group>
                <Form.Label style={{ 'color': 'black' }}>Password</Form.Label>
                <Form.Control type="password" id="password" placeholder="Password" onChange={this.handleChange} />
              </Form.Group>

              <Button variant="primary" type="button" onClick={this.handleSubmit}>Login</Button>
            </Form>
          </Card>
        </div>
      </div>
    );
    }
  }
}

function mapStateToProps(state) {
  return {
    isLoggingIn: state.auth.isLoggingIn,
    loginError: state.auth.loginError,
    isAuthenticated: state.auth.isAuthenticated
  };
};

export default connect(mapStateToProps)(Login);