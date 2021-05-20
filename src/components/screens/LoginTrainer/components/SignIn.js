import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import Avatar from "@material-ui/core/Avatar";
import Button from "../../../CustomButtons/Button"
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import {useStyles} from "../styles";
import CardFooter from "../../../Card/CardFooter";
import CardBody from "../../../Card/CardBody";
import GridItem from "../../../Grid/GridItem";




export default function SignIn(isTrainer) {
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  setTimeout(function () {
    setCardAnimation("");
  }, 700);
function refreshPage() {
    window.location.reload(false);
  }
  const SigninTrainer = () => {
    fetch(`${process.env.REACT_APP_SERVER}/signinTrainer`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
        }
        console.log(data);
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("trainer", JSON.stringify(data.trainer));
        localStorage.setItem("role","trainer");
        dispatch({ type: "TRAINER", payload: data.trainer });
        history.push("/HomePage");
        refreshPage();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
   <div>
          <form className={classes.form} noValidate>
          <CardBody>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </CardBody>
          <GridItem>
          <Button 
          onClick={() => SigninTrainer()}
          round
          color="primary"
            >Sign In
            </Button>
            </GridItem>

        </form>
        </div>

  );
}
