import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import pic from '../images/Picture1.jpg'
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: 500,
    paddingTop: '0.25%',
  },
  media: {
    height: 100,
    width: '100%',
    // marginLeft: '33',
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (

    <div>
      <Grid>
      
    <Card className={classes.card}>
      <CardHeader
       
      
        title="Java Practice"
        subheader="April 20, 2020"
      />
      <CardMedia
      className = {classes.media}  
      
      style={{height: 0, paddingTop: '50.25%'}}
            image={pic}>
        {/* className={classes.media} */}
        
        {/* <div> <img src={pic} alt="logo" /></div> */}
        {/* title="Paella dish" */}
        </CardMedia>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
         
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

    <br/>

    <Card className={classes.card}>
      <CardHeader
       
      
        title="Java Practice"
        subheader="April 20, 2020"
      />
      <CardMedia
      className = {classes.media}  
      
      style={{height: 0, paddingTop: '50.25%'}}
            image={pic}>
        {/* className={classes.media} */}
        
        {/* <div> <img src={pic} alt="logo" /></div> */}
        {/* title="Paella dish" */}
        </CardMedia>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
         
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>

    <br/>

    <Card className={classes.card}>
      <CardHeader
       
      
        title="Java Practice"
        subheader="April 20, 2020"
      />
      <CardMedia
      className = {classes.media}  
      
      style={{height: 0, paddingTop: '50.25%'}}
            image={pic}>
        {/* className={classes.media} */}
        
        {/* <div> <img src={pic} alt="logo" /></div> */}
        {/* title="Paella dish" */}
        </CardMedia>
      
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
         
          </Typography>
          
        </CardContent>
      </Collapse>
    </Card>
    </Grid>

   

    </div>
  );
}
