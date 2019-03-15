import React from 'react'
import classes from './Grid.css';

const columns = (props) => {
    let returningDiv = <div className={classes.Col}>{props.children}</div>
    switch(props.gridPlacement) {
        case 'start':
            returningDiv = (
                <div className={[classes.Col, classes.Col_start].join(' ')}>
                    {props.children}
                </div>
            );
            break;
        case 'center':
            returningDiv = (
                <div className={[classes.Col, classes.Col_center].join(' ')}>
                    {props.children}
                </div>
            );
            break;
        case 'end':
            returningDiv = (
                <div className={[classes.Col, classes.Col_end].join(' ')}>
                    {props.children}
                </div>
            );
            break;
        case 'row':
            returningDiv = (
                <div className={classes.Row}>
                    {props.children}
                </div>
            );
    } 
    return returningDiv; 
}

export default columns;