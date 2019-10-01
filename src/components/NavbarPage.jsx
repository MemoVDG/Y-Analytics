import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap'
import Login from './Login';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'



export default function NavbarPage() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Y-Analytics</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Router>
                        <Button variant="outline-success" className="mx-3"><Link to="/login" >LOGIN</Link></Button>
                        <Button variant="outline-success" className="mx-3"><Link to="/signup" >SIGN UP</Link></Button>
                        <Route exact path="/login" component={Login} />
                    </Router>
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );

}