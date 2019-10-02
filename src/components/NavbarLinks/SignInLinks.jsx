import React from 'react';
import { Route, Switch, BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

function SignInLinks() {
    return (
        <Nav >
            <Button variant="outline-success" className="mx-3"><NavLink to="/" >LOGOUT</NavLink></Button>
            <Button variant="outline-success" className="mx-3"><NavLink to="/profile" >PROFILE</NavLink></Button>
        </Nav>
    );
}

export default SignInLinks;
