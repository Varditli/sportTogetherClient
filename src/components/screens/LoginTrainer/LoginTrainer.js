import React, { useState,useEffect } from "react";
import { useHistory,Link } from "react-router-dom";

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

const allTypes = []

var isSignin = true

export default function LoginTrainer() {
const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
setTimeout(function() {
  setCardAnimation("");
}, 700);

const history = useHistory();

const isSigned = () => {
  if(isSignin){
    isSignin=false;
  } else {
    isSignin=true;
  }
  history.push("/LoginTrainer")
}


useEffect(() => {
  fetch(`${process.env.REACT_APP_SERVER}/allSportTypes`, {
    headers: {
      "Content-Type": "application/json",   //the content type is json
    },
  })
    .then((res) => res.json())
    .then((result) => {
      for (var i = 0; i<result.sportTypes.length; i++){
        allTypes.push({name: result.sportTypes[i].name})
      }
      //console.log(allTypes)
    });
}, []);


const classes = useStyles();
//console.log(Date.now())
 
return (
  <div>
  <Parallax small filter image={"https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"} >
    <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>SporTogether</h1>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    <Container className={classes.trainer} component="main" maxWidth="xs">
      
      <CssBaseline />
    
  <Grid>
  <Card className={classes[cardAnimaton]}>
 
  {isSignin? 
  
  <div>
    <CardHeader>

 
          <Typography component="h1" variant="h5">
          Sign in  
        </Typography>
        </CardHeader>
        <SignIn />
        <Grid item>
                <Button onClick={() => isSigned()}  variant="body2">
                  {"Don't have an account? Sign Up"}
                </Button>
              </Grid>
        </div>
        :   //else
        <div>
        <CardHeader>
    
        <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      </CardHeader>
  <SignUp value={allTypes} />
  <Grid item>
                <Button onClick={() => isSigned()}  variant="body2">
                  {"Already have an account? Sign In"}
                </Button>
              </Grid>
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