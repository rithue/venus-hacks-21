import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
// import Display from "./Display";
import compose from "recompose/compose";
import { Grid } from "@material-ui/core";
import Controls from "./components/controls/Controls";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import logo from "/Users/rithueswaramoorthy/venus-hacks/src/CARB.png";

const fuelItems = [
  { id: "gas", title: "Gas" },
  { id: "hybrid", title: "Hybrid" },
  { id: "electric", title: "Electric" },
];
const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    color: "blue",
  },
  paper: {
    // padding: theme.spacing(100),
    margin: "auto",
    // maxWidth: 100,
  },
}));
class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isAuthenticated: false,
    };
  }
  handleClick = () => {
    console.log("handle clicked");
    this.setState({
      isAuthenticated: true,
    });
  };
  render() {
    const { classes } = this.props;
    console.log("isauth: ", this.state.isAuthenticated);
    return (
      <div>
        {
          this.state.isAuthenticated ? (
            <div />
          ) : (
            //   <Grid container spacing={10}>
            <div
              style={{ padding: 16, margin: "auto", maxWidth: 500 }}
              className={classes.root}
            >
              {/* <div><TextField id="username" label="Username" color="secondary" /></div>
            <div><TextField id="password" label="Password" color="secondary" /></div> */}
              <Paper elevation={3} className={classes.paper}>
                <Grid item>
                  {/* <ButtonBase className={classes.image}> */}
                  <img className={classes.root} alt="logo" src={logo} />
                  {/* </ButtonBase> */}
                </Grid>
                <Grid alignItems>
                  {/* <ButtonBase className={classes.image}> */}
                  <img
                    className={classes.root}
                    alt="complex"
                    src="https://freeiconshop.com/wp-content/uploads/edd/car-flat.png"
                  />
                  {/* </ButtonBase> */}
                </Grid>
                <Typography variant="h6" align="center" gutterBottom>
                  Calculate the CO2 emissions for your trip!
                </Typography>
                {/* <Grid item xs={6} spacing={2} container direction="column"> */}
                <Grid container alignItems="flex-start" spacing={5}>
                  <Grid item xs={12}>
                    <Grid item>
                      <Controls.Input
                        name="startZipCode"
                        label="Start Zip Code"
                        // value={values.fullName}
                        // onChange={handleInputChange}
                        // error={errors.fullName}
                      />
                    </Grid>
                    <Grid item>
                      <Controls.Input
                        label="End Zip Code"
                        name="endZipCode"
                        // value={values.email}
                        // onChange={handleInputChange}
                        // error={errors.email}
                      />
                    </Grid>
                    <Grid item>
                      <Controls.RadioGroup
                        name="fuelType"
                        label="Fuel Type"
                        // value={values.gender}
                        // onChange={handleInputChange}
                        items={fuelItems}
                      />
                    </Grid>
                    <Grid item>
                      <Button
                        variant="contained"
                        backgroundColor="#0063cc"
                        onClick={() => this.handleClick()}
                      >
                        Submit
                      </Button>
                    </Grid>
                  </Grid>
                </Grid>
                {/* <Button variant="contained"  onClick={() => this.handleClick()}>Submit</Button> */}
              </Paper>
            </div>
          )
          // </Grid>
        }
      </div>
    );
  }
}
export default compose(withStyles(useStyles))(Login);
