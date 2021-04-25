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

const useStyles = makeStyles((theme) => ({
  root: {
    background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    margin: "10em",
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
      boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
      color: "white",
      //height: 500,
      //padding: '0 30px',
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
    <div className={classes.root}>
      <ParallaxProvider>
        <Parallax className="custom-class" y={[-20, 20]} tagOuter="figure">
          <h2>Trip's Total CO2 Emissions for Gas Vehicle:</h2>
          <h1>NUMBER</h1>

          <img src="https://www.equiterre.org/sites/fichiers/images/graphique_en.png" />

          <h3>
            Below are the calculated emissions of the other fuel type vehicles.
          </h3>
          <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Fuel Type</StyledTableCell>
                  <StyledTableCell align="right">
                    Carbon Emission in lb
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Carbon Emission in Kg
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"Gas"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {props.carbonEmission.gas_lb}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {props.carbonEmission.gas_kg}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"Hybrid"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {props.carbonEmission.hybrid_lb}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {props.carbonEmission.hybrid_kg}
                  </StyledTableCell>
                </StyledTableRow>
                <StyledTableRow>
                  <StyledTableCell component="th" scope="row">
                    {"Electric"}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {props.carbonEmission.electric_lb}
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    {props.carbonEmission.electric_kg}
                  </StyledTableCell>
                </StyledTableRow>
              </TableBody>
            </Table>
          </TableContainer>

          <h4>{props.distance}</h4>

          <img
            src="https://www.quick220.com/blog/wp-content/uploads/2017/07/ElectricCars-Infographic.jpg"
            width="700"
            height="500"
          ></img>
        </Parallax>
      </ParallaxProvider>
    </div>
  );
}
