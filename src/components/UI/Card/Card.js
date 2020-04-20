import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  root: {
    maxWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function MyCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root} >
      <CardContent>
          {props.children}
      </CardContent>
    </Card>
  );
}
