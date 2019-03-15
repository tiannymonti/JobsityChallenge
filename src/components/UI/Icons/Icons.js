import React from 'react';
import classes from './Icons.css';

const icons = (props) => {
  return (
    <div className={classes.Icons}>
        {props.children}
    </div>
  );
}

export default icons;