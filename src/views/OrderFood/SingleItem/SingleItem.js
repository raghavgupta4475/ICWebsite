import React, { Component } from 'react';
import ExpansionPanel from '../../../components/expansionpanel/ExpansionPanelFoodOrder'
import Button from '../../../components/CustomButtons/Button2'
import ExpansionPanelFoodOrder from '../../../components/expansionpanel/ExpansionPanelFoodOrder'
class SingleItem extends Component{
    render(){
        return(
            <div>
                <ExpansionPanelFoodOrder
                food={this.props.foodname}
                price={this.props.foodprice}
                quantity={0}/>
            </div>
        )
    }
}
export default SingleItem;