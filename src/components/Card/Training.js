import React from 'react';
import { useHistory } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Button from "../CustomButtons/Button";
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import moment from 'moment';
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Close from "@material-ui/icons/Close";
import Slide from "@material-ui/core/Slide";

const useStyles = makeStyles((theme) => ({
  pname:{
   textAlign:"center"
  },
  root: {
    maxWidth: 345,
    display:"inline-block",
    borderRadius: "15px",
    border: "2px solid #4fc3f7",
    marginBottom:"15px",
    marginTop:"20px",
    padding: "10px",
    backgroundColor:"#e5eaea",
  },
  media: {
    height: "60px",
    width: "60px",
    borderRadius: "30px",
    paddingTop: '5%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

    
  
}));
function refreshPage() {
  window.location.reload(false);
}

export default function RecipeReviewCard(training) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [classicModal, setClassicModal] = React.useState(false);
  const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="down" ref={ref} {...props} />;
  });
  
  Transition.displayName = "Transition";
console.log(training)
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };
  const places = training.value.limitations - training.value.capacity
  const history = useHistory();

  return (
    <div>
    <Card className={classes.root}>
      <CardHeader 
        avatar={
          <CardMedia
        className={classes.media}
        image={training.value.pic}
        title="Paella dish"
      />
        }
        title= {training.value.name}
      />
     <Typography>

      <p className={classes.pname}><b>{moment(training.value.time).format('MMMM Do YYYY, h:mm:ss a')}</b></p> 
     </Typography >
     <p className={classes.pname}>
     <Typography color="error">{places<10? "only "+ places + "  places left!" :" "}</Typography>
     </p>
       <p className={classes.pname}>{"location: "+training.value.location}</p>
    
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>

        <GridContainer>
              <GridItem xs>
                <Button round
                  color="primary"
                  block
                  onClick={() => setClassicModal(true)}
                >
                  Book Place
                </Button>
                <Dialog
                  classes={{
                    root: classes.center,
                    paper: classes.modal
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
                      onClick={() => setClassicModal(false)}
                      onClick={refreshPage}
                    >
                      <Close className={classes.modalClose} />
                    </IconButton>
                    <h4 className={classes.modalTitle}>הזמן מקום</h4>
                  </DialogTitle>
                  <DialogContent
                    id="classic-modal-slide-description"
                    className={classes.modalBody}
                  >
                    <h3>שריין את מקומך בשיעור זה !</h3>
                    <h3>מחיר: 50 ש"ח</h3>
                    <h3>לתשלום באמצעות פייפאל</h3>
                  </DialogContent>
                  <DialogActions className={classes.modalFooter}>
                    <Button 
                    color="transparent" 
                    simple
                    href="/HomePage"
                    >
                      הזמן
                    </Button>
                    <Button
                      onClick={() => setClassicModal(false)}
                    //  onClick={()=>history.push("/HomePage")}
                     onClick={refreshPage}
                      color="danger"
                      simple
                    >
                      Close
                    </Button>
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
        <CardContent>
          <Typography paragraph>
          💪🏼 Hi ! I'm your personal trainer.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    </div>

  );
}
