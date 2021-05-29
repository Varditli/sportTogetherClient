import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import { EditText, EditTextarea } from "react-edit-text";
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
//import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
//import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import styles from "./ProfileStyle";
import { ContactSupportOutlined } from "@material-ui/icons";

const useStyles = makeStyles(styles);

export default function TraineeProfile(props) {
  const trainee = JSON.parse(localStorage.getItem("trainee"));
  console.log(trainee);

  const classes = useStyles();
  //const { ...rest } = props;

  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [tel, setTel] = useState("");
  const { token } = localStorage.getItem("jwt");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const editTraineeProfile = () => {
  //   handleClickOpen();
  //   return;

  // };

  //   const UpdateValue = (e) => {
  //     const { note } = this.state;

  //     this.setState({
  //         note: { ...note, [e.target.name]: e.target.value }
  //     });
  // }


  const PostData = () => {
    if (
      !/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
      )
    ) {
      //   M.toast({ html: "Invalid email", classes: "#ff4081 pink accent-2" });
      return;
    }
    fetch(`${process.env.REACT_APP_SERVER}/editTraineeProfile`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
        age,
        tel,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Failed Updating the Trainee Profile");
        } else {
          console.log("successfully Updated the Trainee Profile");
          window.location.reload("false");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };


  const Edit = () => {
    return (
      <React.Fragment>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">
              Email: <small>(read-only) </small>
            </label>
          </strong>
          <EditText
            name="email"
            type="email"
            style={{ width: "200px" }}
            defaultValue={trainee.email}
            inline
            readonly
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">User Name: </label>
          </strong>
          <EditText
            id="username"
            name="username"
            defaultValue={trainee.username}
            inline
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2" style={{ width: "50px" }}>
              Tel:{" "}
            </label>
          </strong>
          <EditTextarea
            name="tel"
            rows={0}
            //style={{ paddingTop: 1 }}
            defaultValue={trainee.tel}
            inline
            //onSave={UpdateValue()}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">Age: </label>
          </strong>
          <EditText
            name="age"
            type="number"
            style={{ width: "100px" }}
            defaultValue={trainee.age}
            inline
            //onSave={UpdateValue()}
          />
        </div>
      </React.Fragment>
    );
  };

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
                    />
                  </div>
                  <div className={classes.name}>
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
                    >
                      <DialogTitle id="form-dialog-title">
                        Edit Trainee Profile
                      </DialogTitle>
                      <DialogContent>{Edit()}</DialogContent>
                      <DialogActions>
                        <Button 
                        onClick={handleClose} 
                        color="primary"
                        round
                        >
                          Cancel
                        </Button>
                        <Button
                          onClick={{function(event){ handleClose(); PostData()}}}
                          round
                          color="primary"
                        >
                          Save
                        </Button>
                      </DialogActions>
                    </Dialog>
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div>
              <h3>{trainee.username}</h3>
              <table>
                <tr>
                  <td classNames={classes.tit}>Email:</td>
                  <td>{trainee.email}</td>
                </tr>
                <tr>
                  <td classNames={classes.tit}>Tel:</td>
                  <td>{trainee.tel}</td>
                </tr>
                <tr>
                  <td classNames={classes.tit}>Age:</td>
                  <td>{trainee.age}</td>
                </tr>
              </table>
            </div>
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
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
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
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
                            />
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
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
                            />
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={
                                "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                              }
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