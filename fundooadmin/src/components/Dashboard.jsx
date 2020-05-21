import React, { Component } from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme, withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import keepBulb from "../assets/keepBulb.png";
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Tableadmin from './Tableadmin'
import CartApproval from './CartApproval'
import QuestionAnswer from "./QuestionAnswer"
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import search from '../assets/search.png';
import clear from '../assets/clear.png';
import DetailsIcon from '@material-ui/icons/Details';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    backgroundColor:'white',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  drawerHeader1: {
    display: 'flex',
    marginTop: '10px',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  bulbImg:{
    display : 'flex',
    justifyContent : 'center',
    marginRight : theme.spacing(1)
  },
});

class Dashboard extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
      setOpen: false,
      choice: "Cart",
      query: ''

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
    if (text == 'Edit labels') {
      // <Edit/>
      this.setState({ choice: 'Editlabels' })
    }
  }
  handleButton=(cho)=>{
    // event.preventDefault();
    if (cho == 'Admin') {
      
      this.setState({ choice: 'Tableadmin' })
    }
    else if(cho == 'QA'){
      this.setState({ choice: 'details' })
    }
    else if( cho == 'Cart'){
      this.setState({ choice: 'Cart' })

    }
  }
  getcomponents = () => {

    if (this.state.choice == 'Tableadmin') {
      return <Tableadmin query={this.state.query} />
    }
    else if (this.state.choice == 'details') {
      return <QuestionAnswer query={this.state.query} />
    }
    else if(this.state.choice == 'Cart'){
      return <CartApproval query={this.state.query} />
    }
  }
  queryfunction = async (event) => {
    await this.setState({ query: event.target.value });
    //  <Tableadmin query={this.state.query}/>
  }
  details = (details) => {
    this.setState({ choice: details })
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <CssBaseline />
        <AppBar
          // position="fixed"
          className={clsx(classes.appBar, {
            [classes.appBarShift]: this.state.open,
          })}
        >
          <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
            <div style={{display : "flex",flexDirection:"row"}}>
            <div className={classes.bulbImg} className="bulbicon"  >
             <img src={keepBulb} className="bulbIcon" />
          </div>
            <div  className="fundooDesign">
              Fundoo
          </div>

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
                  <img src={clear} id="imgdash" />
                </div>

              </div>
            </div>
         

           <div style={{display :"flex",flexDirection : "row"}}>
           <IconButton class="tooltip" style={{color : 'black',cursor : "pointer",border : 'none'}} onClick={()=>this.handleButton("Cart")}>
               <ShoppingCartIcon style={{opacity: "0.7"}} />
               <span class="tooltiptext">Cart Approval</span>
            </IconButton>

              <IconButton class="tooltip" style={{color : 'black',cursor : "pointer",border : 'none'}} onClick={()=>this.handleButton("Admin")}>
               <HowToRegIcon style={{opacity: "0.7"}}/>
               <span class="tooltiptext">User Details</span>
            </IconButton>
              <IconButton class="tooltip" style={{color : 'black',cursor : "pointer",border : 'none'}} onClick={()=>this.handleButton("QA")}>
                <QuestionAnswerIcon style={{opacity: "0.7"}}/>
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
            <IconButton onClick={this.handleDrawerClose}>
              {/* <MenuIcon /> */}
            </IconButton>
          </div>
          <Divider />
          <List>
            {['Notes', 'Remainder'].map((text, index) => (
              <ListItem button key={text} onClick={e => this.Editlabel(e, text)} >
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <div>LABELS</div>
          <List>
            {['Edit labels'].map((text, index) => (
              <ListItem button key={text} onClick={e => this.Editlabel(e, text)}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {['Archive', 'Bin'].map((text, index) => (
              <ListItem button key={text}>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
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
          <List style={{ maxHeight: '100%', overflow: 'auto', padding: '5px' }} >
            {this.getcomponents()}


          </List>

        </main>
      </div>
    );
  }
}

export default withStyles(useStyles)(Dashboard);