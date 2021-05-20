/*eslint-disable*/
import React, { useContext } from "react";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
// react components for routing our app without refresh
import { Link } from "react-router-dom";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// core components
import CustomDropdown from "../CustomDropdown/CastomDropdown";
import Button from "../CustomButtons/Button";

import styles from "./HeaderLinksStyle";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
const history = useHistory();
var name = localStorage.getItem("role");
console.log(name)
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button
          href="/LoginTrainer"
          color="transparent"
          className={classes.navLink}
        >
          Login Trainer
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/LoginTrainee"
          color="transparent"
          className={classes.navLink}
        >
          Login Trainee
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/HomePage"
          color="transparent"
          className={classes.navLink}
        >
          Home
        </Button>
      </ListItem>
    </List>
  );
}

