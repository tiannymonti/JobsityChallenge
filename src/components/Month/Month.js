import React from 'react';
import dateFns from "date-fns";

import classes from './Month.css';

import Icons from '../UI/Icons/Icons';
import Grid from '../UI/Grid/Grid';

const month = (props) => {
  const dateFormat = "MMMM YYYY";
  return (
    <div className={classes.Month}>
      <Grid gridPlacement='row'>
        <Grid gridPlacement='start'>
          <div className={classes.Icon} onClick={props.prevMonth}>
            <Icons>chevron_left</Icons>
          </div>
        </Grid>
        <Grid gridPlacement='center'>
          <span>
            {dateFns.format(props.currentMonth, dateFormat)}
          </span>
        </Grid>
        <Grid gridPlacement='end'>
          <div className={classes.Icon} onClick={props.nextMonth}>
            <Icons>chevron_right</Icons>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}

export default month;