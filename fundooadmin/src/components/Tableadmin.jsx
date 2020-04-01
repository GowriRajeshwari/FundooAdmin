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

const rows = [
  createData('Frozen yoghurt', 159 , 4.0),
  createData('Frozen yoghurt', 159 , 4.0),
  createData('Frozen yoghurt', 159 , 4.0),
  createData('Frozen yoghurt', 159 , 4.0),
  createData('Gingerbread', 49, 3.9),
];

class Tableadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data : []
    };
  }


  componentDidMount(){
    getuser().then(response => {
      // console.log(response.data[0].role);
     if (response.status === 200) {
         
        this.setState({data : response.data});
        console.log(this.state.data)
     } else {
         this.setState({  snackbarmsg: "Login Not Successfull,Make sure email & password is correct", snackbaropen: true });
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
        {this.state.data.map((data, index) => (
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
    </div>
    
  );
}
}

export default withStyles(useStyles)(Tableadmin);