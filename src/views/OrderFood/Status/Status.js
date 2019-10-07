import React,{Component} from 'react'
import { Button } from '@material-ui/core';
import {Link} from 'react-router-dom'
import firebase from 'firebase';
import firestore from '../../../firebase.js';
import ExpansionPanel from '../../../components/expansionpanel/expansionpanel'
import Header from 'components/Header/Header';
class CurrentOrders extends Component{
    state={
        currentorders:[]
    }
    componentDidMount=()=>{
        var today = new Date();
        const db=firebase.firestore();
        let temp=[];
        const ref=db.collection('orders').where("preorder","==","false")
        .onSnapshot((querySnapshot)=>{
            this.state.currentorders=[];
            querySnapshot.forEach((doc)=>{
                console.log(doc.data())
                if(this.state.currentorders.indexOf(doc.data())==-1 &&doc.data().date===(String(today.getDate()).padStart(2,'0')+'.'+String(today.getMonth()+1).padStart(2,'0')+'.'+today.getFullYear())){
                    console.log("haha")
                    let index=this.state.currentorders.indexOf(doc.data())
                    this.setState({currentorders:this.state.currentorders.concat(doc.data())})
                }
                
                           
            }

            )
            // console.log(temp)
            // this.setState({currentorders:temp})
             
        })
        
    }
    render(){
        return(
            <div className="header">
                <Header
                absolute
                color="info"
                brand="Food status"/>
                <Button  color="primary" >
              <Link to="/optionspage">
              Go to options page
              </Link>
            
            </Button>
                {this.state.currentorders.map((currentorders)=>{
                         return <ExpansionPanel key={currentorders.time} 
                         disc={JSON.stringify(currentorders.details)} 
                         id={currentorders.orderid}
                         name={currentorders.status}
                         company={currentorders.company}
                         date={currentorders.date}
                         time={currentorders.time}
                         status={currentorders.reason}/>
            
    })} 
    
            </div>
        )
    }
}
export default CurrentOrders;