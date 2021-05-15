import React, { useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import Header from "./Header";
import HeaderLinks from "./HeaderLinks";
import HeaderTrainee from "./HeaderTrainee";
import HeaderLinksTrainee from "./HeaderLinksTrainee";
import HeaderLinksTrainer from "./HeaderLinksTrainer";


export default function HeaderNavigation(props) {

const { state, dispatch } = useContext(UserContext);
const history = useHistory();
var name = localStorage.getItem("role");
console.log(name)

const renderList = () => {
    if (name) {
      if (name.includes("trainee")) {
        return [
            <Header
            brand="SporTogether"
            rightLinks={<HeaderLinksTrainee />}
            fixed
            color="transparent"
            changeColorOnScroll={{
            height: 400,
            color: "white"
            }}
            // {...rest}
            />
        ]} else if (name.includes("trainer")) {
        return [
            <Header
            brand="SporTogether"
            rightLinks={<HeaderLinksTrainer />}
            fixed
            color="transparent"
            changeColorOnScroll={{
            height: 400,
            color: "white"
            }}
            // {...rest}
            />
        ];
      }
    } else {
        return(

            <Header
            brand="SporTogether"
            rightLinks={<HeaderLinks />}
            fixed
            color="transparent"
            changeColorOnScroll={{
            height: 400,
            color: "white"
            }}
            // {...rest}
            />
        );
    }

}
return (
     renderList()
  );
}