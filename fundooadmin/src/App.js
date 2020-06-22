import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import history from "./history";
import Login from "./components/login";
import Dashboard from "./components/dashboard";
import Tableadmin from "./components/tableadmin";
import Register from "./components/register";
import ForgotPassword from "./components/forgotPassword";
import ResetPassword from "./components/resetPassword";
import service from "./components/service";
import QuestionAnswer from "./components/questionAnswer";
import CartApproval from "./components/cartApproval";
import FullWidthTabs from "./components/tabs";

let token = window.location.href.split("/")[4];
let resetpassword = "/resetpassword/" + token;

function App() {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/tableadmin" component={Tableadmin} />
        <Route path="/register" component={Register} />
        <Route path="/forgot" component={ForgotPassword} />
        <Route path="/service" component={service} />
        <Route path="/cartApproval" component={CartApproval} />
        <Route path="/questionAnswer" component={QuestionAnswer} />
        <Route path={resetpassword} component={ResetPassword} />
        <Route path="/tabs" component={FullWidthTabs} />
      </Switch>
    </Router>
  );
}

export default App;
