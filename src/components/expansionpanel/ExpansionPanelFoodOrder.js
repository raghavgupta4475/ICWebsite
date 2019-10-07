import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button'
import { TextField } from '@material-ui/core';
import * as actions from '../../store/actions';
import {connect} from 'react-redux';
 
const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const SimpleExpansionPanel=(props)=> {
  const classes = useStyles();


  
  return (
    <div className={classes.root}>
      <ExpansionPanel>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>
          {props.food}
          <br>
          </br>
          {props.price}
          </Typography>    
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
        <Button size="small" 
        style={{ color:"#008000"}} 
        onClick={() => {props.delete(props.food,props.price)}}>-</Button>
          <p>{props.crt[props.food]}</p>
          <Button size="small" 
          style={{ color:"#008000"}} 
          onClick={()=>props.add(props.food,props.price)}>+</Button>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
const mapStateToProps=state=>{
  return{
    crt:state.cart
  }
}
const mapDispatchToProps = dispatch => {
  return{
    add:(itm,p) => dispatch({type:actions.ADD_ITEM,itemname:itm,price:p}),
    delete:(itm,p) => dispatch({type:actions.DELETE_ITEM,itemname:itm,price:p})
  };
}

export default connect(mapStateToProps,mapDispatchToProps)(SimpleExpansionPanel);