import React, { useContext } from "react";
import {useHistory } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {App, UserContext} from "../../App";
import AccountCircle from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";

// const useStyles = makeStyles(navbarsStyle);


export default function NavbarTrainer() {

  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();


  return ( 
        <Toolbar>
          <IconButton edge="start" href="/HomePage" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          
          <Typography className={classes.title}>
          <Button edge="start" href="/TrainerProfile" className={classes.menuButton} color="inherit" aria-label="menu">
          <AccountCircle className={classes.icons} /> 
            profile
            </Button>
          <Button color="inherit" href="/HomePage">Home</Button>
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
            </Typography> 
        </Toolbar>
  );
}
