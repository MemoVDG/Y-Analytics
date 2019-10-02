import React from 'react';
import { Route, Switch, BrowserRouter as Router, NavLink } from 'react-router-dom'
import { Navbar, Nav, Button } from 'react-bootstrap'

function SignOutLinks() {
    return (
        <Nav className="ml-auto ">
            <Button variant="outline-success" className="mx-3"><NavLink to="/login" >LOGIN</NavLink></Button>
            <Button variant="outline-success" className="mx-3"><NavLink to="/signup" >SIGN UP</NavLink></Button>
        </Nav>
    );
}

export default SignOutLinks;
