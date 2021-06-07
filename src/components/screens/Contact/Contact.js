
/*eslint-disable*/
import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import Parallax from "../../compopnets/Parallax/Parallax";
import { BrowserRouter as Router } from "react-router-dom";
import '../../../App.css';
import { makeStyles } from "@material-ui/core/styles";
import styles from "./contactStyle.css";
const useStyles = makeStyles(styles);

import ReactDOM from 'react-dom';


export default function Contact() {

    const classes = useStyles();
    return (
        <div className="{classes.main}">
          <Parallax
            small
            filter
            image={
              "https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"
            }
          />
          <div>
              <h1>Contact Us</h1>
              <h3>You can contact us by sending us an email: </h3>
              <ul type="none">
                <li><a href="mailto:lifshin.vardit@gmail.com">lifshin.vardit@gmail.com</a></li>
                <li><a href="mailto:chenmr@mta.ac.il">chenmr@mta.ac.il</a></li>
              </ul>
              <h2>Founders</h2>
              <table>
                  <tr>
                      <td>
                          <img src="https://res.cloudinary.com/varditcloud/image/upload/v1623064559/va_xcoqda.jpg" alt="Vardit" height="200px" width="200px"></img>
                      </td>
                      <td>
                          <img src="https://res.cloudinary.com/varditcloud/image/upload/v1623064559/va_xcoqda.jpg" alt="Vardit" height="200px" width="200px"></img>
                      </td>
                  </tr>
              </table>
              </div>
        </div>
    );
}
    
