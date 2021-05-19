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


export default function CreateTraing() {
  const [cardAnimaton, setCardAnimation] = React.useState("cardHidden");
  const [name, setName] = useState("");
  const [capacity, setCapacity] = useState("");
  const [type, setType] = useState("");
  const [time, setTime] = useState("");
  const [location, setLocation] = useState("");
  const [intensity, setIntensity] = useState("");
  const [limitations, setLimitations] = useState("");
  const [gender, setGender] = useState("");
  const [age_group, setAge_group] = useState([20, 50]);
  //const [recurring, setRecurring] = useState("");
  const [additional_info, setAdditional_info] = useState("");
  //const classes = useStyles();
  //const [value, setValue] = React.useState([20, 50]);

  setTimeout(function () {
    setCardAnimation("");
  }, 700);
  const history = useHistory();


      //for age group range

      const valuetext = (value) => {
        return `${value} Y.O`;
      }

  const PostData = () => {
    fetch(`${process.env.REACT_APP_SERVER}/createNewTraining`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        capacity,
        type,
        time,
        location,
        intensity,
        limitations,
        gender,
        age_group,
        //recurring,
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
  console.log(Date.now());

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
                  Create a New Training
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
                  name="name"
                  autoComplete="name"
                  autoFocus
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <TextField
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  type="number"
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
                  id="type"
                  label="Type"
                  name="type"
                  autoFocus
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                />
                <TextField
                  id="datetime-local"
                  label="Training"
                  type="datetime-local"
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                />
                <LocationSearchInput
                  id="Location"
                  label="Location"
                  type="Location"
                  onChange={(e) => setLocation(e.target.value)}
                />
                
                <FormControl variant="outlined" className={classes.formControl}>
                  <InputLabel htmlFor="outlined-age-native-simple">
                    Intensity
                  </InputLabel>
                  <Select
                    native
                    value={intensity}
                    onChange={(e) => setIntensity(e.target.value)}
                    label="Intensity"
                    inputProps={{
                      name: "intensity",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option aria-label="None" value="" />
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
                    native
                    value={gender}
                    onChange={(e) => setIntensity(e.target.value)}
                    label="Gender"
                    inputProps={{
                      name: "gender",
                      id: "outlined-age-native-simple",
                    }}
                  >
                    <option value="f">Female</option>
                    <option value="m">Male</option>
                    <option value="other">Other</option>
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
                    required
                    fullWidth
                    name="age_group"
                    label="age_group"
                    id="age_group"
                    value={age_group}
                    onChange={(e) => setAge_group(e.target.value)}
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
                  name="additional_info"
                  label="additional_info"
                  id="additional_info"
                  value={additional_info}
                  onChange={(e) => setAdditional_info(e.target.value)}
                />

              </CardBody>
              <Button onClick={() => PostData()} round color="primary">
                Create
              </Button>
            </Card>
          </Grid>
        </div>
      </Container>
    </div>
  );
}
