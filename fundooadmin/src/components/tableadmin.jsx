import React, { Component } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Snackbar,
  IconButton,
  CircularProgress,
} from "@material-ui/core";
import { getuser } from "../services/loginService";
import ClipLoader from "react-spinners/ClipLoader";

const useStyles = {
  table: {
    minWidth: 450,
    width: "450px",
    height: "200px",
    backgroundColor: "blue",
  },
  TableContainer: {
    backgroundColor: "blue",
  },
};

function createData(username, service, role) {
  return { username, service, role };
}

function searchigFor(query) {
  return function (search) {
    return (
      search.firstName.toLowerCase().includes(query.toLowerCase()) ||
      search.service.toLowerCase().includes(query.toLowerCase()) ||
      search.role.toLowerCase().includes(query.toLowerCase()) ||
      !query
    );
  };
}

class Tableadmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      snackbaropen: false,
      snackbarmsg: "",
      query: this.props.query,
      loading: true,
    };
  }

  handleClose = (event) => {
    // event.preventDefault();
    this.setState({ snackbaropen: false });
  };
  componentDidMount() {
    getuser().then((response) => {
      if (response.status === 200) {
        this.setState({ data: response.data, loading: false });
      } else {
        this.setState({ snackbarmsg: "Netwrork is slow", snackbaropen: true });
      }
    });
  }

  render() {
    const classes = this.props;
    return (
      <div className="tableWidth">
        <div className="tableCenter">
          <TableContainer component={Paper}>
            <Table className="table" aria-label="simple table">
              <TableHead>
                <TableRow className="TableContainer">
                  <TableCell>
                    <div className="textDesign">
                      Username - {this.state.data.length}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="textDesign">Service</div>
                  </TableCell>
                  <TableCell>
                    <div className="textDesign">Role</div>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <ClipLoader
                  // css={override}
                  css={{ width: "50px", height: "50px", marginLeft: "105%" }}
                  size={150}
                  color={"#123abc"}
                  loading={this.state.loading}
                />
                {this.state.data
                  .filter(searchigFor(this.props.query))
                  .map((data, index) => (
                    <TableRow key={index} className="TableContainer1">
                      <TableCell>{data.firstName}</TableCell>
                      <TableCell>{data.service}</TableCell>
                      <TableCell>{data.role}</TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TableContainer>
          {/* } */}
        </div>
        <Snackbar
          open={this.state.snackbaropen}
          autoHideDuration={6000}
          onClose={this.handleClose}
          message={<span>{this.state.snackbarmsg}</span>}
          action={[
            <IconButton
              key="close"
              arial-label="close"
              color="inherit"
              onClick={this.handleClose}
            >
              x
            </IconButton>,
          ]}
        ></Snackbar>
      </div>
    );
  }
}

export default withStyles(useStyles)(Tableadmin);
