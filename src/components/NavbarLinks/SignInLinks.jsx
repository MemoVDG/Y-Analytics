import React from 'react';
import { Route, Switch, BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'
import  { fire }   from '../../config/fire';

class SignInLinks extends React.Component {


    logout = () =>{
        fire.auth().signOut();
    }
    render() {
        return (
            <Nav >
                <Button variant="outline-success" className="mx-3" onClick={this.logout}><NavLink to="/" >LOGOUT</NavLink></Button>
                <Button variant="outline-success" className="mx-3"><NavLink to="/profile" >PROFILE</NavLink></Button>
            </Nav>
        );
    }
}

export default SignInLinks;
