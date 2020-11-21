import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './App.css';

import Insert from './cmp/Insert';
import View from './cmp/View';
import Edit from './cmp/Edit';

function App() {
  return (
    <Router>
      <div className= "container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <Link to={'/'} className = "navbar-brand">Greetings Card</Link>
          <div className = "collapse navbar-collapse" id="navbarSupportContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item">
                <Link to={'/'} className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to={'/insert'} className="nav-link">Insert</Link>
              </li>
              <li className="nav-item">
                <Link to={'/view'} className="nav-link">View</Link>
              </li>
            </ul>
          </div>
        </nav>
        <h1>Welcome To our Greeting page</h1> <br />

        <Switch>
          <Route exact path='/insert' component ={Insert}/>
          <Route exact path='/edit/:id' component ={Edit}/>
          <Route exact path='/view' component ={View}/>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
