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
import HeaderTrainee from "./HeaderTrainee";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  const { state, dispatch } = useContext(UserContext);
const history = useHistory();
var name = localStorage.getItem("role");
console.log(name)
 
// const renderList = () => {
//     if (name) {
//       if (name.includes("trainer")) {
//         return [
//           <HeaderTrainee />
//         ]} else if (name.includes("trainee")) {
//         return [
//         <HeaderTrainee />
//         ];
//       }
//     } else {
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Trainee"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/LoginTrainee" className={classes.dropdownLink}>
              Login Trainee
            </Link>,
            <Link to="/TraineeProfile" className={classes.dropdownLink}>
            Profile 
          </Link>
            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="Trainer"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/LoginTrainer" className={classes.dropdownLink}>
              Login Trainer
            </Link>,
            <Link to="/CraeteTraining" className={classes.dropdownLink}>
            Create Training
          </Link>,
            <Link to="/TrainerProfile" className={classes.dropdownLink}>
              Profile
          </Link>
            
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="/HomePage"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          Home
        </Button>
      </ListItem>
    </List>
  );
}
// }};
