import React, { Component } from "react";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import profile from '../assets/profile.png';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { userCartList,adminCompleteOrder,adminCancelOrder} from "../services/LoginService";
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import ClipLoader from "react-spinners/ClipLoader"


function searchigFor(query){
  return function(x){
    return x.user.firstName.toLowerCase().includes(query.toLowerCase())||
    // x.user.addresses[0].address.toLowerCase().includes(query.toLowerCase())||
    x.product.name.toLowerCase().includes(query.toLowerCase())||!query;
  }
}
class CartApproval extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data :[],
        query : this.props.query,
        snackbaropen: false,
        address : [],
        loading : true


    
    };
  }
  componentDidMount=()=>{
    userCartList().then(response => {
        console.log( response.data.data)
       

       if (response.status === 200) {
            this.setState({ data : response.data.data})
            for(let i=0;i<response.data.data.length;i++){
              if(response.data.data[i].user.addresses != undefined){
                this.state.address.push( response.data.data[i].user.addresses[0].address);
              }
              else{
                this.state.address.push("undefined");
              }
               
             
            }
            this.setState({ address : this.state.address,loading: false})
            // console.log(this.state.address[0])
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
    let data ={
      cartId : id
    }
    adminCompleteOrder(data).then(response => {
      console.log(response);
     if (response.status === 200) {
       this.componentDidMount()
      this.setState({  snackbarmsg: "OrderPlaced is accepted", snackbaropen: true });

     } else {
         this.setState({  snackbarmsg: "Order not accepted", snackbaropen: true });
     }
  });
  }
  rejectQuestion=(id)=>{
    let data ={
      cartId : id
    }
    adminCancelOrder(data).then(response => {
      console.log(response);
     if (response.status === 200) {
      this.componentDidMount()
      this.setState({  snackbarmsg: "Order is rejected", snackbaropen: true });
     } else {
         this.setState({  snackbarmsg: "Order not rejected", snackbaropen: true });
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
              Cart Details
              </div>
            </div>
            <div className="widthApproval">
              <div className="stylefont1">
              Approval
              </div>
            </div>
          </div>
          <div>
          <ClipLoader
                // css={override}
                css={{ width : "50px",height :"50px",marginLeft : "50%"}}
                size={150}
                color={"#123abc"}
                loading={this.state.loading}
              />
          </div>
          {this.state.data.filter(searchigFor(this.props.query)).map((data,index)=>(
            <div>
              <Divider/>
              <div key={index} className="row">
                  <div className="questionPart">
                      <div className="stylefont">
                      {data.user.firstName} {data.user.lastName}
                      </div>
                      <div>
                        <div className="stylefont">
                          service : {data.product.name}    Price : ${data.product.price}
                        </div>
                      </div>
                      <div>
                        <div className="stylefont">
                          address : {this.state.address[index]}
                        </div>
                      </div>
                      <div>
                        <div className="stylefont">

                          
                        </div>
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
                      <div style={{padding :"2px"}}>
                      Accept
                      </div>
                    </div>}
                    {data.isCanceled ? <div className="canceled">
                      <div>Reject</div>
                    </div> : 
                    <div className="canceled1" onClick={()=>this.rejectQuestion(data.id)}>
                    <div style={{padding :"2px"}}>Reject</div>
                  </div>
                 
                }
                  </div>
                  
              </div>
              <Divider/>
              </div>
          ))}
              </div>
              <Snackbar open={this.state.snackbaropen} autoHideDuration={4000} onClose={this.handleClose}
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
export default CartApproval;