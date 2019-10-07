import React,{Component} from 'react'
import AppBar from 'components/AppBar/AppBar';
import instance from '../../Axios/axios';
import '../../../src/views/ViewData/ViewData.css'
import ExpansionPanel from '../../components/expansionpanel/expansionpanel.js';
import firestore from '../../firebase';
import firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import { Button } from '@material-ui/core';
import DD from '../../components/CustomDropdown/DropDown';
import DD2 from '../../components/CustomDropdown/DropdownMonth'
import DD3 from '../../components/CustomDropdown/Dropdownpayment'
import DD4 from '../../components/CustomDropdown/DDYear';
import { display } from '@material-ui/system';
import { HorizontalSplit } from '@material-ui/icons';
import { callbackify } from 'util';

class ViewData extends Component{
    
    state={
        allorders:[],
        detailsoforder:[],
        change:0,
        c:"",
        pm:"",
        ta:0,
        check:0,
        month:"",
        pay:"",
        year:0
    }
        componentDidUpdate=()=>{
        //     console.log(this.state.check)
        //  console.log(this.state.ta)
            const db=firebase.firestore();
            
            if(this.state.check===99){
                let amount=0;
                db.collection("orders").where("company","==",this.state.c).where("type","==",this.state.pm)
            .onSnapshot((querySnapshot)=>{
                querySnapshot.forEach((doc)=>{
                    amount=amount+doc.data().amount
                    // console.log(amount)
                })
            })
            
            }
            
        }
     componentDidMount=()=>{
         const db=firebase.firestore();
        let allorders=null;
        let details=[];
        let temp=[];
        let docref=db.collection('orders')
        .get().then((querySnapshot)=>{
        querySnapshot.forEach((doc)=>{ 
                  temp.push(doc.data())
                  details.push(JSON.stringify(doc.data().details))           
        });
       this.setState({allorders:temp,detailsoforder:details})   
        
    })
    
     }
    render(){
        let k=0;
        let amo=0;
        let i=-1;
        const gohandler =(comp)=>{
            console.log(amo)
            this.setState({go:this.state.go+1,c:comp,check:99})
            this.setState({ta:amo})
        }
        
        return(
            <div>
                <AppBar
                title="View Data"
                disc={this.state.ta}/>
                <div className="box">

                    <TextField
                    className="each"
                    id="comp"
                    label="Company"
                    // className={clsx(classes.textField, classes.dense)}
                    margin="dense"
                    variant="outlined"
                    />
                    <DD
                    pm={(pmmode)=>{this.setState({pm:pmmode})}} 
                    className="each"/>
                    <DD2
                    pm={(pmmode)=>{this.setState({month:pmmode})}} 
                    className="each"/>
                    <DD4
                    pm={(pmmode)=>{this.setState({year:pmmode})}} 
                    className="each"/>
                    <DD3
                    pm={(pmmode)=>{this.setState({pay:pmmode})}} 
                    className="each"/>
                    <Button
                    className="each"
                    onClick={()=>gohandler(document.getElementById("comp").value)}
                    >Go
                    </Button>
                </div>
             
                 <br></br>
                    {  
                        
                        this.state.allorders.map((allorders)=>{
                        i=i+1;
                        console.log(document.getElementById("comp").value)
                            console.log(this.state.year)
                        if((document.getElementById("comp").value==="") && (this.state.pm==="")&&(this.state.month==="")&&(this.state.pay==="")&&(this.state.year===0)){
                            console.log("haha")
                            return <ExpansionPanel key={allorders.time} 
                            disc={this.state.detailsoforder[i]} 
                            id={"Order Id:        "+allorders.orderid}
                            name={allorders.name}
                            company={"Company:        "+allorders.company}
                            date={"Date:               "+allorders.date}
                            reason={"Reason:            "+allorders.reason}/>
                        }
                        else{
                            if(this.state.year!=2019&& this.state.year!=0){
                                console.log(this.state.year)
                                return;
                            }
                            let m1=allorders.date.substring(3,5);
                            let m2=allorders.date.substring(6,10)
                            let str=((((allorders.company.concat(allorders.type)).concat(m1)).concat(allorders.payment)).concat(m2).toLowerCase())
                            if(this.state.pm===""){
                                if(allorders.type=="Credit"){
                                       str= str.replace("credit","")
                                }
                            }
                            console.log(str)
                            console.log(((((document.getElementById("comp").value.concat(this.state.pm))).concat(this.state.month)).concat(this.state.pay)).toLowerCase())
                            if((str).includes(((((document.getElementById("comp").value.concat(this.state.pm))).concat(this.state.month)).concat(this.state.pay)).toLowerCase())){
                                k=1;
                                
                                amo=amo+allorders.amount;
                                return <ExpansionPanel key={allorders.time} 
                                disc={this.state.detailsoforder[i]} 
                                id={"Order Id:        "+allorders.orderid}
                                name={allorders.name}
                                reason={"Reason:            "+allorders.reason}
                                company={"Company:        "+allorders.company}
                                date={"Date:               "+allorders.date}/>
                            }
                            
                        }
                       
                        
    })
    }     
                
            </div>
            )
    }
    
}

   
   
    

    
export default ViewData;