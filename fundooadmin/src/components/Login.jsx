import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import profile from '../assets/profile.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { login } from "../services/LoginService";
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
require('dotenv').config();

const useStyles =(theme)=> ({
  root: {
    minWidth: 275,
    position: 'absolute',
    
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  pos: {
    marginBottom: 12,
  },
  root1: {
      minWidth: 275,
    },
    paper: {
      position: 'absolute',
      width: 400,
      backgroundColor: theme.palette.background.paper,
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
    },
    price:{
      fontSize: 13,
      fontWeight : 'bold'
      },advance:{
          color:'blue'
      },
      boldpoint:{
          height : '10px',
          listStyleType : 'circle'
      },
      title: {
            fontSize: 13,
          //   width : '250px',
          //   height : '250px'
      
          },
          widthheight:{
              width : '130px',
              height : '130px',
              padding : '20px'
          },
    
});

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      helperText: "",
      error: false,
      username: "",
      userdata: [],
      show: false,
      login: "Sign in",
      next : false,
      password:'',
      helperTextpassowrd:"",
      red :"",
      email : '',
      emailse : '',
      snackbaropen: false,
      snackbarmsg: '',
      service :'',
      showCardColor :null
    };
  }
  componentWillMount() {
    // when params sent via url
    if (this.props.history.location.state) {
      let params = this.props.history.location.state.service;
      let registershow = this.props.history.location.state.registershow;
    if(params == 'advance'){
      this.setState({ service: params , showCardColor :true ,registershow  : true});
    }
    else{
      this.setState({ service: params , showCardColor :false ,registershow : true});
    }
    }
  }

  //close snackbar
  handleClose=(event)=> {
      // event.preventDefault();
      this.setState({ snackbaropen: false });
  }
  //sign in
  SignIn=async(event)=>{
    event.preventDefault();
    await this.validator();
      console.log("login clicked");
      let data = {
        email: this.state.email,
        password: this.state.password
      };

      console.log(data);
    if( data.email && data.password != ''){
        
      login(data).then(response => {
          console.log(response);
         if (response.status === 200) {
              this.setState({
                snackbaropen: true,
                  snackbarmsg: "Succefully Registered."
                })
              localStorage.setItem("id", response.data.id);
              
              this.props.history.push({
                  pathname: "/dashboard",
              });
         } else {
             this.setState({  snackbarmsg: "Login Not Successfull,Make sure email & password is correct", snackbaropen: true });
         }
      });
    }
      
       
       
  }
  validator=()=>{
    if(this.state.email != ''){
      if ( /\S+@\S+\.\S+/.test(this.state.email)) {
        this.setState({
            email: this.state.email, helperTextEmail: "",
            error: false
        })
    } else{
      this.setState({
        helperTextEmail: "Enter validate Email",
        error: true,
        email: this.state.email
    })
      }
    }else if(this.state.email == ''){
      this.setState({
        helperTextEmail: "Enter Email",
        error: true,
        email: this.state.email
    })
    }

    if(this.state.password != ''){
      if (/[\@\#\$\%\^\&\*\(\)\_\+\!]/.test(this.state.password) && /[a-z]/.test(this.state.password) && /[0-9]/.test(this.state.password) && /[A-Z]/.test(this.state.password)) {
        this.setState({ password: this.state.password , helperTextpassowrd: "",
        error: false})
      } else{
        this.setState({
              helperTextpassowrd: "Min 8 char, at least 1 letter,1 no & 1 spl char",
              error: true,
              password: this.state.password
          })
      }
    }else if(this.state.password == ''){
      this.setState({
        helperTextpassowrd: "Enter the password",
        error: true,
        password: this.state.password
    })
    }
  }
  resetpassword(event){
    event.preventDefault();
    this.props.history.push({
      pathname: "/Reset",
    });
  }
  //ForgotButton
  ForgotButton(event){
    event.preventDefault();
    this.props.history.push({
      pathname: "/forgot",
    });
    localStorage.setItem("email", this.state.email);
  }
  //Register Button
  register(event){
    event.preventDefault();
    this.props.history.push({
      pathname: "/service",
    });

  }
  onchangeEmail=(event)=>{
    this.setState({
      email: event.target.value  
  })

}

onchangePassword = event => {
  this.setState({ password: event.target.value})
  }
//Next Button
  Next=(event)=>{
    event.preventDefault();
    this.setState({next:true,emailse : this.state.email})
  }
  //ArrowButton
  arrowButton=(event)=>{
    event.preventDefault();
    this.setState({next:false,email : this.state.emailse})
  }
  render() {
    const {classes} = this.props;
    return (
      <div className="firstcontainer">
        <span class="username"><span>F</span><span>u</span><span>n</span><span>D</span><span>o</span><span>o</span></span>
        <div className="loginstyle">{this.state.login}</div>

       {this.state.registershow ? 
        <Paper id="rootpaper">
        
          <div className="container">

            <div className="border">
              <div className="loginFrom">
                <img src={profile} id="img" />
                <div className="inputField">
                  <TextField
                    error={this.state.helperTextEmail}
                    helperText={this.state.helperTextEmail}
                    id="btn"
                    variant="outlined"
                    label="Emails"
                     onChange={this.onchangeEmail}
                  />
                </div>

                <div className="inputField">
                  <TextField
                    error={this.state.helperTextpassowrd }
                   id="btn"
                   variant="outlined"
                   type="password"
                   label="Password"
                   helperText={this.state.helperTextpassowrd }
                   onChange={this.onchangePassword}
                  />
                </div>

                <div className="submitButton">
                  <Button id="subbtn" onClick={e => this.SignIn(e)}>
                    Sign in
                </Button>
                </div>
                <div className="belowlogin">
                  <Button id="forgotstyle" onClick={e => this.ForgotButton(e)}>
                   Forgot Password
                   </Button>
                </div>

             
              </div>
            </div>
            <div style={{flexDirection:'column', backgroundColor : '#D3D3D3',height : '400px',display:'flex',justifyContent:'center',alignItems:'center'}}>
              <div>SERVICE</div>
            {this.state.showCardColor ?
                            <div className="rowReg">
                            <div ><div className="twocardR" onMouseMove={this._onMouseMove1} onMouseOut={this._onMouseOut1}
                                     >
                 
                                   <div className="servicerootR">
                                   <Card>
                                   <div className={classes.widthheight}>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                Price : $49 per
                                </Typography>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                month
                                </Typography>
                                <Typography className={classes.advance} color="textSecondary" gutterBottom>
                                advance
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . $49/month
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . Ability to ad  only title and description
                                </Typography>
                                </div>
                                        </Card>
                               
                                      </div>
                                    <div  className="serviceroot1R">
                                        <Card>
                                            <Typography  className="title1Radvance">
                                            Selected
                                            </Typography>
                                            </Card>
                                    
                                    </div>
                             </div> 
                
                              </div>
                              <div ><div className="twocardR" onMouseMove={this._onMouseMove1} onMouseOut={this._onMouseOut1}
                                >
                 
                                 <div className="servicerootR">
                                 <Card>
                                 <div className={classes.widthheight}>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                Price : $49 per
                                </Typography>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                month
                                </Typography>
                                <Typography className={classes.advance} color="textSecondary" gutterBottom>
                                basic
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . $49/month
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . Ability to ad  only title and description
                                </Typography>
                                </div>
                                        </Card>
                               
                                 </div>
                                    <div  className="serviceroot1R">
                                        <Card>
                                            <Typography  className="title1R">
                                            ADD TO CART
                                            </Typography>
                                            </Card>
                                    
                                    </div>
                             </div> 
                
                              </div>
                            </div>
                            :     <div className="rowReg">
                            <div ><div className="twocardR" onMouseMove={this._onMouseMove1} onMouseOut={this._onMouseOut1}
                                     >
                 
                                   <div className="servicerootR">
                                   <Card>
                                   <div className={classes.widthheight}>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                Price : $49 per
                                </Typography>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                month
                                </Typography>
                                <Typography className={classes.advance} color="textSecondary" gutterBottom>
                                advance
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . $49/month
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . Ability to ad  only title and description
                                </Typography>
                                </div>
                                        </Card>
                               
                                      </div>
                                    <div  className="serviceroot1R">
                                        <Card>
                                            <Typography  className="title1R">
                                            ADD TO CART
                                            </Typography>
                                            </Card>
                                    
                                    </div>
                             </div> 
                
                              </div>
                              <div ><div className="twocardR" onMouseMove={this._onMouseMove1} onMouseOut={this._onMouseOut1}
                                >
                 
                                 <div className="servicerootR">
                                 <Card>
                                 <div className={classes.widthheight}>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                Price : $49 per
                                </Typography>
                                <Typography className={classes.price} color="textSecondary" gutterBottom>
                                month
                                </Typography>
                                <Typography className={classes.advance} color="textSecondary" gutterBottom>
                                basic
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . $49/month
                                </Typography>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                . Ability to ad  only title and description
                                </Typography>
                                </div>
                                        </Card>
                               
                                 </div>
                                    <div  className="serviceroot1R">
                                        <Card>
                                            <Typography  className="title1Rbasic">
                                            Selected
                                            </Typography>
                                            </Card>
                                    
                                    </div>
                             </div> 
                
                              </div>
                            </div>}

            </div>
          </div>
        </Paper> :
         <Paper id="rootpaper">
        
         <div className="container">

           <div className="border">
             <div className="loginFrom">
               <img src={profile} id="img" />
               <div className="inputField">
                 <TextField
                   error={this.state.helperTextEmail}
                   helperText={this.state.helperTextEmail}
                   id="btn"
                   variant="outlined"
                   label="Emails"
                    onChange={this.onchangeEmail}
                 />
               </div>

               <div className="inputField">
                 <TextField
                   error={this.state.helperTextpassowrd }
                  id="btn"
                  variant="outlined"
                  type="password"
                  label="Password"
                  helperText={this.state.helperTextpassowrd }
                  onChange={this.onchangePassword}
                 />
               </div>

               <div className="submitButton">
                 <Button id="subbtn" onClick={e => this.SignIn(e)}>
                   Sign in
               </Button>
               </div>
               <div className="belowlogin">
                 <Button id="forgotstyle" onClick={e => this.ForgotButton(e)}>
                  Forgot Password
                  </Button>
               </div>

            
             </div>
           </div>
           </div>
                
            </Paper>      }
        <div className="registercontainer">
        <Button id="register" onClick={e => this.register(e)}>
              Create account
            </Button>
       </div> 
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
export default withStyles(useStyles)(Login);