import React, { useState, useContext, useEffect } from "react";
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
import moment from "moment";

import styles from "./ProfileStyle.js";

const useStyles = makeStyles(styles);

export default function TrainerProfile(props) {
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
  const [username, setUsername] = useState(trainer.username);
  const [password, setPassword] = useState(trainer.password);
  const [email, setEmail] = useState(trainer.email);
  const [age, setAge] = useState(trainer.age);
  const [tel, setTel] = useState(trainer.tel);
  const [sportType, setSportType] = useState(trainer.sportType);
  const [myTraining, setMyTraining] = useState([]);
  const [experience, setExperience] = useState(trainer.experience);
  const { token } = localStorage.getItem("jwt");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const PostNewData = () => {
    const newData = {
      username,
      email,
      age,
      tel,
      experience,
      sportType,
    };
    fetch(`${process.env.REACT_APP_SERVER}/editTrainerProfile`, {
      method: "post",
      headers: {
        "Content-Type": "application/json", //the content type is json
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Failed editing trainer profile");
        } else {
          localStorage.setItem(
            "trainer",
            JSON.stringify({ ...trainer, ...newData })
          );
          console.log("successfully edited Trainer profile");
          history.replace();
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
            <label className="mr-2">
              Email: <small>(read-only) </small>
            </label>
          </strong>
          <EditText
            name="email"
            type="email"
            style={{ width: "200px" }}
            defaultValue={email}
            inline
            readonly
            onChange={(e) => setEmail(e)}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">User Name: </label>
          </strong>
          <EditText
            type={String}
            id="username"
            name="username"
            value={username}
            inline
            onChange={(e) => setUsername(e)}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2" style={{ width: "50px" }}>
              Tel:{" "}
            </label>
          </strong>
          <EditText
            type={String}
            name="tel"
            rows={0}
            //style={{ paddingTop: 1 }}
            value={tel}
            inline
            onChange={(e) => {
              console.log("e", e);
              setTel(e);
            }}
            //onSave={this.onSave}
          />
        </div>
        <div style={{ whiteSpace: "nowrap" }}>
          <strong>
            <label className="mr-2">Age: </label>
          </strong>
          <EditText
            name="age"
            type={Number}
            style={{ width: "100px" }}
            value={age}
            inline
            onChange={(e) => setAge(e)}
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
            type={String}
            //style={{ paddingTop: 1 }}
            placeholder="Share your trainees about your experience"
            value={experience}
            inline
            onChange={(e) => setExperience(e)}
            //onSave={this.onSave}
          />
        </div>
        {/* <div style={{ whiteSpace: "nowrap" }}>
					<strong>
						<label className="mr-2">Sport Types: </label>
					</strong>
					<EditText
						name="sportType"
						rows={3}
						type={String}
						//style={{ paddingTop: 1 }}
						value={sportType.map((s) => s.name).join(", ")}
						onChange={(e) => setSportType(e)}
						inline
					/>
				</div> */}
      </React.Fragment>
    );
  };

  const navImageClasses = classNames(classes.imgRounded, classes.imgGallery);

  useEffect(() => {
    fetchTrainings();

    function fetchTrainings() {
      fetch(`${process.env.REACT_APP_SERVER}/myTrainingsTrainer`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem("jwt"),
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setMyTraining(data.myTraining);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  console.log("myTraining", myTraining);

  const past = myTraining.filter(
    (training) => new Date(training.time).getTime() <= Date.now()
  );
  const next = myTraining.filter(
    (training) => new Date(training.time).getTime() > Date.now()
  );

  return (
    <div>
      <Parallax
        small
        filter
        image={
          "https://res.cloudinary.com/dywnmmeue/image/upload/v1618049358/image1587385360_ortrsf.jpg"
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
                        "https://res.cloudinary.com/varditcloud/image/upload/v1622701191/user_x0bhfk.png"
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
                          <Button onClick={handleClose} color="primary">
                            Cancel
                          </Button>
                          <Button
                            onClick={async () => {
                              handleClose();
                              PostNewData();
                            }}
                            color="primary"
                          >
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
                      {/* <tr>
                        <td classNames={classes.tit}>Sport Types:</td>
                        <td>
                          {trainer.sportType.map((s) => s.name).join(", ")}
                        </td>
                      </tr> */}
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
                          {next.map((t) => (
                            <GridItem xs={12} sm={12} md={4}>
                              <p>
                                <b>Training name:</b>
                                <br /> {t.name}
                              </p>
                              <p>
                                <b>Training time:</b>
                                <br />{" "}
                                {moment(t.time).format("MMMM Do YYYY, h:mm a")}
                              </p>
                            </GridItem>
                          ))}
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "Past Trainings",
                      tabIcon: Palette,
                      tabContent: (
                        <GridContainer justify="center">
                          {past.map((t) => (
                            <GridItem xs={12} sm={12} md={4}>
                              <p>
                                <b>Training name:</b>
                                <br /> {t.name}
                              </p>
                              <p>
                                <b>Training time:</b>
                                <br />{" "}
                                {moment(t.time).format("MMMM Do YYYY, h:mm a")}
                              </p>
                            </GridItem>
                          ))}
                        </GridContainer>
                      ),
                    },
                    // {
                    // 	tabButton: "Statistics",
                    // 	tabIcon: Favorite,
                    // 	tabContent: (
                    // 		<GridContainer justify="center">
                    // 			<GridItem xs={12} sm={12} md={4}>
                    // 				<img
                    // 					alt="..."
                    // 					src={
                    // 						"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                    // 					}
                    // 					className={navImageClasses}
                    // 				/>
                    // 			</GridItem>
                    // 			<GridItem xs={12} sm={12} md={4}>
                    // 				<img
                    // 					alt="..."
                    // 					src={
                    // 						"https://res.cloudinary.com/dywnmmeue/image/upload/v1617887588/trainingPic_gmmk9c.jpg"
                    // 					}
                    // 					className={navImageClasses}
                    // 				/>
                    // 			</GridItem>
                    // 		</GridContainer>
                    // 	),
                    // },
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
