import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../../App";
import Avatar from "@material-ui/core/Avatar";
import Button from "../../../CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";
import CardFooter from "../../../Card/CardFooter";
import CardBody from "../../../Card/CardBody";

// import styles from "../LogInStyle";

// const loginstyle = makeStyles(styles);

// const classes = loginstyle();

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
  const SigninCheck = () => {
    fetch(`${process.env.REACT_APP_SERVER}/signinTrainee`, {
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
        localStorage.setItem("jwt", data.token);
        localStorage.setItem("trainee", JSON.stringify(data.trainee));
        localStorage.setItem("role","trainee");
        dispatch({ type: "TRAINEE", payload: data.user });
        history.push("/HomePage");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
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
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button onClick={() => SigninCheck()} round color="primary">Sign In</Button>
          <CardFooter>
            <Grid container>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </CardFooter>
        </form>
  );
}
