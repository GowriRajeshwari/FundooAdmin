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
import Divider from '@material-ui/core/Divider';

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
        query : this.props.query,
        snackbaropen: false,

    
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
  acceptQuestion=(id,msg)=>{
  
    AcceptQuestion(id).then(response => {
      console.log(response);
     if (response.status === 200) {
       this.componentDidMount()
          // this.setState({ data : response.data.data})
      this.setState({  snackbarmsg: msg.replace( /<[^>]*>/g , "") + " accepted", snackbaropen: true });

     } else {
         this.setState({  snackbarmsg: "Message not accepted", snackbaropen: true });
     }
  });
  }
  rejectQuestion=(id,msg)=>{
   
    RejectQuestion(id).then(response => {
      console.log(response);
     if (response.status === 200) {
      this.setState({  snackbarmsg: msg.replace( /<[^>]*>/g , "")+ " rejected", snackbaropen: true });

      this.componentDidMount()

          // this.setState({ data : response.data.data})
     } else {
         this.setState({  snackbarmsg: "message not rejected", snackbaropen: true });
     }
  });
  }
  handleClose=(event)=> {
    // event.preventDefault();
    this.setState({ snackbaropen: false });
}
close=()=>{

}
  render() {
    return (
      <div className="firstcontainer">
          <div className="detailcontainer2">
          <div className="rowWise">
            <div>
            <div className="stylefont1">
              Question & Answer
              </div>
            </div>
            <div className="widthApproval">
              <div className="stylefont1">
              Approval
              </div>
            </div>
          </div>
          {this.state.data.filter(searchigFor(this.props.query)).map((data,index)=>(
            <div>
              <Divider/>
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
                    <div className="approved1" onClick={()=>this.acceptQuestion(data.id,data.message)}>
                      <div>
                      Accept
                      </div>
                    </div>}
                    {data.isCanceled ? <div className="canceled">
                      <div>Reject</div>
                    </div> : 
                    <div className="canceled1" onClick={()=>this.rejectQuestion(data.id,data.message)}>
                    <div>Reject</div>
                  </div>
                 
                }
                  </div>
                  
              </div>
              <Divider/>
              </div>
          ))}
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
export default QuestionAnswer;