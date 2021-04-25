import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Display from './Display';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';
import { Grid, } from '@material-ui/core';
import Controls from "./components/controls/Controls";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      
    },
  },
}));
class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        isAuthenticated: false
      }
    }
    handleClick = () => {
      console.log("handle clicked")
      this.setState({
        isAuthenticated: true
      });
    };
    render() {
      const {classes} = this.props
      console.log("isauth: ",this.state.isAuthenticated)
      return (
        <div>
        {
          this.state.isAuthenticated ?
          <Display/>
          :
        <form className={classes.root} noValidate autoComplete="off">
            {/* <div><TextField id="username" label="Username" color="secondary" /></div>
            <div><TextField id="password" label="Password" color="secondary" /></div> */}
            <Grid container>
                <Grid item xs={6}>
                    <Controls.Input
                        name="fullName"
                        label="Full Name"
                        // value={values.fullName}
                        // onChange={handleInputChange}
                        // error={errors.fullName}
                    />
                    <Controls.Input
                        label="Email"
                        name="email"
                        // value={values.email}
                        // onChange={handleInputChange}
                        // error={errors.email}
                    />
                    <Controls.Input
                        label="Mobile"
                        name="mobile"
                        // value={values.mobile}
                        // onChange={handleInputChange}
                        // error={errors.mobile}
                    />
                    <Controls.Input
                        label="City"
                        name="city"
                        // value={values.city}
                        // onChange={handleInputChange}
                    />

                </Grid>
            </Grid>
            <div><Button variant="contained"  onClick={() => this.handleClick()}>Submit</Button></div>
        </form>
        }
        </div>
      )
    }
}
export default compose(
  withStyles(useStyles)
)(Login)
