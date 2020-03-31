import React , {Component} from 'react';
import { makeStyles , withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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

  componentDidMount(){
    
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
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell >
                {row.username}
              </TableCell>
              <TableCell >{row.service}</TableCell>
              <TableCell >{row.role}</TableCell>
              
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