import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

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



function SignInLinks() {
    const classes = useStyles();

    return (
        <div>
            <Button color="inherit"><Link to="/login" className={classes.textlink}>Login</Link></Button>
            <Button color="inherit"><Link to="/signup" className={classes.textlink}>Signup</Link></Button>
        </div>
    );
}

export default SignInLinks;
