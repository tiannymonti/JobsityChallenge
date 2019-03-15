import React, { Component } from 'react';
import dateFns from "date-fns";

import Month from '../../components/Month/Month';
import Week from '../../components/Week/Week';
import Day from '../../components/Day/Day';
import classes from './Calendar.css';

class Calendar extends Component {
    state = {
        currentMonth: new Date(),
        selectedDate: new Date()
    };

    onDateClickHandler = day => {

    }

    nextMonthHandler =  () => {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    }

    prevMonthHandler = () => {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    }

    render() {
        return (
            <div className={classes.Calendar}>
                <Month 
                    prevMonth={this.prevMonthHandler} 
                    currentMonth={this.state.currentMonth}
                    nextMonth={this.nextMonthHandler}>
                </Month>
                <Week 
                    currentMonth={this.state.currentMonth}>
                </Week>
                <Day 
                    date={this.state}
                ></Day>
            </div>
        );
    }
}

export default Calendar;