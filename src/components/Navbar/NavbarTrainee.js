import React, { useContext } from "react";
import {useHistory } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {App, UserContext} from "../../App";
import AccountCircle from "@material-ui/icons/AccountCircle";

import useStyles from "./styles";

export default function NavbarTrainee() {

  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  
  return (

        <Toolbar>
          <IconButton edge="start" href="/HomePage" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
         
          <Typography className={classes.title}>
          <Button edge="start" href="/TraineeProfile" className={classes.menuButton} color="inherit" aria-label="menu">
          <AccountCircle className={classes.icons} /> 
            profile
            </Button>
            <Button color="inherit" href="/HomePage">Home</Button>
            <Button edge="start" className={classes.menuButton} color="inherit" aria-label="menu"
              aria-label="settings"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/LoginTrainee");
              }}
            >
              Logout
            </Button>
            </Typography>     
        </Toolbar>
  );
}
