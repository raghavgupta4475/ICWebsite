import React from 'react';
import firebase from 'firebase';
import firestore from '../../firebase.js'
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));


const SimpleExpansionPanel=(props)=> {
    const [open, setOpen] = React.useState(false);
    const [openR, setOpenR] = React.useState(false);
  const classes = useStyles();
  const RejectedHandler=()=>{
      setOpenR(true);

  }
  const Acceptedhandler=()=>{
    setOpen(true)

  }
  function handleClose() {
    setOpen(false);
    const db=firebase.firestore();
        db.collection('orders').where("orderid","==",props.id)
        .get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection('orders').doc(props.name+" "+props.date+" "+props.time).update({status:"pending"})
            })
            
            
        })
        
  }
  function handleCloseRejected() {
    setOpenR(false);
    var note=document.getElementById("name").value;
    console.log(note)
    const db=firebase.firestore();
        db.collection('orders').where("orderid","==",props.id)
        .get().then((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                db.collection('orders').doc(props.name+" "+props.date+" "+props.time).update({status:"rejected",approvalNotes:note})
            })
            
            
        })
  }
  function handleCloseR(){
    setOpenR(false);
  }



  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
          {props.id}
          <br>
          </br>
          {props.name}
          </Typography>
          
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            {props.disc}
            <br></br>
            {props.company}
            <br></br>
            {props.date}
          </Typography>
        </ExpansionPanelDetails>
        {/* <Divider/> */}
        <Button size="small" color="primary" onClick={Acceptedhandler}>Accept</Button>
        <Button size="small" color="secondary" onClick={RejectedHandler} >Reject</Button>
      </ExpansionPanel>
      <Dialog
        open={open}
        onClose={handleClose}
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
          <Button onClick={handleClose} color="primary">
            OK
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={openR} onClose={handleCloseR} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Reject</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Reason for rejection of the order.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Reason"
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseR} color="primary">
            Cancel
          </Button>
          <Button onClick={handleCloseRejected} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default SimpleExpansionPanel;