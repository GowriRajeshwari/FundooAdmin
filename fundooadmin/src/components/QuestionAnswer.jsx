import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import profile from '../assets/profile.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { getUnapprovalQuestion,AcceptQuestion,RejectQuestion } from "../services/LoginService";
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

function searchigFor(query){
  return function(x){
    return x.message.toLowerCase().includes(query.toLowerCase())||!query;
  }
}
class QuestionAnswer extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data :[],
        query : this.props.query
    
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
  acceptQuestion=(id)=>{
    let data={
      answerid : id
    }
    AcceptQuestion(id).then(response => {
      console.log(response);
     if (response.status === 200) {
       this.componentDidMount()
          // this.setState({ data : response.data.data})
     } else {
         this.setState({  snackbarmsg: "Login Not Successfull,Make sure email & password is correct", snackbaropen: true });
     }
  });
  }
  rejectQuestion=(id)=>{
    // RejectQuestion
    let data={
      answerid : id
    }
    RejectQuestion(id).then(response => {
      console.log(response);
     if (response.status === 200) {
      this.componentDidMount()
          // this.setState({ data : response.data.data})
     } else {
         this.setState({  snackbarmsg: "Login Not Successfull,Make sure email & password is correct", snackbaropen: true });
     }
  });
  }
  render() {
    return (
      <div className="firstcontainer">
          <div className="detailcontainer2">
          {this.state.data.filter(searchigFor(this.props.query)).map((data,index)=>(
              <div key={index} className="row">
                  <div className="questionPart">
                      <div className="stylefont">
                      {this.message(data.message)}
                      </div>
                  </div>
                  <div className="alignItemCenter">
                    {data.isApproved ? 
                    <div className="approved" >
                      <div> 
                      Accept
                      </div>
                    </div> : 
                    <div className="approved1" onClick={()=>this.acceptQuestion(data.id)}>
                      <div>
                      Accept
                      </div>
                    </div>}
                    {data.isCanceled ? <div className="canceled">
                      <div>Reject</div>
                    </div> : 
                    <div className="canceled1" onClick={()=>this.rejectQuestion(data.id)}>
                    <div>Reject</div>
                  </div>}
                  </div>
              </div>
          ))}
              </div>
       
      </div>
    );
  }
}
export default QuestionAnswer;