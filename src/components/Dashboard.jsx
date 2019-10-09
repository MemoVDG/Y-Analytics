import React from 'react';
import logo from '../images/logo.png';
import NavbarPage from './NavbarLinks/NavbarPage';
import { connect } from 'react-redux';
import { Redirect } from "react-router-dom";



function Dashboard(props) {
    const { isAuthenticated } = props;

    if (isAuthenticated) {
        return <Redirect to='/home'/>
    } else {
        return (
            <React.Fragment>
                <NavbarPage />
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
            </React.Fragment>

        );
    }

}

function mapStateToProps(state) {
    return {
        isAuthenticated: state.auth.isAuthenticated
    }
};

export default connect(mapStateToProps)(Dashboard);