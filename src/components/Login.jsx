// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Redirect } from "react-router-dom";
// import { loginUser } from "../actions";
// import { withStyles } from "@material-ui/styles";

// import Avatar from "@material-ui/core/Avatar";
// import Button from "@material-ui/core/Button";
// import TextField from "@material-ui/core/TextField";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
// import Typography from "@material-ui/core/Typography";
// import Paper from "@material-ui/core/Paper";
// import Container from "@material-ui/core/Container";


// import NavbarLink from './NavbarLinks/NavbarPage';

// const styles = () => ({
//   "@global": {
//     body: {
//       backgroundColor: "#fff"
//     }
//   },
//   paper: {
//     marginTop: 100,
//     display: "flex",
//     padding: 20,
//     flexDirection: "column",
//     alignItems: "center"
//   },
//   avatar: {
//     marginLeft: "auto",
//     marginRight: "auto",
//     backgroundColor: "#f50057"
//   },
//   form: {
//     marginTop: 1
//   },
//   errorText: {
//     color: "#f50057",
//     marginBottom: 5,
//     textAlign: "center"
//   }
// });

// class Login extends Component {
//   state = { email: "", password: "" };

//   handleEmailChange = ({ target }) => {
//     this.setState({ email: target.value });
//   };

//   handlePasswordChange = ({ target }) => {
//     this.setState({ password: target.value });
//   };

//   handleSubmit = () => {
//     const { dispatch } = this.props;
//     const { email, password } = this.state;

//     dispatch(loginUser(email, password));
//   };

//   render() {
//     const { classes, loginError, isAuthenticated } = this.props;
//     if (isAuthenticated) {
//       return <Redirect to="/" />;
//     } else {
//       return (
//         <React.Fragment>
//           <NavbarLink/>
//         <Container component="main" maxWidth="xs">
//           <Paper className={classes.paper}>
//             <Avatar className={classes.avatar}>
//               <LockOutlinedIcon />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Sign in
//             </Typography>
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               id="email"
//               label="Email Address"
//               name="email"
//               onChange={this.handleEmailChange}
//             />
//             <TextField
//               variant="outlined"
//               margin="normal"
//               fullWidth
//               name="password"
//               label="Password"
//               type="password"
//               id="password"
//               onChange={this.handlePasswordChange}
//             />
//             {loginError && (
//               <Typography component="p" className={classes.errorText}>
//                 Incorrect email or password.
//               </Typography>
//             )}
//             <Button
//               type="button"
//               fullWidth
//               variant="contained"
//               color="primary"
//               className={classes.submit}
//               onClick={this.handleSubmit}
//             >
//               Sign In
//             </Button>
//           </Paper>
//         </Container>
//         </React.Fragment>

//       );
//     }
//   }
// }

// function mapStateToProps(state) {
//   return {
//     isLoggingIn: state.auth.isLoggingIn,
//     loginError: state.auth.loginError,
//     isAuthenticated: state.auth.isAuthenticated
//   };
// }

// export default withStyles(styles)(connect(mapStateToProps)(Login));

import React from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import NavbarPage from './NavbarLinks/NavbarPage';
import { loginUser } from "../actions";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";


// import  { fire }   from '../config/fire';

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
}

export default connect(mapStateToProps)(Login);