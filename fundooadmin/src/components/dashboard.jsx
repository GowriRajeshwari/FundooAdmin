import React, { Component } from "react";
import clsx from "clsx";
import { makeStyles, useTheme, withStyles } from "@material-ui/core/styles";
import {
  Drawer,
  CssBaseline,
  AppBar,
  Toolbar,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
  TextField,
} from "@material-ui/core";
import keepBulb from "../assets/keepBulb.png";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import Tableadmin from "./tableadmin";
import CartApproval from "./cartApproval";
import QuestionAnswer from "./questionAnswer";
import search from "../assets/search.png";
import clear from "../assets/clear.png";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
const drawerWidth = 240;

const useStyles = (theme) => ({
  root: {
    display: "flex",
  },
  appBar: {
    backgroundColor: "white",
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: "flex",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  drawerHeader1: {
    display: "flex",
    marginTop: "10px",
    alignItems: "center",
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: "flex-end",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bulbImg: {
    display: "flex",
    justifyContent: "center",
    marginRight: theme.spacing(1),
  },
});

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false,
      choice: "Tableadmin",
      query: "",
    };
  }
  handleDrawerOpen = () => {
    this.setState({ setOpen: true, open: true });
  };

  handleDrawerClose = () => {
    this.setState({ setOpen: false, open: false });
  };

  Editlabel = (event, text) => {
    event.preventDefault();
    if (text == "Edit labels") {
      this.setState({ choice: "Editlabels" });
    }
  };
  handleButton = (cho) => {
    if (cho == "Admin") {
      this.setState({ choice: "Tableadmin" });
    } else if (cho == "QA") {
      this.setState({ choice: "details" });
    } else if (cho == "Cart") {
      this.setState({ choice: "Cart" });
    }
  };
  getcomponents = () => {
    if (this.state.choice == "Tableadmin") {
      return <Tableadmin query={this.state.query} />;
    } else if (this.state.choice == "details") {
      return <QuestionAnswer query={this.state.query} />;
    } else if (this.state.choice == "Cart") {
      return <CartApproval query={this.state.query} />;
    }
  };
  queryfunction = (event) => {
    this.setState({ query: event.target.value });
  };
  details = (details) => {
    this.setState({ choice: details });
  };
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar className="toolContainer">
            <div className="rowStyle">
              <div className={classes.bulbImg} className="bulbicon">
                <img src={keepBulb} className="bulbIcon" />
              </div>
              <div className="fundooDesign">Fundoo</div>
            </div>

            <div className="serachCotainer1">
              <div className="serachCoteiner2">
                <div className="searchContainer3">
                  <img src={search} />
                  <TextField
                    placeholder="search"
                    hintText="Password"
                    id="inputFielddash"
                    InputProps={{ disableUnderline: true }}
                    onChange={this.queryfunction}
                  />
                  <img src={clear} id="imgdashclear" />
                </div>
              </div>
            </div>

            <div className="rowStyle">
              <IconButton
                class="tooltip"
                className="iconButton"
                onClick={() => this.handleButton("Cart")}
              >
                <ShoppingCartIcon className="opacity" />
                <span class="tooltiptext">Cart Approval</span>
              </IconButton>

              <IconButton
                class="tooltip"
                className="iconButton"
                onClick={() => this.handleButton("Admin")}
              >
                <HowToRegIcon className="opacity" />
                <span class="tooltiptext">User Details</span>
              </IconButton>
              <IconButton
                class="tooltip"
                className="iconButton"
                onClick={() => this.handleButton("QA")}
              >
                <QuestionAnswerIcon className="opacity" />
                <span class="tooltiptext">Answer Approval</span>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        <Drawer
          className={classes.drawer}
          variant="persistent"
          anchor="left"
          open={this.state.open}
          classes={{
            paper: classes.drawerPaper,
          }}
        >
          <div className={classes.drawerHeader1}>
            <IconButton onClick={this.handleDrawerClose}></IconButton>
          </div>
          <Divider />
          <List>
            {["Notes", "Remainder"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={(e) => this.Editlabel(e, text)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <div>LABELS</div>
          <List>
            {["Edit labels"].map((text, index) => (
              <ListItem
                button
                key={text}
                onClick={(e) => this.Editlabel(e, text)}
              >
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Archive", "Bin"].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>
        <main
          className={clsx(classes.content, {
            [classes.contentShift]: this.state.open,
          })}
        >
          <div className={classes.drawerHeader} />
          <List className="listStyle">{this.getcomponents()}</List>
        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Dashboard);
