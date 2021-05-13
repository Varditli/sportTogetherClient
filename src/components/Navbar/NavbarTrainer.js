import React, { useContext } from "react";
import {useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {App, UserContext} from "../../App";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "./styles";
import PropTypes from 'prop-types';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles, useTheme } from '@material-ui/core/styles';

export default function NavbarTrainer() {

  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  
  function ResponsiveDrawer() {
    const dummyCategories = ['Hokusai', 'Hiroshige', 'Utamaro', 'Kuniyoshi', 'Yoshitoshi']
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);
  function handleDrawerToggle() {
      setMobileOpen(!mobileOpen)
    }
  const drawer = (
      <div>
        <List>
          {dummyCategories.map((text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    );
  return ( 
    <div className={classes.root}>
        <Toolbar>
          <Typography className={classes.title}>
          <IconButton edge="start" href="/HomePage" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit" href="/createtraining">Create New Training</Button>
          <Button color="inherit"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/LoginTrainer");
              }}
            >
              Logout
            </Button>
          <Button edge="start" href="/TrainerProfile" className={classes.menuButton} color="inherit" aria-label="menu">
          <AccountCircle className={classes.icons} /> 
            profile
            </Button>
          <Button color="inherit" href="/HomePage">
            Home
          </Button>
            </Typography> 
        </Toolbar>

            <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp implementation="css">
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={mobileOpen}
                onClose={handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                  <CloseIcon/>
                </IconButton>
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden xsDown implementation="css">
              <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                <div className={classes.toolbar} />
                {drawer}
              </Drawer>  
            </Hidden>
            </nav>
            <div className={classes.content}>
            <div className={classes.toolbar} />
            {/* <VisibleItemList /> */}
            </div>
            </div>
            

  );
}

ResponsiveDrawer.propTypes = {
  // Injected by the documentation to work in an iframe.
  // You won't need it on your project.
  container: PropTypes.object,
};
}
