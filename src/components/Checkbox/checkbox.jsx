import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Checkbox color="default" {...props} />);

export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    pickup: false,
    delivery: false,
    pre:false
  });

  const handleChange = (name) => event => {
      props.tick(event.target.value)
      console.log(event.target.value)
      if(name==='pickup'){
        setState({ ...state, [name]: event.target.checked,delivery:false,pre:false });
      }
      else{
        if(name==="delivery")
          setState({ ...state, [name]: event.target.checked,pickup:false ,pre:false});
        else{
          setState({ ...state, [name]: event.target.checked,pickup:false ,delivery:false});
        }
        }
    
  };
  return (
    <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.pickup} onChange={handleChange('pickup')} value="PICK-UP" />
        }
        label="Pick-up"
      />
      <FormControlLabel
        control={
          <Checkbox checked={state.delivery} onChange={handleChange('delivery')} value="delivery" />
        }
        label="Delivery"
      />
       <FormControlLabel
        control={
          <Checkbox checked={state.pre} onChange={handleChange('pre')} value="PRE-ORDER" />
        }
        label="Pre-Order"
      />
      </FormGroup>)}