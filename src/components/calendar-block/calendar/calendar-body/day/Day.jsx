import React, { useEffect, useState } from 'react'
import classes from './Day.module.css'

const Day = (props) => {
    const currentMonth = props.currentMonth;
    const getStart = props.getStart;
    const getFinish = props.getFinish;
    const item = props.item;
    const clicked = props.clicked;
    const periodStart = props.periodStart;
    const periodFinish = props.periodFinish;

    let [classname, setClassname] = useState()

    function selectDate(event) {
        if (!clicked) {
            getStart(item)
        } else {
            getFinish(item)
        }
    }

    useEffect(() => {
        function makeClassName() {
            if (item.valueOf() === periodStart) {
                setClassname(classes.activeDateStart)
            } else if (item.valueOf() === periodFinish) {
                setClassname(classes.activeDateFinish)
            } else if (periodStart && periodFinish && (item.valueOf() > periodStart) && (item.valueOf() < periodFinish)) {
                setClassname(classes.activePeriod)
            } else if (item.getMonth() !== currentMonth || item.valueOf() < Date.now() - 86400000) { 
                setClassname(classes.disabled)
            } else {
                setClassname(classes.day)
            }
        }
    
        makeClassName()
    }, [periodStart, periodFinish, item, currentMonth])

    return (
        <div
            data-date={item}
            day={item.getDay()}
            onClick={classname === classes.disabled ? () => {return} : selectDate}
            className={classname}
        >
            <div className={classes.inside}>{item.getDate()}</div>
        </div>
    );
};

export default Day