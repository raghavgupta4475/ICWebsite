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
  
  const TextFieldc=(props)=>{
    
    const classes = useStyles();
    return(
        <div>
            <TextField
        id="name"
        label={props.field}
        // className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
      />
      <br></br>
      
         
        </div>

    )
  }
  export default TextFieldc;