import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import DisplayCarbonEmission from "./displayCarbonEmission";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import Controls from "./controls/Controls";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import logo from "/Users/rithueswaramoorthy/venus-hacks/src/CARB.png";

import { useForm, Form } from "./useForm";

const fuelItems = [
  { id: "gas", title: "Gas" },
  { id: "hybrid", title: "Hybrid" },
  { id: "electric", title: "Electric" },
];

const initialFValues = {
  startZipCode: "",
  endZipCode: "",
  fuelType: "gas",
  carbonEmission: {},
  distance: null,
};

const useStyles = makeStyles((theme) => ({
  root: {
    // flexGrow: 1,
    color: "blue",
  },
  paper: {
    // padding: theme.spacing(100),
    // margin: "auto",
    // maxWidth: 100,
  },
}));

export default function HomePage() {
  const classes = useStyles();

  const [carbonEmission, setCarbonEmission] = useState({});
  const [distance, setDistance] = useState(null);

  const validate = (fieldValues = values) => {
    let temp = { ...errors };
    if ("startZipCode" in fieldValues)
      temp.startZipCode = fieldValues.startZipCode
        ? ""
        : "This field is required.";
    if ("startZipCode" in fieldValues)
      temp.startZipCode =
        fieldValues.startZipCode.length === 5
          ? ""
          : "Zip code must be 5 numeric digits.";
    if ("endZipCode" in fieldValues)
      temp.endZipCode = fieldValues.endZipCode ? "" : "This field is required.";
    if ("endZipCode" in fieldValues)
      temp.endZipCode =
        fieldValues.endZipCode.length === 5
          ? ""
          : "Zip code must be 5 numeric digits.";
    setErrors({
      ...temp,
    });

    if (fieldValues == values) return Object.values(temp).every((x) => x == "");
  };

  const {
    values,
    setValues,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm(initialFValues, true, validate);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("handle clicked");
    if (validate()) {
      getCarbonEmission();
    }
  };

  const getCarbonEmission = () => {
    try {
      fetch(
        `/carbonContent?startZipCode=${values.startZipCode}&endZipCode=${values.endZipCode}&fuelType=${values.fuelType}`
      )
        .then((response) => {
          return response.json();
        })
        .then((jsonResp) => {
          setCarbonEmission(jsonResp.carbonEmission);
          setDistance(jsonResp.distance);
        });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      {Object.keys(carbonEmission).length === 0 ? (
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
            <Grid container alignItems="flex-start" gridGap={10} spacing={5}>
              <Grid item xs={12}>
                <Grid item>
                  <Controls.Input
                    name="startZipCode"
                    label="Start Zip Code"
                    value={values.startZipCode}
                    onChange={handleInputChange}
                    error={errors.startZipCode}
                  />
                </Grid>
                <Grid item>
                  <Controls.Input
                    label="End Zip Code"
                    name="endZipCode"
                    value={values.endZipCode}
                    onChange={handleInputChange}
                    error={errors.endZipCode}
                  />
                </Grid>
                <Grid item>
                  <Controls.RadioGroup
                    name="fuelType"
                    label="Fuel Type"
                    value={values.fuelType}
                    onChange={handleInputChange}
                    items={fuelItems}
                  />
                </Grid>
                <Grid item>
                  <Button
                    variant="contained"
                    backgroundColor="#0063cc"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            {/* <Button variant="contained"  onClick={() => this.handleClick()}>Submit</Button> */}
          </Paper>
        </div>
      ) : (
        // </Grid>
        <DisplayCarbonEmission
          carbonEmission={carbonEmission}
          distance={distance}
          fueltype={values.fuelType}
        />
      )}
    </div>
  );
}
