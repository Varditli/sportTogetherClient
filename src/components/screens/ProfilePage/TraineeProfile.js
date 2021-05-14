import React, { useState, useContext  } from "react";
import { useHistory } from "react-router-dom";
import { UserContext } from "../../../App";
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

import styles from "./ProfileStyle";

const trainee = JSON.parse(localStorage.getItem("trainee"))
console.log(trainee);

const useStyles = makeStyles(styles);

export default function TraineeProfilePage(props) {
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

  const editTraineeProfile = () => {
    handleClickOpen();
    return;

  };


  return (
    <div>
    
      <Parallax small filter image={"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"} />
      <div className={classNames(classes.main, classes.mainRaised)}>
        <div>
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={6}>
                <div className={classes.profile}>
                  <div>
                    <img src={"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"} alt="..." />
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
                            Edit Trainer Profile
                          </DialogTitle>
                          <DialogContent>
                            <TextField
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
                            />
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
                      tabButton: "Upcoming trainings",
                      tabIcon: Camera,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={ "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"}
                            />
                           
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"}
        
                            />
                           
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Past trainings",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={ "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"}
        
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
                              src={ "https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"}
        
                            />
                          </GridItem>
                        </GridContainer>
                      )
                    },
                    {
                      tabButton: "Favorite",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"}
        
                            />
                          
                          </GridItem>
                          <GridItem xs={12} sm={12} md={4}>
                            <img
                              alt="..."
                              src={"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"}
        
                            /> 
                          </GridItem>
                        </GridContainer>
                      )
                    }
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
