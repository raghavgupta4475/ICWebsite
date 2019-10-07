import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    age: '',
    name: 'hai',
  });

  const inputLabel = React.useRef(null);
  const [labelWidth, setLabelWidth] = React.useState(0);


  function handleChange(event) {
    console.log(event.target.value)
     props.pm(event.target.value)
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value,
    }));
  }
  return (
    
      <div>
          <InputLabel htmlFor="age-simple">Month</InputLabel>
        <Select
          value={values.age}
          onChange={handleChange}
          inputProps={{
            name: 'age',
            id: 'pm',
          }}
        >
          <MenuItem  value="" >All </MenuItem>
          <MenuItem  value="01" >January </MenuItem>
          <MenuItem value="02">February</MenuItem>
          <MenuItem  value="03" >March </MenuItem>
          <MenuItem  value="04" >April </MenuItem>
          <MenuItem  value="05" >May </MenuItem>
          <MenuItem  value="06" >June </MenuItem>
          <MenuItem  value="07" >July</MenuItem>
          <MenuItem  value="08" >August </MenuItem>
          <MenuItem  value="09" >September </MenuItem>
          <MenuItem  value="10" >October </MenuItem>
          <MenuItem  value="11" >November </MenuItem>
          <MenuItem  value="12" >December </MenuItem>
          
        </Select>
      </div>
  )}