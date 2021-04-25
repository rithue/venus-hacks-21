import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {ParallaxProvider} from 'react-scroll-parallax';
import {Parallax} from 'react-scroll-parallax';



const useStyles = makeStyles((theme) => ({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      margin: '10em',
      '& > *': {
        // display: 'flex',
        // alignItems: 'center',
        // justifyContent: 'center',
        // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
        // margin: '5em',
        // color: '#41436A',
        //width: '40ch',
        //color: "blue",
        //borderColor: 'blue',
        //borderWidth: 100,
        //border: "2px solid",
        //border: 0,
        //borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
        color: 'white',
        //height: 500,
        //padding: '0 30px',
      },
    },
}));

export default function Display() {
    const classes = useStyles();
    console.log("in homepage");
    return (
      <div className = {classes.root}>
        <ParallaxProvider>
          <Parallax className="custom-class" y={[-20,20]} tagOuter="figure">
            <h2>Trip's Total CO2 Emissions for Gas Vehicle:</h2>
            <h1>NUMBER</h1>

            <img src="https://www.equiterre.org/sites/fichiers/images/graphique_en.png"/>

            <h3>Below are the calculated emissions of the other fuel type vehicles.</h3>

            <h3>Hybrid Vehicle</h3>
            <h4>NUMBER</h4>
                
            <h3>Electric Vehicle</h3>
            <h4>NUMBER</h4>

            <img src="https://www.quick220.com/blog/wp-content/uploads/2017/07/ElectricCars-Infographic.jpg" width='700' height='500'></img>
          </Parallax>
        </ParallaxProvider>
      </div>
    )
}