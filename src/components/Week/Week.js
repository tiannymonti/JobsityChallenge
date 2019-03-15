import React from 'react';
import dateFns from "date-fns";

import classes from './Week.css';

import Grid from '../UI/Grid/Grid';

const week = (props) => {
  const dateFormat = "dddd";
  const days = [];
  let startDate = dateFns.startOfWeek(props.currentMonth);
  for (let i = 0; i < 7; i++) {
    days.push(
      <Grid columnPlace='center' key={i}>
        {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
      </Grid>
    );
  }
  return <div className={classes.Week}><Grid gridPlacement='row'>{days}</Grid></div>;
}

export default week;