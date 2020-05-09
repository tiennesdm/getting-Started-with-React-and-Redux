import React from 'react';

// import classes from './Button.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));
export default function MyButton(props) {
    const classes = useStyles();
        let myColor = "default";
    if(props.thisColor){
        myColor = props.thisColor
    }
    console.log(myColor);
    let myVariant ="text";
    if(props.variant){
        myVariant = props.variant
    }
  
    return (
        <Button variant={myVariant}  className={classes.title}  color={myColor} disabled={props.disabled} onClick={props.clicked}>
             {props.children}
                 </Button>
    );
  }