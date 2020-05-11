import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import profile from '../assets/profile.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getUnapprovalQuestion } from "../services/LoginService";
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data :[]
    
    };
  }
  componentDidMount=()=>{
    getUnapprovalQuestion().then(response => {
        console.log(response.data.data);
       if (response.status === 200) {
            this.setState({ data : response.data.data})
       } else {
           this.setState({  snackbarmsg: "Login Not Successfull,Make sure email & password is correct", snackbaropen: true });
       }
    });
  }
  message=(message)=>{
    var content = message.replace( /<[^>]*>/g , "");
    return content;
  }
  render() {
    return (
      <div className="firstcontainer">
          <div className="detailcontainer2">
          {this.state.data.map((data,index)=>(
              <div key={index} >
                  <div>
                      <Typography style={{height : "20px"}}>
                      {this.message(data.message)}
                      </Typography>
                  </div>
              </div>
          ))}
              </div>
       
      </div>
    );
  }
}
export default QuestionAnswer;