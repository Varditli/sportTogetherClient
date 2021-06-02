import React, { useEffect, useState, useHistory } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import {Grid} from "@material-ui/core";
import Parallax from "../../compopnets/Parallax/Parallax";
import Training from "../../Card/Training";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import classNames from "classnames";
import Footer from "../../Footer/Footer";
import styles from "./styles";
import Button from "../../CustomButtons/Button";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { BrowserRouter as Router } from "react-router-dom";
import Search from "./Search";
import Maps from "./googleMaps/Maps";
import Schedule from "@material-ui/icons/Schedule";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import NavPills from "../../NavPills/NavPills";
import LocationSearchInput from "./googleMaps/LocationSearchInput";
import FindLocation from "./googleMaps/FindLocation";
// import { ZoomMtg } from '@zoomus/websdk';

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const [trainings, setTrainings] = useState([]);
  
  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/allTrainings`, {
      headers: {
        "Content-Type": "application/json", //the content type is json
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result.trainings);
        return setTrainings(result.trainings);
      });
  }, []);
  

  const filtertrainings = (trfiltertrainings, query) => {
    if (!query) {
      return trfiltertrainings;
    }

    return trfiltertrainings.filter((trainings) => {
      const trainingsName = trainings.name.toLowerCase();
      return trainingsName.includes(query);
    });
  };

  const classes = useStyles();
  const { search } = window.location;
  const query = new URLSearchParams(search).get("s");
  const [searchQuery, setSearchQuery] = useState(query || "");
  const filteredtrainings = filtertrainings(trainings, query);
 
  return (
    <Router>
      <div>
        <Parallax
          small
          filter
          image={
            "https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"
          }
        >
          <div className={classes.container}>
            <GridContainer>
              <GridItem xs={12} sm={12} md={6}>
                <h1 className={classes.title}>SporTogether</h1>
                <h3>We bring you all the traingings into one place</h3>
                <br />
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>
          <Container className={classes.root} component="main">
            <div className={classes.section}>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h1>How it works</h1>
                </GridItem>
              </GridContainer>
              <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "Sign up",
                    tabIcon: HowToRegIcon,
                    tabContent: (
                      <span>
                        <h3>
                          <ul>In order to participate in the trainings,</ul>
                          <ul> first, you need to sign up to our website</ul>
                        </h3>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: "Register to the training",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                        <h3>
                          After you are signed-in, choose the training you would
                          like to participate in and book your place, no payment
                          needed.
                          <br />
                          You will pay directly to the trainer.
                        </h3>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: " Enjoy ",
                    tabIcon: CheckCircleIcon,
                    tabContent: (
                      <span>
                        <h3>
                          <ul>It's all set !</ul>
                          <ul>You can now enjoy your training</ul>
                        </h3>
                        <br />
                      </span>
                    ),
                  },
                ]}
              />
              <div className={classes.section}>
                <GridContainer justify="center">
                  <GridItem xs={12} sm={12} md={8}>
                    <h1>Trainings Map</h1>
                  </GridItem>
                  <GridItem>
                    <Maps />
                  </GridItem>
                </GridContainer>
              </div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h1>Our Trainings</h1>
                </GridItem>
              </GridContainer>

              <Grid className={classes.high} start="0" container reversed spacing={8}>
        {trainings ? (
          trainings.map((item) => {
            return (
              
              <Training key = {item._id} value={item} />
            )})):""}
            </Grid>
            {/* <LocationSearchInput/> */}
                <GridContainer>
              
                  <div >
              
                 <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
               /> 
        </div>  

                  <Autocomplete
                    id="Category"
                    options={trainings}
                    getOptionLabel={(trainings) => trainings.type}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        label="Category"
                        variant="outlined"
                      />
                    )}
                  />
                  
                  <Autocomplete
                    id="Date"
                    options={trainings}
                    getOptionLabel={(trainings) => trainings.time}
                    style={{ width: 300 }}
                    renderInput={(params) => (
                      <TextField {...params} label=" Date" variant="outlined" />
                    )}
                  />
               
                </GridContainer>
         
            </div>
            {/* <FindLocation/> */}
          </Container>
          <Container>
            
         
      {trainings?trainings.map(item => {
            <Training key = {item._id} value={item} />
           }):""}
    
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
