import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from './components/Login';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard"  component={Dashboard} />

      </Switch>
    </Router>
  );
}

export default App;
