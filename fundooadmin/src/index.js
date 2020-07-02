import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import "./css/login.css";
import "./css/tableAdmin.css";
import "./css/register.css";
import "./css/forgotPassword.css";
import "./css/resetPassword.css";
import "./css/service.css";
import "./css/questionAnswer.css";

import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
