import React from "react";
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { ParallaxProvider } from "react-scroll-parallax";
import { Parallax } from "react-scroll-parallax";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
// import history_sep from '../CARB.png';
// import Typography from '@material-ui/core/Typography';
// import { ParallaxBanner } from 'react-scroll-parallax';
// import Box from '@material-ui/core/Box';

let bgcolor = "#FD6D6D"

const useStyles = makeStyles((theme) => ({
  root: {
    background: bgcolor,
    // margin: "5em",
    padding:30,
    borderSpacing:30,
    "& > *": {
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
      // boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      //height: 500,
      //padding: '0 30px',
    },
    parallax: {
      position: "relative",
      zIndex: 1,
      color: "white",
    },
  },
}));

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);


const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
  },
}))(TableRow);

export default function DisplayCarbonEmission(props) {
  const classes = useStyles();
  console.log("in homepage");
  return (
    // <div className={classes.root}>
    <div style={{background: (props.carbonEmission[props.fueltype+"_kg"] > 100)? "#FD6D6D" : (props.carbonEmission[props.fueltype+"_kg"] > 50)? "#FCEA8A":"#A1D0A1",padding:30,borderSpacing:30,}}>
      {/* <ParallaxProvider> */}
        {/* <Parallax blur={10} className={classes.parallaxStyles} y={[-10, 10]} tagOuter="figure"> */}
      <h2>Trip's total CO2 emissions for {props.fueltype} vehicle (Kg):</h2>
          <h1>{props.carbonEmission[props.fueltype+"_kg"]}</h1>

          <h3>
            Calculated emissions of other fuel type vehicles:
          </h3>

          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="center">Fuel Type</StyledTableCell>
                  <StyledTableCell align="center">
                    Carbon Emission (lb)
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    Carbon Emission (Kg)
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" align="center">
                    {"Gas"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {props.carbonEmission.gas_lb}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {props.carbonEmission.gas_kg}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" align="center">
                    {"Hybrid"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {props.carbonEmission.hybrid_lb}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {props.carbonEmission.hybrid_kg}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row" align="center">
                    {"Electric"}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {props.carbonEmission.electric_lb}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {props.carbonEmission.electric_kg}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <h3>
            Your Impact
          </h3>

          <img src="https://www.equiterre.org/sites/fichiers/images/graphique_en.png" />
          

          <h4>{props.distance}</h4>

          <img
            src="https://www.quick220.com/blog/wp-content/uploads/2017/07/ElectricCars-Infographic.jpg"
            width="700"
            height="500"
          ></img>
        {/* </Parallax> */}
      {/* </ParallaxProvider> */}

    </div>
  );
}
