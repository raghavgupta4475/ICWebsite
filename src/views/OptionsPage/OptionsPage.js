import React, { Component } from 'react';
import CardofOptions from '../../components/Card/CardofOptions/CardofOptions.jsx';
import Header from 'components/Header/Header.jsx';
import './OptionsPage.css'
class OptionsPage extends Component{
    state={
        details:[
            {title:"View Data",description:"Click to view details of all the orders",path:"ViewData"},
            {title:"Manage Accounts",description:"Click to Manage accounts of the students",path:"ManageAccounts"},
            {title:"Current Orders",description:"Current Orders waiting for approval",path:"CurrentOrders"},
            {title:"Credit-Details",description:"Current information about your credit",path:"CreditDetails"},
            {title:"Order Your Food",description:"Order food",path:"Order"},
            {title:"Your food status",description:"food status",path:"FoodStatus"}
        ]
    }
    

   

    render(){
        return(
           
            <div >
                <Header
                absolute 
                color="info"
                brand="IC Ordering System"/>
                <div className="CardEncloser">

                 {
                this.state.details.map((details)=>{
                    return <CardofOptions title={details.title} description={details.description} path={details.path}/>
                })
            }
            </div>
            </div>
        )
    }

}
export default OptionsPage
