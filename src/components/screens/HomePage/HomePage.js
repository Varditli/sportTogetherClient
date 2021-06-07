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
//import Maps from "./googleMaps/Maps";
import Schedule from "@material-ui/icons/Schedule";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import HowToRegIcon from "@material-ui/icons/HowToReg";
import NavPills from "../../NavPills/NavPills";
import LocationSearchInput from "./googleMaps/LocationSearchInput";
//import FindLocation from "./googleMaps/FindLocation";
// import { ZoomMtg } from '@zoomus/websdk';

const useStyles = makeStyles(styles);

export default function HomePage(props) {
  const fetchData = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_SERVER}/allTrainings`, {
        headers: {
          "Content-Type": "application/json", //the content type is json
        },



      });
      const body = await res.json();
      console.log(body);
      return body.trainings;
    } catch (err) {
      console.log(err);
    }
  };

  
  //   const [trainings, setTrainings] = useState([]);
  
//   useEffect(() => {
//     fetch(`${process.env.REACT_APP_SERVER}/allTrainings`, {
//       headers: {
//         "Content-Type": "application/json", //the content type is json
//       },
//     })
//       .then((res) => res.json())
//       .then((result) => {
//         console.log(result.trainings);
//         return setTrainings(result.trainings);
  
  const [trainings, setTrainings] = useState(fetchData()); //contains json of trainings

  console.log(trainings);

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


  console.log("trainings : ", trainings);

  return (
    <Router>
      <div>
        <Parallax
          small
          filter
          image={
            "https://res.cloudinary.com/varditcloud/image/upload/v1622705744/bg_brk5no.png"
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
                      <span className={classes.centered}>
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
                      <span className={classes.centered}>
                        <h3>
                        <ul>After you are signed-in,</ul>
                          <ul>
                            choose the training you
                            would like to participate in and book your place.
                          </ul>
                          <ul>No payment needed, you will pay directly to the trainer.</ul>
                        </h3>
                        <br />
                      </span>
                    ),
                  },
                  {
                    tabButton: " Enjoy ",
                    tabIcon: CheckCircleIcon,
                    tabContent: (
                      <span className={classes.centered}>
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

              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={8}>
                  <h1>Our Trainings</h1>
                </GridItem>
              </GridContainer>
              <GridContainer>
                {/* //here will be the filters for the trainings */}

                {/* <Autocomplete
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
                /> */}
              </GridContainer>

              <Grid className={classes.high} container spacing={8}>
                {/* {trainings
                  ? trainings.map((item) => {
                      return <Training key={item._id} value={item} />;
                    })
                  : ""} */}
              </Grid>
            </div>
          </Container>
        </div>
        <Footer />
      </div>
    </Router>
  );
}