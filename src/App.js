import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import ClockInMenu from './Components/ClockInMenu'
import Main from './Components/Main';

function App() {
  return (
    <div className="App">
      <Router>
          <Route exact path="/" component={Main} />
          <Route path="/ClockInMenu" component={ClockInMenu} />
      </Router>
    </div>
  );
}

export default App;
