import React from 'react';
import firebase from 'firebase';
import {Link} from 'react-router-dom'
import {useState} from 'react';
import firestore from '../../../firebase';
import AppBar from '../../../components/AppBar/AppBar';
import {connect} from 'react-redux';
import { Button } from '@material-ui/core';
import TextField from '@material-ui/core/TextField'
import CheckBox from '../../../components/Checkbox/checkbox'
const Cart=(props)=>{
    const [state,sets]=useState({
      company:"",
      reason:"",
      pod:"",
      paymade:0
    })
    let result=Object.keys(props.crt).map((key)=>{
        return [key+":\t",props.crt[key]]
      });
      const continueHandler=()=>{
        
        
          const id=Math.floor((Math.random() * 1000) + 1);
          const db=firebase.firestore();
          let q=0;
          var today = new Date();
          var date1=String(today.getDate()).padStart(2,'0')+'.'+String(today.getMonth()+1).padStart(2,'0')+'.'+today.getFullYear();
          var time1=today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          let temp="";let bol="false";
          var date="";var time="";
          if(state.pod==="PICK-UP"){
            temp=state.pod
            bol="false";
            var date = String(today.getDate()).padStart(2,'0')+'.'+String(today.getMonth()+1).padStart(2,'0')+'.'+today.getFullYear();
            var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
          }
          else{
            if(state.pod==="delivery"){
              temp=document.getElementById("l").value;
              bol="false";
              var date = String(today.getDate()).padStart(2,'0')+'.'+String(today.getMonth()+1).padStart(2,'0')+'.'+today.getFullYear();
              var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            }
            else{
                bol="true";
                temp=document.getElementById("l").value;
                date=document.getElementById("dat").value;
                time=document.getElementById("ti").value;
            }

          }
          
          console.log(q)
          db.collection("orders").doc("PU"+ " "+date1+" "+time1).set({
            email:"admin",
            details:props.crt,
            status:"pending",
            amount:props.ta,
            name:"PU",
            orderid:id,
            preorder:bol,
            date:date,
            time:time,
            location:temp,
            company:document.getElementById("c").value,
            reason:document.getElementById("r").value,
            type:"Credit",
            department:"PU"
          }).then(()=>{
            db.collection("credit").doc("PU").get().then((doc)=>{
              db.collection("orders").doc("PU"+ " "+date+" "+time).update({
                payment:doc.data().paymentsMade
              })
            })
}
          )
      }
    return(     
        <div>
            <AppBar title="CART" disc={"Rs. "+props.ta}></AppBar>
            {result.map((i)=>{
                return (
                    <p>{i}</p>
                )
            })}
             <TextField
        id="c"
        label="Company"
        // className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        // onChange={props.compa(document.getElementById("name").value)}
      />
      <TextField
        id="r"
        label="Reason of order"
        // className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        // onChange={props.reas(document.getElementById("email").value)}
      />
            <CheckBox 
            tick={(pood)=>{sets({pod:pood})}}/>
            <TextField
        id="l"
        label="Location"
        // className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        // onChange={props.reas(document.getElementById("email").value)}
      />
      <TextField
        id="dat"
        label="Date"
        // className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        // onChange={props.reas(document.getElementById("email").value)}
      />
      <TextField
        id="ti"
        label="Time"
        // className={clsx(classes.textField, classes.dense)}
        margin="dense"
        variant="outlined"
        // onChange={props.reas(document.getElementById("email").value)}
      />
      <br></br>
            <Button  color="primary" onClick={continueHandler}>
              <Link to="/optionspage/FoodStatus">
              Continue
              </Link>
            
            </Button>
        </div>
        
    )
}
const mapStateToProps=state=>{
    return{
      crt:state.cart,
      ta:state.totalAmount
    }
  }
export default connect(mapStateToProps)(Cart);