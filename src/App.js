import React from 'react';
import './App.css';
import logo from './images/green_logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBarPage from './components/NavbarPage';


function App() {
  return (
    <div className="App">
      <NavBarPage/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
    </div>
  );
}

export default App;
