import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';


export default function NavBar() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Link to='/'>Y-Analytics</Link></Navbar.Brand>
            <SignInLinks/>
            <SignOutLinks/>
        </Navbar>

    );

}