import React,{Component} from 'react'
import firebase from 'firebase';
import firestore from '../../firebase.js';
import ExpansionPanel from '../../components/expansionpanel/ExpansionPanelCurrentOrders.js'
import './CurrentOrders.css'
import Header from 'components/Header/Header';
class CurrentOrders extends Component{
    state={
        currentorders:[],
        rend:0
    }
    componentDidMount=()=>{
        console.log("run")
        const db=firebase.firestore();
        let temp=[];
        const ref=db.collection('orders').where("preorder","==","false")
        .onSnapshot((querySnapshot)=>{
            this.state.currentorders=[];
            querySnapshot.forEach((doc)=>{
                console.log(doc.data())
                if(this.state.currentorders.indexOf(doc.data())==-1&&doc.data().status==="To be approved"){
                    this.setState({currentorders:this.state.currentorders.concat(doc.data())})    
                }
                if(this.state.currentorders.indexOf(doc.data())!=-1 &&doc.data().status==="pending"){
                    let index=this.state.currentorders.indexOf(doc.data())
                    this.setState({currentorders:this.state.currentorders.splice(index,1)})
                }
                
                           
            }

            )
            // console.log(temp)
            // this.setState({currentorders:temp})
            console.log(this.state.currentorders) 
        })
        
    }
    componentDidUpdate=()=>{
        console.log(this.state.rend)
        console.log("jjdjdjdj")
        
    }
    render(){
        return(
            <div className="header">
                <Header
                absolute
                color="info"
                brand="Current orders"/>
                {this.state.currentorders.map((currentorders)=>{
                         return <ExpansionPanel key={currentorders.time} 
                         disc={JSON.stringify(currentorders.details)} 
                         id={currentorders.orderid}
                         name={currentorders.name}
                         company={currentorders.company}
                         date={currentorders.date}
                         time={currentorders.time}
                         chng={()=>{this.setState({rend:this.state.rend+1})}}/>
            
    })} 
            </div>
        )
    }
}
export default CurrentOrders;