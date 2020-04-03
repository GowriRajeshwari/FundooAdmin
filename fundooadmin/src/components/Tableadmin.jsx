import React , {Component} from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { getuser } from "../services/LoginService";
import Snackbar from '@material-ui/core/Snackbar';
import { IconButton } from "@material-ui/core";


const useStyles =({
  table: {
    minWidth: 450,
    width : '450px',
    height : '200px',
    backgroundColor : 'blue'

  },
  TableContainer:{
    backgroundColor : 'blue'
  },
});

function createData(username,service,role) {
  return { username,service,role };
}

function searchigFor(query){
  return function(x){
    return x.firstName.toLowerCase().includes(query.toLowerCase())||x.service.toLowerCase().includes(query.toLowerCase())||x.role.toLowerCase().includes(query.toLowerCase())||!query;
  }
}


class Tableadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : [],
        snackbaropen: false,
        snackbarmsg: '',
        query : this.props.query
    };
  }

  handleClose=(event)=> {
    // event.preventDefault();
    this.setState({ snackbaropen: false });
}
  componentDidMount(){
    
    getuser().then(response => {
      console.log(response);
     if (response.status === 200) {
         
        this.setState({data : response.data});
        console.log(this.state.data)
     } else {
         this.setState({  snackbarmsg: "Netwrork is slow", snackbaropen: true });
     }
  });
  }
 
render(){
  const classes = this.props;
  return (
    <div className="tableWidth">
      <div className="tableCenter">
    <TableContainer component={Paper}>
      <Table className="table" aria-label="simple table">
        <TableHead>
          <TableRow className="TableContainer">
            <TableCell ><div className="textDesign">Username</div></TableCell>
            <TableCell><div className="textDesign">Service</div></TableCell>
            <TableCell><div className="textDesign">Role</div></TableCell>
        
          </TableRow>
        </TableHead>
        <TableBody>
        {this.state.data.filter(searchigFor(this.props.query)).map((data, index) => (
          // {rows.map((row) => (
            <TableRow key={index}>
              <TableCell >
                {data.firstName}
              </TableCell>
              <TableCell >{data.service}</TableCell>
              <TableCell >{data.role}</TableCell>
              
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
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

export default withStyles(useStyles)(Tableadmin);