import React from 'react';
import logo from '../images/logo.png';
import NavbarPage from './NavbarLinks/NavbarPage';

export default function Dashboard () {
    return(
        <div>
            <NavbarPage/>
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        </div>

    );

}