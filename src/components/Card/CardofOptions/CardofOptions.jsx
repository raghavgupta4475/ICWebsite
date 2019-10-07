import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import bg from '../../../assets/img/bg.jpg';
import {Link} from 'react-router-dom';

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    display: "inline-block",
    marginRight:"20px",
    marginLeft:"10px"
  },
});

const CardofOptions=(props)=> {
  const classes = useStyles();
  let goto='/optionspage/'+props.path;
  

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          // className={classes.}
          // component="img"
          // alt="Contemplative Reptile"  
          height="140"
          // image="/src/assets/img/faces/b2.jpg"
          title={props.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" >
          <Link to={goto} style={{ color:"#1D5208"}}>
            Proceed
          </Link>
        </Button>
      </CardActions>
    </Card>
  );
}
export default CardofOptions;