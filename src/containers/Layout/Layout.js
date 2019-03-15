import React from 'react';
import classes from './Layout.css';

import Icons from '../../components/UI/Icons/Icons';

const layout = (props) => {
  return (
    <div>
        <header className={classes.Header}>
            <div className={classes.Logo}>
                <span>Reminder</span>
                <span><Icons>date_range</Icons></span>
                <span><b>Calendar</b></span>
            </div>
        </header>
        <main className={classes.Main}>
            {props.children}
        </main>
    </div>
  )
}

export default layout