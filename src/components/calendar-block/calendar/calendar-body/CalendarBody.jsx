import React from 'react'
import classes from './CalendarBody.module.css'
import DatesTable from './dates-table/DateTable';
import TitleRow from './title-row/TitleRow';


const CalendarBody = (props) => {
    let currentMonth = props.currentMonth;

    let date = new Date();
    let currentDate = new Date(date.getFullYear(), date.getMonth(), date.getDate())


    return (
        <div className={classes.wrapper}>
            <TitleRow
                currentMonth={currentMonth}
                currentDate={currentDate}
            />
            <DatesTable
                {...props}
                currentDate={currentDate}
            />
        </div>
    )
}

export default CalendarBody