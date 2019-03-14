import React from 'react';
import dateFns from "date-fns";
import classes from './Month.css';


const month = (props) => {
  const dateFormat = "MMMM YYYY";

  return (
    <div className="header row flex-middle">
      <div className="col col-start">
        <div className="icon" onClick={props.prevMonth}>
          chevron_left
        </div>
      </div>
      <div className="col col-center">
        <span>
          {dateFns.format(props.currentMonth, dateFormat)}
        </span>
      </div>
      <div className="col col-end" onClick={props.nextMonth}>
        <div className="icon">chevron_right</div>
      </div>
    </div>
  );
}

export default month;