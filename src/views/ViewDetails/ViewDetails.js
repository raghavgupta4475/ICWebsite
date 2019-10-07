import React,{Component} from 'react';
import AppBar from '../../components/AppBar/AppBar.jsx'
import firebase from '../../firebase.js'
import SimpleCard from 'components/Card/SimpleCard/SimpleCard.js';
const ViewDetails=(props)=>{
        const db=firebase.firestore();
        return(
            <div>
                <AppBar title="View Details" button="See Orders"/>
            </div>
            
        )
    }

export default ViewDetails;