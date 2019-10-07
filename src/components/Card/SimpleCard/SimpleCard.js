import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase'
import firestore from '../../../firebase'
import {Link} from 'react-router-dom';
import ViewDetails from 'views/ViewDetails/ViewDetails.js';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
const useStylesPopup = makeStyles(theme => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
  }));
const useStylesInput = makeStyles(theme => ({
    container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
    },
    dense: {
      marginTop: theme.spacing(2),
    },
    menu: {
      width: 200,
    },
  }));
const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
const useStyles2 = makeStyles(theme => ({
    appBar: {
      position: 'relative',
    },
    title: {
      marginLeft: theme.spacing(2),
      flex: 1,
    },
  }));


const SimpleCard=(props)=> {
    const [openpopup, setpopup] = React.useState(false);
    const[state,setState]=React.useState({
        name:"",
        email:"",
        password:"",
        expenditure:"",
        reimbursement:""
    })
    const ClearReimbursementHandler=()=>{
        const db=firebase.firestore();
    db.collection('students').where("name","==",props.name)
    .get().then((querySnapshot)=>{
        console.log(querySnapshot)
        let a=null;
        querySnapshot.forEach((doc)=>{
            a=doc.data();
            setState({
                name:a.name,
                email:a.email,
                reimbursement:0,
                expenditure:a.expenditure,
                password:a.password
            })
            
            
        })
        
        db.collection('students').doc(a.email).update({reimbursement:0})
    })
        
    }
  const classes = useStyles();
  const classes2 = useStyles2();
  const classesInput = useStylesInput();
  const [open2, setOpen2] = React.useState(false);
  const ViewDetailsHandler=()=>{
        setOpen2(true)
        const db=firebase.firestore();
    db.collection('students').where("name","==",props.name)
    .get().then((querySnapshot)=>{
        console.log(querySnapshot)
        querySnapshot.forEach((doc)=>{
            console.log(doc)
            let a=doc.data();
            setState({
                name:a.name,
                email:a.email,
                reimbursement:a.reimbursement,
                expenditure:a.expenditure,
                password:a.password
            })
            
            
        })
        
    })
        
  }
  function handleClose() {
    setOpen2(false);
  }
  function handleClosePopup() {
    setpopup(false);
  }

  const RemoveHandler=()=>{
      setpopup(true)
    const db=firebase.firestore();
    db.collection('students').where("name","==",props.name)
    .get().then((querySnapshot)=>{
        console.log(querySnapshot)
        querySnapshot.forEach((doc)=>{
            console.log(doc)
            let a=doc.data();
            let emails=doc.data().email 
            db.collection('students').doc(emails).delete();
            db.collection('users').doc(emails).delete();   
        })
        
    })
}

  return (
      <div>
    <Card className={classes.card}>
      <CardContent>
        {/* <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography> */}
        <Typography variant="h5" component="h2">
          {props.name}
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          adjective
        </Typography> */}
        <Typography variant="body2" component="p">
          Proceed to view more information.
          <br />
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" style={{ color:"#008000"}} onClick={ViewDetailsHandler}>View Details</Button>
        <Button size="small" color="secondary" onClick={RemoveHandler}>Remove Account</Button>
      </CardActions>
    </Card>
    <Dialog fullScreen open={open2} onClose={handleClose} TransitionComponent={Transition}>
        <AppBar className={classes2.appBar}>
          <Toolbar>
            <IconButton edge="start" color="inherit" onClick={handleClose} aria-label="Close">
              <CloseIcon />
            </IconButton>
            <Typography variant="h6" className={classes2.title}>
              Details
            </Typography>
          </Toolbar>
        </AppBar>
        <List>
          <ListItem >
            <ListItemText primary={"Name:      "+state.name}  />
          </ListItem>
          <Divider />
          <ListItem >
            <ListItemText primary={"Email:      "+state.email} />
          </ListItem>
          <Divider/>
          <ListItem >
            <ListItemText primary={"Expenditure:      "+state.expenditure} />
          </ListItem>
          <Divider/>
          <ListItem >
            <ListItemText primary={"Reimbursement:      "+state.reimbursement} />
          </ListItem>
            <Button size="small" style={{ color:"#008000"}} onClick={ClearReimbursementHandler}>Clear Reimbursement</Button>
          <Divider/>
        </List>
      </Dialog>
      <Dialog
        open={openpopup}
        onClose={handleClosePopup}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Submitted"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Your response has been submitted.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePopup} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SimpleCard;
