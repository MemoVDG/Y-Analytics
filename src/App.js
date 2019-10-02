import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavbarLinks/NavbarPage';
import { Route, Switch, BrowserRouter as Router, Link } from 'react-router-dom'
import Login from './components/Login';
import Dashboard from './components/Dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Switch>
          <Route path="/" component={Dashboard} exact></Route>
          <Route path="/login" component={Login} ></Route>
        </Switch>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header> */}
      </div>
    </Router>
  );
}

export default App;
