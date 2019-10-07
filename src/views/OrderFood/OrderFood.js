import React,{useState, Component} from 'react';
import { returnStatement } from '@babel/types';
import AppBar from '../../components/AppBar/AppBarNoButton';
import App from 'App';
import firebase from 'firebase';
import SingleItem from './SingleItem/SingleItem';
import TextField from '@material-ui/core/TextField';

class OrderFood extends Component
{
    state={
        details:[],
        menu:[],
        change:0
    }
    componentDidMount=()=>{
        firebase.firestore().collection('menu')
        .where("status","==","available").onSnapshot((querySnapshot)=>{
            querySnapshot.forEach((doc)=>{
                console.log(doc.data())
                 this.setState({menu:this.state.menu.concat(doc.data())})
            })
        })
    }
    render(){
        const changehandler=()=>{
            console.log("change handler activated")
            this.setState({change:this.state.change+1})
        }
        return(
            <div>
                <AppBar title="Order Your Food"/>
                <TextField
                id="search"
                label="Search"
                // className={clsx(classes.textField, classes.dense)}
                margin="dense"
                variant="outlined"
                onChange={changehandler}
                 />
                <br></br>
                {
                    
                    this.state.menu.map((menu)=>{
                        if(menu.foodName.toLowerCase().includes(document.getElementById("search").value.toLowerCase())){
                            return(
                                <SingleItem 
                                key={menu.foodName}
                                foodname={menu.foodName}
                                foodprice={menu.foodPrice}/>
                            )
                        }
                        
                    })
                }
                
            </div>
        )
    }
}   

export default OrderFood;