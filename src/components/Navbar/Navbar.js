import React, { useContext } from "react";
import AppBar from '@material-ui/core/AppBar';
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Slide from "@material-ui/core/Slide";
import NavbarTrainee from "./NavbarTrainee";
import NavbarTrainer from "./NavbarTrainer";
import useStyles from "./styles";
import GridItem from "../Grid/GridItem";

function HideOnScroll(props) {
  const { children, window } = props;
 
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
    {children}
  </Slide>
);
}

const Navbar = (props) => {
const { state, dispatch } = useContext(UserContext);
const history = useHistory();
 const classes = useStyles();
var name = localStorage.getItem("role");
console.log(name)

const renderList = () => {
  if (name) {
    if (name.includes("trainer")) {
      return [
        <NavbarTrainer />
      ]} else if (name.includes("trainee")) {
      return [
      <NavbarTrainee />
      ];
    }
  } else {
    return [
        <Toolbar>
          <IconButton edge="start" href="/HomePage" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          {/* <Navbar brand={icon} toggleNavKey={0}/> */}
          <Typography className={classes.title}>
          <Button edge="start" href="/LoginTrainee" className={classes.menuButton} color="inherit" aria-label="menu">
            Login Trainee
          </Button>
          <Button edge="start" href="/Logintrainer" className={classes.menuButton} color="inherit" aria-label="menu">
            Login Trainer
          </Button>
          </Typography>
          <Button color="inherit" href="/HomePage">Home</Button>
        </Toolbar>


    ];
  }
};
return (
  <HideOnScroll  {...props}>
    <AppBar className={classes.root}>
      <Toolbar className={classes.mar}>
          <ul className={classes.list}>{renderList()}</ul>
      </Toolbar>
    </AppBar>
  </HideOnScroll>
);
};

export default Navbar;

