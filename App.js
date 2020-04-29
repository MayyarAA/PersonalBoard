import React from 'react';
import logo from './logo.svg';
import './App.css';
import PictureGrid from './components/PictureGrid';
import ButtonAppBar from './components/NavBar';
import RecipeReviewCard from './components/Card';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  root: {

    maxWidth: 500,
    paddingTop: '0.25%',
  },
  media: {
    height: 100,
    width: '100%',
    // marginLeft: '33',
    paddingTop: '56.25%', // 16:9
  },
 
  
}));


function App() {
  const classes = useStyles();
  
  return (
    
    <div className="App">
      <header className="App-header">
        <ButtonAppBar/>
        {/* <PictureGrid/> */}
        <Grid marginLeft = "100px">
        <RecipeReviewCard/>
        </Grid>
        
      </header>
    </div>
  );
}

export default App;
