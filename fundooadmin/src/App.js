import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Tableadmin from './components/Tableadmin';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard"  component={Dashboard} />
        <Route path="/Tableadmin"  component={Tableadmin} />


      </Switch>
    </Router>
  );
}

export default App;
