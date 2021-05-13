import React, { useContext } from "react";
import {useHistory } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import {App, UserContext} from "../../App";
import AccountCircle from "@material-ui/icons/AccountCircle";
import useStyles from "./styles";
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
export default function NavbarTrainer() {

  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();

  return ( 
        <Toolbar>
          <Typography className={classes.title}>
          <IconButton edge="start" href="/HomePage" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Button color="inherit"
              onClick={() => {
                localStorage.clear();
                dispatch({ type: "CLEAR" });
                history.push("/LoginTrainer");
              }}
            >
              Logout
            </Button>
            <Button color="inherit" href="/createtraining">Create New Training</Button>
          <Button edge="start" href="/TrainerProfile" className={classes.menuButton} color="inherit" aria-label="menu">
          <AccountCircle className={classes.icons} /> 
            profile
            </Button>
          <Button color="inherit" href="/HomePage">
            Home
          </Button>
            </Typography> 
        </Toolbar>
  );
}


