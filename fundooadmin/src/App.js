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
import QuestionAnswer from './components/QuestionAnswer';
import CartApproval from './components/CartApproval';
import FullWidthTabs from './components/Tabs';

let token =  window.location.href.split('/' )[4];
let resetpassword="/resetpassword/"+token
console.log(token);

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard"  component={Dashboard} />
        <Route path="/tableadmin"  component={Tableadmin} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/service" component={service} />
        <Route path="/cartApproval" component={CartApproval} />
        <Route path="/questionAnswer" component={QuestionAnswer} />
        <Route path={resetpassword} component={ResetPassword} />
        <Route path="/tabs"  component={FullWidthTabs} />    



      </Switch>
    </Router>
  );
}

export default App;
