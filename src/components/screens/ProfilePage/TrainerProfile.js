import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import { EditText, EditTextarea } from "react-edit-text";
import "react-edit-text/dist/index.css";
// nodejs library that concatenates classes
import classNames from "classnames";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// @material-ui/icons
import Camera from "@material-ui/icons/Camera";
import Palette from "@material-ui/icons/Palette";
import Favorite from "@material-ui/icons/Favorite";
// core components
import Footer from "../../Footer/Footer";
import Button from "../../CustomButtons/Button";
import GridContainer from "../../Grid/GridContainer";
import GridItem from "../../Grid/GridItem";
import NavPills from "../../NavPills/NavPills";
import Parallax from "../../compopnets/Parallax/Parallax";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./ProfileStyle.js";

const useStyles = makeStyles(styles);

export default function ProfilePage(props) {
  const trainer = JSON.parse(localStorage.getItem("trainer"));
  console.log(trainer);

  const classes = useStyles();
  const { ...rest } = props;
  const imageClasses = classNames(
    classes.imgRaised,
    classes.imgRoundedCircle,
    classes.imgFluid
  );

  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const [sportType, setSportType] = useState("");
  const [experience, setExperience] = useState("");
  const { token } = localStorage.getItem("jwt");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // const ShowTypesList = ()  => {
    
  //   for (var i=0; i<trainer.sportType.length; i++) {
  //   <li>{trainer.sportType[i]}</li>
  //   };
  //   return(<ul></ul>);
  // };

  const Edit = () => {
    return (
      <React.Fragment>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">Email: <small>(read-only) </small></label>
          </strong>
          <EditText
            name="email"
            type="email"
            style={{ width: "200px" }}
            defaultValue={trainer.email}
            inline
            readonly
            onChange = {(e) => setEmail(e.target.value)}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">
              User Name:{" "}
            </label>
          </strong>
          <EditText
            type = {String}
            id="username"
            name="username"
            defaultValue={trainer.username}
            inline
            onChange = {(e) => setUsername(e.target.value)}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2" style={{ width: "50px" }}>
              Tel:{" "}
            </label>
          </strong>
          <EditText
            type = {String}
            name="tel"
            rows={0}
            //style={{ paddingTop: 1 }}
            defaultValue={trainer.tel}
            inline
            onChange = {(e) => setTel(e.target.value)}
            //onSave={this.onSave}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">Age: </label>
          </strong>
          <EditText
            name="age"
            type= {Number}
            style={{ width: "100px" }}
            defaultValue={trainer.age}
            inline
            onChange = {(e) => setAge(e.target.value)}
            //onSave={this.onSave}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">Experience: </label>
          </strong>
          <EditText
            name="experience"
            rows={4}
            type = {String}
            //style={{ paddingTop: 1 }}
            placeholder="Share your trainees about your experience"
            //defaultValue={trainer.experience}
            value={trainer.experience}
            inline
            onChange = {(e) => setExperience(e.target.value)}
            //onSave={this.onSave}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">Sport Types: </label>
          </strong>
          <EditText
          name='sportType'
          rows={3}
          type = {String}
          //style={{ paddingTop: 1 }}
          //placeholder={trainer.experience}
          defaultValue = {trainer.sportType}
          inline
        />
        </div>
      </React.Fragment>
    );
  };


  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);


  return (
    <div>
      <Parallax
        small
        filter
        image={
          "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
        }
      />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img
                      src={
                        "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                      }
                      alt="..."
                      className={imageClasses}
                    />
                  </div>
                  <div className={classes.name}>
                    <h3 className={classes.title}>
                      {localStorage.getItem("username")}
                    </h3>
                    <div>
                      <Button
                        variant="outlined"
                        color="primary"
                        onClick={handleClickOpen}
                      >
                        Edit
                      </Button>
                      <Dialog
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title"
                        width="80%"
                      >
                        <DialogTitle id="form-dialog-title">
                          Edit Trainer Profile
                        </DialogTitle>
                        <DialogContent>{Edit()}</DialogContent>
                        <DialogActions>
                          <Button 
                          onClick={handleClose} 
                          color="primary"
                          >
                            Cancel
                          </Button>
                          <Button onClick={handleClose} color="primary">
                            Save
                          </Button>
                        </DialogActions>
                      </Dialog>
                    </div>
                    <h3>{trainer.username}</h3>
                    <table>
                      <tr>
                        <td classNames={classes.tit}>Email:</td>
                        <td>{trainer.email}</td>
                      </tr>
                      <tr>
                        <td classNames={classes.tit}>Tel:</td>
                        <td>{trainer.tel}</td>
                      </tr>
                      <tr>
                        <td classNames={classes.tit}>Age:</td>
                        <td>{trainer.age}</td>
                      </tr>
                      <tr>
                        <td classNames={classes.tit}>Experience:</td>
                        <td>{trainer.experience}</td>
                      </tr>
                      <tr>
                        <td classNames={classes.tit}>Sport Types:</td>
                        <td>{trainer.sportType}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={8} className={classes.navWrapper}>
                <NavPills
                  alignCenter
                  color="primary"
                  tabs={[
                    {
                      tabButton: "Upcoming Trainings",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Past Trainings",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "My Favorites",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                              className={navImageClasses}
                            />
                          </GridItem>
                        </GridContainer>
                      ),
                    },
                  ]}
                />
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
