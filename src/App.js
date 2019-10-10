import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom'
import Login from './components/Auth/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { connect } from 'react-redux';
import Home from "./components/Home";
import Signup from './components/Auth/Signup';
import Analize from './components/Analize';

import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
    typography: {
        useNextVariants: true,
        fontFamily: "Comic Sans MS",
      },
      palette: {
        primary : { 
          light: '#ffffff',
          main: '#d9eddf',
          dark: '#a7bbad',
        },
        secondary: {
          light: '#6dffd4',
          main: '#25d8a3',
          dark: '#00a574',
        }
    },
})

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <MuiThemeProvider theme={theme}>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/analyze/:userId" component={Analize} />
        <ProtectedRoute
          exact
          path="/home"
          component={Home}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
        <Route path="/" component={Dashboard} exact />
      </Switch>
    </MuiThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);