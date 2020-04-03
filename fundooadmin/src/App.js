import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Tableadmin from './components/Tableadmin';
import Register from './components/Register';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import service from './components/service';
let token =  window.location.href.split('/' )[4];
let resetpassword="/resetpassword/"+token
console.log(token);




function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/Dashboard"  component={Dashboard} />
        <Route path="/Tableadmin"  component={Tableadmin} />
        <Route path="/Register" component={Register} />
        <Route path="/Forgot" component={ForgotPassword} />
        <Route path="/service" component={service} />
        <Route path={resetpassword} component={ResetPassword} />


      </Switch>
    </Router>
  );
}

export default App;
