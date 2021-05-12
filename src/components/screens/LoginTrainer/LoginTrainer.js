import React, { useState } from "react";
import { useHistory } from "react-router-dom";

import {makeStyles, Button, CssBaseline, Grid, Typography,CardMedia, Container}  from "@material-ui/core";
// import useStyles from './styles';
import SignUp from "./components/SignUp"
import SignIn from "./components/SignIn"
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import {useStyles} from "./styles";
import Parallax from "../../compopnets/Parallax/Parallax";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import Footer from "../../Footer/Footer";



var isTrainer, isSignin, classUI;
const state= [
  isTrainer = false,
  isSignin = true,
  classUI = "classes.trainer",
]
export default function LoginTrainer() {
const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
setTimeout(function() {
  setCardAnimation("");
}, 700);
const history = useHistory();
const isSignUp = () => {
  if(state[1]){
    state[1]=false;
  } else {
    state[1]=true;
  }
  history.push("/LoginTrainer")

}

const classes = useStyles();
console.log(Date.now())
 
return (
  <div>
  <Parallax small filter image={"https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"} >
    <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>SporTogether</h1>
               <h4>
                We bring you the all the trainings to one place
              </h4>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    <Container className={state[2]} component="main" maxWidth="xs">
      
      <CssBaseline />
    
  <Grid>
  <Card className={classes[cardAnimaton]}>
 
  {state[1]? 
  
  <div>
    <CardHeader>
    <Button color="inherit" onClick={() => isSignUp()}>Signup</Button>
          <Button color="inherit">Signin</Button>
          <Typography component="h1" variant="h5">
          Sign in  
        </Typography>
        </CardHeader>
        <SignIn />
        </div>
        :
        <div>
            <CardHeader>
        <Button color="inherit" >Signup</Button>
        <Button color="inherit" onClick={() => isSignUp()}>Signin</Button>
        <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      </CardHeader>
      {/* <CardMedia
        className={classes.media}
        image="https://res.cloudinary.com/niroavram/image/upload/v1617714585/Add_a_subheading_kpvjyo.svg"
        title="Paella dish"
      /> */}
  <SignUp />
  </div>
  }

 
  </Card>
  {/* <Footer whiteFont /> */}
  </Grid>
 
  </Container>
  <Footer/>
  </div>
  );
  
}