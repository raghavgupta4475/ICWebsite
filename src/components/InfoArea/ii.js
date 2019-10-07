import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import firebase from 'firebase';
import firestore from '../../firebase';
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
    marginBottom:"2rem",
  },
}));

const InfoDisplay=(props)=> {
  const classes = useStyles();

const clickHandler = ()=>{
    const db=firebase.firestore();
    db.collection("credit").doc("PU").get().then((doc)=>{
        let a=doc.data();
        doc.ref.update({credit:0})
    })
}

  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          {props.title}
        </Typography>
        <Typography component="p">
          {props.description}
        </Typography>
        <Button onClick={clickHandler}>
            Clear 
        </Button>
      </Paper>
    </div>
  );
}
export default InfoDisplay;