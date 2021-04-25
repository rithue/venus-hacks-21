import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Display from './Display';
import { withStyles } from '@material-ui/core/styles';
import compose from 'recompose/compose';

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
            <div><TextField id="username" label="Username" color="secondary" /></div>
            <div><TextField id="password" label="Password" color="secondary" /></div>
            <div><Button variant="contained"  onClick={() => this.handleClick()}>Login</Button></div>
        </form>
        }
        </div>
      )
    }
}
export default compose(
  withStyles(useStyles)
)(Login)
