import React from 'react'
import classes from './OptionList.module.css'

const OptionList = () => {
    return (
        <ul className={classes.list}>
            <li className={classes.item + " " + classes.lead}>Алюминий</li>
            <li className={classes.item}>Карбон</li>
            <li className={classes.item}>Горные/городские</li>
            <li className={classes.item}>Городские эконом</li>
        </ul>
    );
};

export default OptionList