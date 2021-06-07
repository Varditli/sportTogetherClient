import React, { useState, Fragment, useEffect } from "react";
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
import DateFnsUtils from "@date-io/date-fns";
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import useStyles from "./styles";
import GridItem from "../../Grid/GridItem";
//import FindLocation from "../HomePage/googleMaps/FindLocation";

const LogoImg =
  "https://res.cloudinary.com/niroavram/image/upload/v1617714585/Add_a_subheading_kpvjyo.svg";

function valuetext(value) {
  return `${value}°C`;
}


export default function CreateTraing() {
  const [cardAnimaton, setCardAnimation] = React.useState("");
  const [name, setName] = useState();
  const [capacity, setCapacity] = useState();
  const [type, setType] = useState();
  const [time, setTime] = useState(new Date());
  const [location, setLocation] = useState("");
  const [zoom, setZoom] = useState();
  const [intensity, setIntensity] = useState();
  const [limitations, setLimitations] = useState();
  const [gender, setGender] = useState();
  const [age_group, setAge_group] = React.useState([20, 50]);
  //const [recurring, setRecurring] = useState("");
  const [additional_info, setAdditional_info] = useState();
  const [price, setPrice] = useState();
  //const [selectedDate, handleDateChange] = useState(new Date());
  
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
    console.log(
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
      price,
      //selectedDate
    );

    fetch(`${process.env.REACT_APP_SERVER}/createNewTraining`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
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
        price,
        //selectedDate,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log(data.error);
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
                  type={String}
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <label for="capacity">Number Of participants: </label>
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
                  defaultValue="0"
                  value={capacity}
                  onChange={(e) => setCapacity(e.target.value)}
                />
                <br />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type={String}
                  id="type"
                  label="Sport Type"
                  name="type"
                  autoFocus
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  helperText="You can insert more than one, using ',' to separate"
                />
              
                <br />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <Fragment>
                    <DateTimePicker
                      required
                      label="Date & Time"
                      inputVariant="outlined"
                      value={time}
                      onChange={setTime}
                      autoOk
                      ampm={false}
                      disablePast
                      showTodayButton
                      format="yyy-mm-dd hh:mm:ss"
                    />
                  </Fragment>
                </MuiPickersUtilsProvider>
                <br />
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Zoom? 
                  </InputLabel>
                  <Select
                    required
                    variant="outlined"
                    margin="normal"
                    native
                    type={String}
                    value={zoom}
                    onChange={(e) => setZoom(e.target.value)}
                    label="Zoom"
                    inputProps={{
                      name: "zoom",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value="None"></option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
                  </Select>
                </FormControl>
                <br />
                {/* <FindLocation/> */}
                {/* <LocationSearchInput
                  variant="outlined"
                  margin="normal"
                  id="Location"
                  label="Location"
                  type="Location"
                  onChange={(e) => setLocation(e.target.value)}
                /> */}
                <br />
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Intensity
                  </InputLabel>
                  <Select
                    variant="outlined"
                    margin="normal"
                    native
                    type={String}
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                    label="Intensity"
                    inputProps={{
                      name: "intensity",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value="None"></option>
                    <option value="Low">Low</option>
                    <option value="Medium">Medium</option>
                    <option value="High">High</option>
                    <option value="Open Level">Open Level</option>
                  </Select>
                </FormControl>
                <br />
                <TextField
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  type={String}
                  name="limitations"
                  label="limitations"
                  id="limitations"
                  value={limitations}
                  onChange={(e) => setLimitations(e.target.value)}
                />
<br />
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Gender
                  </InputLabel>
                  <Select
                    variant="outlined"
                    margin="normal"
                    native
                    type={String}
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                    label="Gender"
                    inputProps={{
                      name: "gender",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value="None"></option>
                    <option value="all">All</option>
                    <option value="m">Male</option>
                    <option value="f">Female</option>
                  </Select>
                </FormControl>
                <br />
                <div className={classes.root}>
                  <Typography id="range-slider" gutterBottom>
                    Age Group
                  </Typography>
                  <Slider
                    variant="outlined"
                    margin="normal"
                    top="5px"
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
                <br />
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
                  type={String}
                  name="additional_info"
                  label="additional_info"
                  id="additional_info"
                  value={additional_info}
                  onChange={(e) => setAdditional_info(e.target.value)}
                />
                <br />
                <label for="price">Price (NIS): </label>
                <input
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
                  min="0"
                  id="price"
                  label="Price"
                  name="price"
                  autoFocus
                  defaultValue="0"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
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
