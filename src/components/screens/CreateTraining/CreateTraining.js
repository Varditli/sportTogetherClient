import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import {
  Container,
  Typography,
  Grid,
  CssBaseline,
  TextField,
  InputLabel,
  FormHelperText,
  FormControl,
  Select,
  NativeSelect,
  Slider,
} from "@material-ui/core";

import Button from "../../CustomButtons/Button";
import Card from "../../Card/Card";
import CardHeader from "../../Card/CardHeader";
import CardBody from "../../Card/CardBody";
import Parallax from "../../compopnets/Parallax/Parallax";
import LocationSearchInput from "../HomePage/googleMaps/LocationSearchInput";

import useStyles from "./styles";
import GridItem from "../../Grid/GridItem";

const LogoImg =
  "https://res.cloudinary.com/niroavram/image/upload/v1617714585/Add_a_subheading_kpvjyo.svg";

  
  function valuetext(value) {
    return `${value}°C`;
  }

export default function CreateTraing() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [name, setName] = useState("Relaxing Yoga");
  const [capacity, setCapacity] = useState(0);
  const [type, setType] = useState("Yoga");
  const [time, setTime] = useState("1621427720768");
  const [location, setLocation] = useState("Herzel 50, Ramat Gan");
  const [zoom, setZoom] = useState("No");
  const [intensity, setIntensity] = useState("Low");
  const [limitations, setLimitations] = useState("Nono");
  const [gender, setGender] = useState("All");
  const [age_group, setAge_group] = React.useState([20, 50]);
  //const [recurring, setRecurring] = useState("");
  const [additional_info, setAdditional_info] = useState("Nononono");

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const history = useHistory();

      //for age group range
  const handleChange = (event, newValue) => {
    setAge_group(newValue);
  };

  //     const valuetext = (value) => {
  //       return `${value} Y.O`;
  //     }

  const CreatePost = () => {
    //console.log(
      // name,
      // capacity,
      // type,
      // time,
      // location,
      // zoom,
      // intensity,
      // limitations,
      // gender,
      // age_group,
      // additional_info
      //)

    fetch(`${process.env.REACT_APP_SERVER}/createNewTraining`, {
      method: "post",
      headers: {
      "Content-Type": "application/json",
      "Authorization":"Bearer "+localStorage.getItem("jwt"),
    },
      body: JSON.stringify({
        name,
        capacity,
        type,
        time,
        location,
        zoom,
        intensity,
        limitations,
        gender,
        age_group,
        additional_info,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Failed Adding New Training");
        } else {
          console.log("Successfully Added New Training");
          history.push("/HomePage");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const classes = useStyles();
  //console.log(Date.now());
//console.log(age_group);

  return (
    <div>
      <Parallax
        small
        filter
        image={
          "https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"
        }
      />
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.root}>
          <Grid>
            <Card className={classes[cardAnimaton]}>
              <CardHeader>
                <Typography component="h1" variant="h5">
                  Create New Training
                </Typography>
              </CardHeader>
              <CardBody>
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="name"
                  label="Name"
                  type = {String}
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="capacity">Capacity </label>
                <input
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  min="0"
                  id="capacity"
                  label="Capacity"
                  name="capacity"
                  autoFocus
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type = {String}
                  id="type"
                  label="Type"
                  name="type"
                  autoFocus
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
                <TextField
                  required
                  variant="outlined"
                  margin="normal"
                  id="datetime-local"
                  label="Time"
                  type="datetime-local"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={classes.textField}
                  InputLabelProps={{
                  shrink: true,
                  }}
                />
                <br/>
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Zoom
                  </InputLabel>
                  <Select
                    required
                    variant="outlined"
                    margin="normal"
                    native
                    type = {Boolean}
                    value={intensity}
                    onChange={(e) => setZoom(e.target.value)}
                    label="Zoom"
                    inputProps={{
                      name: "zoom",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value={"No"}>No</option>
                    <option value={"Yes"}>Yes</option>
                  </Select>
                </FormControl>

                {/* <LocationSearchInput
                  variant="outlined"
                  margin="normal"
                  id="Location"
                  label="Location"
                  type="Location"
                  onChange={(e) => setLocation(e.target.value)}
                /> */}
                
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Intensity
                  </InputLabel>
                  <Select
                    variant="outlined"
                    margin="normal"
                    native
                    type = {String}
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                    label="Intensity"
                    inputProps={{
                      name: "intensity",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                  </Select>
                </FormControl>

                {/* 
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="intensity"
                  label="intensity"
                  name="intensity"
                  autoFocus
                  value={intensity}
                  onChange={(e) => setIntensity(e.target.value)}
                /> */}

                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type = {String}
                  name="limitations"
                  label="limitations"
                  id="limitations"
                  value={limitations}
                  onChange={(e) => setLimitations(e.target.value)}
                />

                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Gender
                  </InputLabel>
                  <Select
                    variant="outlined"
                    margin="normal"
                    native
                    type = {String}
                    value={gender}
                    type = {String}
                    onChange={(e) => setGender(e.target.value)}
                    label="Gender"
                    inputProps={{
                      name: "gender",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value="all">All</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                  </Select>
                </FormControl>

                {/* <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="gender"
                  label="gender"
                  id="gender"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                /> */}

                <div className={classes.root}>
                  <Typography id="range-slider" gutterBottom>
                    Age Group
                  </Typography>
                  <Slider
                    variant="outlined"
                    margin="normal"
                    top = "5px"
                    //required
                    //fullWidth
                    name="age_group"
                    label="age_group"
                    id="age_group"
                    value={age_group}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                  />
                </div>
                {/* <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="age_group"
                  label="age_group"
                  id="age_group"
                  value={age_group}
                  onChange={(e) => setAge_group(e.target.value)}
                /> */}

                {/* <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="recurring"
                  label="recurring"
                  id="recurring"
                  value={recurring}
                  onChange={(e) => setRecurring(e.target.value)}
                /> */}
              
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type = {String}
                  name="additional_info"
                  label="additional_info"
                  id="additional_info"
                  value={additional_info}
                  onChange={(e) => setAdditional_info(e.target.value)}
                />

              </CardBody>
              <Button onClick={() => CreatePost()} round color="primary">
                Create
              </Button>
            </Card>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
