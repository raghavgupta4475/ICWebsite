import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
}));
 const ContainedButtons=(props)=> {
  const classes = useStyles();

  return (
    <div>
      <Button 
      variant="contained" 
      color="primary" 
      className={classes.button}
    //   onclick={console.log("yes")}
      >
        {props.butt}
      </Button>
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
      add:(itm) => dispatch({type:actions.ADD_ITEM,itemname:itm}),
      delete:(itm) => dispatch({type:actions.DELETE_ITEM,itemname:itm})
    }
  }
  export default connect(mapStateToProps,mapDispatchToProps)(ContainedButtons);