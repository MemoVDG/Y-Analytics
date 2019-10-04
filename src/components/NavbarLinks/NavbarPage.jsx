import React from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom';
import SignInLinks from './SignInLinks';
import SignOutLinks from './SignOutLinks';
import fire from '../../config/fire';


export default class NavBar extends React.Component {

    state = {
        user : {}
    }

    componentDidMount = () =>{
        this.authListener();
    }

    authListener = () => {
        fire.auth().onAuthStateChanged((user) =>{
            if(user){
                this.setState({user});
                console.log(user);
            }else{
                this.setState({user:null})
                console.log(user);

            }
        })
    }


    render() {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home"><Link to='/'>Y-Analytics</Link></Navbar.Brand>
            {this.state.user ? 
                <SignInLinks />
                :
                <SignOutLinks />
            }
        </Navbar>

    );
}

}