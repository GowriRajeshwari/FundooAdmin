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
    width : '450px'
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

class Dashboard extends Component {
render(){
  const classes = this.props;
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>username</TableCell>
            <TableCell >service</TableCell>
            <TableCell >role</TableCell>
        
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
    
  );
}
}

export default withStyles(useStyles)(Dashboard);