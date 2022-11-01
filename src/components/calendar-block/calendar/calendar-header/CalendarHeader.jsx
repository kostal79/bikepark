import React from 'react'
import ArrowButton from '../../../../UI/arrow-button/ArrowButton';
import classes from './CalendarHeader.module.css'
import InputTimeField from './input-time-field/InputTimeField';

const CalendarHeader = (props) => {
    const monthName = props.monthName;
    const nextMonth = props.nextMonth;
    const prevMonth = props.prevMonth;
    const handleTime = props.handleTime;
    const time = props.time;

    return (
        <div className={classes.header}>
            <div className={classes.month}>
                <div className={classes.month_name}>{monthName}</div>

                <div className={classes.buttons}>
                    <ArrowButton up={true} onClick={nextMonth} />
                    <ArrowButton onClick={prevMonth} />
                </div>
            </div>
            <InputTimeField handleTime={handleTime} time={time} />
        </div>
    );
};

export default CalendarHeader