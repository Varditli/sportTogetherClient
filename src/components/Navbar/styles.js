import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#212121",
    display: "flex",
    textAlign: "center",
    width: "100%",
    height:"11%",
    "& > *": {
      margin: theme.spacing(1),
    },
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "white",
      color: "#133B53",
    },
  },
  mar:{
    margin: "auto",
    display:"flex",
  },
  list: {
    display: "flex",
  },
  IconButton:{
        fontSize:"14px"
      },
  span:{
        fontSize:"14px"
      },
  menuButton: {
        marginRight: theme.spacing(3),
      },
  
  }));
  


export default useStyles;
