import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { connect } from 'react-redux';
import Home from "./components/Home";
import Signup from './components/Signup';
import Login2 from './components/Login2';

function App(props) {
  const { isAuthenticated, isVerifying } = props;
  return (
    <Switch>
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <ProtectedRoute
        exact
        path="/home"
        component={Home}
        isAuthenticated={isAuthenticated}
        isVerifying={isVerifying}
      />
      <Route path="/" component={Dashboard} />
      <Route path="/ha" component={Login2} />
    </Switch>
  );
}

function mapStateToProps(state) {
  return {
    isAuthenticated: state.auth.isAuthenticated,
    isVerifying: state.auth.isVerifying
  };
}

export default connect(mapStateToProps)(App);