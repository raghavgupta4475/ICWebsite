import React,{Component} from 'react'
import  TextField  from '../../components/TextFields/TextFieldc.js'
import AppBarNoButton from '../../components/AppBar/AppBarNoButton.jsx'

class AddStudent extends Component{
    
    componentDidMount(){
        console.log("lkj")
    }
    componentDidUpdate=()=>{
        console.log("lkj")
    }
    render(){
        return(
            <div>
                <AppBarNoButton title="Add Student"/>
          <TextField/>
            </div>
        )
        
    }
}
export default AddStudent;