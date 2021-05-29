import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../App";
import { Link, useHistory } from "react-router-dom";
import  useStyles  from "./styles";
import Card from "@material-ui/core/Card";
import Grid from "@material-ui/core/Grid";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Box from '@material-ui/core/Box';
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CheckOutModal from "../../components/CheckOutModal";
import Button from "../../components/Button";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { findByLabelText } from "@testing-library/react";
import Popover from '@material-ui/core/Popover';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import Hero  from './components/Hero';
import WhatWeDo  from './components/WhatWeDo';

const Home = () => {
  const [data, setData] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [expanded, setExpanded] = React.useState(false);
  const [openModal, setOpenModal] = React.useState(false);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };


  const handleClickOpen = (item) => {
    setOpen(true);
    setSelectedItem(item);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedItem(null);
  };
  const classes = useStyles();

  useEffect(() => {
    fetch(`${process.env.REACT_APP_SERVER}/alldeals`, {
      headers: {
        "Content-Type": "application/json", 
      },
    })
      .then((res) => res.json())
      .then((result) => {
        return setData(result.deals);
      });
  }, []);

  const likeDeal = (id) => {
    fetch(`${process.env.REACT_APP_SERVER}/like`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        dealId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });
        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  
  const unlikeDeal = (id) => {
    fetch("/unlike", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        dealId: id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result._id);
        const newData = data.map((item) => {
          if (item._id == result._id) {
            return result;
          } else {
            return item;
          }
        });

        setData(newData);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const checkDeal = (item) => {
    handleClickOpen(item);
    return;

    fetch("/deal", {
      method: "put",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("jwt"),
      },
      body: JSON.stringify({
        dealId: item.id,
      }),
    })
      .then((res) => res.json())
      .then((result) => {
        localStorage.setItem("checkdealId", JSON.stringify(result._id));
        history.push("/CheckIt");
      })
      .catch((err) => {
        console.log(err);
      });
  };


  return (
    <main>
      <Hero/>
      <WhatWeDo/>
     <div className={classes.root}>
        <Grid start="0" container reversed spacing={8}>
          {data.map((deal) => {
            return (
              <Grid key={deal._id}  item xs={12} sm={6} md={4} lg={3}>
                <Card  className={classes.card}>
                  <div className={classes.cardImage}></div>
      
                  <CardHeader>
                  <Typography></Typography>
                  </CardHeader>
                  <CardContent className={classes.cardContent}>
                  <b >{deal.title} </b>
                      <ul>
                      <Typography spacing={4}>
                        <li>
                          <b>Location: </b>
                          {deal.location}
                        </li>
                        <li>
                          <b>Num Of Unit: </b>
                          {deal.numOfUnit}
                        </li>
                        <li>
                          <b>Dimension: </b>
                          {deal.dimension}
                        </li>
                        <li>
                          <b>Price: </b>
                          {deal.price}$
                        </li>
                        </Typography>

                        </ul>
                  </CardContent>
                  <CardActions className={classes.CardActions} disableSpacing>
                    {state?(deal.likes.includes(state._id) ? (
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => {
                          unlikeDeal(deal._id);
                        }}
                      >
                        <FavoriteIcon />
                      </IconButton>
                    ) : (
                      <IconButton
                        aria-label="add to favorites"
                        onClick={() => {
                          likeDeal(deal._id);
                        }}
                      >
                        <FavoriteBorderIcon />
                      </IconButton>
                    )):""}
                 
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={() => checkDeal(deal)}
                  >
                    Check It Out
                  </Button>
                  </CardActions >
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </div>
      <CheckOutModal
        open={open}
        handleClose={handleClose}
        deal={selectedItem}
      />

    </main>
  );
};

export default Home;