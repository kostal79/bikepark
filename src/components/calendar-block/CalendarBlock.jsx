import React, { useState } from 'react'
import Calendar from './calendar/Calendar';
import classes from './CalendarBlock.module.css'


const CalendarBlock = () => {
    let [periodStart, setPeriodStart] = useState(NaN);
    let [periodFinish, setPeriodFinish] = useState(NaN);
    let [clicked, setClick] = useState(false);
    const currentDate = new Date();

    function getStart(date) {
        if (!periodStart) {
            date = date.valueOf();
            let newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate())
            if (date >= newDate) {
                setPeriodFinish(date)
                setPeriodStart(date)
                setClick(!clicked)
            }
        } else {
            setPeriodStart(NaN)
            setPeriodFinish(NaN)
        }
    }

    function getFinish(date) {
        date = date.valueOf();
        if (date >= periodStart) {
            setPeriodFinish(date)
            setClick(!clicked)
        }
    }


    return (
        <section className={classes.wrapper} >
            <Calendar
                month={currentDate.getMonth()}
                getStart={getStart}
                getFinish={getFinish}
                clicked={clicked}
                periodStart={periodStart}
                periodFinish={periodFinish}

            />
            <Calendar
                month={currentDate.getMonth() + 1}
                getStart={getStart}
                getFinish={getFinish}
                clicked={clicked}
                periodStart={periodStart}
                periodFinish={periodFinish}
            />
        </section>
    );
};

export default CalendarBlock