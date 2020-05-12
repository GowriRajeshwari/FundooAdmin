import React ,{Component}from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme,withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Tableadmin from './Tableadmin'
import QuestionAnswer from "./QuestionAnswer"
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import search from '../assets/search.png';
import clear from '../assets/clear.png';
import DetailsIcon from '@material-ui/icons/Details';


const drawerWidth = 240;

const useStyles = theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
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
    marginTop : '10px',
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
});

 class Dashboard extends Component {
     
    constructor(props) {
        super(props);
        this.state = {
            open : false,
             setOpen : false,
             choice:"Tableadmin",
             query:''
         
        };
      }
      handleDrawerOpen = () => {
        this.setState({setOpen : true,open : true});
      };
    
      handleDrawerClose = () => {
        this.setState({setOpen : false,open:false});
      };

  

  Editlabel=(event,text)=>{
    event.preventDefault();
    if(text == 'Edit labels'){
        // <Edit/>
        this.setState({choice : 'Editlabels'})
    }
  }

  getcomponents=()=>{

      if(this.state.choice == 'Tableadmin'){
        return <Tableadmin query={this.state.query}/>
      }
      else if(this.state.choice == 'details'){
        return <QuestionAnswer query={this.state.query}/>
      }
  }
  queryfunction=async(event)=>{
     await this.setState({query : event.target.value});
    //  <Tableadmin query={this.state.query}/>
  }
  details=(details)=>{
    this.setState({ choice : details})
  }
render(){
    const {classes} = this.props;
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: this.state.open,
        })}
      >
        <Toolbar style={{display : "flex",justifyContent:"space-between"}}>
          
          <Typography variant="h6" noWrap>
           Fundoo
          </Typography>
                     <div style={
                               { height: '40px',
                                width: '700px',
                                marginLeft: '40px',
                                backgroundColor:'#ffffff',
                                flexDirection: 'row',
                                display: 'flex',
                                alignItems: 'center',
                                borderRadius: '3px',
                                justifyContent: 'center'
                            }
 
                                }>
                              <Paper>
                                  <div style={{ display : 'flex',justifyContent : 'center',
                                  height : '40px',width : '700px',alignItems:'center'}}>
                                  <img src={search} />
                                <TextField
                                    // label="Search"
                                    hintText="Password"
                                    // floatingLabelText="Password"
                                    id="inputFielddash"
                                    InputProps={{ disableUnderline: true }}
                                    style={{ backgroundColor: '#ff00',
                                     border: 'none', disableUnderline: true,width:'600px' }}
                                     onChange={this.queryfunction}
                                />
                                <img src={clear} id="imgdash" />
                                  </div>
                                
                             </Paper>
                    </div>
                    <IconButton
            // color="white"
            // aria-label="open drawer"
            // edge="start"
          >
                                 <DetailsIcon onClick={()=>this.details("details")}/>

          </IconButton>
                      
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
            <ListItem button key={text} onClick={e => this.Editlabel(e,text)} >
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <div>LABELS</div>
        <List>
          {['Edit labels'].map((text, index) => (
            <ListItem button key={text} onClick={e => this.Editlabel(e,text)}>
              <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {['Archive','Bin'].map((text, index) => (
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