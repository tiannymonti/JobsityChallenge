import React from 'react';
import dateFns from "date-fns";

import classes from './Day.css';

import Grid from '../UI/Grid/Grid';
import Icons from '../UI/Icons/Icons';


const day = (props) => {
  const { currentMonth, selectedDate } = props.date;
  const monthStart = dateFns.startOfMonth(currentMonth);
  const monthEnd = dateFns.endOfMonth(monthStart);
  const startDate = dateFns.startOfWeek(monthStart);
  const endDate = dateFns.endOfWeek(monthEnd);
  const dateFormat = "D";
  const rows = [];

  let days = [];
  let day = startDate;
  let formattedDate = "";

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      formattedDate = dateFns.format(day, dateFormat);
      const cloneDay = day;
      const daysClasses = [classes.Cell, 
        !dateFns.isSameMonth(day, monthStart) ? classes.Disabled : dateFns.isSameDay(day, selectedDate) ? classes.Selected : "", 
        i===6 ? classes.Last : "",
        i===0 ? classes.First: ""].join(' ');
      days.push(
        <Grid key={day}>
          <div
            className={daysClasses}
            onClick={props.dayClicked(cloneDay)}
          >
            <span className={classes.Number}>{formattedDate}</span>
            <span className={classes.Icon}><Icons>add_alert</Icons></span>
          </div>
        </Grid>
      );
      day = dateFns.addDays(day, 1);
    }
    rows.push(
      <Grid gridPlacement='row' key={day}>
        {days}
      </Grid>
    );
    days = [];
  }
  return <div>{rows}</div>;
}


export default day;