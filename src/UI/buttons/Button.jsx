import React from 'react'
import { NavLink } from 'react-router-dom';
import classes from './Button.module.css'

const Button = (props) => {
    return (
        
            <NavLink to={props.link}><div className={classes.button}>{props.text}</div></NavLink>
        
    );
};

export default Button