import React, {useEffect, useState} from 'react';
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
import CustomDropdown from '../../CustomDropdown/CastomDropdown';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { BrowserRouter as Router } from "react-router-dom";
import Search from './Search';

import Schedule from "@material-ui/icons/Schedule";
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import HowToRegIcon from '@material-ui/icons/HowToReg';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import List from "@material-ui/icons/List";
import NavPills from "../../NavPills/NavPills";
import { CheckCircle } from '@material-ui/icons';

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
export default function HomePage() {
//   const [trainings, setTrainings] = useState([]);
// useEffect(()=>{
//   fetch(`${process.env.REACT_APP_SERVER}/all-trainings`,{
//     headers: {
//       Authorization: "Bearer " + localStorage.getItem("jwt"),
//     },
//   }
// )
//   .then((res)=> res.json())
//   .then((result) => {
//     return setTrainings(result.trainings);
//   });
// }, []);
const [allData,setAllData] = useState([]);
const [filteredData,setFilteredData] = useState(allData);
const handleSearch = (event) => {
  let value = event.target.value.toLowerCase();
  let result = [];
  console.log(value);
  result = allData.filter((data) => {
  return data.title.search(value) != -1;
  });
  setFilteredData(result);
  }

  
  const classes = useStyles();
  const filtertrainings = (trainings, query) => {
    if (!query) {
        return trainings;
    }

    return trainings.filter((trainings) => {
        const trainingsName = trainings.name.toLowerCase();
        return trainingsName.includes(query);
    });
};
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
               <h4>
                מביאים את האימונים עד אליכם
              </h4>
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
          <Button round color="primary">
          <h2 >How it works</h2>
          </Button>
          <h3 className={classes.description}>
            SporTogether מביאים את האימונים עד אליכם! 
          </h3>
        </GridItem>
      </GridContainer>
      <NavPills
                color="primary"
                tabs={[
                  {
                    tabButton: "מתאמנים ונהנים!",
                   tabIcon: CheckCircleIcon,
                    tabContent: (
                      <span>   
                        <h4>
                         לאחר ההרשמה ישלח אליכם קישור לזום, וכל מה שנותר הוא להתחבר למפגש ולהנות. התשלום יתבצע במועד המפגש
                         </h4> 
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: "בוחרים באימון הרצוי",
                    tabIcon: Schedule,
                    tabContent: (
                      <span>
                       <h4>
                         כעת לאחר שנרשמתם, תוכלו לבחור באימון הרצוי עבורכם ולהרשם
                         </h4>
                        <br />
                      </span>
                    )
                  },
                  {
                    tabButton: " נרשמים לאתר",
                    tabIcon: HowToRegIcon,
                    tabContent: (
                      <span>
                       <h4>
                          על מנת שתוכלו להרשם לאימונים תחילה עליכם לבצע הרשמה לאתר
                       </h4>
                        <br />
                      </span>
                    )
                  }
                ]}
              />
      <GridContainer justify="center">
      <GridItem xs={12} sm={12} md={8}>
      <Button round color="primary">
          <h2>All Trainings</h2>
          </Button>
      </GridItem>   
       </GridContainer>
       <form>

       <div className="App">
        <div style={{ margin: '0 auto', marginTop: '10%' }}>
        <label>Search:</label>
        <input type="text" onChange={(event) =>handleSearch(event)} />
        </div>
       </div>

    <GridContainer>
    


                  <div >
                 <Search
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
            />
            <ul>
                {filteredtrainings.map(trainings => (
                  <li key={trainings.key}>{trainings.type}</li>
                ))}
            </ul>
        </div>
                     <Autocomplete
                      id="סוג אימון"
                      options={trainings}
                      getOptionLabel={(trainings) => trainings.type}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label="סוג אימון" variant="outlined" />}
                       />
                       <Autocomplete
                      id="תאריך"
                      options={trainings}
                      getOptionLabel={(trainings) => trainings.time}
                      style={{ width: 300 }}
                      renderInput={(params) => <TextField {...params} label=" תאריך" variant="outlined" />}
                      
                       />

                        <Autocomplete
                        freeSolo
                        id="free-solo-2-demo"
                        style={{ width: 300 }}
                        disableClearable
                        options={trainings.map((trainings) => trainings.type)}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            label="Search input"
                            margin="normal"
                            variant="outlined"
                            InputProps={{ ...params.InputProps, type: 'search' }}
                          />
                          )}
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