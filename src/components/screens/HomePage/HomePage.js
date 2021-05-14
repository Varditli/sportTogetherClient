import React, {useEffect, useState, useHistory} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Parallax from "../../compopnets/Parallax/Parallax"
import Training from "../../Card/Training";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import classNames from "classnames";
import Footer from "../../Footer/Footer";
import styles from "./styles";
import Button from "../../CustomButtons/Button";
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { BrowserRouter as Router } from "react-router-dom";
import Search from './Search';
import Maps from './Maps';
import Schedule from "@material-ui/icons/Schedule";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import NavPills from "../../NavPills/NavPills";
import Header from "../../header/Header";
import HeaderLinks from "../../header/HeaderLinks";

const useStyles = makeStyles(styles);

const trainings =[ {
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "sport",
  intensity: "2",
  limitations: 10,
  gender: "male", 
  location:"zoom",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "sport",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "pilatis",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
{
  name: "Mega Yuga By master Yuli",
  trainerCreate: {
    username: "Asi",
    experience: "10 Years",
    age: "28"
  } ,
  capacity: 2,
  type: "Yuga",
  intensity: "2",
  limitations: 10,
  gender: "male",
  time: "2021-04-04T14:32:34.466Z",
  free_text: " Yuli maste is the Yuga coacher in the world",
  pic: "https://res.cloudinary.com/niroavram/image/upload/v1617521371/family-members-with-their-pet-dog-on-white-background-free-vector_cuuymv.jpg"
},
]
export default function HomePage(props) {

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
  const query = new URLSearchParams(search).get('s');
  const [searchQuery, setSearchQuery] = useState(query || '');
  const filteredtrainings = filtertrainings(trainings, query);

  return (
  <Router>
    <div> 
    <Parallax small filter image={"https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"} >
    <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={6}>
            <h1 className={classes.title}>SporTogether</h1>
               <h3>
                מביאים את האימונים עד אליכם
              </h3>
              <br />
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    
      <div className={classNames(classes.main, classes.mainRaised)}>
        <Container className= {classes.root}component="main">
           <div className={classes.section}>
         <GridContainer justify="center">
         <GridItem xs={12} sm={12} md={8}>
       
          <h1 >How it works</h1>
          
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
                          In order to participate in trainings,
                        first you need to sign up to our website
                         </h3> 
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "choose training",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                       <h3>
                       after you signed-in,
                       choose a training you would like to participate 
                       and book place, no credit card needed.
                         </h3>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: " enjoy ",
                    tabIcon: CheckCircleIcon,
                    tabContent: (
                      <span>
                       <h3>
                         it's all set !
                     enjoy your training
                       </h3>
                        <br />
                      </span>
                    )
                  }
                ]}
              />
               <div className={classes.section}>
               <GridContainer justify="center">
               <GridItem xs={12} sm={12} md={8}>
                <h1>Trainings Map</h1>
                </GridItem>
                <Maps/>
               </GridContainer>
               </div>
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
          <h1>All Trainings</h1>
      </GridItem>   
       </GridContainer>

       <form>
    <GridContainer>
               <div >
                 <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
               /> 
            {/* <ul>
            {filteredtrainings.map((item) => {
        return (< Training value={item}/>)
      }
  )}
            </ul> */}
        </div>
                     <Autocomplete
                      id="Category"
                      options={trainings}
                      getOptionLabel={(trainings) => trainings.type} 
                      onChange={(e) => console.log(e.target.value)}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params}  label="Category" variant="outlined" />}
                       />  
                        <Autocomplete
                      id="Date"
                      options={trainings}
                      getOptionLabel={(trainings) => trainings.time}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label=" Date" variant="outlined" />}
                      
                       />

              </GridContainer>
       </form>
        </div> 

      {trainings.map((item) => {
        return (< Training value={item}/>)
      }
  )}
      </Container>
    </div>
    <Footer />
    </div>
    </Router>
  );
}