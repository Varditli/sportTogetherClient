import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Button from "../CustomButtons/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import moment from "moment";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  pname: {
    textAlign: "center",
  },
  root: {
    maxWidth: 345,
    display: "inline-block",
    borderRadius: "15px",
    border: "2px solid #4fc3f7",
    marginBottom: "15px",
    marginTop: "20px",
    padding: "10px",
    backgroundColor: "#e5eaea",
  },
  media: {
    height: "60px",
    width: "60px",
    borderRadius: "30px",
    paddingTop: "5%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));
// function refreshPage() {
//   window.location.reload(false);
//   this.forceUpdate();
// }

export default function RecipeReviewCard(training) {
  const { state, dispatch } = useContext(UserContext);
  const classes = useStyles();
  const [trainer, setTrainer] = useState();
  const [isReg, setIsReg] = useState();
  const [expanded, setExpanded] = React.useState(false);
  const [data, setData] = React.useState();
  const [likes, setLikes] = React.useState(false);
  const [islike, setIsLike] = React.useState();
  const [classicModal, setClassicModal] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });

  const activeTraining = training.value;

  const participants = training.value.participants;
  //console.log(localStorage.getItem("trainee"));

  const trainee = JSON.parse(localStorage.getItem("trainee"));
  console.log(participants);

  // const checkIsReg = () => {
  //   participants.map((par) => {
  //     if (par == trainee._id) {
  //       setIsReg(true);
  //     } else {
  //       setIsReg(false);
  //     }
  //   });
  // };
  // checkIsReg();

  console.log(isReg);

  
  const regTraining = (trainingId) => {
    fetch(`${process.env.REACT_APP_SERVER}/regTrainingAddTrainee`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        trainingId: trainingId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // const newData = data.map((item) => {
        //   if (item._id == result._id) {
        //     return result;
        //   } else {
        //     return item;
        //   }
        // });
        // setData(newData);
        setIsReg(true);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //unregister to a training
  const unRegTraining = (trainingId) => {
    fetch(`${process.env.REACT_APP_SERVER}/unRegTrainingRemoveTrainee`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        trainingId: trainingId,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // const newData = data.map((item) => {
        //   if (item._id == result._id) {
        //     return result;
        //   } else {
        //     return item;
        //   }
        // });
        // setData(newData);
        setIsReg(false);
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const likeTraining = (id) => {
    fetch(`${process.env.REACT_APP_SERVER}/like`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        trainingId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // const newData = data.map((item) => {
        //   if (item._id == result._id) {
        //     return result;
        //   } else {
        //     return item;
        //   }
        // });
        // setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const unlikeTraining = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        trainingId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        // console.log(result._id);
        // const newData = data.map((item) => {
        //   if (item._id == result._id) {
        //     return result;
        //   } else {
        //     return item;
        //   }
        // });
        // setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/myTrainingsTrainee`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        //return setPics(result.myTraining)
      });
  }, []);

  useEffect(() => {
    fetch("/myLikes", {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        return setLikes(result.myTraining);
      });
  }, []);

  Transition.displayName = "Transition";
  //console.log(training)

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  var freePlaces = training.value.capacity - participants.length;
  const history = useHistory();
  console.log("Free Places: " + freePlaces);
  console.log(isReg);

  var footerButtons = () => {
    if (isReg == true && freePlaces >= 0) {
      return (
        <div>
          <h3>Yay! You are registered to the training!</h3>
          <Button
            //color="transparent"
            simple
            onClick={async () => {
              unRegTraining(activeTraining._id);
              setIsReg(true);
            }}
          >
            Unbook
          </Button>
          <Button
            onClick={async () => {
              setClassicModal(false);
              //refreshPage();
            }}
            //color="danger"
            simple
          >
            Back To HomePage
          </Button>
        </div>
      );
    } else if (isReg == false) {
      if (freePlaces > 0) {
        return (
          <div>
            <Button
              //color="transparent"
              simple
              onClick={async () => {
                regTraining(activeTraining._id);
                setIsReg(false);
                //refreshPage();
              }}
            >
              Book
            </Button>
            <Button
              onClick={() => setClassicModal(false)}
              //color="danger"
              simple
            >
              Cancel
            </Button>
          </div>
        );
      } else if (freePlaces == 0) {
        return (
          <div>
            <Button
              onClick={async () => {
                setClassicModal(false);
                window.location(false);
              }}
              //color="danger"
              simple
            >
              Cancel
            </Button>
          </div>
        );
      } else {
        return "ff";
      }
    }
  };

  return (
    <div>
      <Card className={classes.root}>
        <CardHeader />
        <p> {training.value.name}</p>
        <p> {activeTraining.trainerUsername}</p>
        <Typography>
          <p className={classes.pname}>
            <b>
              {moment(training.value.time).format("MMMM Do YYYY, h:mm:ss a")}
            </b>
          </p>
        </Typography>
        <p className={classes.pname}>
          <Typography color="error">
            {freePlaces >= 10
              ? +freePlaces + "  Places left!"
              : freePlaces < 10 && freePlaces > 5
              ? "Only " + freePlaces + "  Places left!"
              : freePlaces > 0 && freePlaces <= 5
              ? "Hurry Up! Only " + freePlaces + "  Places left!"
              : freePlaces == 0
              ? "Fully Booked! "
              : ""}
          </Typography>
        </p>
        <p className={classes.pname}>
          {"location: " + training.value.location}
        </p>

        <CardActions disableSpacing>
          {/* {state ? (
            training.likes.includes(state._id) ? (
              <IconButton
                aria-label="add to favorites"
                onClick={() => {
                  unlikeTraining(training._id);
                  //setIsLike(false);
                }}
              >
                <FavoriteIcon />
              </IconButton>
            ) : (
              <IconButton
                aria-label="add to favorites"
                onClick={() => {
                  likeTraining(training._id);
                  //setIsLike(true);
                }}
              >
                <FavoriteBorderIcon />
              </IconButton>
            )
          ) : (
            ""
          )} */}

          <GridContainer>
            <GridItem xs>
              {isReg & freePlaces>=0 ? (
                <Button
                  round
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  Unbook
                </Button>
              ) : !isReg & freePlaces>0 ?
              (
                <Button
                  round
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  Book Place
                </Button>
              ):
                !isReg & freePlaces ==0 ? (
                  ""
              )
              : ("")
              }

              <Dialog
                classes={{
                  root: classes.center,
                  paper: classes.modal,
                }}
                open={classicModal}
                TransitionComponent={Transition}
                keepMounted
                onClose={() => setClassicModal(false)}
                aria-labelledby="classic-modal-slide-title"
                aria-describedby="classic-modal-slide-description"
              >
                <DialogTitle
                  id="classic-modal-slide-title"
                  disableTypography
                  className={classes.modalHeader}
                >
                  <IconButton
                    className={classes.modalCloseButton}
                    key="close"
                    aria-label="Close"
                    color="inherit"
                    onClick={async () => {
                      setClassicModal(false);
                      //refreshPage();
                    }}
                  >
                    <Close className={classes.modalClose} />
                  </IconButton>
                  <h4 className={classes.modalTitle}>Book Place</h4>
                </DialogTitle>
                <DialogContent
                  id="classic-modal-slide-description"
                  className={classes.modalBody}
                >
                  <h3>Training Details:</h3>
                  <h3>Name: {activeTraining.name}</h3>
                  <h3>Trainer: {activeTraining.trainerUsername}</h3>
                  <h3>Time: {activeTraining.time}</h3>
                  <h3>Capacity: {activeTraining.capacity}</h3>
                  <h3>Sport Type: {activeTraining.type}</h3>
                  <h3>Intensity: {activeTraining.intensity}</h3>
                  <h3>
                    Age Group: {activeTraining.age_group[0]} -{" "}
                    {activeTraining.age_group[1]}
                  </h3>
                  <h3>limitations: {activeTraining.limitations}</h3>
                  <h3>Via Zoom? {activeTraining.zoom}</h3>
                  <h3>Additional Info: {activeTraining.additional_info}</h3>
                  <h3>
                    Price:{" "}
                    {activeTraining.price == 0 ? "Free" : activeTraining.price}{" "}
                    <span>
                      <h5 color="#838D92">(Pay directly to the trainer)</h5>
                    </span>
                  </h3>
                </DialogContent>
                <DialogActions className={classes.modalFooter}>
                  <div>
                    {() => footerButtons()}
                    {isReg == true && freePlaces >= 0 ? (
                    <div>
                      <h3>Yay! You are registered to the training!</h3>
                      <Button
                        color="transparent"
                        simple
                        onClick={async () => {
                          unRegTraining(activeTraining._id);
                          setIsReg(true);
                        }}
                      >
                        Unbook
                      </Button>
                      <Button
                        onClick={async () => {
                          setClassicModal(false);
                          //refreshPage();
                        }}
                        color="danger"
                        simple
                      >
                        Back To HomePage
                      </Button>
                    </div>
                  ) 
                  :
                  isReg == false && freePlaces > 0 ? (
                      <div>
                        <Button
                          color="transparent"
                          simple
                          onClick={async () => {
                            regTraining(activeTraining._id);
                            setIsReg(false);
                            //refreshPage();
                          }}
                        >
                          Book
                        </Button>
                        <Button
                          onClick={() => setClassicModal(false)}
                          color="danger"
                          simple
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : isReg == false && freePlaces == 0 ? (
                      <div>
                        <Button
                          onClick={async () => {
                            setClassicModal(false);
                            window.location(false);
                          }}
                          color="danger"
                          simple
                        >
                          Cancel
                        </Button>
                      </div>
                    ) : (
                      "שש"
                    )
}
                  </div>
                </DialogActions>
              </Dialog>
            </GridItem>
          </GridContainer>

          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>{training.value.additional_info}</CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
