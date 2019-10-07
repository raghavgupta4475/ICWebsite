import React, { Component } from 'react'
import firebase from 'firebase';
import firestore from '../../firebase'
import AppBar from '../../components/AppBar/AppBar.jsx'
import SimpleCard from '../../components/Card/SimpleCard/SimpleCard.js'
class ManageAccounts extends Component{
    state={
        names:[]
    }
    componentDidMount=()=>{
        this.state.names=[];
        const db=firebase.firestore();
        db.collection('students')
        .onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                console.log(querySnapshot.docs)
                if(this.state.names.indexOf(doc.data().name)==-1){
                    this.setState({names:this.state.names.concat(doc.data().name)})
                }
                
                
            })
        })
    }
   
    render(){
        return(
        <div>
            <AppBar title="Manage Accounts" button="Add Student" path="AddStudent"/>
            {
                this.state.names.map((names)=>{
                    return <SimpleCard name={names}/>
                })
            }
        </div>
    )
    }}
export default ManageAccounts