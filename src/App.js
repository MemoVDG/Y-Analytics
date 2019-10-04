import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavbarLinks/NavbarPage';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Signup from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';
import { connect } from 'react-redux';


function App(props) {
  const { isAuthenticated, isVerifying } = props;

  return (
    <Router>
      <NavBar />
      <Switch>
        <ProtectedRoute
          exact
          path="/"
          component={Dashboard}
          isAuthenticated={isAuthenticated}
          isVerifying={isVerifying}
        />
                {/* <Route path="/" component={Dashboard} ></Route> */}

        <Route path="/login" component={Login} ></Route>
        <Route path="/signup" component={Signup} ></Route>
      </Switch>
    </Router>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);