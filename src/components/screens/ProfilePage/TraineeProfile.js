import React from "react";
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
import IconButton from '@material-ui/core/IconButton';
import EditIcon from '@material-ui/icons/Edit';
import editTProfile from "./editProfile";

import styles from "./ProfileStyle";

const useStyles = makeStyles(styles);

export default function TraineeProfilePage(props) {
  const classes = useStyles();
  //const { ...rest } = props;

  const [open, setOpen] = React.useState(false);

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
                    <h3 className={classes.title}>Yosi Cohen</h3>
                    <IconButton variant="contained" disableElevation onClick={() => editTraineeProfile()}>
                        <EditIcon/>
                    </IconButton>
                    <editTProfile
                        open={open}
                        handleClose={handleClose}
                    />
                  </div>
                </div>
              </GridItem>
            </GridContainer>
            <div className={classes}>
              <p>
              </p>
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
