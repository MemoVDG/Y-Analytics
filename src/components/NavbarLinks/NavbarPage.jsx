import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import SignOutLinks from './SignOutLinks';
import SignInLinks from './SignInLinks';


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

function NavbarPage(props) {
  const classes = useStyles();
  const { isAuthenticated, isVerifying } = props;

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          <Link to='/' className={classes.textlink}>Y-Analytics</Link>
        </Typography>
        {/* Check if user is authenticated */}
        {console.log(isAuthenticated)}
        {isAuthenticated ?
          <SignOutLinks />
          :
          <SignInLinks />
        }
      </Toolbar>
    </AppBar>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying,
  }
};

export default connect(mapStateToProps)(NavbarPage);