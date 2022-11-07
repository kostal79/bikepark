import React from 'react'
import classes from './SelectDate.module.css'

const SelectField = (props) => {
    let date = props.date;
    let time = props.time;
    let text = props.text;
    let title = props.title;
    let action = props.action;


    return (
        <div className={classes.wrapper}>
            <p className={classes.title}>{title}</p>
            <div className={classes.container} onClick={action}>
                <div className={classes.placeholder}>
                    <p className={classes.text}>{text}{date} {time}</p>
                </div>
                <div className={classes.button} >
                    <svg width="12" height="10" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0.999451 1L5.99945 6L10.9995 1" stroke="#14233D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </div>
            </div>
        </div>
    );
};


export default SelectField