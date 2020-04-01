import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import profile from '../assets/profile.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { resetPassword } from "../services/LoginService";
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";



class ResetPassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helperText: "",
      error: false,
      username: "",
      userdata: [],
      show: false,
      login: "Reset Password",
      next : false,
      password:'',
      helperTextpassowrd:"",
      confirmPassword:'',
      helperTextCpassowrd:'',
      snackbaropen: false,
      snackbarmsg: '',
    };

  }
 Reset(event){
    event.preventDefault();

        let data = {
          newPassword: this.state.password,
        };

        const id = localStorage.getItem("id");
        console.log(data,id);

        if (data.password != '') {
            resetPassword(data,id).then(response => {
                console.log(response);
               if (response =='no content') {
                    this.setState({
                        snackbaropen: true,
                        snackbarMessage: "Succefully changed."
                      })
                    //  localStorage.setItem("id", response.data.id);
                    
                    this.props.history.push({
                        pathname: "/",
                    });
               } else {
                   this.setState({  snackbarmsg: "Password not successfull", snackbaropen: true });
               }
            });
        }
        else {
            this.setState({  snackbarmsg: "Field are empty", snackbaropen: true });

        }
  }


  onchangePassword = event => {
    if (/[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(event.target.value) && /[a-z]/.test(event.target.value) && /[0-9]/.test(event.target.value) && /[A-Z]/.test(event.target.value)) {
      // console.log("on click function is working", event.target.value)
      this.setState({ password: event.target.value , helperTextpassowrd: "",
      error: false})
    } else {
      this.setState({
        helperTextpassowrd: "Minimum eight characters, at least one letter, one number and one special character:",
        error: true,
        password: event.target.value
    })
    }
  }

  onchangePasswordagain = async event => {

    await this.setState({
      confirmPassword: event.target.value
    })
    this.checkPassword()
  }

  checkPassword () {
    if (this.state.password === this.state.confirmPassword) {
      this.setState({ snackbarOpen: true, snackbarmsg: 'done' })
    } else {
      this.setState({
        snackbarOpen: true,
        snackbarmsg: 'enter same password'
      })
    }
  }
  render() {
    return (
      <div className="firstcontainerReset">
        <span class="usernameReset"><span>F</span><span>u</span><span>n</span><span>D</span><span>o</span><span>o</span></span>
        <div className="loginstyleReset">{this.state.login}</div>

       
        <Paper id="rootpaperReset">
        
          <div className="containerReset">

            <div className="borderReset">
              <div className="loginFromReset">
              {/* <div>Reset Your Password</div> */}
                <div className="inputFieldReset">
                <TextField
                   hintText="Password"
                   floatingLabelText="Password"
                   id="btnReset"
                   variant="outlined"
                   type="password"
                   label="NewPassword"
                   helperText={this.state.helperTextpassowrd}
                   onChange={this.onchangePassword}
                  />
                </div>
                <div className="inputFieldReset">
                <TextField
                   hintText="Password"
                   floatingLabelText="Password"
                   id="btnReset"
                   variant="outlined"
                   type="password"
                   label="Re-enter New Password"
                   helperText={this.state.helperTextCpassowrd}
                   onChange={this.onchangePasswordagain}
                  />
                </div>

                <div className="submitButtonReset">
                  <Button id="subbtnReset" onClick={e => this.Reset(e)}>
                    Change Password
                </Button>
                </div>
                
              </div>
            </div>
          </div>
        </Paper>
        <Snackbar open={this.state.snackbaropen} autoHideDuration={6000} onClose={this.handleClose}
                    message={<span>{this.state.snackbarmsg}</span>}
                    action={[
                        <IconButton key="close" arial-label="close" color="inherit" onClick={this.handleClose}>
                            x</IconButton>
                    ]}>
                </Snackbar>
       
      </div>
    );
  }
}
export default ResetPassword;