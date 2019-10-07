import * as act from '../../src/store/actions';
import { stat } from 'fs';
const initialState={
    cart:{},
    totalAmount:0
}

const reducer = (state=initialState,actions)=>{
    switch(actions.type){
        case act.ADD_ITEM:
            console.log(state.cart)
            console.log(typeof(state.totalAmount))
            if(state.cart[actions.itemname]===undefined){
                return {
                    ...state,
                    cart:{
                        ...state.cart,
                        [actions.itemname]:1
                    },
                    totalAmount:state.totalAmount+Number.parseInt(actions.price)
    
                }
            }
            else{
                return {
                    ...state,
                    cart:{
                        ...state.cart,
                        [actions.itemname]:state.cart[actions.itemname]+1
                    },
                    totalAmount:state.totalAmount+Number.parseInt(actions.price)
    
                }
            }
            
        case act.DELETE_ITEM:
            if(state.cart[actions.itemname]===0||state.cart[actions.itemname]===undefined){
                return {
                    ...state,
                    totalAmount:state.totalAmount
                }
            }
            else{
                return {
                    ...state,
                    cart:{
                        ...state.cart,
                        [actions.itemname]:state.cart[actions.itemname]-1
                    },
                    totalAmount:state.totalAmount-Number.parseInt(actions.price)
                }
            }
            
        default:return state;
    }
};

export default reducer;