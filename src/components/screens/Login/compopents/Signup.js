import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import useStyles from "../styles";

export default function Signup(isTrainer) {
  const history = useHistory();
  const [username, setName] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
 


  const classes = useStyles();
  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      //   M.toast({ html: "Invalid email", classes: "#ff4081 pink accent-2" });
      return;
    }
    fetch(`${process.env.REACT_APP_SERVER}/signup`, {
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
          console.log("successfully Trainer");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const PostDataTrainer = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      //   M.toast({ html: "Invalid email", classes: "#ff4081 pink accent-2" });
      return;
    }
    fetch(`${process.env.REACT_APP_SERVER}/signupTrainer`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        age,
        experience,
        tel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("nonononono");
        } else {
          console.log("successfully Trainer");
          history.push("/");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(isTrainer);
  return (
    <div className={classes.paper}>
      <form className={classes.form} noValidate>
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

        {
          !isTrainer ? (
            <div>
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
                name="experience"
                label="experience"
                id="experience"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
            </div>
          ) : (
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
          )
        }

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
        <FormControlLabel
          control={<Checkbox value="remember" color="primary" />}
          label="Remember me"
        />
        {isTrainer ? (
          <Button onClick={() => PostDataTrainer()}>SignUp</Button>
        ) : (
          <Button onClick={() => PostData()}>SignUp</Button>
        )}

        <Grid container>
          <Grid item xs>
            <Link href="#" variant="body2">
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href="#" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
      </form>
    </div>
  );
}
