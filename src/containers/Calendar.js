import React, { Component } from 'react';
import Month from '../components/Month/Month';
import Week from '../components/Week/Week';
import Day from '../components/Day/Day';
import dateFns from "date-fns";
import classes from './Calendar.css';

class Calendar extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    onDateClickHandler = day => {

    }

    nextMonthHandler =  () => {

    }

    prevMonthHandler = () => {

    }

    render() {
        return (
            <div className={classes.Calendar}>
                <Month></Month>
                <Week></Week>
                <Day></Day>
            </div>
        )
    }
}

export default Calendar;