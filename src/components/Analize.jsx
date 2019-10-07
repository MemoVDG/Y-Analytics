import React from 'react';
import NavbarLinks from './NavbarLinks/NavbarPage';
import { Typography } from '@material-ui/core';
import BarChart from './BarChart';
import Button from '@material-ui/core/Button';
import { Route, Link, BrowserRouter as Router, NavLink } from 'react-router-dom';
import AssessmentIcon from '@material-ui/icons/Assessment';

class Login extends React.Component {

    render() {
        return (
            <div>
            <NavbarLinks/>
                <div className="App-header">
                    <img src="https://timedotcom.files.wordpress.com/2018/12/square-meghan-markle-person-of-the-year-2018.jpg?quality=85" alt="Avatar" style={{borderRadius : 50, width : 100}}/>
                    <Typography>
                        Megan 
                    </Typography>
                    <Typography>
                        Description
                    </Typography>

                    <Button variant="contained" >
                        <AssessmentIcon />
                        <Link to='/home'>
                            Analyze my videos
                        </Link>
                    </Button>
                    <BarChart/>

                </div>
                
            </div>
        );
    }
}


export default Login;