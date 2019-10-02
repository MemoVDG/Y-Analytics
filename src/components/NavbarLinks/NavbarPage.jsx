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
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto ">
                    <Router>
                        <Button variant="outline-success" className="mx-3"><Link to="/login" >LOGIN</Link></Button>
                        <Button variant="outline-success" className="mx-3"><Link to="/signup" >SIGN UP</Link></Button>
                        <Route exact path="/login" component={Login} />
                    </Router>
                </Nav>
            </Navbar.Collapse> */}
        </Navbar>

    );

}