import React from 'react'
import Calendar from './calendar/Calendar';
import classes from './CalendarBlock.module.css'


const CalendarBlock = (props) => {
    return (
        <section className={classes.wrapper} >
            <Calendar
                {...props}
                month={props.month}
                time={props.timeStart}
                handleTime={props.handleTimeStart}

            />
            <Calendar
                {...props}
                month={props.month + 1}
                time={props.timeFinish}
                handleTime={props.handleTimeFinish}

            />
        </section>
    );
};

export default CalendarBlock