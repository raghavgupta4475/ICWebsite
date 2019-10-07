import React, { useEffect } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import firestore from '../../firebase'
const useStyles = makeStyles(theme => ({
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
  
  const TextFieldc=()=>{
    
    const classes = useStyles();
    function AddHandler(){
        var names=document.getElementById("name").value;
        var emails=document.getElementById("email").value;
        var passwords=document.getElementById("password").value;
        var confirmpasswords=document.getElementById("confirmpassword").value;
        if(passwords===confirmpasswords){
          const db=firebase.firestore();
          firebase.auth().createUserWithEmailAndPassword(emails, passwords).catch(function(error) {
          });
          db.collection('students').
          get().then((doc)=>{
            // db.collection('users').doc(emails).set({name:names,type:"student"})
            db.collection('students').doc(emails).set({name:names,email:emails,expenditure:0,reimbursement:0,password:passwords})
          })
          
        }
    }
    return(
        <div>
            <TextField
        id="name"
        label="Name"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="email"
        label="Email"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="password"
        label="Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <br></br>
      <TextField
        id="confirmpassword"
        label="Confirm Password"
        className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
       <br></br>
          <Button onClick={AddHandler} color="primary">
            Add
            </Button>
        </div>

    )
  }
  export default TextFieldc;