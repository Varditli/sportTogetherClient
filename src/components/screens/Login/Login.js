import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import useStyles from './styles';
import Container from '@material-ui/core/Container';
import SignUp from "./compopents/Signup"
import SignIn from "./compopents/Signin"


var isTrainer, isSignin, classUI;
const state= [
  isTrainer = false,
  isSignin = true,
  classUI = "classes.trainer",
]
export default function Logon() {
 const history = useHistory();
 const isSignUp = () => {
   if(state[1]){
     state[1]=false;
   } else {
     state[1]=true;
   }
   history.push("/login")

 }
 console.log(state[0])
 const isTrainerIs = () => {
  
if(state[0]){
  state[0]=false 
  state[2]="classes.user"
}else{ 
  state[0]=true
  state[2] = "classes.trainer"

}
history.push("/login")

}

  const classes = useStyles();
console.log(Date.now())
  return (
    <Container className={state[2]} component="main" maxWidth="xs">
      
      <CssBaseline />
     
   <Grid>
   {state[1]? <div>
    <Button color="inherit" onClick={() => isSignUp()}>Signup</Button>
          <Button color="inherit">Signin</Button>
          <Typography component="h1" variant="h5">
          Sign in
        </Typography>
  <SignIn value={state[0]}/>
  </div>
  :
  <div>
  <Button color="inherit" >Signup</Button>
  <Button color="inherit" onClick={() => isSignUp()}>Signin</Button>
  <Typography component="h1" variant="h5">
  Sign Up
</Typography>
  <SignUp value={state[0]} />
  </div>
 
   }
    
   </Grid>
   <Grid>
     {state[0]?
       <Button color="inherit" onClick={() => isTrainerIs()}>Are you not a Trainer? <br></br>Click Here</Button>
       :
       <Button color="inherit" onClick={() => isTrainerIs()}>Are you a Trainer? <br></br>Click Here</Button>

    }
   </Grid>
    </Container>
  );
}