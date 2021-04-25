import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        // margin: theme.spacing(10),
        // width: '25ch',
        color: "black",
        // borderColor: 'blue',
        // borderWidth: 4,
        // border: "2px solid",
      },
    },
}));

export default function Display() {
    const classes = useStyles();
    console.log("in homepage");
    return (
        <div className = {classes.root}>
        </div>
    )
}