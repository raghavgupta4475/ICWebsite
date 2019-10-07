import React from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const ButtonAppBar=(props)=> {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.title}
          </Typography>
          <Typography>
            {"Rs.  "+props.tp}
          </Typography>
          <Button color="inherit"><Link to="/optionspage/Order/cart" style={{ color:"#ffffff"}}>Cart</Link></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
const mapStateToProps=state=>{
  return{
    tp:state.totalAmount
  }
}
export default connect(mapStateToProps)(ButtonAppBar);