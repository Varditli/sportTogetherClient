import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
import { EditText, EditTextarea } from 'react-edit-text';
import 'react-edit-text/dist/index.css';
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

  const trainer = JSON.parse(localStorage.getItem("trainer"))
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
  const { token } = localStorage.getItem("jwt");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const TypesList = trainer.sportType;

  function ShowTypesList(trainer) {
    const listItems = TypesList.map((type) =>
      <li key={type.toString()}>
        {type}
      </li>
    );
    return (
      <ul>{listItems}</ul>
    );
  }

  const Edit = () => {
    return (
      <React.Fragment>
      <div style={{whiteSpace: 'nowrap'}}>
        <strong><label className="mr-2">User Name <small>(read-only)</small>: </label></strong>
        <EditText id="fullName" name="fullName" defaultValue={trainer.username} inline readonly/>
      </div>
      <div style={{whiteSpace: 'nowrap'}}>
        <strong><label className="mr-2">Email: </label></strong>
        <EditText name="email" type="email" style={{width: '200px'}} defaultValue={trainer.email} inline onSave={this.onSave}/>
      </div>
      <div style={{whiteSpace: 'nowrap'}}>
        <strong>
          <label className='mr-2' style={{width: '50px'}}>Tel: </label>
        </strong>
        <EditTextarea
          name='tel'
          rows={0}
          //style={{ paddingTop: 1 }}
          defaultValue={trainer.tel}
          inline
          onSave={this.onSave}
        />
      </div>
      <div style={{whiteSpace: 'nowrap'}}>
        <strong><label className="mr-2">Age: </label></strong>
        <EditText name="age" type="number" style={{width: '100px'}} defaultValue={trainer.age} inline onSave={this.onSave}/>
      </div>
      <div style={{whiteSpace: 'nowrap'}}>
        <strong>
          <label className='mr-2'>Experience: </label>
        </strong>
        <EditTextarea
          name='experience'
          rows={4}
          //style={{ paddingTop: 1 }}
          placeholder="Share your trainees about your experience"
          //defaultValue={trainer.experience}
          value = {trainer.experience}
          inline
          onSave={this.onSave}
        />
      </div>
      <div style={{whiteSpace: 'nowrap'}}>
        <strong>
          <label className='mr-2'>Sport Types: </label>
        </strong>
        {/* <EditTextarea
          name='sportType'
          rows={3}
          //style={{ paddingTop: 1 }}
          //placeholder={trainer.experience}
          defaultValue = {ShowTypesList}
          inline
        /> */}
      </div>
    </React.Fragment>
    );
}

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
                    <h3 className={classes.title}>{localStorage.getItem("username")}</h3>
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
                        width = "80%"
                      >
                          <DialogTitle id="form-dialog-title">
                            Edit Trainer Profile
                          </DialogTitle>
                          <DialogContent>
                            {Edit()}
                            {/* <TextField
                              required
                              id="outlined-required"
                              label="Email"
                              defaultValue= "Bla"
                              //defaultValue= {localStorage.getItem("email")}
                              variant="outlined"
                              fullWidth
                              type="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                            
                            />
                            <TextField
                              autoFocus
                              margin="dense"
                              id="username"
                              label="User Name"
                              type="username"
                              fullWidth
                              value={username}
                              onChange={(e) => setUsername(e.target.value)}
                            /> */}
                          </DialogContent>
                          <DialogActions>
                            <Button onClick={handleClose} color="primary">
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
                        console.log({trainer.sportType})
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
                      tabButton: "Upcoming trainings",
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
                      tabButton: "Past trainings",
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
                      tabButton: "Favorites",
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
