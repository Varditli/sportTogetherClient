import React, { useState, useContext, useEffect } from "react";
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
import Training from "../../../components/Card/Training";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import styles from "./ProfileStyle";
import { ContactSupportOutlined } from "@material-ui/icons";
import { Redirect } from "react-router-dom";

const useStyles = makeStyles(styles);

export default function TraineeProfile(props) {
  const trainee = JSON.parse(localStorage.getItem("trainee"));
  console.log(trainee);

  const classes = useStyles();

  //const { ...rest } = props;

  const [myTraining, setMyTraining] = useState([]);
  const [open, setOpen] = React.useState(false);
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [username, setUsername] = useState(trainee?.username);
  const [password, setPassword] = useState(trainee?.password);
  const [email, setEmail] = useState(trainee?.email);
  const [age, setAge] = useState(trainee?.age);
  const [tel, setTel] = useState(trainee?.tel);
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

  const PostNewData = () => {
    const newData = {
      username,
      email,
      age,
      tel,
    };
    fetch(`${process.env.REACT_APP_SERVER}/editTraineeProfile`, {
      method: "post",
      headers: {
        "Content-Type": "application/json", //the content type is json
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.error) {
          console.log("Failed editing trainee profile");
        } else {
          localStorage.setItem(
            "trainee",
            JSON.stringify({ ...trainee, ...newData })
          );
          console.log("successfully edited Trainee profile");
          history.replace();
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchTrainings();

    function fetchTrainings() {
      fetch(`${process.env.REACT_APP_SERVER}/myTrainingsTrainee`, {
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

  //   useEffect(()=>{
  //     fetch(`${process.env.REACT_APP_SERVER}/myTrainingsTrainee`,{
  //       method: "get",
  //        headers:{
  //           "Authorization":"Bearer "+localStorage.getItem("jwt")
  //       }
  //   }).then(res=>res.json())
  //   .then(result=>{
  //       console.log("myTrainings: ",myTrainings);
  //       return setMyTrainings(result.myTrainings);
  //   })
  // },[])

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
            value={tel}
            inline
            onChange={(e) => {
              console.log("e", e);
              setTel(e);
            }}
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
          />
        </div>
      </React.Fragment>
    );
  };

  if (!trainee) return <Redirect to="LoginTrainee" />;

  console.log('myTraining',myTraining);
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
                          Edit Trainee Profile
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
                          {/* <Button 
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
                        </Button> */}
                        </DialogActions>
                      </Dialog>
                    </div>
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
                          {next.map((t) => (
                            <GridItem xs={12} sm={12} md={4}>
                              <p>
                                <b>Training name:</b>
                                <br /> {t.name}
                              </p>
                              <p>
                                <b>Training time:</b>
                                <br /> {t.time}
                              </p>
                            </GridItem>
                          ))}
                          {/* <GridItem xs={12} sm={12} md={12}>
                          {myTraining.length
                  ? myTraining.map((item) => {
                      return <Training key={item._id} value={item} />;
                    })
                  : ""}
                          </GridItem> */}
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
                                <br /> {t.time}
                              </p>
                            </GridItem>
                          ))}
                        </GridContainer>
                      ),
                    },
                    {
                      tabButton: "My Favorites",
                      tabIcon: Favorite,
                      tabContent: (
                        <GridContainer justify="center">
                          <GridItem xs={12} sm={12} md={4}></GridItem>
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
