import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Dineout from './Components/Dineout'
import Reservation from './Components/Reservation'

const { pathToRegexp, match, parse, compile } = require("path-to-regexp");


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/dineout" exact component={Dineout}/>
        <Route path="/reservation" component={Reservation}/>
      </Switch>
    </Router>
  );
}

export default App;
