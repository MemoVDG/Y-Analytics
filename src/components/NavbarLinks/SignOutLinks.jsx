import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { logoutUser } from '../../actions';
import { useDispatch } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
    textlink: {
      color: 'inherit',
      textDecoration: 'inherit'
    }
  }));



function SignOutLinks() {

    const dispatch = useDispatch()
    const classes = useStyles();

    const handleLogout = () =>{
        dispatch(logoutUser());
    };

    return (
        <div>
            <Button color="inherit" onClick={handleLogout}><Link to="/" className={classes.textlink}>Logout</Link></Button>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        isLogginOut : state.auth.isLogginOut,
        logoutError : state.auth.logoutError,
    };
}


export default connect(mapStateToProps)(SignOutLinks);
