import React, { Component } from 'react';
import Calendar from './containers/Calendar';

import classes from "./App.css";

class App extends Component {
  render() {
    return (
        <div>
            <header className={classes.Header}>
                <div className={classes.Logo}>
                    <span>Reminder</span>
                    <span className={classes.Icon}>date_range</span>
                    <span><b>Calendar</b></span>
                </div>
            </header>
            <main className={classes.Main}>
            <Calendar />
            </main>
        </div>
    );
  }
}

export default App;