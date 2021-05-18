import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "../../../CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";
import CardFooter from "../../../Card/CardFooter";
import CardBody from "../../../Card/CardBody";
import GridItem from "../../../Grid/GridItem";

export default function Signup() {
  const history = useHistory();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");

  const classes = useStyles();
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      //   M.toast({ html: "Invalid email", classes: "#ff4081 pink accent-2" });
      return;
    }
    fetch(`${process.env.REACT_APP_SERVER}/signupTrainee`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        age,
        tel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("nonononono");
        } else {
          console.log("successfully Added Trainee");
          window.location.reload("false");
        }
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
            id="username"
            label="Name"
            name="username"
            autoComplete="name"
            autoFocus
            value={username}
            onChange={(e) => setName(e.target.value)}
          />
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
            id="tel"
            label="phone"
            name="tel"
            autoFocus
            value={tel}
            onChange={(e) => setTel(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="age"
            label="Age"
            name="age"
            autoFocus
            value={age}
            onChange={(e) => setAge(e.target.value)}
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
        <GridItem margin="auto">
          <Button onClick={() => PostData()} round color="primary">SignUp</Button>
        </GridItem>
      </form>
  );
}
